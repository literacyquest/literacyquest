export type LearningGrade = 'K' | '1' | '2' | '3';
export const strands = ['Reading', 'Word work', 'Vocabulary', 'Writing', 'Speaking & listening'];
export const grades = [
 {id:'K',label:'Kindergarten',name:'Little beginnings',tag:'Notice. Name. Wonder.',available:true,goals:['Retell with support','Letters and sounds','Explore word meanings','Draw, dictate, write','Take conversation turns'],refs:['RL.K.2','RF.K.3','L.K.4','W.K.2','SL.K.1'],idea:'Picture walk: look through a familiar book together and let your child tell what they notice.'},
 {id:'1',label:'Grade 1',name:'Growing readers',tag:'Sound it out. Share an idea.',available:true,goals:['Find key details','Decode one-syllable words','Use sentence clues','Explain with facts','Ask follow-up questions'],refs:['RI.1.1','RF.1.3','L.1.4','W.1.2','SL.1.1'],idea:'Read together, rehearse an answer aloud, then use a sentence starter to write your idea.'},
 {id:'2',label:'Grade 2',name:'Curious connectors',tag:'Read closely. Explain why.',available:true,goals:['Describe story responses','Read vowel patterns','Explore word parts','Develop and close ideas','Build on others’ ideas'],refs:['RL.2.3','RF.2.3','L.2.4','W.2.2','SL.2.1'],idea:'Try reading first, explain an answer using a text detail, and add a closing thought to your writing.'},
 {id:'3',label:'Grade 3',name:'Story detectives',tag:'Find clues. Make connections.',available:true,goals:['Explain using text','Decode longer words','Use affixes','Organize linked ideas','Contribute to discussions'],refs:['RI.3.1','RF.3.3','L.3.4','W.3.2','SL.3.1'],idea:'After a family read-aloud, ask: Which detail helped you understand the most? Explain your choice.'},
 {id:'4',label:'Grade 4',name:'Evidence explorers',tag:'Gather details. Build a case.',available:false,goals:['Support inferences','Apply word analysis','Explore Greek/Latin roots','Group related information','Build reasoned responses'],refs:['RI.4.1','RF.4.3','L.4.4','W.4.2','SL.4.1'],idea:'Compare two short descriptions of the same place. Discuss which details each writer chose.'},
 {id:'5',label:'Grade 5',name:'Thoughtful authors',tag:'Connect sources. Shape ideas.',available:false,goals:['Combine source information','Decode unfamiliar words','Clarify word meanings','Link information logically','Synthesize discussion ideas'],refs:['RI.5.9','RF.5.3','L.5.4','W.5.2','SL.5.1'],idea:'Choose a topic you both enjoy. Discuss what two sources agree on and one new question to investigate.'}
];
export const gradeGuidance = {
 'K': {label:'Listen, play & tell',word:'Listen and play with a grown-up. You can point or say your answer; an adult can help you choose.',read:'Listen to the story. A grown-up can point to the words as you follow along.',meaning:'Tell a grown-up your answer, then choose together. Listen to the story again whenever you like.',write:'Say your idea aloud. You may draw on paper. Type a word, or ask a grown-up to type what you say.'},
 '3': {label:'Read, prove & compose',word:'Use word parts and context clues. Read the whole word and check that its meaning fits.',read:'Read each paragraph, then pause to name its main idea. Reread to locate a useful detail.',meaning:'Choose an answer, then select the detail that best supports it. Explain how that evidence connects to your answer.',write:'Aim for 3–5 connected sentences: state your idea, include relevant text details, explain them, and add a closing thought. A grown-up can review your paragraph.'},
 '1': {label:'Read with support',word:'Tap and blend each word slowly. Say the sounds with a grown-up if you need help.',read:'Read one paragraph at a time. Pause to tell a grown-up one thing you learned.',meaning:'Say your answer aloud. Point to the part of the text that helped you.',write:'Say your idea first. Use the sentence starter and write one or two clear sentences. Add more if you want.'},
 '2': {label:'Explain & extend',word:'Read the practice words smoothly, then think of another word with the same pattern.',read:'Try reading independently first. Reread a tricky part and tell how the ideas connect.',meaning:'After choosing, explain why the answer fits. Use a detail from the text.',write:'Develop your answer in two or three connected sentences. Add a useful detail and a closing thought.'}
};
export const stretchPrompts:Record<string,string>={
 beavers:'Explain how the underwater entrance and dry room help a beaver use its lodge.',
 birds:'Explain why a nest is useful for eggs. Add two details from the reading.',
 rabbits:'Explain how a burrow helps a rabbit. Connect two facts with because or also.',
 compare:'Compare two animal homes. Include one similarity, one difference, and a closing thought.',
 'tiny-seed':'Describe the root, shoot, and leaves in order. Finish by naming the young plant.',
 'roots-leaves':'Explain how two parts help a plant. Use the names of the parts in your answer.',
 'seed-pot':'Explain how Mia responds while she waits. Include an action from the story.',
 'growing-guide':'Write your three-step guide. Add a reason for one step and a closing reminder.',
 'library-day':'Explain how the librarian helps Leo. Use a story detail to support your explanation.',
 'garden-team':'Explain how Sam helps the garden team. Tell why that action matters.',
 'fix-it':'Describe the wagon problem and its solution. Add a detail about working together.',
 'kind-neighbor':'State your opinion, give two reasons, and finish with a closing sentence.',
 'cloud-watch':'Explain one thing you can observe and one thing you cannot know for certain from a cloud.',
 'rain-story':'Explain how Ava responds to the rain. Include what changes in the picnic plan.',
 'weather-notes':'Compare Monday and Tuesday. Use one observation from each day.',
 'my-weather-report':'Write an observation and a plan. Connect them with because and add a closing thought.'
};
export const standardsUrl='https://www.corestandards.org/wp-content/uploads/2023/09/ADA-Compliant-ELA-Standards.pdf';
