import React,{useState} from 'react';
const tasks=[
 'Choose a grade and find the suggested lesson.',
 'Open a lesson and understand what to do first.',
 'Use a hint or listen to the reading, if helpful.',
 'Save an idea with Save & back, reload, and resume it.',
 'Find the saved writing in My creations.',
 'Find Learners & backups and download a backup.'
];
export default function PilotCheck({grade}:{grade:string}){
 const [results,setResults]=useState<string[]>(tasks.map(()=> 'Not tried'));
 const [notes,setNotes]=useState('');const [status,setStatus]=useState('');
 function download(){
  const text=['LITERACY QUEST · FAMILY TRY-OUT','Date: '+new Date().toLocaleDateString(),'Selected guide: '+(grade==='K'?'Kindergarten':'Grade '+grade),'These are navigation observations, not reading scores.','',...tasks.map((task,i)=>`${i+1}. ${task}\nObservation: ${results[i]}`),'','What felt clear? Where did you pause? What would you change?',notes||'(No notes added)','', 'This report was downloaded locally. Nothing was sent to the creator.'].join('\n');
  const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='literacy-quest-family-tryout.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);setStatus('Download requested. Check your browser downloads. Nothing was sent.');
 }
 return <details className="pilot-check"><summary>Try it together · family feedback sheet</summary><p>Set aside 15–20 minutes to try the navigation with a grown-up. You may stop partway through a lesson. Observe the buttons and directions, not how well the child reads.</p><p className="muted small">For Kindergarten, adult help is expected. Choose “With help” when directions or navigation need explaining beyond the usual learning support. Use nicknames and leave out personal details.</p><div className="pilot-tasks">{tasks.map((task,i)=><div className="pilot-task" key={task}><label htmlFor={`pilot-${i}`}>{i+1}. {task}</label><select id={`pilot-${i}`} value={results[i]} onChange={e=>{setResults(results.map((v,n)=>n===i?e.target.value:v));setStatus('')}}>{['Not tried','Independently','With help','Could not finish'].map(v=><option key={v}>{v}</option>)}</select></div>)}</div><label htmlFor="pilot-notes">What felt clear? Where did you pause? What would you change?</label><textarea id="pilot-notes" rows={4} maxLength={2000} value={notes} onChange={e=>{setNotes(e.target.value);setStatus('')}} placeholder="For example: We could not find the saved writing at first…"/><p className="small muted">This sheet is temporary and clears when you leave this section or reload. Download it to keep your observations. Feedback is not sent automatically.</p><button className="primary" onClick={download}>Download feedback (.txt)</button><p role="status">{status}</p></details>;
}
