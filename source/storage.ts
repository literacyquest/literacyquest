import {lessons,evidenceFor,minimumWords,wordCount,type RecordData} from './content';
import type {LearningGrade} from './grades';
export type Profile={id:string;name:string;grade:LearningGrade;records:Record<string,RecordData>};
export type Workspace={version:2;activeId:string;profiles:Profile[]};
export type Backup={format:'literacy-quest-backup';version:1;exportedAt:string;profiles:Omit<Profile,'id'>[]};
export const MAX_PROFILES=20;
export const MAX_BACKUP_BYTES=16*1024*1024;
export function storageKey(){return 'literacy-quest-html:v1:'+window.location.pathname.replace(/index\.html$/,'');}
export function workspaceKey(){return storageKey()+':family-v2';}
const isObject=(v:any)=>!!v&&typeof v==='object'&&!Array.isArray(v);
const gradeValid=(g:any):g is LearningGrade=>g==='K'||g==='1'||g==='2'||g==='3';
const nameValid=(n:any)=>typeof n==='string'&&n.trim().length>0&&n.length<=32;
export function validateRecord(value:unknown):value is RecordData{
 if(!isObject(value))return false;
 const p=value as RecordData;const lesson=lessons.find(l=>l.id===p.lessonId);
 if(!lesson||!Number.isInteger(p.step)||p.step<0||p.step>4||typeof p.draft!=='string'||p.draft.length>4000||typeof p.completed!=='boolean'||!isObject(p.answers))return false;
 if(p.updatedAt!==undefined&&(typeof p.updatedAt!=='string'||p.updatedAt.length>40||!Number.isFinite(Date.parse(p.updatedAt))))return false;
 if(Object.entries(p.answers).some(([key,a])=>!(evidenceFor(p.lessonId)?['word','meaning','evidence']:['word','meaning']).includes(key)||!isObject(a)||!Number.isInteger(a.choice)||a.choice<0||a.choice>2||!Number.isSafeInteger(a.attempts)||a.attempts<1||typeof a.hinted!=='boolean'))return false;
 if((p.completed||p.step===4)&&(p.answers.word?.choice!==lesson.wordAnswer||p.answers.meaning?.choice!==lesson.answer||(evidenceFor(p.lessonId)&&p.answers.evidence?.choice!==evidenceFor(p.lessonId)!.evidenceAnswer)||wordCount(p.draft)<minimumWords(p.lessonId)))return false;
 return true;
}
function validRecords(v:any){return isObject(v)&&Object.keys(v).length<=lessons.length&&Object.entries(v).every(([key,r])=>validateRecord(r)&&r.lessonId===key)}
function cleanRecords(v:Record<string,RecordData>){return Object.fromEntries(Object.entries(v).map(([key,r])=>[key,{lessonId:r.lessonId,step:r.step,draft:r.draft,completed:r.completed,...(r.updatedAt?{updatedAt:r.updatedAt}:{}),answers:Object.fromEntries(Object.entries(r.answers).map(([k,a])=>[k,{choice:a.choice,attempts:a.attempts,hinted:a.hinted}]))}])) as Record<string,RecordData>}
function readKey(key:string){try{return window.localStorage.getItem(key)}catch{throw Error('This browser is blocking saved work. Allow site storage, then try again.')}}
function parse(raw:string){try{return JSON.parse(raw)}catch{throw Error('This learning file cannot be read. Existing records have not changed.')}}
function validProfile(p:any,withId=true){return isObject(p)&&(!withId||(typeof p.id==='string'&&/^[a-zA-Z0-9_-]{1,80}$/.test(p.id)))&&nameValid(p.name)&&gradeValid(p.grade)&&validRecords(p.records)}
export function loadWorkspace():Workspace{
 const raw=readKey(workspaceKey());
 if(raw!==null){const w=parse(raw);if(!isObject(w)||w.version!==2||!Array.isArray(w.profiles)||w.profiles.length<1||w.profiles.length>MAX_PROFILES||!w.profiles.every(p=>validProfile(p))||new Set(w.profiles.map(p=>p.id)).size!==w.profiles.length||!w.profiles.some(p=>p.id===w.activeId))throw Error('Saved profiles are not compatible. Existing records have not changed.');return w;}
 // Read the legacy store without removing or overwriting it. The first successful
 // write commits the entire family workspace in one localStorage operation.
 const old=readKey(storageKey());let records={};
 if(old!==null){const p=parse(old);if(!isObject(p)||p.version!==1||!validRecords(p.records))throw Error('Saved learning records are not compatible. Existing records have not changed.');records=cleanRecords(p.records)}
 const grade=readKey(storageKey()+':grade-guide')==='2'?'2':'1';
 return {version:2,activeId:'original',profiles:[{id:'original',name:'Explorer',grade,records}]};
}
function writeWorkspace(w:Workspace){try{window.localStorage.setItem(workspaceKey(),JSON.stringify(w))}catch{throw Error('Your browser could not save this change. Existing saved records have not changed. Free some space or allow site storage, then try again.')}return w}
function profileFor(w:Workspace,id?:string){const p=w.profiles.find(p=>p.id===(id??w.activeId));if(!p)throw Error('This learner is no longer available. Reload the page.');return p}
export function loadProgress(id?:string){const w=loadWorkspace();return profileFor(w,id).records}
export function saveProgress(record:RecordData,id?:string){if(!validateRecord(record))throw Error('Finish all questions and add your response before completing this lesson.');const w=loadWorkspace();const p=profileFor(w,id);p.records={...p.records,...cleanRecords({[record.lessonId]:record})};writeWorkspace(w);return p.records}
export function loadGrade(id?:string){const w=loadWorkspace();return profileFor(w,id).grade}
export function saveGrade(grade:LearningGrade,id?:string){if(!gradeValid(grade))throw Error('Choose an available grade guide.');const w=loadWorkspace();profileFor(w,id).grade=grade;return writeWorkspace(w)}
function newId(){return 'learner-'+Array.from(crypto.getRandomValues(new Uint32Array(4)),n=>n.toString(16).padStart(8,'0')).join('')}
export function addProfile(name:string,grade:LearningGrade){name=name.trim();if(!nameValid(name)||!gradeValid(grade))throw Error('Enter a nickname of 1–32 characters and choose Kindergarten, Grade 1, Grade 2, or Grade 3.');const w=loadWorkspace();if(w.profiles.length>=MAX_PROFILES)throw Error('This browser has room for 20 learner profiles.');const p={id:newId(),name,grade,records:{}};w.profiles.push(p);w.activeId=p.id;return writeWorkspace(w)}
export function renameProfile(id:string,name:string){name=name.trim();if(!nameValid(name))throw Error('Use a nickname of 1–32 characters.');const w=loadWorkspace();profileFor(w,id).name=name;return writeWorkspace(w)}
export function selectProfile(id:string){const w=loadWorkspace();profileFor(w,id);w.activeId=id;return writeWorkspace(w)}
export function createBackup():Backup{const w=loadWorkspace();return {format:'literacy-quest-backup',version:1,exportedAt:new Date().toISOString(),profiles:w.profiles.map(p=>({name:p.name,grade:p.grade,records:cleanRecords(p.records)}))}}
export function parseBackup(text:string):Backup{
 if(new TextEncoder().encode(text).length>MAX_BACKUP_BYTES)throw Error('Choose a Literacy Quest backup no larger than 16 MB.');const b=parse(text);
 if(!isObject(b)||b.format!=='literacy-quest-backup'||b.version!==1||typeof b.exportedAt!=='string'||!Number.isFinite(Date.parse(b.exportedAt))||!Array.isArray(b.profiles)||b.profiles.length<1||b.profiles.length>MAX_PROFILES||!b.profiles.every(p=>validProfile(p,false)))throw Error('This is not a supported Literacy Quest backup. Existing records have not changed.');
 return {format:b.format,version:1,exportedAt:b.exportedAt,profiles:b.profiles.map(p=>({name:p.name.trim(),grade:p.grade,records:cleanRecords(p.records)}))};
}
export function restoreBackup(backup:Backup){const clean=parseBackup(JSON.stringify(backup));const w=loadWorkspace();const pristine=readKey(workspaceKey())===null&&readKey(storageKey())===null;if(pristine)w.profiles=[];if(w.profiles.length+clean.profiles.length>MAX_PROFILES)throw Error('Restoring this file would exceed 20 profiles. Restore it in another browser or device.');const added=clean.profiles.map(p=>({...p,id:newId(),name:p.name.slice(0,21)+' (restored)'}));w.profiles.push(...added);if(pristine)w.activeId=added[0].id;return writeWorkspace(w)}
