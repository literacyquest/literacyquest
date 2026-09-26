const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict'),ts=require('typescript');
function load(file,req){const exports={};vm.runInNewContext(ts.transpileModule(fs.readFileSync(__dirname+'/'+file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,{exports,require:req});return exports}
const content=load('content.ts');const {recommend}=load('recommendations.ts',()=>content);
const rec=(id,stamp,completed=false,supported=false)=>({...content.emptyRecord(id),completed,updatedAt:stamp,answers:supported?{word:{choice:0,attempts:2,hinted:true}}:{}});
for(const grade of ['K','1','2','3','4','5']){
 const path=content.courseLessons(grade),a=path[0],b=path[6],c=path[7];
 assert.equal(recommend(grade,{}).lesson.id,a.id);
 let records={[b.id]:rec(b.id,'2026-09-01T00:00:00Z'),[c.id]:rec(c.id,'2026-09-02T00:00:00Z')};
 const before=JSON.stringify(records),r=recommend(grade,records);assert.equal(r.mode,'resume');assert.equal(r.lesson.id,c.id);assert.equal(JSON.stringify(records),before);
 records[c.id].completed=true;assert.equal(recommend(grade,records).lesson.id,b.id);
 records[b.id].completed=true;assert.equal(recommend(grade,records).lesson.id,a.id);
 records=Object.fromEntries(path.map(l=>[l.id,rec(l.id,undefined,true)]));assert.equal(recommend(grade,records).mode,'complete');
 records[b.id].completed=false;records[c.id].completed=false;assert.equal(recommend(grade,records).lesson.id,b.id);
 const foreign=content.courseLessons(grade==='K'?'5':'K')[0];records={[foreign.id]:rec(foreign.id,'2026-09-25T00:00:00Z',false,true)};assert.equal(recommend(grade,records).mode,'next');assert.equal(recommend(grade,records).review,undefined);
 records[b.id]=rec(b.id,'2026-09-20T00:00:00Z',true,true);assert.equal(recommend(grade,records).review.id,b.id);
}
assert.equal(recommend('1',{}).lesson.id,recommend('2',{}).lesson.id);
console.log('PASS: K–5 new learner, latest unfinished lesson, completion, skipped lessons, old records without dates, course isolation, optional review, shared G1/G2, and no record mutation.');
