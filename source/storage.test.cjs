// Run with Node after installing the development dependencies in source/.
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),crypto=require('node:crypto').webcrypto;
const ts=require('typescript');
const root=__dirname;
function moduleFrom(file,req,win){const exports={};vm.runInNewContext(ts.transpileModule(fs.readFileSync(root+'/'+file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,{exports,require:req,window:win,crypto,TextEncoder});return exports}
const {lessons}=moduleFrom('content.ts');
function setup(){const map=new Map();let blocked=false;const win={location:{pathname:'/literacyquest/'},localStorage:{getItem:k=>map.get(k)??null,setItem:(k,v)=>{if(blocked)throw Error('quota');map.set(k,v)}}};const store=moduleFrom('storage.ts',()=>({lessons}),win);return{store,map,win,block:()=>blocked=true}}
const {store,map,win,block}=setup();const l=lessons[0];const old={lessonId:l.id,step:4,answers:{word:{choice:l.wordAnswer,attempts:1,hinted:false},meaning:{choice:l.answer,attempts:1,hinted:false}},draft:'A beaver builds a lodge with sticks and mud.',completed:true};
map.set(store.storageKey(),JSON.stringify({version:1,records:{[l.id]:old}}));map.set(store.storageKey()+':grade-guide','2');const legacy=map.get(store.storageKey());
let w=store.loadWorkspace();assert.equal(w.profiles[0].grade,'2');assert.equal(w.profiles[0].records[l.id].draft,old.draft);assert.equal(map.has(store.workspaceKey()),false);
w=store.addProfile('River','1');const river=w.activeId;assert.equal(w.profiles.length,2);assert.equal(Object.keys(store.loadProgress(river)).length,0);assert.equal(map.get(store.storageKey()),legacy);
store.saveProgress({...old,draft:'River writes about a beaver home in the pond.'},river);assert.equal(store.loadProgress('original')[l.id].draft,old.draft);
store.saveGrade('1','original');assert.equal(store.loadGrade('original'),'1');assert.equal(store.loadGrade(river),'1');store.saveGrade('2',river);assert.equal(store.loadGrade('original'),'1');
store.selectProfile('original');store.saveProgress({...old,completed:false,step:3,draft:'An unfinished writing piece by River.'},river);assert.equal(store.loadWorkspace().activeId,'original');assert.equal(store.loadProgress('original')[l.id].completed,true);
const backup=store.createBackup(), serialized=JSON.stringify(backup);const parsed=store.parseBackup(serialized);assert.equal(parsed.profiles.length,2);
const before=JSON.stringify(store.loadWorkspace().profiles);w=store.restoreBackup(parsed);assert.equal(w.profiles.length,4);assert.equal(JSON.stringify(w.profiles.slice(0,2)),before);assert.equal(new Set(w.profiles.map(p=>p.id)).size,4);assert(w.profiles[2].name.endsWith('(restored)'));assert.equal(w.profiles[3].records[l.id].draft,'An unfinished writing piece by River.');
const other=setup();const otherW=other.store.restoreBackup(parsed);assert.equal(otherW.profiles.length,2);assert.equal(otherW.profiles[0].records[l.id].completed,true);
const snapshots=()=>JSON.stringify([...map.entries()]);let untouched=snapshots();
for(const invalid of ['not json','{}',JSON.stringify({...backup,version:9}),JSON.stringify({...backup,profiles:[{name:'Bad',grade:'5',records:{}}]}),JSON.stringify({...backup,profiles:[{name:'Bad',grade:'1',records:{unknown:old}}]}),JSON.stringify({...backup,profiles:[{name:'Bad',grade:'1',records:{beavers:{...old,draft:'short'}}}]}),'x'.repeat(store.MAX_BACKUP_BYTES+1)]){assert.throws(()=>store.parseBackup(invalid));assert.equal(snapshots(),untouched)}
assert.throws(()=>store.addProfile('  ','1'));assert.throws(()=>store.selectProfile('unknown'));assert.throws(()=>store.saveGrade('5','original'));assert.equal(snapshots(),untouched);
store.renameProfile(river,'<script>alert(1)</script>');assert.equal(store.loadWorkspace().profiles.find(p=>p.id===river).name,'<script>alert(1)</script>'); // React renders text, never HTML.
untouched=snapshots();block();assert.throws(()=>store.addProfile('Quota','1'));assert.throws(()=>store.restoreBackup(parsed));assert.throws(()=>store.saveProgress({...old,draft:'Changed words must never replace saved work on failure.'},'original'));assert.equal(snapshots(),untouched);
win.location.pathname='/literacyquest/index.html';assert.equal(store.storageKey(),'literacy-quest-html:v1:/literacyquest/');
const corrupt=setup();corrupt.map.set(corrupt.store.storageKey(),'{bad');assert.throws(()=>corrupt.store.loadWorkspace());assert.equal(corrupt.map.size,1);
const capped=setup();for(let i=1;i<20;i++)capped.store.addProfile('Learner '+i,'1');const capBefore=JSON.stringify([...capped.map.entries()]);assert.throws(()=>capped.store.restoreBackup(parsed));assert.throws(()=>capped.store.addProfile('One too many','1'));assert.equal(JSON.stringify([...capped.map.entries()]),capBefore);
console.log('PASS: legacy import, separate learners/grades, explicit learner save, backup round trip on another device, additive restore, invalid/oversized input rejection, quota/corruption safety, limits, stable URL key.');

const fullBackup=capped.store.createBackup();const cleanDevice=setup();assert.equal(cleanDevice.store.restoreBackup(fullBackup).profiles.length,20);console.log('PASS: full 20-learner backup restores on a fresh device.');
