import {lessons,type RecordData} from './content';
const prefix='literacy-quest-html:v1:';
export function storageKey(){return prefix+window.location.pathname.replace(/index\.html$/,'');}
export function validateRecord(value:unknown):value is RecordData {
 if(!value||typeof value!=='object')return false;
 const p=value as RecordData;const lesson=lessons.find(l=>l.id===p.lessonId);
 if(!lesson||!Number.isInteger(p.step)||p.step<0||p.step>4||typeof p.draft!=='string'||p.draft.length>4000||typeof p.completed!=='boolean'||!p.answers||typeof p.answers!=='object'||Array.isArray(p.answers))return false;
 if(Object.entries(p.answers).some(([key,a])=>!['word','meaning'].includes(key)||!a||!Number.isInteger(a.choice)||a.choice<0||a.choice>2||!Number.isInteger(a.attempts)||a.attempts<1||typeof a.hinted!=='boolean'))return false;
 if((p.completed||p.step===4)&&(p.answers.word?.choice!==lesson.wordAnswer||p.answers.meaning?.choice!==lesson.answer||p.draft.trim().split(/\s+/).length<6))return false;
 return true;
}
export function loadProgress():Record<string,RecordData>{
 let raw:string|null;
 try{raw=window.localStorage.getItem(storageKey())}catch{throw Error('This browser is blocking saved work. Allow site storage, then try again.');}
 if(raw===null)return {};
 let parsed:any;try{parsed=JSON.parse(raw)}catch{throw Error('The saved learning file cannot be read. Your existing data has not been changed.');}
 if(!parsed||parsed.version!==1||!parsed.records||typeof parsed.records!=='object'||Array.isArray(parsed.records)||Object.entries(parsed.records).some(([key,value])=>!validateRecord(value)||(value as RecordData).lessonId!==key))throw Error('The saved learning file is not compatible. Your existing data has not been changed.');
 return parsed.records;
}
export function saveProgress(record:RecordData):Record<string,RecordData>{
 if(!validateRecord(record))throw Error('Finish the questions and write at least six words before completing this lesson.');
 const all={...loadProgress(),[record.lessonId]:record};
 try{window.localStorage.setItem(storageKey(),JSON.stringify({version:1,records:all}));}catch{throw Error('Your browser could not save this work. Keep the page open, allow site storage, and try again.');}
 return all;
}

// Preferences stay separate so changing guidance never resets existing work.
export function loadGrade():'1'|'2'{
 try {const value=window.localStorage.getItem(storageKey()+':grade-guide');return value==='2'?'2':'1'}catch{return '1'}
}
export function saveGrade(grade:'1'|'2'){
 if(grade!=='1'&&grade!=='2')throw Error('Choose an available grade guide.');
 try{window.localStorage.setItem(storageKey()+':grade-guide',grade)}catch{throw Error('Your guide changed for this visit, but this browser could not save the preference.')}
}
