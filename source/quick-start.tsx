import React from 'react';
import {ArrowRight,Check} from 'lucide-react';
import type {LearningGrade} from './grades';
export default function QuickStart({grade,fresh,disabled,onGrade,onFamily}:{grade:LearningGrade;fresh:boolean;disabled:boolean;onGrade:(g:LearningGrade)=>void;onFamily:()=>void}){
 return <details className="quick-start" open={fresh?true:undefined}>
  <summary>{fresh?'New here? Start with these three steps.':'Your quick-start guide'}</summary>
  <div className="quick-start-grid">
   <section><span className="setup-number">1</span><h3>Choose a grade guide</h3><p>Start with your school grade. You can change it whenever you need.</p><div className="setup-grades" role="group" aria-label="Choose your starting grade">{(['K','1','2','3','4','5'] as LearningGrade[]).map(g=><button key={g} disabled={disabled} aria-label={g==='K'?'Choose Kindergarten':`Choose Grade ${g}`} aria-pressed={grade===g} onClick={()=>onGrade(g)}>{g}{grade===g&&<Check size={12}/>}</button>)}</div><small>Grades 1 and 2 share readings, with different guidance.</small></section>
   <section><span className="setup-number">2</span><h3>Try one little adventure</h3><p>Practice words, read or listen, think about the text, then share an idea.</p><small>Kindergarten: learn with a grown-up. Older readers can ask for help and take breaks.</small></section>
   <section><span className="setup-number">3</span><h3>Save, then come back</h3><p>Choose Save & back before leaving. Your work stays in this browser on this device.</p><button className="text-button" disabled={disabled} onClick={onFamily}>Learners & backups<ArrowRight size={16}/></button><small>Add a nickname for each learner. Download a backup before switching devices.</small></section>
  </div>
 </details>;
}
