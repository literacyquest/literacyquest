import {courseLessons,type RecordData} from './content';
import type {LearningGrade} from './grades';

// Navigation suggestions only. These do not assess reading ability or mastery.
export function recommend(grade:LearningGrade,records:Record<string,RecordData>){
 const course=courseLessons(grade);
 const recent=(items:typeof course)=>[...items].sort((a,b)=>
  (Date.parse(records[b.id]?.updatedAt??'')||0)-(Date.parse(records[a.id]?.updatedAt??'')||0));
 const unfinished=recent(course.filter(l=>records[l.id]&&!records[l.id].completed));
 const next=course.find(l=>!records[l.id]?.completed);
 const review=recent(course.filter(l=>records[l.id]?.completed&&Object.values(records[l.id].answers).some(a=>a.hinted||a.attempts>1)))[0];
 return {lesson:unfinished[0]??next??course[0],mode:unfinished.length?'resume':next?'next':'complete',review} as const;
}
