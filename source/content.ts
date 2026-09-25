export type Answer = {choice:number; attempts:number; hinted:boolean};
export type RecordData = {lessonId:string; step:number; answers:Record<string,Answer>; draft:string; sourceNotes?:Record<string,string>; completed:boolean; updatedAt?:string};
export const units = [
  {
    "week": 1,
    "title": "Animal Homes",
    "goal": "Find facts, explain reasons, and compare animal homes.",
    "project": "Write about two animal homes. Tell how they are alike and different.",
    "family": "Look outside together. Where might an animal find shelter? Ask your child to explain using a detail from a reading."
  },
  {
    "week": 2,
    "title": "Our Growing Garden",
    "goal": "Follow a sequence and explain what plants need.",
    "project": "Make a growing guide using first, next, and finally.",
    "family": "Observe a plant together. Let your child describe what they see, then ask which part helps the plant get water."
  },
  {
    "week": 3,
    "title": "Helpful Neighbors",
    "goal": "Read stories, describe a character, and support an opinion.",
    "project": "Write an opinion about one way to help your community.",
    "family": "Ask your child to name one helpful action from a story. Ask: What happened because of that action?"
  },
  {
    "week": 4,
    "title": "Weather Watchers",
    "goal": "Observe, compare sources, and explain with evidence.",
    "project": "Create a weather report with an observation and a sensible plan.",
    "family": "Look out a window and describe the sky together. Separate what you can observe now from what you predict might happen."
  }
];
const coreLessons = [
  {
    "id": "beavers",
    "title": "Busy Beavers",
    "subtitle": "A home on the pond",
    "label": "Beaver homes",
    "focus": "Short vowel review",
    "pattern": "Short a",
    "model": "Tap the sounds in m–a–p. Blend them: map. The middle sound is short a. Try it in dam.",
    "words": [
      "map",
      "dam",
      "tap"
    ],
    "wordQuestion": "Which word has the same middle sound as map?",
    "wordOptions": [
      "sun",
      "dam",
      "sit"
    ],
    "wordAnswer": 1,
    "wordHint": "Say map slowly. Now say dam. Listen to the middle sound.",
    "text": [
      "Beavers are builders. They use sticks, mud, and rocks to build dams across streams. A dam holds back water and can make a pond.",
      "Many beavers build a home called a lodge in the pond. A lodge is different from a dam. It has a dry room inside. Its entrance is under the water.",
      "A beaver can swim through the entrance and climb into its dry room. The lodge gives the beaver a place to rest."
    ],
    "question": "What is the difference between a dam and a lodge?",
    "options": [
      "Both are places to sleep.",
      "A lodge holds back water.",
      "A dam holds back water. A lodge is a home."
    ],
    "answer": 2,
    "hint": "Look at the first two paragraphs. Find what a dam does and what a lodge is.",
    "explanation": "A dam holds back water. A lodge has a dry room where a beaver can rest.",
    "prompt": "Tell how a beaver builds and uses its home.",
    "frame": "A beaver builds a lodge with ___. The lodge ___.",
    "vocab": "lodge",
    "definition": "a home built by a beaver",
    "color": "green",
    "week": 1,
    "genre": "Informational text",
    "talk": "Tell someone one thing you learned. Ask what they found interesting and listen to their answer."
  },
  {
    "id": "birds",
    "title": "A Nest for Eggs",
    "subtitle": "A little home in the branches",
    "label": "Bird nests",
    "focus": "Consonant blends",
    "pattern": "Beginning blends",
    "model": "In nest, you can hear four sounds: n–e–s–t. In twig, the t and w sounds are close together. Say both sounds as you blend.",
    "words": [
      "nest",
      "twig",
      "stem"
    ],
    "wordQuestion": "Which word starts with the two sounds t and w?",
    "wordOptions": [
      "twig",
      "nest",
      "stem"
    ],
    "wordAnswer": 0,
    "wordHint": "Look for t followed by w at the start of the word.",
    "text": [
      "Many birds build nests to hold their eggs. Some use grass and small twigs. They weave the pieces together.",
      "A robin may add mud to help hold its nest together. Soft grass lines the inside. The nest is shaped like a little cup.",
      "When the eggs hatch, the young birds stay in the nest. Their parents bring food. When the young birds are ready, they leave the nest."
    ],
    "question": "Why does a robin use mud in its nest?",
    "options": [
      "To feed the young birds.",
      "To help hold the nest together.",
      "To make a pond."
    ],
    "answer": 1,
    "hint": "Read the first sentence of paragraph two again.",
    "explanation": "The text says that mud helps hold a robin’s nest together.",
    "prompt": "Explain what a robin uses to make a nest and why.",
    "frame": "A robin uses ___. This helps ___.",
    "vocab": "weave",
    "definition": "to put pieces over and under each other",
    "color": "blue",
    "week": 1,
    "genre": "Informational text",
    "talk": "Tell someone one thing you learned. Ask what they found interesting and listen to their answer."
  },
  {
    "id": "rabbits",
    "title": "Under the Ground",
    "subtitle": "A tunnel to a safe place",
    "label": "Rabbit burrows",
    "focus": "The digraph sh",
    "pattern": "Two letters, one sound",
    "model": "The letters s and h work together to make one sound in shop. Blend sh–o–p. Now try shed and fish.",
    "words": [
      "shop",
      "shed",
      "fish"
    ],
    "wordQuestion": "Which word ends with the sh sound?",
    "wordOptions": [
      "shop",
      "shed",
      "fish"
    ],
    "wordAnswer": 2,
    "wordHint": "The word ends with s and h. Say fish slowly.",
    "text": [
      "Some rabbits live in burrows. A burrow is a hole or tunnel in the ground. Not all rabbits live this way.",
      "European rabbits dig tunnels with their strong feet. A group of connected tunnels is called a warren. Some tunnels lead to rooms where rabbits can rest.",
      "A burrow can give rabbits shelter from bad weather. Having more than one entrance can also help a rabbit escape from danger."
    ],
    "question": "How can more than one entrance help a rabbit?",
    "options": [
      "It gives the rabbit another way to escape.",
      "It makes food grow.",
      "It turns the burrow into a nest."
    ],
    "answer": 0,
    "hint": "Look for the word entrance in the last paragraph.",
    "explanation": "Another entrance gives a rabbit a different way out when there is danger.",
    "prompt": "Explain two ways a burrow can help a rabbit.",
    "frame": "A burrow helps a rabbit ___. It also ___.",
    "vocab": "shelter",
    "definition": "a place that protects a living thing",
    "color": "amber",
    "week": 1,
    "genre": "Informational text",
    "talk": "Tell someone one thing you learned. Ask what they found interesting and listen to their answer."
  },
  {
    "id": "compare",
    "title": "Home Sweet Home",
    "subtitle": "Put your discoveries together",
    "label": "Compare animal homes",
    "focus": "Read, compare & explain",
    "pattern": "Compound words",
    "model": "A compound word joins two smaller words. Rain + coat makes raincoat. The smaller words can help you understand the new word.",
    "words": [
      "raincoat",
      "sunset",
      "bedroom"
    ],
    "wordQuestion": "Which two words make bedroom?",
    "wordOptions": [
      "bee + room",
      "bed + roof",
      "bed + room"
    ],
    "wordAnswer": 2,
    "wordHint": "Split bedroom after the letter d.",
    "text": [
      "A beaver’s lodge and a rabbit’s burrow are both animal homes. Each gives an animal a place to rest and shelter. But these homes are not built in the same way.",
      "A beaver piles up materials such as sticks and mud. Many lodges are in ponds. A European rabbit digs a burrow in the ground. It makes space by moving soil away.",
      "Bird nests are different, too. Many birds build nests for eggs and young birds. Animal homes can be above water, in branches, or under the ground."
    ],
    "question": "How are a beaver’s lodge and a rabbit’s burrow alike?",
    "options": [
      "Both are built in branches.",
      "Both provide a place to rest and shelter.",
      "Both are made by digging soil."
    ],
    "answer": 1,
    "hint": "Read paragraph one. Look for the word both.",
    "explanation": "Both homes offer rest and shelter, even though the animals build them in different ways.",
    "prompt": "Compare a beaver’s lodge with a rabbit’s burrow. Tell one similarity and one difference.",
    "frame": "Both homes ___. A lodge ___, but a burrow ___.",
    "vocab": "compare",
    "definition": "to think about how things are alike and different",
    "color": "pink",
    "week": 1,
    "genre": "Informational text",
    "talk": "Tell someone one thing you learned. Ask what they found interesting and listen to their answer."
  },
  {
    "id": "tiny-seed",
    "week": 2,
    "title": "A Tiny Seed",
    "subtitle": "Small beginnings, new discoveries",
    "label": "Seed to sprout",
    "focus": "The digraph ch",
    "pattern": "Two letters, one sound: ch",
    "model": "The letters c and h work together in chip. Blend ch–i–p. You hear three sounds, even though you see four letters. Try chin and much.",
    "words": [
      "chip",
      "chin",
      "much"
    ],
    "wordQuestion": "Which word ends with the ch sound?",
    "wordOptions": [
      "chin",
      "chip",
      "much"
    ],
    "wordAnswer": 2,
    "wordHint": "Look for c and h at the end. Say much slowly.",
    "text": [
      "A seed can hold a tiny young plant. A seed coat protects it. Inside the seed, stored food helps the young plant begin to grow.",
      "A bean seed needs water, air, and the right warmth to sprout. After it takes in water, its coat begins to split. A small root grows out first.",
      "Then a shoot grows upward. Leaves begin to open. The young bean plant now needs light to keep growing. A tiny seed has become a seedling."
    ],
    "question": "What happens before the shoot grows upward?",
    "options": [
      "A small root grows out.",
      "The plant makes a new bean.",
      "The leaves fall off."
    ],
    "answer": 0,
    "hint": "Read the last sentence of paragraph two. Then read the start of paragraph three.",
    "explanation": "The root grows out first. Then the shoot grows upward.",
    "prompt": "Explain two steps in the growth of a bean seed. Use first and then.",
    "frame": "First, ___. Then, ___.",
    "vocab": "seedling",
    "definition": "a young plant that has grown from a seed",
    "color": "green",
    "genre": "Informational text",
    "talk": "Tell a grown-up what the root does before the leaves open."
  },
  {
    "id": "roots-leaves",
    "week": 2,
    "title": "Roots, Stems, and Leaves",
    "subtitle": "Every part has a job",
    "label": "Plant parts",
    "focus": "The digraph th",
    "pattern": "Listen for th",
    "model": "In thin, t and h make one sound. Put the tip of your tongue gently between your teeth and let air out. Blend th–i–n. Try thick and path.",
    "words": [
      "thin",
      "thick",
      "path"
    ],
    "wordQuestion": "Which word begins with the same th sound as thin?",
    "wordOptions": [
      "thick",
      "top",
      "ship"
    ],
    "wordAnswer": 0,
    "wordHint": "Look for t and h together at the beginning. Say thin and thick.",
    "text": [
      "A plant has parts that work together. Roots reach into the soil. They take in water and help hold the plant in place.",
      "The stem supports the plant. It also carries water from the roots toward the leaves. Some stems are soft. The trunk of a tree is a strong, woody stem.",
      "Leaves use light to help the plant make food. Roots, stems, and leaves have different jobs. Together, these parts help a plant live and grow."
    ],
    "question": "Which plant part takes in water from the soil?",
    "options": [
      "The flower",
      "The leaf",
      "The roots"
    ],
    "answer": 2,
    "hint": "Read the first paragraph and find the words take in water.",
    "explanation": "Roots take in water from the soil and help hold the plant in place.",
    "prompt": "Choose two plant parts and explain the job of each one.",
    "frame": "The ___ helps a plant ___. The ___ helps it ___.",
    "vocab": "supports",
    "definition": "holds something up",
    "color": "blue",
    "genre": "Informational text",
    "talk": "Point to a plant part and explain its job without looking at the reading."
  },
  {
    "id": "seed-pot",
    "week": 2,
    "title": "The Empty Pot",
    "subtitle": "A story about waiting and caring",
    "label": "A patient gardener",
    "focus": "Silent e: long a",
    "pattern": "From cap to cape",
    "model": "Read cap with short a. Add e to make cape. In cape, the a says its name and the final e is silent. Try tap and tape, then made.",
    "words": [
      "cap",
      "cape",
      "made"
    ],
    "wordQuestion": "Which word has the long a sound, as in cape?",
    "wordOptions": [
      "cat",
      "made",
      "map"
    ],
    "wordAnswer": 1,
    "wordHint": "Say made slowly. Its a sounds like the letter name A.",
    "text": [
      "Mia planted a bean seed in a pot. The next morning, she looked at the soil. Nothing had appeared. “Maybe my seed is broken,” she said.",
      "Her grandpa smiled. “Growing takes time. Let us check the soil.” It felt dry, so they added a little water. Mia put the pot in a warm place and kept checking it.",
      "Several days later, a green shoot pushed through the soil. Mia drew it in her notebook. “I could not see it growing at first,” she said, “but it was getting started!”"
    ],
    "question": "What does Mia learn in the story?",
    "options": [
      "Plants grow in one night.",
      "Every seed is broken.",
      "Growing takes time and care."
    ],
    "answer": 2,
    "hint": "Think about Mia at the beginning and at the end. What changed?",
    "explanation": "Mia learns to give the seed time and care instead of expecting a plant the next morning.",
    "prompt": "Tell how Mia feels at first and how she feels at the end. Use a detail from the story.",
    "frame": "At first, Mia ___. At the end, she ___ because ___.",
    "vocab": "appeared",
    "definition": "came into view so it could be seen",
    "color": "amber",
    "genre": "Fiction",
    "talk": "When have you had to wait for something? Listen to a grown-up’s example, too."
  },
  {
    "id": "growing-guide",
    "week": 2,
    "title": "My Growing Guide",
    "subtitle": "Put the steps in order",
    "label": "Make a growing guide",
    "focus": "Sequence words",
    "pattern": "First, next, finally",
    "model": "Sequence words show order. First tells how something starts. Next tells what comes after. Finally tells the last step. Read the words in that order.",
    "words": [
      "first",
      "next",
      "finally"
    ],
    "wordQuestion": "Which word tells the last step?",
    "wordOptions": [
      "finally",
      "first",
      "next"
    ],
    "wordAnswer": 0,
    "wordHint": "Think about the word final. It means last.",
    "text": [
      "First, put potting soil in a small pot with drainage holes. Plant a bean seed as directed on its packet. Ask a grown-up to help you check the directions.",
      "Next, gently water the soil. Keep it damp rather than soaking wet. Put the pot in a place with the warmth the seed needs. Check it regularly.",
      "Finally, when the seedling appears, give it the light it needs and keep caring for it. Draw what you observe. Your drawings can show how the plant changes over time."
    ],
    "question": "Why are first, next, and finally useful in this guide?",
    "options": [
      "They name three kinds of plants.",
      "They help the reader follow the steps in order.",
      "They describe the color of a seed."
    ],
    "answer": 1,
    "hint": "Notice where those three words appear: at the beginning of each step.",
    "explanation": "These words help readers know which step to do before or after another step.",
    "prompt": "Write your own three-step growing guide. Use first, next, and finally.",
    "frame": "First, ___. Next, ___. Finally, ___.",
    "vocab": "observe",
    "definition": "look carefully to notice details",
    "color": "pink",
    "genre": "How-to text",
    "talk": "Read your guide to someone. Ask whether the steps are easy to follow."
  },
  {
    "id": "library-day",
    "week": 3,
    "title": "A Book for Everyone",
    "subtitle": "A story at the neighborhood library",
    "label": "A helpful librarian",
    "focus": "Silent e: long i",
    "pattern": "From kit to kite",
    "model": "In kit, i is short. Add a silent e to make kite. The i in kite says its name. Try bike and time.",
    "words": [
      "kit",
      "kite",
      "bike"
    ],
    "wordQuestion": "Which word has the same long i sound as kite?",
    "wordOptions": [
      "sit",
      "big",
      "bike"
    ],
    "wordAnswer": 2,
    "wordHint": "The final e in bike is silent. Listen to the i sound.",
    "text": [
      "Leo wanted a book about space, but he did not know where to look. He stood near a shelf full of stories about dogs. “I cannot find a space book,” he said.",
      "The librarian asked, “What would you like to learn?” Leo told her about his interest in the Moon. She showed him the science shelves and helped him choose a book.",
      "Leo opened the book and found a picture of the Moon. “Now I know where to look next time,” he said. He thanked the librarian and sat down to read."
    ],
    "question": "How does the librarian help Leo solve his problem?",
    "options": [
      "She writes a new book for him.",
      "She shows him where to find a book about space.",
      "She tells him to stop reading."
    ],
    "answer": 1,
    "hint": "Read the middle paragraph. What does the librarian show Leo?",
    "explanation": "She listens to Leo’s interest and shows him the science shelves so he can choose a book.",
    "prompt": "Describe Leo’s problem and how the librarian helps him.",
    "frame": "Leo cannot ___. The librarian helps by ___.",
    "vocab": "librarian",
    "definition": "a person who helps people use a library and find information",
    "color": "green",
    "genre": "Fiction",
    "talk": "Ask someone which kind of book they would look for at a library. Listen and tell back their answer."
  },
  {
    "id": "garden-team",
    "week": 3,
    "title": "The Garden Team",
    "subtitle": "Small jobs, shared success",
    "label": "Working together",
    "focus": "The vowel team ee",
    "pattern": "Two e’s, one long sound",
    "model": "In seed, ee spells the long e sound. Blend s–ee–d. Try feet and green. These words all have the long e sound.",
    "words": [
      "seed",
      "feet",
      "green"
    ],
    "wordQuestion": "Which word has the long e sound spelled ee?",
    "wordOptions": [
      "feet",
      "red",
      "bed"
    ],
    "wordAnswer": 0,
    "wordHint": "Look for the two e letters together.",
    "text": [
      "A group of neighbors wanted a garden beside their building. One person brought seeds. Another brought tools. Sam and his aunt came to help, too.",
      "Sam could not lift the heavy bag of soil. He looked disappointed. “You can help in another way,” said his aunt. She gave him labels to put beside each row of seeds.",
      "Soon the beds were ready. Every row had a label. The neighbors knew where they had planted carrots and beans. Sam smiled. His small job had helped the whole team."
    ],
    "question": "Why are Sam’s labels useful?",
    "options": [
      "They make the soil heavier.",
      "They keep all the rain away.",
      "They show what is planted in each row."
    ],
    "answer": 2,
    "hint": "Look at what the neighbors know in the last paragraph.",
    "explanation": "The labels show where the carrots and beans are planted. Sam’s small job helps everyone.",
    "prompt": "Explain how Sam helps the group. Give a detail from the story.",
    "frame": "Sam helps by ___. This is useful because ___.",
    "vocab": "disappointed",
    "definition": "sad because something did not happen the way you hoped",
    "color": "blue",
    "genre": "Fiction",
    "talk": "Take turns naming different jobs people can do when they work as a team."
  },
  {
    "id": "fix-it",
    "week": 3,
    "title": "The Loose Wheel",
    "subtitle": "A problem, a plan, and a repair",
    "label": "Solving a problem",
    "focus": "The vowel team ai",
    "pattern": "Listen for long a in ai",
    "model": "In rain, ai spells the long a sound. Blend r–ai–n. Try mail and paint. Listen for the same vowel sound.",
    "words": [
      "rain",
      "mail",
      "paint"
    ],
    "wordQuestion": "Which word has the same vowel sound as rain?",
    "wordOptions": [
      "run",
      "mail",
      "red"
    ],
    "wordAnswer": 1,
    "wordHint": "The letters ai are together in both words.",
    "text": [
      "Nora pulled her wagon toward the park. One wheel wobbled. She stopped and called her dad. “I think something is wrong,” she said.",
      "Dad checked the wagon. A nut that held the wheel was loose. Nora held the wagon still while Dad used a tool to tighten the nut. Then they checked the other wheels.",
      "The wheel no longer wobbled. Nora and Dad tested the wagon before using it again. Nora was glad she had stopped and asked for help."
    ],
    "question": "What causes the wheel to wobble?",
    "options": [
      "A nut that holds the wheel is loose.",
      "The park is too far away.",
      "The wagon is the wrong color."
    ],
    "answer": 0,
    "hint": "The first two sentences of paragraph two explain the cause.",
    "explanation": "The loose nut makes the wheel wobble. Tightening it helps solve the problem.",
    "prompt": "Explain the problem and the steps Nora and Dad take to solve it.",
    "frame": "The problem is ___. First they ___. Then they ___.",
    "vocab": "repair",
    "definition": "fix something that is damaged or not working properly",
    "color": "amber",
    "genre": "Fiction",
    "talk": "Tell a grown-up how Nora’s choice to stop helped her solve the problem."
  },
  {
    "id": "kind-neighbor",
    "week": 3,
    "title": "What Makes a Helpful Neighbor?",
    "subtitle": "Choose an idea and give a reason",
    "label": "Write your opinion",
    "focus": "Opinion and reasons",
    "pattern": "I think… because…",
    "model": "An opinion tells what you think. A reason explains why you think it. Connect them with because: I think sharing books is helpful because more people can read them.",
    "words": [
      "think",
      "because",
      "reason"
    ],
    "wordQuestion": "Which word helps connect an opinion to a reason?",
    "wordOptions": [
      "yesterday",
      "under",
      "because"
    ],
    "wordAnswer": 2,
    "wordHint": "Finish this sentence: I think it helps ___ it makes our street cleaner.",
    "text": [
      "A helpful neighbor can do many things. One person might share a book. Another might help care for a shared garden. Different people have different ways to help.",
      "I think caring for shared spaces is an important way to help. When people pick up litter together, the park is more pleasant for everyone. This is one reason for my opinion.",
      "You may think another way of helping is more important. Tell what you think, and give a reason. An example from a story or your own experience can help explain your idea."
    ],
    "question": "Which sentence is an opinion from the text?",
    "options": [
      "A helpful neighbor can do many things.",
      "I think caring for shared spaces is an important way to help.",
      "Different people have different ways to help."
    ],
    "answer": 1,
    "hint": "Find the sentence that starts with I think.",
    "explanation": "The words I think show the writer’s opinion about an important way to help.",
    "prompt": "Choose one way to help your community. Write your opinion, one reason, and an example.",
    "frame": "I think ___ is helpful because ___. For example, ___.",
    "vocab": "opinion",
    "definition": "what someone thinks or believes about something",
    "color": "pink",
    "genre": "Opinion text",
    "talk": "Share your opinion, then ask for someone else’s opinion. Can your ideas both be helpful?"
  },
  {
    "id": "cloud-watch",
    "week": 4,
    "title": "Looking at Clouds",
    "subtitle": "Notice the sky above you",
    "label": "Observe the sky",
    "focus": "The vowel team oa",
    "pattern": "Listen for long o in oa",
    "model": "In boat, oa spells the long o sound. Blend b–oa–t. Try coat and road. The two vowel letters work together.",
    "words": [
      "boat",
      "coat",
      "road"
    ],
    "wordQuestion": "Which word has the same long o sound as boat?",
    "wordOptions": [
      "hot",
      "coat",
      "cot"
    ],
    "wordAnswer": 1,
    "wordHint": "Look for oa. Say boat and coat and listen to the middle sound.",
    "text": [
      "Clouds are made of tiny water droplets, ice crystals, or both. They can look different from one day to the next. Some clouds look puffy. Others spread across the sky like a blanket.",
      "An observer notices details. You might say, “I see a wide gray cloud covering most of the sky.” That sentence describes what you can see now.",
      "A prediction is different. You might say, “I think it will rain later.” Clouds can offer clues, but a prediction is not a promise. Weather can change."
    ],
    "question": "Which sentence is an observation?",
    "options": [
      "I think it might rain tomorrow.",
      "I hope the sun comes out.",
      "I see a gray cloud covering the sky."
    ],
    "answer": 2,
    "hint": "An observation tells what you can see now, not what you think will happen later.",
    "explanation": "Seeing a gray cloud is an observation. Saying what might happen later is a prediction.",
    "prompt": "Describe something you can observe in the sky. Add one prediction and label it as a prediction.",
    "frame": "I observe ___. I predict ___ might ___.",
    "vocab": "prediction",
    "definition": "an idea about what might happen next",
    "color": "green",
    "genre": "Informational text",
    "talk": "Look from a window and take turns sharing observations. Which words describe things you can actually see?"
  },
  {
    "id": "rain-story",
    "week": 4,
    "title": "Rain on the Picnic",
    "subtitle": "A change of plans",
    "label": "A flexible plan",
    "focus": "The prefix re-",
    "pattern": "Re- can mean again",
    "model": "The prefix re- can mean again. Read means look at written words. Reread means read again. Repaint means paint again. Look for the base word after re-.",
    "words": [
      "reread",
      "repaint",
      "replay"
    ],
    "wordQuestion": "What does reread mean?",
    "wordOptions": [
      "Read again",
      "Read very loudly",
      "Stop reading"
    ],
    "wordAnswer": 0,
    "wordHint": "The prefix re- often means again. The base word is read.",
    "text": [
      "Ben and his sister Ava packed lunch for a picnic. When they were ready to leave, rain began tapping on the window. Ben put down the basket. “Now our picnic is ruined,” he said.",
      "Ava thought for a moment. Then she spread a blanket on the living room floor. “What if we have our picnic here?” she asked. Ben brought the basket over.",
      "They ate their sandwiches and listened to the rain. Ben began to smile. Their picnic was different from the one they had planned, but they still enjoyed being together."
    ],
    "question": "How does Ava respond to the rain?",
    "options": [
      "She throws away the lunch.",
      "She refuses to have a picnic.",
      "She suggests having the picnic indoors."
    ],
    "answer": 2,
    "hint": "Read Ava’s question in the middle paragraph.",
    "explanation": "Ava changes the plan and suggests an indoor picnic. Her idea helps them enjoy the day.",
    "prompt": "Tell how Ben’s feelings change. Explain what Ava does to help.",
    "frame": "At first, Ben feels ___. Ava ___. Then Ben ___.",
    "vocab": "flexible",
    "definition": "able to change a plan when needed",
    "color": "blue",
    "genre": "Fiction",
    "talk": "Take turns suggesting another enjoyable activity for a rainy day."
  },
  {
    "id": "weather-notes",
    "week": 4,
    "title": "Two Days, Two Notes",
    "subtitle": "Compare information from a weather notebook",
    "label": "Compare two reports",
    "focus": "Plural endings -s and -es",
    "pattern": "More than one",
    "model": "A plural word names more than one. Add s to cloud to make clouds. Add es to box to make boxes. Say both pairs and notice the ending.",
    "words": [
      "clouds",
      "boxes",
      "birds"
    ],
    "wordQuestion": "Which word means more than one cloud?",
    "wordOptions": [
      "cloudy",
      "clouds",
      "cloud"
    ],
    "wordAnswer": 1,
    "wordHint": "Look for the word cloud with an s at the end.",
    "text": [
      "Monday’s note: “The sky looks blue. I see a few white clouds. The leaves are still. The pavement outside our window is dry.”",
      "Tuesday’s note: “Gray clouds cover most of the sky. Leaves move back and forth. Rain taps on the window. The pavement looks wet.”",
      "Both notes describe the sky and the pavement. The details are different. Comparing the notes helps us explain how the weather changed from Monday to Tuesday."
    ],
    "question": "Which detail is found in Tuesday’s note but not Monday’s?",
    "options": [
      "The pavement is dry.",
      "The leaves are still.",
      "Rain taps on the window."
    ],
    "answer": 2,
    "hint": "Reread the second paragraph, which contains Tuesday’s note.",
    "explanation": "Tuesday’s note includes rain tapping on the window. Monday’s note describes dry pavement.",
    "prompt": "Compare Monday and Tuesday. Write one difference about the sky and one about the pavement.",
    "frame": "On Monday, ___, but on Tuesday, ___. The pavement ___.",
    "vocab": "details",
    "definition": "small pieces of information that help explain something",
    "color": "amber",
    "genre": "Observation notes",
    "talk": "Read one note aloud. Ask a partner to name two details they heard."
  },
  {
    "id": "my-weather-report",
    "week": 4,
    "title": "My Weather Report",
    "subtitle": "Use evidence to explain your plan",
    "label": "Create a weather report",
    "focus": "Review and apply",
    "pattern": "Review your word tools",
    "model": "Use what you have practiced. In rain, ai spells long a. In coat, oa spells long o. In reread, re- means again. Tell how each word tool helps you.",
    "words": [
      "rain",
      "coat",
      "reread"
    ],
    "wordQuestion": "Which word has a prefix that means again?",
    "wordOptions": [
      "reread",
      "rain",
      "coat"
    ],
    "wordAnswer": 0,
    "wordHint": "Find the word with re- added before the base word read.",
    "text": [
      "A weather report can begin with an observation. For example: “Rain is falling, and the pavement is wet.” These details tell the reader what you notice now.",
      "Next, explain a plan that fits the observation. “We will move our chalk drawing activity indoors because the pavement is wet.” The word because connects the plan to a reason.",
      "Before you finish, reread your report. Have you described what you observed? Have you explained your plan? Check that each sentence starts with a capital letter and ends with punctuation."
    ],
    "question": "Which plan is supported by the observation of wet pavement?",
    "options": [
      "Draw with chalk on the wet pavement.",
      "Move the drawing activity indoors.",
      "Say the pavement is dry."
    ],
    "answer": 1,
    "hint": "The second paragraph gives a plan and explains the reason for it.",
    "explanation": "Moving the activity indoors fits the observation that the pavement is wet.",
    "prompt": "Write a weather report with an observation and a plan. Explain your reason with because, then reread and improve one sentence.",
    "frame": "Today I observe ___. I plan to ___ because ___.",
    "vocab": "evidence",
    "definition": "information that helps explain or support an idea",
    "color": "pink",
    "genre": "How-to text",
    "talk": "Read your report aloud. Ask a listener to tell you the reason for your plan."
  }
];
export const kindergartenLessons = [
  {
    "id": "k-rhyme",
    "title": "Cat and Hat",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "Cat and Hat",
    "focus": "Rhyming words",
    "pattern": "Words that rhyme",
    "model": "Say cat and hat. Their endings sound alike. That is a rhyme. Ask a grown-up to say the words with you.",
    "words": [
      "cat",
      "hat",
      "sun"
    ],
    "wordQuestion": "Which word rhymes with cat?",
    "wordOptions": [
      "sun",
      "hat",
      "dog"
    ],
    "wordAnswer": 1,
    "wordHint": "Listen to the ending of cat and hat. Both end with the sound at.",
    "text": [
      "A cat sees a red hat.",
      "The cat sits by the hat.",
      "A dog runs past."
    ],
    "question": "What does the cat sit by?",
    "options": [
      "A tree",
      "A cup",
      "A hat"
    ],
    "answer": 2,
    "hint": "Listen to the second sentence.",
    "explanation": "The story says the cat sits by the hat.",
    "prompt": "Draw the cat or hat on paper. Tell a grown-up about it, then save a word or your spoken idea.",
    "frame": "I see a ___.",
    "vocab": "rhyme",
    "definition": "words with endings that sound alike",
    "color": "green",
    "week": 1,
    "genre": "Read-aloud story",
    "talk": "Say cat and hat together. Take turns thinking of another rhyme.",
    "symbols": "🐱 🎩"
  },
  {
    "id": "k-clap",
    "title": "A Rabbit Hops",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "A Rabbit Hops",
    "focus": "Syllable beats",
    "pattern": "Clap the word parts",
    "model": "Say rabbit: rab-bit. Clap twice. Say hop and clap once. We are counting word parts, not letters.",
    "words": [
      "rabbit",
      "hop",
      "sun"
    ],
    "wordQuestion": "Which word has two claps?",
    "wordOptions": [
      "rabbit",
      "hop",
      "sun"
    ],
    "wordAnswer": 0,
    "wordHint": "Say rab-bit slowly and clap each part.",
    "text": [
      "A rabbit sits in the grass.",
      "It hears a bird.",
      "The rabbit hops away."
    ],
    "question": "What does the rabbit hear?",
    "options": [
      "A drum",
      "A bird",
      "A dog"
    ],
    "answer": 1,
    "hint": "Listen for what makes a sound in the story.",
    "explanation": "The rabbit hears a bird.",
    "prompt": "Tell what the rabbit does. A grown-up can type your words.",
    "frame": "The rabbit ___.",
    "vocab": "hop",
    "definition": "a small jump",
    "color": "blue",
    "week": 1,
    "genre": "Read-aloud story",
    "talk": "Clap the parts in your nickname together. Different names can have different numbers of claps.",
    "symbols": "🐰 🌿"
  },
  {
    "id": "k-first-sound",
    "title": "Sun and Socks",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "Sun and Socks",
    "focus": "Beginning sounds",
    "pattern": "Listen to the start",
    "model": "Say sun and sock. Listen to the hissing sound at the start. A grown-up can stretch that first sound without adding an extra vowel.",
    "words": [
      "sun",
      "sock",
      "map"
    ],
    "wordQuestion": "Which word starts like sun?",
    "wordOptions": [
      "map",
      "cat",
      "sock"
    ],
    "wordAnswer": 2,
    "wordHint": "Say sun, sock. Listen to the very first sound.",
    "text": [
      "Sam puts on socks.",
      "Sam steps outside.",
      "The sun is bright."
    ],
    "question": "What does Sam put on?",
    "options": [
      "Socks",
      "A hat",
      "Mittens"
    ],
    "answer": 0,
    "hint": "Listen to the first sentence.",
    "explanation": "Sam puts on socks before going outside.",
    "prompt": "Tell what Sam wears, or draw it on paper and save a label.",
    "frame": "Sam has ___.",
    "vocab": "bright",
    "definition": "giving lots of light",
    "color": "amber",
    "week": 1,
    "genre": "Read-aloud story",
    "talk": "Take turns naming something you wear. Listen carefully to your partner.",
    "symbols": "☀️ 🧦"
  },
  {
    "id": "k-word-space",
    "title": "We See a Bug",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "We See a Bug",
    "focus": "Spaces between words",
    "pattern": "Point to each word",
    "model": "Look at: We see a bug. Touch each word as a grown-up reads from left to right. Spaces help us see four words.",
    "words": [
      "We",
      "see",
      "bug"
    ],
    "wordQuestion": "How many words are in: We see a bug?",
    "wordOptions": [
      "Three",
      "Four",
      "Five"
    ],
    "wordAnswer": 1,
    "wordHint": "Point once for We, once for see, once for a, and once for bug.",
    "text": [
      "We see a bug.",
      "The bug is on a leaf.",
      "We watch it crawl."
    ],
    "question": "Where is the bug?",
    "options": [
      "In a cup",
      "Under a hat",
      "On a leaf"
    ],
    "answer": 2,
    "hint": "Listen for the place the bug sits.",
    "explanation": "The story says the bug is on a leaf.",
    "prompt": "Draw a bug scene on paper. Say what is in it and save a word or a short idea.",
    "frame": "My bug is ___.",
    "vocab": "crawl",
    "definition": "move slowly close to the ground",
    "color": "pink",
    "week": 1,
    "genre": "Read-aloud story",
    "talk": "Share your picture. Ask a grown-up to point to each word of your saved idea.",
    "symbols": "🐞 🍃"
  },
  {
    "id": "k-letter-m",
    "title": "Mia and the Map",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "Mia and the Map",
    "focus": "The letter M m",
    "pattern": "Meet M and m",
    "model": "M and m are the same letter in two forms. Look at both. A grown-up can model the first sound in map while pointing to m.",
    "words": [
      "map",
      "mat",
      "moon"
    ],
    "wordQuestion": "Which lowercase letter matches capital M?",
    "wordOptions": [
      "m",
      "s",
      "t"
    ],
    "wordAnswer": 0,
    "wordHint": "Look at the pair M m in the heading.",
    "text": [
      "Mia has a map.",
      "The map shows a pond.",
      "Mia points to the pond."
    ],
    "question": "What does the map show?",
    "options": [
      "A shop",
      "A pond",
      "A bed"
    ],
    "answer": 1,
    "hint": "Listen to the second sentence.",
    "explanation": "The map shows a pond.",
    "prompt": "Tell what Mia finds on the map. Save a label or your spoken idea.",
    "frame": "The map shows ___.",
    "vocab": "map",
    "definition": "a drawing that shows where places are",
    "color": "green",
    "week": 2,
    "genre": "Read-aloud story",
    "talk": "Draw a map of one room on paper. Tell someone where to look first.",
    "symbols": "🗺️ 💧"
  },
  {
    "id": "k-letter-s",
    "title": "A Seed for Sam",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "A Seed for Sam",
    "focus": "The letter S s",
    "pattern": "Meet S and s",
    "model": "S and s are the same letter in two forms. Say seed and sun. A grown-up can model their first sound while pointing to s.",
    "words": [
      "seed",
      "sun",
      "sock"
    ],
    "wordQuestion": "Which word starts with the sound of s in sun?",
    "wordOptions": [
      "map",
      "tap",
      "seed"
    ],
    "wordAnswer": 2,
    "wordHint": "Listen to seed and sun. Their first sounds match.",
    "text": [
      "Sam puts a seed in a pot.",
      "Sam adds a little water.",
      "Sam waits for a plant."
    ],
    "question": "What does Sam put in the pot?",
    "options": [
      "A seed",
      "A sock",
      "A toy"
    ],
    "answer": 0,
    "hint": "Listen to the first sentence.",
    "explanation": "Sam puts a seed in the pot.",
    "prompt": "Tell what Sam plants. A grown-up can write down what you say.",
    "frame": "Sam plants a ___.",
    "vocab": "seed",
    "definition": "a plant part that can grow into a new plant",
    "color": "blue",
    "week": 2,
    "genre": "Read-aloud story",
    "talk": "Pretend to plant a seed. Explain what you are doing while a partner listens.",
    "symbols": "🌱 🪴"
  },
  {
    "id": "k-letter-t",
    "title": "Tap the Drum",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "Tap the Drum",
    "focus": "The letter T t",
    "pattern": "Meet T and t",
    "model": "T and t are two forms of the same letter. A grown-up can make the short first sound in tap. Keep it quick; do not add uh.",
    "words": [
      "tap",
      "top",
      "tent"
    ],
    "wordQuestion": "Which lowercase letter matches capital T?",
    "wordOptions": [
      "s",
      "t",
      "m"
    ],
    "wordAnswer": 1,
    "wordHint": "Look at the letter pair T t.",
    "text": [
      "Tess has a drum.",
      "Tess taps it softly.",
      "Her friend taps too."
    ],
    "question": "How does Tess tap?",
    "options": [
      "Angrily",
      "Very loudly",
      "Softly"
    ],
    "answer": 2,
    "hint": "Listen for the word that tells how Tess taps.",
    "explanation": "Tess taps the drum softly.",
    "prompt": "Tell how Tess plays. Save one word or your spoken sentence.",
    "frame": "Tess taps ___.",
    "vocab": "softly",
    "definition": "in a gentle, quiet way",
    "color": "amber",
    "week": 2,
    "genre": "Read-aloud story",
    "talk": "Tap a gentle pattern on your knees. Let a partner copy it, then switch.",
    "symbols": "🥁 🎵"
  },
  {
    "id": "k-letter-hunt",
    "title": "My Letter Walk",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "My Letter Walk",
    "focus": "Review M, S, T",
    "pattern": "Find a letter friend",
    "model": "Look at M m, S s, and T t. Match each capital to its lowercase partner. You can trace the shapes in the air.",
    "words": [
      "map",
      "sun",
      "tap"
    ],
    "wordQuestion": "Which pair shows the same letter?",
    "wordOptions": [
      "S s",
      "M t",
      "T m"
    ],
    "wordAnswer": 0,
    "wordHint": "A capital S and a lowercase s have matching curved shapes.",
    "text": [
      "Mia sees M on a sign.",
      "Sam sees S on a book.",
      "Tess sees T on a tag."
    ],
    "question": "Who sees S on a book?",
    "options": [
      "Tess",
      "Sam",
      "Mia"
    ],
    "answer": 1,
    "hint": "Listen to the sentence about the book.",
    "explanation": "Sam sees S on a book.",
    "prompt": "Make an M, S, or T page on paper. Say its name and save the letter or a matching word.",
    "frame": "My letter is ___.",
    "vocab": "sign",
    "definition": "a display that gives information",
    "color": "pink",
    "week": 2,
    "genre": "Read-aloud story",
    "talk": "Show your letter page. Ask your partner to find that letter somewhere else.",
    "symbols": "🔤 📖"
  },
  {
    "id": "k-short-a",
    "title": "A Cat on a Mat",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "A Cat on a Mat",
    "focus": "Short a words",
    "pattern": "Listen in the middle",
    "model": "Say cat and mat. They share the same middle vowel sound. A grown-up can stretch the words and help you hear short a.",
    "words": [
      "cat",
      "mat",
      "sat"
    ],
    "wordQuestion": "Which word has the same middle sound as cat?",
    "wordOptions": [
      "sit",
      "sun",
      "mat"
    ],
    "wordAnswer": 2,
    "wordHint": "Say cat and mat slowly. The middle sounds match.",
    "text": [
      "A cat sits on a mat.",
      "The mat is by a bag.",
      "The cat takes a nap."
    ],
    "question": "Where does the cat sit?",
    "options": [
      "On a mat",
      "In a box",
      "On a log"
    ],
    "answer": 0,
    "hint": "Listen to the first sentence.",
    "explanation": "The cat sits on a mat.",
    "prompt": "Tell where the cat sits. Draw it on paper if you like, then save a label.",
    "frame": "The cat is on a ___.",
    "vocab": "nap",
    "definition": "a short sleep",
    "color": "green",
    "week": 3,
    "genre": "Read-aloud story",
    "talk": "Tell a partner where you would put a cozy mat for the cat.",
    "symbols": "🐈 💤"
  },
  {
    "id": "k-short-i",
    "title": "A Pig Can Dig",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "A Pig Can Dig",
    "focus": "Short i words",
    "pattern": "Listen for short i",
    "model": "Say pig and dig. Listen to the middle vowel. The same short i sound is in sit. A grown-up can help you stretch the sounds.",
    "words": [
      "pig",
      "dig",
      "sit"
    ],
    "wordQuestion": "Which word has the same middle sound as pig?",
    "wordOptions": [
      "sun",
      "dig",
      "map"
    ],
    "wordAnswer": 1,
    "wordHint": "Listen to the middle of pig and dig.",
    "text": [
      "A pig can dig.",
      "The pig digs in mud.",
      "Mud sticks to its nose."
    ],
    "question": "Where does the pig dig?",
    "options": [
      "In snow",
      "In sand",
      "In mud"
    ],
    "answer": 2,
    "hint": "Listen to the second sentence.",
    "explanation": "The pig digs in mud.",
    "prompt": "Tell what gets on the pig. Save a word or dictate a sentence.",
    "frame": "The pig has ___.",
    "vocab": "mud",
    "definition": "wet, soft soil",
    "color": "blue",
    "week": 3,
    "genre": "Read-aloud story",
    "talk": "Pretend to be the pig. Tell your partner what happened to your nose.",
    "symbols": "🐷 🟤"
  },
  {
    "id": "k-short-o",
    "title": "Hop to the Log",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "Hop to the Log",
    "focus": "Short o words",
    "pattern": "Listen for short o",
    "model": "Say hop and log. In common American English, they share a short o sound. Listen with a grown-up; voices and accents can differ.",
    "words": [
      "hop",
      "log",
      "top"
    ],
    "wordQuestion": "Which word has the same middle sound as hop?",
    "wordOptions": [
      "log",
      "map",
      "sit"
    ],
    "wordAnswer": 0,
    "wordHint": "Say hop and log. Listen to the vowel in the middle.",
    "text": [
      "A frog sees a log.",
      "It hops to the log.",
      "It rests in the sun."
    ],
    "question": "What does the frog hop to?",
    "options": [
      "A bed",
      "A log",
      "A pot"
    ],
    "answer": 1,
    "hint": "Listen for the place the frog goes.",
    "explanation": "The frog hops to a log.",
    "prompt": "Tell where the frog goes. A grown-up can type your idea.",
    "frame": "The frog goes to the ___.",
    "vocab": "log",
    "definition": "a piece of a tree trunk",
    "color": "amber",
    "week": 3,
    "genre": "Read-aloud story",
    "talk": "Tell the frog story using three small movements. Let someone guess each part.",
    "symbols": "🐸 🪵"
  },
  {
    "id": "k-blend",
    "title": "A Map in a Bag",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "A Map in a Bag",
    "focus": "Blending and review",
    "pattern": "Put the sounds together",
    "model": "Ask a grown-up to say the three sounds in map slowly, without extra vowels. Slide them together to say map. Then try mat.",
    "words": [
      "map",
      "mat",
      "sat"
    ],
    "wordQuestion": "Which word starts with m and ends with p?",
    "wordOptions": [
      "sat",
      "map",
      "mat"
    ],
    "wordAnswer": 1,
    "wordHint": "Look at the first and last letters. Say the word with a grown-up.",
    "text": [
      "Sam has a map.",
      "The map is in a bag.",
      "Sam takes the bag to the park."
    ],
    "question": "What is in the bag?",
    "options": [
      "A toy",
      "A hat",
      "A map"
    ],
    "answer": 2,
    "hint": "Listen to the second sentence.",
    "explanation": "The map is in the bag.",
    "prompt": "Make a small word page with map or mat. Add a paper drawing and save your chosen word.",
    "frame": "My word is ___.",
    "vocab": "park",
    "definition": "an outdoor place where people can play or relax",
    "color": "pink",
    "week": 3,
    "genre": "Read-aloud story",
    "talk": "Show your word page. Ask a grown-up to read your word, then read it together.",
    "symbols": "🗺️ 🎒"
  },
  {
    "id": "k-first-next",
    "title": "Seed, Then Sprout",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "Seed, Then Sprout",
    "focus": "Story sequence",
    "pattern": "Review a rhyme",
    "model": "Say seed and need. The endings sound alike. Rhymes are about sounds, so listen before you choose.",
    "words": [
      "seed",
      "need",
      "pot"
    ],
    "wordQuestion": "Which word rhymes with seed?",
    "wordOptions": [
      "pot",
      "sun",
      "need"
    ],
    "wordAnswer": 2,
    "wordHint": "Listen to the ending of seed and need.",
    "text": [
      "First, Jo plants a seed.",
      "Next, Jo waters the soil.",
      "Later, a green sprout appears."
    ],
    "question": "What does Jo do first?",
    "options": [
      "Plants a seed",
      "Sees a sprout",
      "Picks a flower"
    ],
    "answer": 0,
    "hint": "The first sentence tells the first step.",
    "explanation": "Jo plants the seed first.",
    "prompt": "Tell the first thing Jo does. Draw the steps on paper and save your words.",
    "frame": "First, Jo ___.",
    "vocab": "sprout",
    "definition": "a new part of a plant starting to grow",
    "color": "green",
    "week": 4,
    "genre": "Read-aloud story",
    "talk": "Use first and next to tell two parts of the story to a partner.",
    "symbols": "🌱 💧"
  },
  {
    "id": "k-detail",
    "title": "The Red Kite",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "The Red Kite",
    "focus": "Noticing details",
    "pattern": "Review beginning sounds",
    "model": "Say kite and cup. Their first sounds match even though the first letters differ. Listen to the sound, not just the letter.",
    "words": [
      "kite",
      "cup",
      "sun"
    ],
    "wordQuestion": "Which word begins with the same sound as kite?",
    "wordOptions": [
      "cup",
      "sun",
      "map"
    ],
    "wordAnswer": 0,
    "wordHint": "A grown-up can say kite and cup slowly. Listen to the start.",
    "text": [
      "Lee has a red kite.",
      "The wind lifts it up.",
      "Lee holds the string."
    ],
    "question": "What color is the kite?",
    "options": [
      "Blue",
      "Red",
      "Green"
    ],
    "answer": 1,
    "hint": "Listen to the first sentence.",
    "explanation": "Lee has a red kite.",
    "prompt": "Tell one detail about the kite. Save a label or a sentence.",
    "frame": "The kite is ___.",
    "vocab": "string",
    "definition": "a thin cord used to hold or tie something",
    "color": "blue",
    "week": 4,
    "genre": "Read-aloud story",
    "talk": "Describe a paper drawing of a kite. Ask a partner to repeat one detail.",
    "symbols": "🪁 🍃"
  },
  {
    "id": "k-opinion",
    "title": "Two Places to Play",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "Two Places to Play",
    "focus": "Sharing a preference",
    "pattern": "Review word parts",
    "model": "Clap playground: play-ground, two parts. Clap park: one part. A grown-up can say each word while you clap.",
    "words": [
      "playground",
      "park",
      "sand"
    ],
    "wordQuestion": "Which word has two claps?",
    "wordOptions": [
      "park",
      "sand",
      "playground"
    ],
    "wordAnswer": 2,
    "wordHint": "Say play-ground. Clap once for each part.",
    "text": [
      "Nia plays in the sand.",
      "Ben plays on the swings.",
      "They wave to each other."
    ],
    "question": "Who plays on the swings?",
    "options": [
      "Nia",
      "Ben",
      "Both children"
    ],
    "answer": 1,
    "hint": "Listen to the sentence about Ben.",
    "explanation": "Ben plays on the swings.",
    "prompt": "Which place would you choose: sand or swings? Tell why, then save a word or dictate your idea.",
    "frame": "I choose ___ because ___.",
    "vocab": "choose",
    "definition": "pick one thing from two or more possibilities",
    "color": "amber",
    "week": 4,
    "genre": "Read-aloud story",
    "talk": "Take turns choosing a place to play. It is okay to have different choices.",
    "symbols": "🏖️ 🛝"
  },
  {
    "id": "k-retell",
    "title": "The Lost Hat",
    "subtitle": "Listen, play, and tell with a grown-up",
    "label": "The Lost Hat",
    "focus": "Retelling a story",
    "pattern": "A last rhyme game",
    "model": "Say hat and cat. They rhyme. Now listen to hat and sun; those endings do not match.",
    "words": [
      "hat",
      "cat",
      "sun"
    ],
    "wordQuestion": "Which word rhymes with hat?",
    "wordOptions": [
      "cat",
      "sun",
      "pig"
    ],
    "wordAnswer": 0,
    "wordHint": "Listen to the matching endings in hat and cat.",
    "text": [
      "A gust blows Mo’s hat away.",
      "The hat lands by a tree.",
      "Mo picks it up and smiles."
    ],
    "question": "What happens at the end?",
    "options": [
      "Mo goes to bed",
      "The hat is in a pond",
      "Mo picks up the hat"
    ],
    "answer": 2,
    "hint": "Listen to the last sentence.",
    "explanation": "At the end, Mo picks up the hat and smiles.",
    "prompt": "Draw one part of the story on paper. Retell it to a grown-up and save your words.",
    "frame": "First, ___. Then, ___.",
    "vocab": "gust",
    "definition": "a sudden, strong movement of air",
    "color": "pink",
    "week": 4,
    "genre": "Read-aloud story",
    "talk": "Retell the beginning and ending. Ask your listener what happened to the hat.",
    "symbols": "🎩 🌳"
  }
];
export const kindergartenUnits = [
  {
    "week": 1,
    "title": "Listening Detectives",
    "goal": "Play with rhymes, word parts, first sounds, and printed words.",
    "project": "Draw a bug scene on paper, tell about it, and save a label or idea.",
    "family": "Say a familiar rhyme together. Pause so your child can join in."
  },
  {
    "week": 2,
    "title": "Letter Friends",
    "goal": "Explore M, S, and T in words and everyday print.",
    "project": "Make a letter page on paper and tell someone about it.",
    "family": "Find M, S, or T in a book. Name the letter and model a sound it can represent."
  },
  {
    "week": 3,
    "title": "Little Word Builders",
    "goal": "Notice short vowels and practice blending with a grown-up.",
    "project": "Create a word-and-picture page on paper and save your chosen word.",
    "family": "Model sounds slowly without adding extra vowels. Return to familiar words whenever needed."
  },
  {
    "week": 4,
    "title": "Storytellers",
    "goal": "Notice details, tell events in order, and share a preference.",
    "project": "Retell The Lost Hat with a paper drawing and a saved spoken idea.",
    "family": "Listen to your child retell a story. Ask one gentle question about a detail."
  }
];
export const gradeThreeLessons = [
  {
    "id": "g3-notebook",
    "title": "The Notebook Clue",
    "subtitle": "Small details can change a big guess.",
    "label": "Grade 3",
    "focus": "Observation & inference",
    "pattern": "A prefix changes meaning",
    "model": "The prefix re- can mean again: read → reread. Look at the whole word to check its meaning.",
    "words": [
      "reread",
      "recheck",
      "rebuild"
    ],
    "wordQuestion": "Which word means to check again?",
    "wordOptions": [
      "checklist",
      "recheck",
      "checking"
    ],
    "wordAnswer": 1,
    "wordHint": "Put re- before check.",
    "text": [
      "Maya found a line of tiny holes in a leaf beside the school path. “A caterpillar ate this,” she said. Her partner, Eli, opened their nature notebook. “Maybe,” he replied. “But did we see a caterpillar?” Maya shook her head. They had seen only the holes and a green leaf lying on the ground.",
      "They drew the leaf and counted six holes. Under their drawing, Eli wrote, “Six holes with uneven edges.” On another line, Maya wrote, “An animal may have eaten part of the leaf.” They marked that second line with a question mark. It was an idea to investigate, not something they had watched happen.",
      "The next morning, they returned to the same spot. They did not find an animal, so they kept the question mark. Maya wanted an answer, but she liked having an accurate notebook even more. “We can recheck tomorrow,” she said. Their careful notes would help them remember exactly what they had noticed."
    ],
    "question": "Why do Maya and Eli keep the question mark?",
    "options": [
      "They cannot count the holes.",
      "They forgot where the leaf was.",
      "They have not seen what made the holes."
    ],
    "answer": 2,
    "hint": "Separate what they saw from what they guessed.",
    "explanation": "They observed holes, but the cause was still uncertain.",
    "evidenceOptions": [
      "They drew the leaf and counted six holes.",
      "They did not find an animal, so they kept the question mark.",
      "Eli opened their nature notebook."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The second sentence links the missing animal evidence to the question mark.",
    "evidenceExplanation": "The second sentence links the missing animal evidence to the question mark.",
    "prompt": "Explain how the notebook separates an observation from a possible explanation. Use one detail from the reading.",
    "frame": "The notebook is careful because… For example… This shows… A question they still have is…",
    "vocab": "observation",
    "definition": "Something you notice directly, rather than an explanation you guess.",
    "color": "green",
    "week": 1,
    "genre": "fiction",
    "talk": "Name one thing you can observe nearby. Then offer a possible explanation and say what would help you check it."
  },
  {
    "id": "g3-shade",
    "title": "A Fair Shade Test",
    "subtitle": "Read a procedure and explain its purpose.",
    "label": "Grade 3",
    "focus": "Cause & effect",
    "pattern": "The suffix -ful",
    "model": "The suffix -ful often means full of or having: care + ful → careful.",
    "words": [
      "careful",
      "helpful",
      "hopeful"
    ],
    "wordQuestion": "What does careful mean in a set of directions?",
    "wordOptions": [
      "Taking care with each step",
      "Finishing without looking",
      "Repeating every word"
    ],
    "wordAnswer": 0,
    "wordHint": "Think about doing something with care.",
    "text": [
      "The garden club wanted to compare two places for a reading bench. One place was under a tree. The other was beside a sunny wall. Instead of choosing from memory, the students planned a small shade test. Their question was simple: Which place would feel cooler at lunchtime on that day?",
      "They placed matching thermometers at the two spots at the same time. They kept both thermometers off the ground and waited ten minutes before reading them. The thermometer near the wall showed a higher temperature. If they had checked one spot early in the morning and the other at noon, the comparison would have been less useful.",
      "The students recorded the time, the sky conditions, and both readings. They suggested the tree spot for the bench, but their teacher asked them to repeat the test on other days. One test gave them a useful clue. More observations could help them decide whether that clue described a pattern."
    ],
    "question": "Why do the students measure both spots at the same time?",
    "options": [
      "To make the wall shady",
      "To make the comparison more useful",
      "To avoid writing any notes"
    ],
    "answer": 1,
    "hint": "What could change between morning and noon?",
    "explanation": "Using the same time helps them compare the two locations without also changing the time of day.",
    "evidenceOptions": [
      "Their question was simple.",
      "The students recorded the time, the sky conditions, and both readings.",
      "If they had checked one spot early in the morning and the other at noon, the comparison would have been less useful."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The sentence about morning and noon directly explains why the timing matters.",
    "evidenceExplanation": "The sentence about morning and noon directly explains why the timing matters.",
    "prompt": "Explain two choices that make the shade test useful. Link a testing step to its reason.",
    "frame": "The shade test compares… One useful step is… This matters because… Another step is…",
    "vocab": "comparison",
    "definition": "A look at how two or more things are alike or different.",
    "color": "green",
    "week": 1,
    "genre": "informational scenario",
    "talk": "Which detail would you record if you repeated the test? Explain why."
  },
  {
    "id": "g3-seed-travel",
    "title": "Two Ways to Travel",
    "subtitle": "Find one idea that fits both paragraphs.",
    "label": "Grade 3",
    "focus": "Main idea & details",
    "pattern": "Use context clues",
    "model": "Read the words around an unfamiliar word. In “The burr clings, or sticks, to fur,” sticks explains clings.",
    "words": [
      "clings",
      "drifts",
      "scatters"
    ],
    "wordQuestion": "In “A seed drifts slowly through the air,” what does drifts mean?",
    "wordOptions": [
      "Digs a deep hole",
      "Grows a new root",
      "Moves gently along"
    ],
    "wordAnswer": 2,
    "wordHint": "The sentence describes slow movement through air.",
    "text": [
      "A plant stays in one place, but its seeds can move away. Moving seeds may reach places with room to grow. Different kinds of seeds travel in different ways. Their shapes can help explain how they move. Two examples are light seeds carried by wind and hooked seeds carried on an animal’s fur.",
      "A dandelion seed has a light, fluffy part. When the wind lifts it, the seed can drift through the air before landing. The fluffy part does not work like an engine. The seed depends on moving air. Without a breeze, a seed may stay nearby rather than travel far from the plant.",
      "A burr has small hooks that can catch on fur or clothing. The burr may cling to a passing animal and fall off somewhere else. It does not need a fluffy parachute to move. Although these seeds use different helpers, both have features that can carry them away from the parent plant."
    ],
    "question": "Which main idea connects the whole reading?",
    "options": [
      "Different seed features help seeds move.",
      "Every seed needs an animal to travel.",
      "Wind always carries seeds a long distance."
    ],
    "answer": 0,
    "hint": "Find an idea that fits both the dandelion and the burr.",
    "explanation": "Both examples explain how a seed feature helps it travel.",
    "evidenceOptions": [
      "Without a breeze, a seed may stay nearby rather than travel far from the plant.",
      "Although these seeds use different helpers, both have features that can carry them away from the parent plant.",
      "The fluffy part does not work like an engine."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The final sentence connects both examples to seed features and movement.",
    "evidenceExplanation": "The final sentence connects both examples to seed features and movement.",
    "prompt": "Write a short explanation of two ways seeds travel. Include one detail about each kind and a closing idea.",
    "frame": "Seeds can move in different ways. For example… Another example… Both…",
    "vocab": "feature",
    "definition": "A noticeable part or quality of something.",
    "color": "green",
    "week": 1,
    "genre": "informational text",
    "talk": "Which two details best support the main idea? Explain how each one fits."
  },
  {
    "id": "g3-nature-report",
    "title": "A Better Nature Report",
    "subtitle": "Compare two notes before writing.",
    "label": "Grade 3",
    "focus": "Compare sources",
    "pattern": "Compound words",
    "model": "A compound word joins two words. Note + book makes notebook. Both parts help explain the meaning.",
    "words": [
      "notebook",
      "sunlight",
      "rainfall"
    ],
    "wordQuestion": "Which word joins rain and fall?",
    "wordOptions": [
      "rainy",
      "rainfall",
      "falling"
    ],
    "wordAnswer": 1,
    "wordHint": "Look for both complete smaller words.",
    "text": [
      "Note A — Monday: Our class visited the school garden at noon. The soil beside the path looked dry on top. Three children saw a butterfly near the purple flowers. We also noticed a full watering can beside the gate. We did not watch anyone use it, so we could not say when the garden had last been watered.",
      "Note B — Tuesday: We visited the same garden at noon, just after a light rain. The soil beside the path looked dark and wet on top. We saw two butterflies near the purple flowers. The watering can was still beside the gate. We wrote down what we saw rather than guessing how long the rain had lasted.",
      "For their report, the class looked for similarities and differences between the notes. They could compare the soil and the butterfly sightings. They could not use these two short visits to count every butterfly living nearby. A useful report would describe the visits clearly and keep larger questions open."
    ],
    "question": "Which statement is supported by both notes?",
    "options": [
      "The garden was watered by a child.",
      "Exactly five butterflies live in the garden.",
      "Butterflies were seen near the purple flowers."
    ],
    "answer": 2,
    "hint": "Look for something observed during both visits.",
    "explanation": "Each note reports butterflies near the same flowers, with different numbers seen.",
    "evidenceOptions": [
      "A full watering can was beside the gate on Monday.",
      "Monday: three children saw a butterfly near the purple flowers. Tuesday: two butterflies were seen near the purple flowers.",
      "The soil looked dark and wet on Tuesday."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The paired detail names a butterfly observation from each note; neither observation counts the entire population.",
    "evidenceExplanation": "The paired detail names a butterfly observation from each note; neither observation counts the entire population.",
    "prompt": "Write a nature report comparing Monday and Tuesday. Use one observation from each note and explain one thing the notes cannot prove.",
    "frame": "The two visits showed… On Monday… On Tuesday… These notes do not tell us…",
    "vocab": "supported",
    "definition": "Backed up by relevant information or details.",
    "color": "green",
    "week": 1,
    "genre": "paired observation notes",
    "talk": "Which is a safer report sentence: what was seen, or a guess about every butterfly? Explain."
  },
  {
    "id": "g3-bridge",
    "title": "The Wobbly Bridge",
    "subtitle": "Notice what a character does after a setback.",
    "label": "Grade 3",
    "focus": "Character response",
    "pattern": "The prefix un-",
    "model": "The prefix un- can mean not: steady → unsteady. Use the sentence to check.",
    "words": [
      "unsteady",
      "unfair",
      "unkind"
    ],
    "wordQuestion": "What does unsteady mean?",
    "wordOptions": [
      "Not steady",
      "Steady again",
      "Very steady"
    ],
    "wordAnswer": 0,
    "wordHint": "Think about a bridge that wobbles.",
    "text": [
      "Noor and Ben were building a bridge from paper for a classroom challenge. Their bridge had to cross a gap between two books and hold a small toy. Noor folded a wide strip and set it in place. When Ben put the toy in the middle, the paper sagged until the toy touched the table.",
      "“It failed,” Ben said, reaching for a fresh sheet. Noor held up a hand. “Wait. Let’s see which part bent.” She pointed to the center and sketched it in their notebook. Then she folded the long edges upward to make two narrow sides. Ben helped her place the bridge across the same gap.",
      "This time, the toy stayed above the table. Noor smiled, but she did not call the bridge perfect. “We changed one thing,” she said. “Now we know that fold helped.” Ben added a second sketch next to the first. Their notebook showed a problem and a change they could explain."
    ],
    "question": "How does Noor respond when the first bridge sags?",
    "options": [
      "She decides the task is impossible.",
      "She studies the problem and tries a change.",
      "She blames Ben for touching the toy."
    ],
    "answer": 1,
    "hint": "Watch what Noor does before using more paper.",
    "explanation": "Noor looks at the bent part, records it, and changes the folds.",
    "evidenceOptions": [
      "Noor and Ben were building a bridge from paper.",
      "Ben put the toy in the middle.",
      "She pointed to the center and sketched it in their notebook. Then she folded the long edges upward to make two narrow sides."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "These actions show Noor examining the problem and making a specific change.",
    "evidenceExplanation": "These actions show Noor examining the problem and making a specific change.",
    "prompt": "Explain what Noor’s response reveals about her. Use an action from the story as evidence.",
    "frame": "Noor is… When the bridge… She… This action shows…",
    "vocab": "setback",
    "definition": "A problem that slows progress without necessarily ending it.",
    "color": "blue",
    "week": 2,
    "genre": "fiction",
    "talk": "What might Ben learn from Noor? Support your idea with an action from the story."
  },
  {
    "id": "g3-audition",
    "title": "A Quiet Kind of Brave",
    "subtitle": "Use a character’s actions to make an inference.",
    "label": "Grade 3",
    "focus": "Inference & evidence",
    "pattern": "The suffix -less",
    "model": "The suffix -less means without: speech + less → speechless.",
    "words": [
      "speechless",
      "hopeless",
      "fearless"
    ],
    "wordQuestion": "What does fearless mean?",
    "wordOptions": [
      "Full of fear",
      "Afraid again",
      "Without fear"
    ],
    "wordAnswer": 2,
    "wordHint": "Use the meaning of -less.",
    "text": [
      "The school play needed someone to introduce the first scene. Luis knew the lines, but his voice grew quiet whenever he stood in front of the class. At lunch, his friend Jo offered to practice with him in an empty corner of the library. Luis read the introduction twice, first to a chair and then to Jo.",
      "At the audition, Luis held his paper with both hands. The edges shook a little. He looked toward the back of the room and imagined Jo listening there. His first word was soft, so he took a breath and began the sentence again. This time, the teacher could hear every word.",
      "Luis did not know yet who would get the part. As he left the room, he told Jo, “I was nervous the whole time.” Jo grinned. “You still tried.” Luis carefully folded his paper and put it in his pocket. He wanted to remember the moment he spoke even while feeling afraid."
    ],
    "question": "What can you infer about Luis at the audition?",
    "options": [
      "He acts bravely even though he feels nervous.",
      "He feels no fear at all.",
      "He already knows he will get the part."
    ],
    "answer": 0,
    "hint": "Bravery can include trying while afraid.",
    "explanation": "His shaking paper and nervous feelings do not stop him from speaking.",
    "evidenceOptions": [
      "The school play needed someone to introduce the first scene.",
      "The edges shook a little. His first word was soft, so he took a breath and began the sentence again.",
      "Luis carefully folded his paper and put it in his pocket."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "Shaking shows nervousness; beginning again shows he continues despite it.",
    "evidenceExplanation": "Shaking shows nervousness; beginning again shows he continues despite it.",
    "prompt": "Explain why Luis can be called brave. Include one sign of nervousness and one action that supports your opinion.",
    "frame": "Luis shows bravery when… Although… He still… This shows…",
    "vocab": "audition",
    "definition": "A short performance used to try out for a part.",
    "color": "blue",
    "week": 2,
    "genre": "fiction",
    "talk": "Does being brave always mean feeling fearless? Use Luis’s experience to explain."
  },
  {
    "id": "g3-two-voices",
    "title": "One Game, Two Views",
    "subtitle": "Compare how two narrators describe an event.",
    "label": "Grade 3",
    "focus": "Point of view",
    "pattern": "Words with more than one meaning",
    "model": "A familiar word can have different meanings. In “a fair rule,” fair means reasonable and equal, not a festival.",
    "words": [
      "fair",
      "light",
      "match"
    ],
    "wordQuestion": "In “We need a fair rule,” what does fair mean?",
    "wordOptions": [
      "A place with rides",
      "Reasonable and equal",
      "Pale in color"
    ],
    "wordAnswer": 1,
    "wordHint": "Use the word rule as a clue.",
    "text": [
      "Tessa’s account: I drew a chalk maze on the playground and invited everyone to try it. I knew where each turn went because I had planned it. When Amir took a wrong turn, I called out the answer. I thought I was helping. He stopped and said he wanted to finish by himself. I felt surprised because I had meant to be kind.",
      "Amir’s account: The maze looked exciting. I wanted to see whether I could find the way through it. At the first difficult turn, Tessa shouted which path to take. I felt disappointed. Solving the puzzle was the part I liked best. I asked her to wait until I requested a hint. Then I went back to the start.",
      "After the game, Tessa and Amir talked beside the chalk box. They agreed to ask, “Would you like a hint?” before giving one. The maze itself did not change, but their rule did. Both children wanted the game to be enjoyable; they had different ideas about what kind of help made it fun."
    ],
    "question": "How do Tessa and Amir first view the shouted answer differently?",
    "options": [
      "Both think it ruins every game.",
      "Amir thinks it helps Tessa draw.",
      "Tessa sees help; Amir loses a chance to solve it."
    ],
    "answer": 2,
    "hint": "Compare the reason each child gives.",
    "explanation": "Tessa intends to help, while Amir values figuring out the puzzle himself.",
    "evidenceOptions": [
      "Tessa thought she was helping. Amir liked solving the puzzle best.",
      "Tessa had a chalk box. Amir went back to the start.",
      "Both children were on the playground."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "These details explain the two different reactions to the same answer.",
    "evidenceExplanation": "These details explain the two different reactions to the same answer.",
    "prompt": "Compare Tessa’s and Amir’s views. Include a detail from each account and explain why their new rule helps.",
    "frame": "Tessa thinks… In contrast, Amir… Their new rule… It helps because…",
    "vocab": "account",
    "definition": "A description of an event from someone’s point of view.",
    "color": "blue",
    "week": 2,
    "genre": "paired fictional accounts",
    "talk": "How could asking before giving help change a conversation at home?"
  },
  {
    "id": "g3-ending",
    "title": "The Missing Page",
    "subtitle": "Use earlier events to explain an ending.",
    "label": "Grade 3",
    "focus": "Sequence & character change",
    "pattern": "The suffix -ly",
    "model": "Adding -ly often tells how an action happens: careful → carefully.",
    "words": [
      "carefully",
      "quietly",
      "slowly"
    ],
    "wordQuestion": "Which word tells how someone reads?",
    "wordOptions": [
      "reader",
      "reread",
      "carefully"
    ],
    "wordAnswer": 2,
    "wordHint": "Try the sentence: She reads ___.",
    "text": [
      "Jin promised to bring the class storybook to the family reading night. On the bus, he opened his bag to check it. The cover was there, but the final page had slipped out of its loose rings. Jin remembered spreading the pages on his bedroom floor that morning. He stared at the blank space where the ending should have been.",
      "At school, Jin first hoped no one would notice. Then he thought about the families waiting to hear the story. He told his teacher what had happened. Together, they asked the class to recall the missing events. Jin wrote their ideas on a fresh page, checking the order with two classmates who knew the story well.",
      "Before the reading began, Jin explained that the last page was a class reconstruction. He thanked the children who had helped. Afterward, he clipped all the pages together. The book was ready to take home, and Jin had learned that admitting a mistake could be the first step toward repairing it."
    ],
    "question": "How does Jin change during the story?",
    "options": [
      "He goes from knowing the ending to forgetting every event.",
      "He goes from hiding a problem to explaining and repairing it.",
      "He decides books are not useful."
    ],
    "answer": 1,
    "hint": "Compare his first hope with what he tells the teacher and families.",
    "explanation": "Jin initially wants the missing page to go unnoticed, then takes responsibility.",
    "evidenceOptions": [
      "Jin rode a bus and later went home.",
      "The book had loose rings and a cover.",
      "Jin first hoped no one would notice. Before the reading began, Jin explained that the last page was a class reconstruction."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The beginning and ending details show the change from hiding to explaining.",
    "evidenceExplanation": "The beginning and ending details show the change from hiding to explaining.",
    "prompt": "Write a paragraph explaining Jin’s change. Organize the beginning, turning point, and ending in order.",
    "frame": "At first, Jin… Then… By the end… His change shows…",
    "vocab": "reconstruction",
    "definition": "Something made again using available information about the original.",
    "color": "blue",
    "week": 2,
    "genre": "fiction",
    "talk": "Which choice is the turning point? Explain why the ending depends on it."
  },
  {
    "id": "g3-signs",
    "title": "Signs That Welcome",
    "subtitle": "Identify a problem and a useful design.",
    "label": "Grade 3",
    "focus": "Problem & solution",
    "pattern": "The prefix mis-",
    "model": "The prefix mis- can mean wrongly: read → misread.",
    "words": [
      "misread",
      "misplace",
      "misspell"
    ],
    "wordQuestion": "What does misread mean?",
    "wordOptions": [
      "Read incorrectly",
      "Read a second time",
      "Read very quietly"
    ],
    "wordAnswer": 0,
    "wordHint": "Think of reading a sign the wrong way.",
    "text": [
      "At the community center, visitors often stopped at the hallway corner. One small sign said “Rooms,” with an arrow pointing forward. The art room was actually to the left, and the music room was to the right. A volunteer named Eva noticed families walking past the corner, then returning to ask for directions.",
      "Eva’s team made two new signs. Each sign named a room and used a large arrow. They placed the signs at the corner where visitors had to choose a direction. They also asked two people who had never visited the center to try finding the art room. Both reached it without asking for help.",
      "The team kept a note of questions visitors still asked. Clearer signs did not solve every problem: one visitor needed to know whether the room had steps. Eva added that question to a list for the center manager. Testing the signs helped the team improve one part of the welcome while noticing another need."
    ],
    "question": "Which change most directly solves the original direction problem?",
    "options": [
      "Using smaller letters",
      "Naming each room with an arrow at the corner",
      "Removing all hallway signs"
    ],
    "answer": 1,
    "hint": "What information was missing when people had to choose?",
    "explanation": "Room names and arrows give visitors the needed information at the decision point.",
    "evidenceOptions": [
      "A volunteer named Eva noticed families.",
      "One visitor needed to know whether the room had steps.",
      "Each sign named a room and used a large arrow. They placed the signs at the corner where visitors had to choose a direction."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "These details show both the clearer information and its useful location.",
    "evidenceExplanation": "These details show both the clearer information and its useful location.",
    "prompt": "Explain the original problem and how the new signs address it. Include a detail about testing the solution.",
    "frame": "Visitors had trouble because… The team changed… When they tested… This suggests…",
    "vocab": "volunteer",
    "definition": "Someone who chooses to help without being paid for that work.",
    "color": "amber",
    "week": 3,
    "genre": "informational scenario",
    "talk": "How did testing reveal what worked and what still needed attention?"
  },
  {
    "id": "g3-book-box",
    "title": "A Book Box Proposal",
    "subtitle": "Separate an opinion from its reasons.",
    "label": "Grade 3",
    "focus": "Opinion & reasons",
    "pattern": "The suffix -able",
    "model": "The suffix -able can mean able to be: read → readable.",
    "words": [
      "readable",
      "washable",
      "reusable"
    ],
    "wordQuestion": "What does washable mean?",
    "wordOptions": [
      "Already washed twice",
      "Full of water",
      "Able to be washed"
    ],
    "wordAnswer": 2,
    "wordHint": "Combine wash with the meaning of -able.",
    "text": [
      "Dear Community Center Team, I think we should place a book-sharing box inside the front entrance. Visitors could borrow a book or leave one for someone else. The box would give families something to read while they wait for classes. It could also help neighbors discover stories they might not find on their own.",
      "I suggest using the shelf beside the welcome desk. A volunteer could check the books each Friday and remove damaged copies. The shelf is indoors, so books would stay out of the rain. We would need a clear sign explaining that returning or sharing books helps keep the box useful for everyone.",
      "Some people may worry that the box will become untidy. That is a reasonable concern. We could try the idea for one month and ask the desk volunteers what they notice. If the shelf blocks the entrance or takes too much work, we could change the plan. A short trial would let us learn before making it permanent. Sincerely, Rowan"
    ],
    "question": "What is Rowan’s main opinion?",
    "options": [
      "The center should try an indoor book-sharing box.",
      "Every visitor must bring a new book.",
      "All damaged books are useful."
    ],
    "answer": 0,
    "hint": "Find the proposal the other sentences support.",
    "explanation": "Rowan proposes the box and gives reading opportunities as reasons to try it.",
    "evidenceOptions": [
      "A volunteer could check the books each Friday.",
      "The box would give families something to read while they wait for classes.",
      "Some people may worry that the box will become untidy."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The waiting-time reading opportunity is a reason supporting the proposal; the other details describe upkeep and a concern.",
    "evidenceExplanation": "The waiting-time reading opportunity is a reason supporting the proposal; the other details describe upkeep and a concern.",
    "prompt": "Write your opinion about trying Rowan’s proposal. Give two reasons, using at least one detail from the letter, and finish with a recommendation.",
    "frame": "I think the center should… One reason is… Also… Therefore…",
    "vocab": "proposal",
    "definition": "A suggested plan offered for others to consider.",
    "color": "amber",
    "week": 3,
    "genre": "opinion letter",
    "talk": "Which reason is strongest? Can someone disagree with the opinion while understanding that reason?"
  },
  {
    "id": "g3-survey",
    "title": "What the Survey Says",
    "subtitle": "Read numbers carefully without claiming too much.",
    "label": "Grade 3",
    "focus": "Evidence & limits",
    "pattern": "Use a definition clue",
    "model": "A writer may define a word nearby: “A survey, a set of questions, helped the club learn.”",
    "words": [
      "survey",
      "response",
      "sample"
    ],
    "wordQuestion": "What does survey mean in the model sentence?",
    "wordOptions": [
      "A shelf for books",
      "A set of questions",
      "A type of garden"
    ],
    "wordAnswer": 1,
    "wordHint": "Read the words between the commas.",
    "text": [
      "The garden club asked ten children at its meeting which project they preferred. Six chose a reading corner, three chose a flower bed, and one chose a tool shelf. Everyone chose just one option. Mina wrote the results on a poster so the club could compare the choices without relying on memory.",
      "“All children want a reading corner,” said Leo. Mina pointed to the numbers. “Six of these ten chose it,” she replied. “That is the most popular choice in our group, but we did not ask every child.” The poster also showed that four children in the meeting had selected something else.",
      "The club decided to share the results with another class and invite more responses. Before collecting them, Mina checked that the question and the three choices would stay the same. The first survey helped the club notice a preference in one group. A larger set of responses could give them more information for planning."
    ],
    "question": "Which conclusion do the results support?",
    "options": [
      "Every child wants a reading corner.",
      "No child wants a flower bed.",
      "The reading corner is the most popular choice among these ten children."
    ],
    "answer": 2,
    "hint": "Keep the conclusion limited to the people who answered.",
    "explanation": "Six is the largest group, but only ten children were asked.",
    "evidenceOptions": [
      "Six chose a reading corner, three chose a flower bed, and one chose a tool shelf.",
      "Mina wrote the results on a poster.",
      "The club decided to share the results with another class."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "The numbers show which choice leads within the surveyed group.",
    "evidenceExplanation": "The numbers show which choice leads within the surveyed group.",
    "prompt": "Explain what the survey shows and what it cannot tell us. Include the numbers that support your explanation.",
    "frame": "Among the ten children… The results show… However… To learn more, the club could…",
    "vocab": "response",
    "definition": "An answer to a question or a reaction to something.",
    "color": "amber",
    "week": 3,
    "genre": "informational scenario",
    "talk": "Why does “among these ten children” matter in the conclusion?"
  },
  {
    "id": "g3-community-plan",
    "title": "Choose a Community Plan",
    "subtitle": "Compare two proposals using a shared goal.",
    "label": "Grade 3",
    "focus": "Compare & recommend",
    "pattern": "Link ideas with because",
    "model": "Because connects an idea to its reason. Check which reason actually supports the idea.",
    "words": [
      "because",
      "also",
      "therefore"
    ],
    "wordQuestion": "Which sentence gives a reason for a plan?",
    "wordOptions": [
      "We chose the shelf because it fits the small room.",
      "We chose the shelf and painted it.",
      "We chose the shelf yesterday."
    ],
    "wordAnswer": 0,
    "wordHint": "Look for a cause or explanation.",
    "text": [
      "Plan A — A reading rug: Put a washable rug in the center’s small waiting room. Children could sit together and look at picture books. The rug would be easy to roll up for cleaning. However, it would use most of the open floor, and there would be less room for people moving between the entrance and the desk.",
      "Plan B — A wall book pocket: Hang fabric pockets for books on the waiting-room wall. Families could take a book to the chairs already there. The pockets would leave the floor open. They would hold fewer books than a large shelf, so a volunteer would need to choose a small collection and change it regularly.",
      "The center’s team wanted more reading opportunities while keeping the walkway clear. They had money for only one plan this month. Neither plan met every possible need. The team would have to connect the details of each proposal to its main goal, then explain why the advantages of one plan mattered more for this room."
    ],
    "question": "Which plan best matches the team’s goal of reading access and a clear walkway?",
    "options": [
      "Plan A, because it uses most of the floor",
      "Plan B, because families can get books while the floor stays open",
      "Neither plan lets people read"
    ],
    "answer": 1,
    "hint": "Use both parts of the goal to compare the plans.",
    "explanation": "The wall pockets provide books without using the walkway.",
    "evidenceOptions": [
      "The rug would be easy to roll up for cleaning.",
      "The team had money for only one plan.",
      "Families could take a book to the chairs already there. The pockets would leave the floor open."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "These two details address reading access and open floor space together.",
    "evidenceExplanation": "These two details address reading access and open floor space together.",
    "prompt": "Recommend one plan for this waiting room. Use a detail from each plan, explain your choice, and mention a trade-off.",
    "frame": "For this room, I recommend… Plan A… Plan B… Although…",
    "vocab": "trade-off",
    "definition": "Giving up one benefit to gain another when choosing.",
    "color": "amber",
    "week": 3,
    "genre": "paired proposals",
    "talk": "Could Plan A work better in a different room? Explain which condition would need to change."
  },
  {
    "id": "g3-repair",
    "title": "Repair Before Replacing",
    "subtitle": "Follow a process and connect steps.",
    "label": "Grade 3",
    "focus": "Sequence & reasons",
    "pattern": "Read longer words in parts",
    "model": "Look for a familiar beginning or ending: replace + ment → replacement. Then blend and check the whole word.",
    "words": [
      "replacement",
      "agreement",
      "movement"
    ],
    "wordQuestion": "Which smaller word helps explain replacement?",
    "wordOptions": [
      "plant",
      "cement",
      "replace"
    ],
    "wordAnswer": 2,
    "wordHint": "Remove the ending -ment.",
    "text": [
      "The class supply box had a torn corner. Each time someone lifted it, pencils slipped through the opening. Omar wanted to throw it away, but the teacher suggested checking whether a repair would work. They emptied the box onto a tray first so nothing would get lost while they handled the damaged corner.",
      "Next, they inspected the cardboard. Most of it was firm, and only one corner had torn. With the teacher’s help, they reinforced that corner with another piece of cardboard and tape. After the repair, they put a few pencils back and lifted the box gently over the tray. Nothing fell out during the test.",
      "The class returned the rest of the supplies and labeled the box “Check on Friday.” A repair that worked once might still need attention later. Omar made a note describing the tear, the repair, and the test. His note would help the class decide whether the box remained useful or needed a different solution."
    ],
    "question": "Why does the class test the box over a tray?",
    "options": [
      "To check the repair while keeping any falling pencils together",
      "To hide the repaired corner",
      "To make the pencils longer"
    ],
    "answer": 0,
    "hint": "Connect the tray to the earlier problem of falling pencils.",
    "explanation": "The tray catches anything that might fall while they check whether the repair holds.",
    "evidenceOptions": [
      "Most of the cardboard was firm.",
      "They labeled the box “Check on Friday.”",
      "They put a few pencils back and lifted the box gently over the tray. Nothing fell out during the test."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The test repeats the lifting that caused the problem, with a tray underneath.",
    "evidenceExplanation": "The test repeats the lifting that caused the problem, with a tray underneath.",
    "prompt": "Explain the repair process in order and give the reason for one step. End with a useful reminder.",
    "frame": "First… Next… Then… This step matters because… Finally…",
    "vocab": "reinforce",
    "definition": "To make something stronger by adding support.",
    "color": "green",
    "week": 4,
    "genre": "informational scenario",
    "talk": "Why did the class plan another check instead of assuming the repair would last forever?"
  },
  {
    "id": "g3-two-sources",
    "title": "Two Notes About Lunch",
    "subtitle": "Connect information from two sources.",
    "label": "Grade 3",
    "focus": "Combine relevant details",
    "pattern": "Use contrast clues",
    "model": "The word but can signal a contrast: “The empty bin was light, but the full bin was heavy.”",
    "words": [
      "light",
      "heavy",
      "empty"
    ],
    "wordQuestion": "In the model, what does light mean?",
    "wordOptions": [
      "Brightly colored",
      "Not heavy",
      "A lamp"
    ],
    "wordAnswer": 1,
    "wordHint": "Use the contrasting word heavy.",
    "text": [
      "Source A — Lunch helper’s note: On Monday, our class opened a basket of napkins before lunch. Several children took a large stack without checking how many they needed. After lunch, the helper found many clean napkins on the tables and floor. Some could no longer be used because they had fallen where people walked.",
      "Source B — Class discussion notes: Children said the napkin basket was placed where everyone hurried past on the way to a seat. One child suggested moving it beside the water station. Another suggested a small sign: “Take one first. Come back if you need another.” The class wanted an easy way to get more without taking a stack at the start.",
      "The teacher asked the class to propose a change using both sources. Source A described what had happened. Source B offered possible reasons and suggestions. Neither source proved that a new sign would solve the problem. The class could try a change, observe the result, and compare its next notes with Monday’s."
    ],
    "question": "How do the two sources work together?",
    "options": [
      "Both prove a sign always solves waste.",
      "Both tell only where to buy napkins.",
      "One describes a problem; the other suggests changes to try."
    ],
    "answer": 2,
    "hint": "Compare the job of each note.",
    "explanation": "The first records wasted napkins, and the second supplies possible ways to change the routine.",
    "evidenceOptions": [
      "Source A reports clean napkins left behind. Source B suggests taking one first and returning if needed.",
      "Source A mentions Monday. Source B mentions a water station.",
      "Source A uses the word basket. Source B uses the word class."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "The paired details connect the observed problem with a proposed response.",
    "evidenceExplanation": "The paired details connect the observed problem with a proposed response.",
    "prompt": "Use both sources to recommend a small change. Explain the problem, your proposal, and how the class could check whether it helps.",
    "frame": "Source A shows… Source B suggests… I recommend… To check the idea…",
    "vocab": "source",
    "definition": "A place where information comes from, such as a note, book, or interview.",
    "color": "green",
    "week": 4,
    "genre": "paired fictional sources",
    "talk": "Which part of your recommendation comes from each source? Point to the details."
  },
  {
    "id": "g3-revise",
    "title": "The Revision Choice",
    "subtitle": "Choose details that support the main idea.",
    "label": "Grade 3",
    "focus": "Relevant evidence & revision",
    "pattern": "The prefix pre-",
    "model": "The prefix pre- can mean before: preview means to look at something before the main viewing.",
    "words": [
      "preview",
      "preheat",
      "prepay"
    ],
    "wordQuestion": "What does preview mean?",
    "wordOptions": [
      "Look at something beforehand",
      "Look again after finishing",
      "Avoid looking at something"
    ],
    "wordAnswer": 0,
    "wordHint": "Use the meaning of pre-.",
    "text": [
      "Asha wrote a paragraph asking for a quiet reading time after lunch. Her first sentence stated her opinion clearly. Then she added three details: the classroom curtains were blue, several children wanted time to finish their library books, and a short quiet routine could help the class settle after the busy lunchroom.",
      "When her partner read the draft, he pointed to the sentence about the curtains. “Does this explain why we should have reading time?” he asked. Asha liked the sentence, but she could not connect the color to her request. She crossed it out and added a clearer plan: ten minutes of reading, followed by the usual afternoon lesson.",
      "Finally, Asha reread the paragraph aloud. She used “also” to link her two reasons and added a closing sentence asking the class to try the routine for a week. Her paragraph was not better because every sentence was longer. It was better because the details now worked together to explain her idea."
    ],
    "question": "Why does Asha remove the sentence about blue curtains?",
    "options": [
      "She dislikes blue.",
      "It does not support her request for reading time.",
      "Every paragraph must have exactly three sentences."
    ],
    "answer": 1,
    "hint": "A true detail can still be unrelated to the main idea.",
    "explanation": "The curtain color does not explain why the class should try reading time.",
    "evidenceOptions": [
      "Asha reread the paragraph aloud.",
      "She could not connect the color to her request.",
      "Her first sentence stated her opinion clearly."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "This detail directly explains why the curtain sentence does not belong.",
    "evidenceExplanation": "This detail directly explains why the curtain sentence does not belong.",
    "prompt": "Explain one revision that improves Asha’s paragraph. Use a detail from the story, then reread your own paragraph and remove anything unrelated.",
    "frame": "One useful revision is… In the story… This improves the paragraph because… When I revise, I will…",
    "vocab": "relevant",
    "definition": "Closely connected to the idea or question being discussed.",
    "color": "green",
    "week": 4,
    "genre": "fiction",
    "talk": "Find one sentence in your writing that does the most work. What makes it relevant?"
  },
  {
    "id": "g3-final-report",
    "title": "The Reading Corner Report",
    "subtitle": "Turn observations into a clear recommendation.",
    "label": "Grade 3",
    "focus": "Evidence-based paragraph",
    "pattern": "Choose a linking word",
    "model": "Use however for a contrast and therefore for a result. Pick the link that matches the ideas.",
    "words": [
      "however",
      "therefore",
      "also"
    ],
    "wordQuestion": "“The corner was popular. ___, some children could not find a seat.” Which word fits the contrast?",
    "wordOptions": [
      "Therefore",
      "Because",
      "However"
    ],
    "wordAnswer": 2,
    "wordHint": "The second idea introduces a problem despite the first idea.",
    "text": [
      "After a one-week reading-corner trial, the class collected its notes. On Monday, four children used the corner and all found seats. On Wednesday, seven wanted to use it, but there were only four chairs. Three children took books to other tables. On Friday, five children asked to use the corner, and one waited for a seat.",
      "The teacher also collected comments. Several readers liked having books in one easy-to-find place. Two children said the walkway felt crowded when chairs were pulled back. The class measured no reading improvement during the trial; its notes described use of the space and comments about comfort. Those notes could support a room-planning decision, but not every possible claim.",
      "The class considered keeping the book basket and letting readers use any available table. Another idea was to move the chairs farther from the walkway. Their final report needed a clear recommendation, details from the notes, an explanation of how those details supported the plan, and a closing thought about what to check next."
    ],
    "question": "Which recommendation is supported by the trial notes?",
    "options": [
      "Keep books easy to find and allow other tables to reduce crowding.",
      "Claim the corner has already improved everyone’s reading.",
      "Remove all books because nobody used them."
    ],
    "answer": 0,
    "hint": "Use the evidence about seats, the walkway, and access to books.",
    "explanation": "The notes support keeping easy book access while giving readers more places to sit.",
    "evidenceOptions": [
      "The class measured no reading improvement during the trial.",
      "On Wednesday, three children took books to other tables. Several readers liked having books in one easy-to-find place.",
      "The class collected its notes after one week."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "These details support both parts of the recommendation: accessible books and flexible seating.",
    "evidenceExplanation": "These details support both parts of the recommendation: accessible books and flexible seating.",
    "prompt": "Write your final recommendation for the reading corner. Include a clear topic sentence, two details from the notes, an explanation, and a closing next step. Aim for 3–5 connected sentences.",
    "frame": "I recommend… The notes show… They also show… This plan would help because… Next, the class should check…",
    "vocab": "recommendation",
    "definition": "Advice about a useful choice, supported by reasons.",
    "color": "green",
    "week": 4,
    "genre": "informational scenario",
    "talk": "Read your paragraph to someone. Ask them to name your recommendation and the evidence that supports it."
  }
];
export const gradeThreeUnits = [
  {
    "week": 1,
    "title": "Nature Investigators",
    "goal": "Separate observations from guesses, find main ideas, and compare notes.",
    "project": "Write a nature report using evidence from two visits.",
    "family": "Ask: What did the writer observe? What remains a question? Help your reader point to a supporting detail."
  },
  {
    "week": 2,
    "title": "Character Detectives",
    "goal": "Explain character choices and compare viewpoints using story clues.",
    "project": "Explain how Jin changes from the beginning to the end of The Missing Page.",
    "family": "Ask which action supports a character description. Accept a different idea when the child can explain a relevant clue."
  },
  {
    "week": 3,
    "title": "Community Designers",
    "goal": "Connect problems, reasons, and solutions; recommend a plan.",
    "project": "Compare two waiting-room plans and explain a recommendation with a trade-off.",
    "family": "Read an opinion together. Separate the writer’s claim from the reasons that support it."
  },
  {
    "week": 4,
    "title": "Ideas into Action",
    "goal": "Combine relevant details, revise a paragraph, and explain a recommendation.",
    "project": "Create a reading-corner report with evidence and a practical next step.",
    "family": "Listen to the final paragraph. Ask for a clear idea, relevant details, connecting words, and a closing thought."
  }
];
export const gradeFourLessons = [
  {
    "id": "g4-map-room",
    "title": "The Map Room",
    "subtitle": "What can a pause and a notebook reveal?",
    "label": "The Map Room",
    "focus": "Inference from actions",
    "pattern": "The prefix dis-",
    "model": "The prefix dis- can mean not or the opposite of: agree → disagree. Check the whole word in its sentence.",
    "words": [
      "disagree",
      "dislike",
      "disconnect"
    ],
    "wordQuestion": "What does disagree mean?",
    "wordOptions": [
      "Agree again",
      "Have a different opinion",
      "Speak very softly"
    ],
    "wordAnswer": 1,
    "wordHint": "Think about two people who do not share an opinion.",
    "text": [
      "Lena arrived early for her first shift at the town history display. Her job was to help visitors find places on a large map. She had practiced pointing out the station and the market, but the narrow streets near the river still confused her. She placed her notebook beside the map and opened it to a page covered with small arrows.",
      "When a visitor asked where the old mill had stood, Lena began to point toward the market. Then she paused. She followed a blue line on the map with her finger and glanced at her notes. “Let me check one detail,” she said. She asked Mr. Ortiz, another volunteer, to look with her.",
      "Together, they found the mill on a bend beyond the station. Lena showed the visitor the location and explained which line marked the river. After the visitor left, she added a small label to her sketch. She did not close the notebook or move it out of sight.",
      "Later, Lena answered a question about the market without help. When a different visitor asked about a street she did not know, she checked again. By closing time, the notebook had several new labels. Lena was still learning the map, but she had found a way to give visitors information they could rely on."
    ],
    "question": "What can you infer about Lena?",
    "options": [
      "She values accurate answers more than appearing to know everything.",
      "She wants visitors to stop asking questions.",
      "She no longer needs to learn the map."
    ],
    "answer": 0,
    "hint": "Notice what she does when an answer is uncertain.",
    "explanation": "Lena checks uncertain information and adds what she learns to her notes.",
    "evidenceOptions": [
      "She arrived early and opened her notebook.",
      "She checked the mill location with another volunteer and added a label afterward.",
      "The map included a station, a market, and a river."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "Checking before answering and improving her notes both show care for accuracy.",
    "evidenceExplanation": "Checking before answering and improving her notes both show care for accuracy.",
    "reasoningQuestion": "Why is the checking-and-labeling detail stronger than the list of places?",
    "reasoningOptions": [
      "It is longer, so it must be more reliable.",
      "It describes Lena’s choices; the list only describes the map.",
      "It proves she already knew every location."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "An inference about a person needs evidence of that person’s words or actions.",
    "reasoningExplanation": "An inference about a person needs evidence of that person’s words or actions.",
    "prompt": "Explain what Lena’s actions reveal about her. Use two details and explain how each supports your inference. Organize your response in two short paragraphs.",
    "frame": "Paragraph 1: I infer that Lena… One clue is… This suggests…\n\nParagraph 2: Another clue is… Together, these actions show…",
    "vocab": "inference",
    "definition": "An idea you form by connecting text clues with what you already understand.",
    "color": "green",
    "week": 1,
    "genre": "fiction",
    "talk": "Could arriving early alone prove that Lena cares about accuracy? Explain why her later actions give stronger support."
  },
  {
    "id": "g4-rehearsal",
    "title": "The Unexpected Stage",
    "subtitle": "A smaller room calls for a different plan.",
    "label": "The Unexpected Stage",
    "focus": "Setting and character response",
    "pattern": "The root port",
    "model": "The Latin root port means carry. In transport, the root helps you think about carrying something from one place to another.",
    "words": [
      "transport",
      "portable",
      "import"
    ],
    "wordQuestion": "What does portable suggest about a stage?",
    "wordOptions": [
      "It has bright lights",
      "It is built underground",
      "It can be carried or moved"
    ],
    "wordAnswer": 2,
    "wordHint": "Connect port with carry.",
    "text": [
      "The drama club had rehearsed a scene on the wide outdoor stage for two weeks. There was room for a pretend cart, three chairs, and a long entrance from the left. On performance day, steady rain moved the show into a small meeting room. The actors stared at the narrow space between the first row of seats and the wall.",
      "Milo immediately tried to push the cart into the room. It blocked the doorway. “We cannot tell the story without it,” he said. His partner, Cora, asked what the cart helped the audience understand. Milo explained that their characters were delivering supplies to a village. Cora held up an empty basket. “Could this show the delivery?”",
      "They tried the scene with the basket and moved the chairs closer together. Milo shortened his entrance so he would not bump into the audience. Before the performance, the actors explained that the setting had changed. During the scene, Cora carried the basket from one character to another while Milo named the supplies inside.",
      "The audience followed the delivery without seeing the cart. Afterward, Milo admitted that he had confused the object with its job in the story. The rain had created a problem, but the smaller room had also pushed the actors to think about which details were necessary and which could change."
    ],
    "question": "How does the new setting affect the actors?",
    "options": [
      "It makes the story impossible to perform.",
      "It leads them to change props and movements while keeping the story clear.",
      "It lets them use a longer entrance."
    ],
    "answer": 1,
    "hint": "Connect the size of the room with the changes they make.",
    "explanation": "The actors adapt how they show the delivery to fit the smaller space.",
    "evidenceOptions": [
      "It rained on performance day.",
      "The club had practiced for two weeks.",
      "The cart blocked the doorway; the actors used a basket and shortened the entrance."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The obstacle and the changes together connect the setting to the actors’ response.",
    "evidenceExplanation": "The obstacle and the changes together connect the setting to the actors’ response.",
    "reasoningQuestion": "Why does the cart-and-basket detail explain more than the rain detail alone?",
    "reasoningOptions": [
      "It connects the space problem to a specific response.",
      "It proves all outdoor stages are too large.",
      "It tells exactly how long the rain lasted."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "A cause and a response together explain how the setting changes the action.",
    "reasoningExplanation": "A cause and a response together explain how the setting changes the action.",
    "prompt": "Explain how the setting affects the performance. In one paragraph describe the problem; in another explain the adaptations and their result.",
    "frame": "Paragraph 1: The smaller room causes… For example…\n\nParagraph 2: The actors respond by… This works because…",
    "vocab": "adaptation",
    "definition": "A change made to fit a new condition or need.",
    "color": "green",
    "week": 1,
    "genre": "fiction",
    "talk": "Which part of the delivery scene had to stay clear? Which parts could change?"
  },
  {
    "id": "g4-credit",
    "title": "The Name on the Poster",
    "subtitle": "Look beyond the drawing to the teamwork.",
    "label": "The Name on the Poster",
    "focus": "Theme supported by events",
    "pattern": "The suffix -tion",
    "model": "The ending -tion often forms a noun naming an action or process: collect → collection. Spelling may change when endings are added.",
    "words": [
      "collection",
      "discussion",
      "invention"
    ],
    "wordQuestion": "Which word names the result of collecting objects?",
    "wordOptions": [
      "collecting quickly",
      "collector",
      "collection"
    ],
    "wordAnswer": 2,
    "wordHint": "Look for the noun formed from collect.",
    "text": [
      "Ari designed the title for the class invention fair poster. He made the letters look like tiny gears and drew a bright border around them. When the teacher praised the finished poster, Ari smiled. Then he noticed that his name was the only name written along the bottom, although several classmates had worked on it.",
      "Nia had checked the date and location. Pavel had written a short invitation that families could understand. Elise had changed the arrangement so the title did not cover the map. Ari remembered how often he had asked them to look at a new version. Without their changes, the poster would have looked different and included mistakes.",
      "At first, Ari considered leaving the name alone because the drawing had been his idea. Instead, he brought the poster back to the table. He replaced his name with “Created by the invention fair team” and added a note on the back describing each person’s work. Nia read the note and pointed out a correction: Pavel had also checked the spelling.",
      "Ari made the correction before hanging the poster. When visitors asked who had created it, he described the team’s different jobs. He still felt proud of his lettering. Sharing the credit did not erase his contribution; it helped him describe the whole project more honestly."
    ],
    "question": "Which theme is best supported by the story?",
    "options": [
      "A project looks better when one person controls everything.",
      "Recognizing others’ contributions can make shared success more honest.",
      "Artists should never write their names on their work."
    ],
    "answer": 1,
    "hint": "Consider what Ari learns about the work behind the poster.",
    "explanation": "Ari keeps pride in his own work while acknowledging the contributions that made the project possible.",
    "evidenceOptions": [
      "Ari replaces the single name with the team’s name and describes everyone’s work to visitors.",
      "The poster title looks like gears.",
      "The fair has a date and a location."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "Ari’s changed credit and later explanation both develop the theme of recognizing contributions.",
    "evidenceExplanation": "Ari’s changed credit and later explanation both develop the theme of recognizing contributions.",
    "reasoningQuestion": "Why do Ari’s decisions support a theme better than the poster’s appearance?",
    "reasoningOptions": [
      "The border is not colorful enough.",
      "A theme must include every event in order.",
      "His decisions show a lesson about shared work, while appearance only describes the poster."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "A theme expresses an idea developed by what happens and what a character learns.",
    "reasoningExplanation": "A theme expresses an idea developed by what happens and what a character learns.",
    "prompt": "Explain the story’s theme. Support it with one detail from before Ari changes the poster and one from afterward. Use two related paragraphs.",
    "frame": "Paragraph 1: The story suggests… At first…\n\nParagraph 2: Later… This change develops the theme because…",
    "vocab": "contribution",
    "definition": "Something a person gives or does to help a shared effort.",
    "color": "green",
    "week": 1,
    "genre": "fiction",
    "talk": "Can Ari remain proud of his own work while naming the team? Support your explanation."
  },
  {
    "id": "g4-lantern",
    "title": "The Last Lantern",
    "subtitle": "Keep the events that explain the outcome.",
    "label": "The Last Lantern",
    "focus": "Summary without extra detail",
    "pattern": "The root spect",
    "model": "The Latin root spect means look. Inspect means to look closely at something.",
    "words": [
      "inspect",
      "spectator",
      "inspection"
    ],
    "wordQuestion": "What would someone do when inspecting a lantern?",
    "wordOptions": [
      "Look at it carefully",
      "Give it a new name",
      "Carry it without looking"
    ],
    "wordAnswer": 0,
    "wordHint": "Use the root meaning look.",
    "text": [
      "The community hall was preparing for an indoor lantern display. Every group had made one paper lantern to hang above a table. Minutes before visitors arrived, June noticed that her group’s lantern had a torn loop. The paper shade was fine, but the lantern could not hang safely from its hook. Her group began looking for spare ribbon.",
      "They found only a short piece, too small to make another loop. June suggested placing the lantern on the table, but the table was crowded with programs. Tarek wanted to borrow ribbon from another group. When they asked, they learned that no spare ribbon remained. The clock above the entrance moved closer to opening time.",
      "June inspected the table again and noticed an empty display stand behind a stack of programs. With the organizer’s help, the group cleared space and set the lantern on the stand instead of hanging it. They moved the programs into a basket beside the entrance. The organizer checked that the display was stable and the walkway clear.",
      "When the doors opened, the lantern stood at eye level for younger visitors. June’s group explained how the torn loop had changed their plan. No one needed to know the color of the spare ribbon to understand the solution. The important change was finding another way to display the lantern using the space and materials available."
    ],
    "question": "Which is the best summary?",
    "options": [
      "A hall has a clock, a basket, ribbon, and visitors.",
      "June likes lanterns more than programs and wants to make another one.",
      "A torn loop prevents a lantern from hanging, so June’s group reorganizes a table and displays it on a stand."
    ],
    "answer": 2,
    "hint": "Keep the central problem, key response, and result.",
    "explanation": "The summary includes the problem and the solution without listing unrelated objects.",
    "evidenceOptions": [
      "The clock was above the entrance.",
      "The loop was torn, and the group later set the lantern on a stand after clearing space.",
      "The group found a short piece of ribbon."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "These details capture the main problem and the successful response.",
    "evidenceExplanation": "These details capture the main problem and the successful response.",
    "reasoningQuestion": "Why is the problem-and-solution evidence stronger for a summary than the clock detail?",
    "reasoningOptions": [
      "It includes the central events that connect the beginning to the outcome.",
      "It uses more names for objects.",
      "It proves the display lasted all night."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "A useful summary keeps the events needed to understand what happened.",
    "reasoningExplanation": "A useful summary keeps the events needed to understand what happened.",
    "prompt": "Write a two-paragraph reading response. First summarize the main events without your opinion. Then explain why the stand solves the problem, using two details.",
    "frame": "Paragraph 1: The group faces… They… As a result…\n\nParagraph 2: The stand is useful because… Another relevant detail is…",
    "vocab": "summary",
    "definition": "A brief account of the most important ideas or events.",
    "color": "green",
    "week": 1,
    "genre": "fiction",
    "talk": "Which detail could you leave out without changing the main events? Explain your choice."
  },
  {
    "id": "g4-display",
    "title": "A Display That People Can Read",
    "subtitle": "Follow a problem through a thoughtful redesign.",
    "label": "A Display That People Can Read",
    "focus": "Problem–solution structure",
    "pattern": "The root graph",
    "model": "The Greek root graph relates to writing or drawing. A graphic presents information visually.",
    "words": [
      "graphic",
      "autograph",
      "paragraph"
    ],
    "wordQuestion": "Which word names a visual presentation of information?",
    "wordOptions": [
      "autograph",
      "graphic",
      "graphite pencil box"
    ],
    "wordAnswer": 1,
    "wordHint": "Look for the word used in the model sentence.",
    "text": [
      "The science club made an information display for a school evening. It contained twelve long paragraphs printed in small type. At the practice viewing, visitors stood close to the board and leaned around each other to read it. Several left before reaching the last section. The club wanted to explain its project, but the information was difficult to approach.",
      "The students first identified what each part of the display was supposed to do. One section introduced the question, another described the procedure, and a third explained the observations. They gave those sections clear headings. They shortened repeated explanations and moved extra details to a separate handout that visitors could take away.",
      "Next, the students increased the letter size and placed the board where two people could stand beside it without blocking the door. During a second practice viewing, they asked visitors to find the project question and one observation. Most found both quickly. A few asked for a clearer explanation of one unfamiliar word.",
      "The club added a definition near that word. The display still needed the handout for readers who wanted every detail, but it now offered a clearer starting point. Describing the original difficulty, the changes, and the follow-up check helps explain why the students reorganized the information instead of simply adding more decoration."
    ],
    "question": "How is the text mainly organized?",
    "options": [
      "As a list of unrelated science facts",
      "As a comparison of two kinds of plants",
      "As a problem, changes to address it, and a check of the result"
    ],
    "answer": 2,
    "hint": "Track the job of each paragraph.",
    "explanation": "The text begins with reading difficulties and follows the club’s response and review.",
    "evidenceOptions": [
      "The text describes hard-to-read paragraphs, then headings and larger letters, then a second practice viewing.",
      "The display was used during a school evening.",
      "An unfamiliar word needed a definition."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "The sequence of problem, changes, and checking shows the overall structure.",
    "evidenceExplanation": "The sequence of problem, changes, and checking shows the overall structure.",
    "reasoningQuestion": "Why does evidence from several paragraphs work better here than one vocabulary detail?",
    "reasoningOptions": [
      "A single word is never important in any text.",
      "The question asks about the organization of the whole text.",
      "Long evidence is always the best evidence."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "To explain overall structure, show how major sections relate, not just what one sentence contains.",
    "reasoningExplanation": "To explain overall structure, show how major sections relate, not just what one sentence contains.",
    "prompt": "Explain how the display changes and why the changes help. Group the problems in one paragraph and the related solutions in another.",
    "frame": "Paragraph 1: Visitors first had difficulty… Another problem was…\n\nParagraph 2: The club addressed these problems by… The follow-up check showed…",
    "vocab": "structure",
    "definition": "The way the parts of a text or object are arranged.",
    "color": "blue",
    "week": 2,
    "genre": "informational scenario",
    "talk": "Which heading would help a visitor who wants to know what the students noticed?"
  },
  {
    "id": "g4-directions",
    "title": "The Instructions Nobody Tested",
    "subtitle": "Notice what an experienced maker forgot to say.",
    "label": "The Instructions Nobody Tested",
    "focus": "Sequence and missing information",
    "pattern": "The prefix inter-",
    "model": "The prefix inter- can mean between or among. Interaction happens when people or things act on one another.",
    "words": [
      "interaction",
      "interconnect",
      "international"
    ],
    "wordQuestion": "What does interconnect suggest?",
    "wordOptions": [
      "Connect things with one another",
      "Disconnect every part",
      "Connect only before lunch"
    ],
    "wordAnswer": 0,
    "wordHint": "Use between or among as a clue.",
    "text": [
      "A maker club wrote instructions for folding a paper name holder. The first step said, “Fold the rectangle in half.” The next step said, “Open it and fold the sides toward the line.” The writers understood what they meant because they had already made several holders. They assumed that a new reader would picture the paper the same way.",
      "When a visiting student tried the instructions, she folded the short edges together. The writers had intended the long edges to meet. Her first fold created a different center line, so following the next step did not produce the expected shape. She reread the words, but they did not identify which edges should touch.",
      "The club revised the first step: “Place the rectangle with its long edge nearest you. Fold the long edge nearest you to meet the long edge farthest away.” They added a labeled sketch and kept the later steps in the same order. A second visitor then tried the revised version without watching a demonstration.",
      "The second visitor made a holder that matched the model. The club kept her questions as notes for another revision. Testing with a new reader had revealed an instruction the experienced makers no longer noticed. The problem was not that the first visitor ignored the directions; the directions had left out information needed to follow them."
    ],
    "question": "Why did the first visitor make a different center line?",
    "options": [
      "She did not receive a rectangle.",
      "The directions did not specify which edges should meet.",
      "She skipped every instruction."
    ],
    "answer": 1,
    "hint": "Find what the writers assumed but did not state.",
    "explanation": "The original directions allowed more than one way to fold the rectangle.",
    "evidenceOptions": [
      "The writers had made several holders.",
      "A second visitor tried the revised version.",
      "The visitor joined the short edges, while the writers meant the long edges; the words did not specify the edges."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The different interpretations and missing instruction directly explain the unexpected fold.",
    "evidenceExplanation": "The different interpretations and missing instruction directly explain the unexpected fold.",
    "reasoningQuestion": "Why does the edge detail explain the problem better than the writers’ experience alone?",
    "reasoningOptions": [
      "Experience proves directions cannot have mistakes.",
      "It names the exact missing information that led to a different result.",
      "It proves sketches are unnecessary."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "A specific link between an instruction and its result explains the cause.",
    "reasoningExplanation": "A specific link between an instruction and its result explains the cause.",
    "prompt": "Explain why the instructions needed revision. Describe the cause in one paragraph and the revision and its test in another.",
    "frame": "Paragraph 1: The original instructions leave out… This leads to…\n\nParagraph 2: The revised step… Testing with a new reader…",
    "vocab": "specify",
    "definition": "To state something clearly and exactly.",
    "color": "blue",
    "week": 2,
    "genre": "informational scenario",
    "talk": "Which everyday direction might be unclear to someone who has never done the task?"
  },
  {
    "id": "g4-queue",
    "title": "Why the Line Moved",
    "subtitle": "A shorter wait can have more than one explanation.",
    "label": "Why the Line Moved",
    "focus": "Cause, evidence, and uncertainty",
    "pattern": "Use a contrast clue",
    "model": "Although can introduce a contrast: “Although the hallway was crowded, the desk was vacant.” Vacant contrasts with crowded.",
    "words": [
      "vacant",
      "crowded",
      "occupied"
    ],
    "wordQuestion": "What does vacant most likely mean here?",
    "wordOptions": [
      "Decorated with signs",
      "Extremely noisy",
      "Not occupied"
    ],
    "wordAnswer": 2,
    "wordHint": "Use the contrast with crowded.",
    "text": [
      "The school art show used one desk to hand visitors both programs and room tickets. On the first evening, a line stretched into the entrance. Volunteers noticed that each visitor waited while someone found a program and then searched for the correct ticket. The organizers wondered whether separating those jobs would help people move through the entrance.",
      "On the second evening, programs were placed on a table before the desk, and the desk handled only tickets. The longest wait recorded by a volunteer was shorter than on the first evening. A student reporter began a headline: “New Table Solves Every Waiting Problem.” Then she looked at the attendance notes beside the timing sheet.",
      "The second evening had fewer visitors arriving during its busiest period. The new arrangement may have helped, but a smaller crowd may also have mattered. The notes could not show how much each change contributed. No one had repeated both arrangements with similar numbers of visitors arriving at similar times.",
      "The reporter revised the headline to describe a shorter wait after the arrangement changed, without claiming the table was the only cause. She suggested collecting more observations at the next event. The available evidence supported a useful question and a possible improvement, but it did not support certainty about every cause of the result."
    ],
    "question": "Which conclusion is best supported?",
    "options": [
      "The shorter wait may relate to the new arrangement and the smaller crowd.",
      "The program table caused every improvement.",
      "Changing a desk can never affect a line."
    ],
    "answer": 0,
    "hint": "Look for more than one difference between evenings.",
    "explanation": "Both the arrangement and the number of arrivals changed, so the notes cannot separate their effects.",
    "evidenceOptions": [
      "The art show had room tickets.",
      "The desk handled only tickets on the second evening, which also had fewer arrivals during its busiest period.",
      "A reporter wrote a headline."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "This pair identifies the two changes relevant to the shorter wait.",
    "evidenceExplanation": "This pair identifies the two changes relevant to the shorter wait.",
    "reasoningQuestion": "Why does this pair of details support a cautious conclusion?",
    "reasoningOptions": [
      "It proves both changes mattered equally.",
      "It shows that two relevant conditions changed, so one cause cannot be isolated.",
      "It tells us nobody waited at all."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "The notes show possible explanations but do not measure the effect of each separately.",
    "reasoningExplanation": "The notes show possible explanations but do not measure the effect of each separately.",
    "prompt": "Explain the shorter wait without overstating what the notes prove. Use one paragraph for the observations and one for possible explanations and a next check.",
    "frame": "Paragraph 1: The notes show… They also show…\n\nParagraph 2: One possible explanation is… However… A useful next check would…",
    "vocab": "contribute",
    "definition": "To play a part in making something happen.",
    "color": "blue",
    "week": 2,
    "genre": "informational scenario",
    "talk": "What extra observation would help distinguish the possible explanations?"
  },
  {
    "id": "g4-guides",
    "title": "Two Ways to Explain a Visit",
    "subtitle": "Find the guide that answers your question.",
    "label": "Two Ways to Explain a Visit",
    "focus": "Compare text structures",
    "pattern": "The root struct",
    "model": "The Latin root struct relates to building. Structure can describe how parts are put together.",
    "words": [
      "structure",
      "construct",
      "reconstruct"
    ],
    "wordQuestion": "Which word means build again?",
    "wordOptions": [
      "reconstruct",
      "construction paper",
      "unstructured"
    ],
    "wordAnswer": 0,
    "wordHint": "Combine re-, meaning again, with construct.",
    "text": [
      "Guide A — Before your first visit to the model-making studio, reserve a place and choose a project. When you arrive, leave your bag in the marked area and collect a tray of materials. Next, listen to a short introduction before starting work. At the end of the session, return unused materials and place your model in a box for the trip home.",
      "Guide A continues — Each step prepares you for the next. Reserving a place helps the studio prepare enough trays. Keeping bags in one area leaves room around the worktables. Returning unused materials makes them available for later visitors. The guide follows a visit from planning through departure.",
      "Guide B — The studio offers a quiet table and a group table. Both have the same basic materials and an instructor nearby. The quiet table suits visitors who prefer to think without conversation. At the group table, visitors can discuss designs as they build. Neither table requires visitors to finish a model at the same speed.",
      "Guide B continues — The quiet table has fewer seats, while the group table has a larger shared work area. Visitors may ask to switch if a place opens. This guide helps readers compare the two choices before deciding where they might work comfortably. It does not give every step of a visit in time order."
    ],
    "question": "How do the guides organize their information differently?",
    "options": [
      "Both only explain a single accident.",
      "Guide A follows a sequence; Guide B compares choices.",
      "Guide A gives opinions only; Guide B lists dates."
    ],
    "answer": 1,
    "hint": "Ask whether each guide answers “What next?” or “How are the choices alike and different?”",
    "explanation": "Guide A follows the visit, while Guide B compares the table options.",
    "evidenceOptions": [
      "Both guides name the studio.",
      "Both guides mention materials.",
      "Guide A moves from reserving to leaving; Guide B compares the quiet and group tables."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The details show the different organizing patterns, not just their shared topic.",
    "evidenceExplanation": "The details show the different organizing patterns, not just their shared topic.",
    "reasoningQuestion": "Why is naming the guides’ shared materials less useful for this question?",
    "reasoningOptions": [
      "It shows a shared topic but does not explain the different structures.",
      "Materials cannot appear in a guide.",
      "It proves the guides have different authors."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "The question asks how information is arranged, not only what it is about.",
    "reasoningExplanation": "The question asks how information is arranged, not only what it is about.",
    "prompt": "Compare the guides in two paragraphs. Explain each structure, give an example, and name a reader question that each guide answers.",
    "frame": "Paragraph 1: Guide A is organized by… For example… It helps a reader who asks…\n\nParagraph 2: In contrast, Guide B… It helps a reader who asks…",
    "vocab": "sequence",
    "definition": "An order in which events or steps occur.",
    "color": "blue",
    "week": 2,
    "genre": "paired fictional guides",
    "talk": "Which guide would help you decide where to sit? Which would help you prepare to leave?"
  },
  {
    "id": "g4-mural",
    "title": "One Mural, Two Accounts",
    "subtitle": "A journal and a report reveal different parts.",
    "label": "One Mural, Two Accounts",
    "focus": "Firsthand and secondhand accounts",
    "pattern": "The root aud",
    "model": "The Latin root aud relates to hearing. Audible describes something that can be heard.",
    "words": [
      "audible",
      "inaudible",
      "audience"
    ],
    "wordQuestion": "What does inaudible mean?",
    "wordOptions": [
      "Heard twice",
      "Not able to be heard",
      "Written for a group"
    ],
    "wordAnswer": 1,
    "wordHint": "In- can mean not; audible means able to be heard.",
    "text": [
      "Account A — Volunteer’s journal: I helped paint the community mural on Saturday. My first brushstroke shook because I was worried about painting outside the outline. The artist showed me how to steady my hand against the wall. By afternoon, I was filling a blue section beside a neighbor I had never met. I left tired and pleased that I had tried something unfamiliar.",
      "Account A continues: The moment I remember most was stepping back and spotting my section among everyone else’s colors. I cannot describe every part of the project because I spent most of the day at one end of the wall. I did not attend the early planning meetings or count all the volunteers.",
      "Account B — Newsletter report: According to the project organizer, planning began six weeks before the painting day. Volunteers prepared the wall on Friday, and three groups painted on Saturday. The newsletter writer interviewed the organizer and two volunteers after the event. The report described how materials were gathered and how teams divided the wall into sections.",
      "Account B continues: The writer did not paint at the event. Instead, the report brought together information from interviews and the schedule. It explained the project’s organization across several stages, while the journal focused on one participant’s feelings and experience. Readers could use both accounts to understand different aspects of the same mural."
    ],
    "question": "How do the accounts differ in focus?",
    "options": [
      "A gives one participant’s experience; B explains broader organization using gathered information.",
      "A counts every volunteer; B describes only its writer’s brushstroke.",
      "Both writers painted beside the same neighbor."
    ],
    "answer": 0,
    "hint": "Compare what each writer experienced directly and what each reports.",
    "explanation": "The journal provides a firsthand perspective; the newsletter gathers information about the whole project.",
    "evidenceOptions": [
      "The mural includes blue paint.",
      "The journal describes a shaky first brushstroke; the report uses interviews and a schedule to explain planning.",
      "The painting happened on Saturday."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The pair shows personal experience in A and information gathered from others in B.",
    "evidenceExplanation": "The pair shows personal experience in A and information gathered from others in B.",
    "reasoningQuestion": "Why does this pair explain the difference better than the shared date?",
    "reasoningOptions": [
      "It proves one account is automatically true and the other false.",
      "A date can never be included in evidence.",
      "It identifies each writer’s access to information and chosen focus."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "Firsthand and secondhand accounts can both be useful; examine how each obtains and presents information.",
    "reasoningExplanation": "Firsthand and secondhand accounts can both be useful; examine how each obtains and presents information.",
    "prompt": "Compare the accounts in two paragraphs. Identify the information each adds, with one example from each. Explain why a reader might use both.",
    "frame": "Paragraph 1: Account A is firsthand because… It adds…\n\nParagraph 2: Account B uses… It adds… Together…",
    "vocab": "firsthand",
    "definition": "Based on directly taking part in or witnessing an experience.",
    "color": "amber",
    "week": 3,
    "genre": "paired fictional accounts",
    "talk": "Does firsthand always mean complete? What does the volunteer admit not knowing?"
  },
  {
    "id": "g4-route",
    "title": "Which Way to the Pavilion?",
    "subtitle": "A useful route depends on the purpose.",
    "label": "Which Way to the Pavilion?",
    "focus": "Different priorities in two sources",
    "pattern": "Use a definition clue",
    "model": "A writer may explain a word after a dash: “a detour — a different route around a closed path.”",
    "words": [
      "detour",
      "route",
      "destination"
    ],
    "wordQuestion": "What is a detour?",
    "wordOptions": [
      "A place where a trip ends",
      "A measurement of speed",
      "A different route around an obstacle"
    ],
    "wordAnswer": 2,
    "wordHint": "Use the explanation after the dash.",
    "text": [
      "Source A — Walk leader’s note: Our club usually reaches the park pavilion by the gravel trail. It is the shorter route, and its broad open section lets the group see the pavilion early. For a small group carrying light bags, this route saves time. However, after rain, water sometimes collects in a low section, making the surface uneven and muddy.",
      "Source A continues: I recommend checking the low section before a walk. If it is dry, the gravel trail can be a convenient choice. My note comes from leading short walks with club members, not from testing every kind of equipment or every visitor’s needs. The shorter distance is useful, but it is not the only consideration.",
      "Source B — Event helper’s note: We moved supply carts to the pavilion for a workshop. The paved route took longer, but its smooth surface made the carts easier to guide. We did not need to carry boxes over the low gravel section. The path had a wide turn near the pavilion where we could pause without blocking others.",
      "Source B continues: For groups moving supplies, I recommend allowing extra time for the paved route. This recommendation is based on that delivery trip. A visitor choosing a route should consider the day’s conditions and the group’s needs. A route that is convenient for one purpose may be less useful for another."
    ],
    "question": "Why do the sources favor different routes?",
    "options": [
      "They disagree about where the pavilion is.",
      "They consider different needs: a shorter walk and moving supplies smoothly.",
      "Neither source knows anything about the paths."
    ],
    "answer": 1,
    "hint": "Compare the purpose of each trip.",
    "explanation": "The recommendations reflect different priorities rather than a simple contradiction.",
    "evidenceOptions": [
      "A values the shorter route for lightly loaded walkers; B values the smooth surface for carts.",
      "Both sources mention the pavilion.",
      "B describes a wide turn."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "The paired priorities explain why the routes are recommended for different situations.",
    "evidenceExplanation": "The paired priorities explain why the routes are recommended for different situations.",
    "reasoningQuestion": "Why is a detail from each source needed here?",
    "reasoningOptions": [
      "The longest source must decide every question.",
      "Two sources always prove the same recommendation.",
      "The comparison depends on understanding both purposes, not just one feature."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "A comparison explains how the choices relate to the needs described in each source.",
    "reasoningExplanation": "A comparison explains how the choices relate to the needs described in each source.",
    "prompt": "Explain how a group should compare the routes. Give the advantages and limits described in each source, then recommend a route for moving supply carts.",
    "frame": "Paragraph 1: Source A emphasizes… Its limitation is…\n\nParagraph 2: Source B emphasizes… For a supply delivery, I recommend… because…",
    "vocab": "priority",
    "definition": "Something treated as especially important when making a choice.",
    "color": "amber",
    "week": 3,
    "genre": "paired fictional notes",
    "talk": "What new information would you need before advising a different group of visitors?"
  },
  {
    "id": "g4-museum",
    "title": "The Case for a Quiet Hour",
    "subtitle": "Connect two writers’ concerns in one plan.",
    "label": "The Case for a Quiet Hour",
    "focus": "Claims and relevant reasons",
    "pattern": "The suffix -ist",
    "model": "The suffix -ist can name a person who practices or studies something: art → artist.",
    "words": [
      "artist",
      "scientist",
      "novelist"
    ],
    "wordQuestion": "Which word names a person who writes novels?",
    "wordOptions": [
      "novelist",
      "novelty",
      "novel chapter"
    ],
    "wordAnswer": 0,
    "wordHint": "Find the word ending in -ist.",
    "text": [
      "Letter A — A visitor’s proposal: I suggest a weekly quiet hour at the local model museum. During that hour, the recorded demonstrations could be turned off and visitors could read the captions or ask staff for explanations. On my last visit, the overlapping recordings made it difficult for me to follow one display. A quieter option could help visitors who prefer less background sound.",
      "Letter A continues: I do not suggest removing demonstrations from every visit. Some visitors enjoy them. A clearly advertised quiet hour would give families a choice, and the museum could ask for comments after trying it for a month. My experience describes one visit, so staff should gather other visitors’ views before making a permanent schedule.",
      "Letter B — A volunteer’s response: I support trying the quiet hour if visitors can still understand the moving models. Several demonstrations currently explain a sequence that is not described fully on the labels. Before turning off the recordings, we should add clear written steps and make sure someone is available to answer questions.",
      "Letter B continues: A trial should check both sound comfort and access to explanations. We could ask whether visitors found the models easier to explore and whether the captions answered their questions. The goal is to offer a useful choice, so reducing sound and preserving information should be planned together."
    ],
    "question": "What plan combines the main concerns of both letters?",
    "options": [
      "Remove all explanations permanently.",
      "Keep every recording on during the quiet hour.",
      "Try a quiet hour with clearer captions and staff help, then gather feedback."
    ],
    "answer": 2,
    "hint": "A wants less background sound; B wants the explanations to remain available.",
    "explanation": "The combined plan addresses sound preferences and access to information.",
    "evidenceOptions": [
      "A visited the museum once.",
      "A proposes a quieter option; B asks for written steps and someone to answer questions.",
      "The museum has moving models."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The pair states the two needs the combined plan must address.",
    "evidenceExplanation": "The pair states the two needs the combined plan must address.",
    "reasoningQuestion": "Why is this pair more useful than simply noting that the museum has models?",
    "reasoningOptions": [
      "It links the recommendation to the specific needs raised by both writers.",
      "It proves every visitor dislikes recordings.",
      "It tells the museum’s exact operating hours."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "Relevant reasons explain why the proposed action fits the problem.",
    "reasoningExplanation": "Relevant reasons explain why the proposed action fits the problem.",
    "prompt": "Explain a trial plan that responds to both letters. Use one paragraph for the needs and one for the proposed changes and how to check them.",
    "frame": "Paragraph 1: Letter A raises… Letter B adds…\n\nParagraph 2: A combined trial could… Staff could check…",
    "vocab": "claim",
    "definition": "A point a writer asks readers to accept, usually supported with reasons or evidence.",
    "color": "amber",
    "week": 3,
    "genre": "paired fictional letters",
    "talk": "What information would help decide whether to keep the trial after a month?"
  },
  {
    "id": "g4-archive",
    "title": "What the Archive Can Tell Us",
    "subtitle": "Separate planned events from remembered experiences.",
    "label": "What the Archive Can Tell Us",
    "focus": "Combine sources without overclaiming",
    "pattern": "The prefix trans-",
    "model": "The prefix trans- can mean across. Transatlantic describes something across the Atlantic Ocean.",
    "words": [
      "transfer",
      "transport",
      "transatlantic"
    ],
    "wordQuestion": "In transatlantic, what does trans- contribute?",
    "wordOptions": [
      "Below",
      "Across",
      "Again"
    ],
    "wordAnswer": 1,
    "wordHint": "Use the explanation in the model.",
    "text": [
      "Source A — An old festival program: The program for the town’s first story festival lists four events: a morning reading, a puppet performance, a family story circle, and an evening concert. It names the community hall as the location and thanks a volunteer team. It does not record how many people attended or which event they liked best.",
      "Source A continues: A printed program shows what organizers planned to offer. It may not show every change made during the day. A reader who wants to know what actually happened would need another source, such as a participant’s account or a report written after the event.",
      "Source B — A participant’s letter: “I went to the morning reading with my brother. Later, we watched the puppet performance in the small room. It had moved there because the large room was being prepared for the story circle. We left before the concert. I especially enjoyed hearing our neighbor read a story she had written.”",
      "Source B continues: The letter adds an experience from part of the day and describes a location change inside the hall. It cannot establish attendance totals or how everyone felt. Together, the program and letter show planned activities and one person’s experience, while leaving some questions unanswered. Neither source alone supplies a complete history of the festival."
    ],
    "question": "Which statement combines information from both sources accurately?",
    "options": [
      "All visitors preferred the concert.",
      "The program planned several activities, and a participant describes attending two of them with one room change.",
      "The festival had no morning reading."
    ],
    "answer": 1,
    "hint": "Keep plans separate from one participant’s experience.",
    "explanation": "The program documents planned activities; the letter describes the reading and changed puppet location.",
    "evidenceOptions": [
      "The program thanks volunteers.",
      "The letter writer has a brother.",
      "The program lists a reading and puppet performance; the letter describes the reading and finding the puppets in another room."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The overlapping activities allow the planned and experienced parts to be connected.",
    "evidenceExplanation": "The overlapping activities allow the planned and experienced parts to be connected.",
    "reasoningQuestion": "Why does this evidence not support a claim about everyone’s favorite event?",
    "reasoningOptions": [
      "A program and one letter do not report every attendee’s preference.",
      "Printed programs are always incorrect.",
      "A person cannot enjoy a morning event."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "Match the size of a claim to what the sources actually document.",
    "reasoningExplanation": "Match the size of a claim to what the sources actually document.",
    "prompt": "Write an explanation using both sources. Separate what was planned from what the participant reports, and end with one question the sources cannot answer.",
    "frame": "Paragraph 1: The program shows… It does not tell…\n\nParagraph 2: The letter adds… Together… A remaining question is…",
    "vocab": "archive",
    "definition": "A collection of records kept to preserve information about the past.",
    "color": "amber",
    "week": 3,
    "genre": "paired fictional archive sources",
    "talk": "What kind of additional record could help answer your remaining question?"
  },
  {
    "id": "g4-sort",
    "title": "From Notes to an Explanation",
    "subtitle": "Arrange information so readers can follow it.",
    "label": "From Notes to an Explanation",
    "focus": "Group related information",
    "pattern": "Use precise word choice",
    "model": "Specific verbs help readers understand an action. Compare “They did the books” with “They sorted the books by topic.”",
    "words": [
      "sort",
      "label",
      "compare"
    ],
    "wordQuestion": "Which sentence most clearly describes organizing books?",
    "wordOptions": [
      "They sorted the books into topic groups.",
      "They did something with the books.",
      "The books were really nice."
    ],
    "wordAnswer": 0,
    "wordHint": "Choose a verb and detail that name the action.",
    "text": [
      "The reading club wanted to explain how it organized a traveling book display. Its notes were written on small cards: choose books about local places; check each book for loose pages; write a short topic label; make sure the titles can be seen; group similar books together; place a return basket beside the display; invite visitors to suggest a topic for next month.",
      "At first, the writer copied the cards in the order they had fallen onto the desk. One sentence described repairing pages, the next described visitor suggestions, and the third returned to choosing books. The paragraph contained useful facts, but readers had to work hard to understand how those facts connected.",
      "The club sorted the notes into three groups: selecting and checking books, arranging and labeling the display, and helping visitors use it. Each group could become a paragraph with a clear opening sentence. Within each paragraph, the writer could put related actions together and explain why they mattered.",
      "The revised explanation would not need to add new facts just to become longer. Its improvement would come from making relationships visible. A reader interested in returning a book could look in the visitor section, while a volunteer preparing the display could begin with the selection section. Organization would help different readers find the information they needed."
    ],
    "question": "Which grouping best helps readers follow the explanation?",
    "options": [
      "Put the shortest notes first, regardless of topic.",
      "Mix a note from every group in each sentence.",
      "Group selection, arrangement, and visitor-use notes into separate sections."
    ],
    "answer": 2,
    "hint": "Choose groups based on related ideas and reader needs.",
    "explanation": "Topic groups help each paragraph serve a clear purpose.",
    "evidenceOptions": [
      "The notes were written on cards.",
      "The club formed groups for choosing and checking, arranging and labeling, and helping visitors.",
      "The return basket was beside the display."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The three groups show how related information can be organized for readers.",
    "evidenceExplanation": "The three groups show how related information can be organized for readers.",
    "reasoningQuestion": "Why is grouping by topic more useful than grouping only by sentence length?",
    "reasoningOptions": [
      "Long sentences always contain the most important information.",
      "Readers need related ideas together to understand a process or find information.",
      "Every paragraph must have the same number of words."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "Organization follows meaning and purpose, not just the size of the sentences.",
    "reasoningExplanation": "Organization follows meaning and purpose, not just the size of the sentences.",
    "prompt": "Write two short information paragraphs about the display. Group selecting/checking details in the first and arrangement/visitor-use details in the second. Add a useful heading for each.",
    "frame": "Heading: Preparing the Books\nThe club first… This helps…\n\nHeading: Using the Display\nThe display… Visitors can…",
    "vocab": "category",
    "definition": "A group of things that share a relevant feature.",
    "color": "green",
    "week": 4,
    "genre": "informational scenario",
    "talk": "Could a different set of headings also work? Explain how it would help a specific reader."
  },
  {
    "id": "g4-paraphrase",
    "title": "Borrow the Idea, Keep Your Voice",
    "subtitle": "Keep the meaning while changing the wording.",
    "label": "Borrow the Idea, Keep Your Voice",
    "focus": "Accurate paraphrasing",
    "pattern": "The root bio",
    "model": "The Greek root bio means life. A biography is a written account of a person’s life.",
    "words": [
      "biography",
      "biology",
      "biographer"
    ],
    "wordQuestion": "What is a biography?",
    "wordOptions": [
      "A list of every book in a library",
      "A diagram of a building",
      "An account of a person’s life"
    ],
    "wordAnswer": 2,
    "wordHint": "Combine the model’s life and written-account meanings.",
    "text": [
      "Source note — The art club keeps usable scraps in clear containers labeled by material. Small paper pieces go in one container, fabric pieces in another, and cardboard in a third. Before starting a project, students look through the containers to see whether a saved piece will meet their needs. New materials are available when the scraps are unsuitable.",
      "A writer wanted to explain this routine in a school guide. Her first draft copied the source note almost word for word. Changing “students” to “children” did not make the wording her own. She needed to understand the idea, put the source aside, and explain the routine in a new sentence pattern while keeping its meaning.",
      "She tried: “The art club sorts reusable pieces by material so students can check them before choosing new supplies.” This version combined related details without claiming that the club never uses new materials. She named the art club’s source note below her paragraph so readers could tell where the information came from.",
      "Then she checked her wording against the original. She had not included every container example, but the main routine and its purpose remained clear. A paraphrase can be shorter than its source. It must still preserve the important meaning, avoid adding unsupported claims, and acknowledge the source of the borrowed information."
    ],
    "question": "Which paraphrase best preserves the source note’s meaning?",
    "options": [
      "The club sorts usable scraps for students to check before choosing new materials.",
      "The club never allows students to use new supplies.",
      "All art clubs use only cardboard."
    ],
    "answer": 0,
    "hint": "Keep both reuse and the option of new materials.",
    "explanation": "The paraphrase retains the routine without turning a preference into an absolute rule.",
    "evidenceOptions": [
      "The writer made a school guide.",
      "The source says students check saved pieces first and can use new materials when scraps are unsuitable.",
      "There are three containers in the example."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "Both parts of the original routine are needed to avoid an inaccurate absolute claim.",
    "evidenceExplanation": "Both parts of the original routine are needed to avoid an inaccurate absolute claim.",
    "reasoningQuestion": "Why would “The club never uses new supplies” be weaker than the selected paraphrase?",
    "reasoningOptions": [
      "It is shorter than the original note.",
      "It leaves out the color of the containers.",
      "It contradicts the source’s explicit allowance for new materials."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "An accurate paraphrase must keep qualifications that affect the meaning.",
    "reasoningExplanation": "An accurate paraphrase must keep qualifications that affect the meaning.",
    "prompt": "Explain the club’s routine in your own words, then explain one choice you made to keep your paraphrase accurate. Name the source note. Use two short paragraphs.",
    "frame": "Paragraph 1: According to the art club’s source note…\n\nParagraph 2: I kept the idea that… I avoided saying… because…",
    "vocab": "paraphrase",
    "definition": "An explanation of someone else’s information in your own wording while keeping its meaning.",
    "color": "green",
    "week": 4,
    "genre": "fictional source and writing workshop",
    "talk": "How can you tell whether a changed word also changes the original meaning?"
  },
  {
    "id": "g4-revision",
    "title": "The Claim That Grew Too Big",
    "subtitle": "Match a statement to what the notes really show.",
    "label": "The Claim That Grew Too Big",
    "focus": "Revise for precision",
    "pattern": "Qualifiers change a claim",
    "model": "Words such as some, often, and may limit a claim. All, always, and must make a much broader claim.",
    "words": [
      "some",
      "often",
      "may"
    ],
    "wordQuestion": "Which wording is limited to the people actually asked?",
    "wordOptions": [
      "Everyone in town agrees.",
      "Six of the eight respondents agree.",
      "Nobody could disagree."
    ],
    "wordAnswer": 1,
    "wordHint": "Keep the statement within the available group.",
    "text": [
      "A class tested a new label system for its puzzle shelf. Eight students tried finding a puzzle using labels that showed the number of pieces and a small picture. Six found their chosen puzzle without asking for help. Two asked a volunteer to explain the labels. The class recorded these results and saved the questions the two students asked.",
      "For the newsletter, Cam wrote, “Our perfect labels help everyone find a puzzle immediately.” His partner compared that sentence with the notes. The class had not tested everyone, the notes did not measure how many seconds each search took, and two students had needed help. The claim was larger than the evidence.",
      "Cam revised the sentence: “In our trial, six of eight students found their chosen puzzle without asking for help.” He added that two students needed an explanation. In the next paragraph, he proposed making one symbol clearer and trying the labels with another group. The revision gave readers both the useful result and a limitation.",
      "The new report sounded less dramatic, but it was more informative. It distinguished what the class observed from what it hoped would happen later. Readers could judge the trial and understand the next step. Cam learned that precision sometimes requires replacing an impressive word with a specific number or a carefully limited statement."
    ],
    "question": "Which revision best matches the evidence?",
    "options": [
      "The labels are perfect for everyone.",
      "No student understood the labels.",
      "Six of eight students found a puzzle without help, while two needed an explanation."
    ],
    "answer": 2,
    "hint": "Include both successful searches and the students who needed help.",
    "explanation": "The revised claim accurately describes the observed group and its mixed results.",
    "evidenceOptions": [
      "Six students found their puzzle without help, and two asked for an explanation.",
      "Cam wrote for a newsletter.",
      "The shelf held puzzles."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "These counts directly support a limited description of the trial.",
    "evidenceExplanation": "These counts directly support a limited description of the trial.",
    "reasoningQuestion": "Why do the counts support this revision better than the word perfect?",
    "reasoningOptions": [
      "Numbers always prove that a design will work forever.",
      "The counts describe the observed results, including a limitation the absolute claim hides.",
      "The word perfect is too difficult to spell."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "A precise statement reports the evidence and does not erase exceptions.",
    "reasoningExplanation": "A precise statement reports the evidence and does not erase exceptions.",
    "prompt": "Write a two-paragraph report of the label trial. First explain the results accurately. Then propose a specific revision and a follow-up test, keeping observations separate from predictions.",
    "frame": "Paragraph 1: In this trial… However…\n\nParagraph 2: I recommend… This may… To check it, the class could…",
    "vocab": "qualification",
    "definition": "A word or explanation that limits a statement so it is more accurate.",
    "color": "green",
    "week": 4,
    "genre": "informational scenario",
    "talk": "Find a word in your writing that might make a claim larger than your evidence."
  },
  {
    "id": "g4-exhibit",
    "title": "An Exhibit Everyone Can Explore",
    "subtitle": "Bring two sources together in a clear report.",
    "label": "An Exhibit Everyone Can Explore",
    "focus": "Final information report",
    "pattern": "Link a detail to an explanation",
    "model": "Use for example to introduce a detail and as a result to connect a cause with its outcome. Choose the relationship you mean.",
    "words": [
      "for example",
      "in contrast",
      "as a result"
    ],
    "wordQuestion": "“The entrance table blocked the path. ___, visitors had to move around it.” Which link fits?",
    "wordOptions": [
      "In contrast",
      "For example",
      "As a result"
    ],
    "wordAnswer": 2,
    "wordHint": "The second statement describes an outcome of the first.",
    "text": [
      "Source A — Visitor observation notes: During a trial of the class invention exhibit, visitors gathered around the first table near the entrance. Some stopped there because it held the only printed guide. This made it difficult for people behind them to enter. Farther inside, the model tables had space around them, but two visitors asked where the next part of the exhibit began.",
      "Source A continues: Observers suggested putting guides in two locations away from the doorway and adding numbered signs to the model tables. They did not test those changes during the trial. The notes describe where people paused and what they asked, so they are evidence about navigation rather than proof that visitors learned every invention’s purpose.",
      "Source B — Student presenter notes: Presenters noticed that visitors often asked what problem each model solved. Some table cards named only the invention and its maker. Presenters suggested adding a one-sentence purpose statement and a labeled drawing to each card. They wanted visitors to understand the main idea even when a presenter was speaking to someone else.",
      "Source B continues: The presenters still wanted time for questions and discussion. Written cards would provide a starting point, not replace every conversation. A useful revision plan could address both moving through the exhibit and understanding its content. After making changes, the class would need another trial to check whether visitors could find the next table and explain a model’s purpose."
    ],
    "question": "Which plan uses both sources most effectively?",
    "options": [
      "Move guide pickup away from the door, add numbered signs, and improve model explanations before another trial.",
      "Add more decorations only to the first table.",
      "Remove all presenters and declare the exhibit successful."
    ],
    "answer": 0,
    "hint": "Connect Source A’s navigation needs with Source B’s explanation needs.",
    "explanation": "The combined plan addresses movement and understanding, with a follow-up check rather than an unsupported success claim.",
    "evidenceOptions": [
      "The exhibit includes inventions made by students.",
      "A reports entrance crowding and questions about the route; B reports questions about model purposes and incomplete cards.",
      "The model tables have space around them."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The paired details identify the different needs the final plan should address.",
    "evidenceExplanation": "The paired details identify the different needs the final plan should address.",
    "reasoningQuestion": "Why is evidence from both notes necessary for this recommendation?",
    "reasoningOptions": [
      "Both sources must have identical wording to be useful.",
      "The longer source should replace the shorter one.",
      "The plan covers navigation and understanding, and each source supplies relevant information about one of those needs."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "A report combining sources should show what each contributes to the recommendation.",
    "reasoningExplanation": "A report combining sources should show what each contributes to the recommendation.",
    "prompt": "Write a two-paragraph information report with useful headings. Explain navigation needs and changes in the first paragraph, then information needs and changes in the second. Use details from Sources A and B, explain the connections, and close with a follow-up check.",
    "frame": "Heading: Moving Through the Exhibit\nSource A reports… A useful change is… because…\n\nHeading: Understanding the Models\nSource B adds… The class could… In the next trial…",
    "vocab": "synthesis",
    "definition": "An explanation that brings relevant information from different sources together.",
    "color": "green",
    "week": 4,
    "genre": "paired fictional reports",
    "talk": "Ask a reader to identify which source supports each part of your plan. Revise any unclear connection."
  }
];
export const gradeFourUnits = [
  {
    "week": 1,
    "title": "Reading Between the Lines",
    "goal": "Support inferences, character explanations, themes, and summaries with relevant details.",
    "project": "Summarize The Last Lantern, then explain its solution with text evidence.",
    "family": "Ask what a detail shows, not just where it appears. Compare a relevant action with a detail that only describes the setting."
  },
  {
    "week": 2,
    "title": "How Ideas Work",
    "goal": "Explain structure, sequence, causes, and the limits of a conclusion.",
    "project": "Compare two studio guides and explain which reader questions each answers.",
    "family": "Ask how paragraphs connect: time order, cause and effect, comparison, or problem and solution."
  },
  {
    "week": 3,
    "title": "Two Sources, One Topic",
    "goal": "Compare accounts and priorities, then combine information without overclaiming.",
    "project": "Use a fictional festival program and letter to explain what is known and what remains uncertain.",
    "family": "Ask what each source adds and what neither source can prove. A firsthand account can be useful without being complete."
  },
  {
    "week": 4,
    "title": "The Information Studio",
    "goal": "Group notes, paraphrase accurately, qualify claims, and draft an information report.",
    "project": "Write a two-paragraph exhibit report using two sources and a follow-up check.",
    "family": "Review headings, relevant details, source labels, explanations, and a closing idea. Discuss one specific revision together."
  }
];
export const gradeFiveLessons = [
  {
    "id": "g5-observatory",
    "title": "The Observatory Question",
    "subtitle": "Use two records to test an inference.",
    "label": "The Observatory Question",
    "focus": "Inference across sources",
    "pattern": "The root scope",
    "model": "The Greek root scope relates to looking or examining. A telescope is an instrument used to view distant objects.",
    "words": [
      "telescope",
      "microscope",
      "periscope"
    ],
    "wordQuestion": "Which word names an instrument for viewing distant objects?",
    "wordOptions": [
      "microscope",
      "telescope",
      "telephone"
    ],
    "wordAnswer": 1,
    "wordHint": "Use the definition in the model.",
    "sources": [
      {
        "id": "A",
        "title": "A volunteer’s journal",
        "kind": "Personal account"
      },
      {
        "id": "B",
        "title": "An equipment log",
        "kind": "Recorded checks"
      }
    ],
    "text": [
      "Source A — Volunteer’s journal: Our school observatory reopened for a family evening after several months of repairs. I helped visitors look through the telescope. At first, everyone waited quietly, but soon families asked why the view kept changing. Some children had touched the focusing knob without realizing what it did. I explained the knob again and again while the line grew longer behind the telescope.",
      "Source A continues: The instrument did not stop working during my shift. When I adjusted the focus, the image became clear again. I wished there were a short explanation beside the telescope, because visitors could not always hear me over conversations in the room. Before leaving, I wrote that suggestion in the volunteer notebook. My account describes only the time when I was helping at that station.",
      "Source B — Equipment log: Before the evening began, the technician checked the telescope and recorded that it focused correctly. After the event, the technician repeated the check and found no repair was needed. The log also noted that the instruction card had not been replaced after the room was repainted. A new card was requested for the next session, but it had not yet been tested with visitors.",
      "Reader’s task: These records describe the same evening from different positions. The volunteer reports visitor actions and explanations during the event. The log records checks before and afterward. Combining them can support an inference about a useful next step, while neither record tells us how every visitor experienced the evening or proves that a new card will solve every difficulty."
    ],
    "question": "Which inference is best supported by both records?",
    "options": [
      "The telescope needs to be replaced immediately.",
      "Visitors should never ask volunteers questions.",
      "Clearer instructions may help more than a repair that the checks do not indicate is needed."
    ],
    "answer": 2,
    "hint": "Connect the repeated explanations with the equipment checks and missing card.",
    "explanation": "The records point to an instruction problem rather than documented equipment damage.",
    "evidenceOptions": [
      "A describes repeated focus explanations; B records correct focus and a missing instruction card.",
      "A mentions families; B mentions repainting.",
      "B says a new card has been requested."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "A identifies what visitors needed, while B gives equipment results and a missing source of instructions.",
    "evidenceExplanation": "A identifies what visitors needed, while B gives equipment results and a missing source of instructions.",
    "reasoningQuestion": "Why is the combined evidence stronger than the request for a new card alone?",
    "reasoningOptions": [
      "A request proves the new card has already worked.",
      "It links an observed difficulty with checks that help distinguish possible causes.",
      "It proves every visitor touched the knob."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "Use both the visitor observations and the equipment checks; a proposed change is not a tested result.",
    "reasoningExplanation": "Use both the visitor observations and the equipment checks; a proposed change is not a tested result.",
    "prompt": "Write three short paragraphs: explain the difficulty, connect evidence from Sources A and B, and recommend a next step with a way to check it. Include one short, exact quotation and identify its source.",
    "frame": "Paragraph 1: The records raise a question about…\n\nParagraph 2: Source A states, “…” Source B adds… Together…\n\nParagraph 3: I recommend… To check this idea…",
    "vocab": "corroborate",
    "definition": "To add support to information using another relevant source.",
    "color": "green",
    "week": 1,
    "genre": "original fictional source set",
    "talk": "Which detail makes a broken telescope a less convincing explanation? What uncertainty still remains?"
  },
  {
    "id": "g5-relay",
    "title": "The Relay Decision",
    "subtitle": "Compare what two characters know.",
    "label": "The Relay Decision",
    "focus": "Perspective and accurate quotation",
    "pattern": "The prefix sub-",
    "model": "The prefix sub- can mean under or below. A subtitle appears under a main title or adds information to it.",
    "words": [
      "subtitle",
      "subheading",
      "submarine"
    ],
    "wordQuestion": "Which word names a heading for part of a larger text?",
    "wordOptions": [
      "subheading",
      "heading back",
      "overhead"
    ],
    "wordAnswer": 0,
    "wordHint": "A smaller section can have a subheading.",
    "sources": [
      {
        "id": "A",
        "title": "Jules’s diary",
        "kind": "First-person fiction"
      },
      {
        "id": "B",
        "title": "Ren’s diary",
        "kind": "First-person fiction"
      }
    ],
    "text": [
      "Source A — Jules’s diary: I thought Ren had given up when she asked to change our relay order. We had practiced the same order all week, and I liked knowing exactly when my turn would come. During the last practice, I saw her look toward the finish line instead of joining our discussion. I assumed she was thinking about something else. When she suggested that I run last, I said we should keep our plan.",
      "Source A continues: Later, Ren showed me the timing notes. My final stretch had been steadier when I ran after a longer rest. She had noticed a pattern I had missed. I still wanted to discuss the change with the whole team, but I realized that her suggestion was not a way to escape work. I had treated an unfamiliar idea as proof that she was not trying.",
      "Source B — Ren’s diary: I kept watching the finish line because I was recording how our practice order affected the last stretch. I was not certain the pattern would continue during the event. I wanted the team to try a different order once and compare. When Jules rejected the idea quickly, I felt frustrated because I had not explained my notes yet.",
      "Source B continues: After practice, I brought the notes to Jules instead of arguing about who cared more. I told him, “A trial can answer a question that an argument cannot.” We agreed to ask the team to test the change. Neither of us could promise that a different order would make us win. We could promise to look at the results together before deciding."
    ],
    "question": "How does reading both diaries change our understanding of Ren’s request?",
    "options": [
      "It proves Jules does not care about the team.",
      "It shows that Ren was using observations to propose a trial, although Jules first interpreted her actions differently.",
      "It proves the new order will win the event."
    ],
    "answer": 1,
    "hint": "Compare Jules’s first assumption with Ren’s reason for watching the finish.",
    "explanation": "Ren’s account explains the purpose behind actions that Jules initially misunderstood.",
    "evidenceOptions": [
      "Jules likes knowing when his turn comes.",
      "Ren feels frustrated after the discussion.",
      "Jules assumes Ren is distracted; Ren says she is recording how the order affects the final stretch."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The contrasting accounts reveal the gap between an interpretation and the character’s stated purpose.",
    "evidenceExplanation": "The contrasting accounts reveal the gap between an interpretation and the character’s stated purpose.",
    "reasoningQuestion": "Which quotation from Ren most directly supports testing rather than arguing?",
    "reasoningOptions": [
      "“A trial can answer a question that an argument cannot.”",
      "“We agreed to ask the team to test the change.”",
      "“When Jules rejected the idea quickly, I felt frustrated because I had not explained my notes yet.”"
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "The first quotation explicitly contrasts what a trial and an argument can accomplish.",
    "reasoningExplanation": "The first quotation explicitly contrasts what a trial and an argument can accomplish.",
    "prompt": "Compare the perspectives in three short paragraphs. Explain the initial misunderstanding, use a detail from each diary, and conclude with what the accounts suggest about listening. Quote Ren accurately once.",
    "frame": "Paragraph 1: Jules first interprets…\n\nParagraph 2: Ren’s account reveals… Her words, “…” suggest…\n\nParagraph 3: Together, the diaries show…",
    "vocab": "perspective",
    "definition": "A way of understanding an event shaped by what someone knows, experiences, or values.",
    "color": "green",
    "week": 1,
    "genre": "original fictional source set",
    "talk": "Which assumption changes when a second narrator explains the same moment?"
  },
  {
    "id": "g5-field-station",
    "title": "Two Main Ideas, One Field Station",
    "subtitle": "Keep both important ideas in a summary.",
    "label": "Two Main Ideas, One Field Station",
    "focus": "Multiple main ideas",
    "pattern": "The root chron",
    "model": "The Greek root chron relates to time. Chronological order arranges events by when they happen.",
    "words": [
      "chronological",
      "chronicle",
      "synchronize"
    ],
    "wordQuestion": "What is chronological order?",
    "wordOptions": [
      "Order from shortest to longest",
      "Order by when events happen",
      "Order by the writer’s favorites"
    ],
    "wordAnswer": 1,
    "wordHint": "Use the meaning time.",
    "sources": [
      {
        "id": "A",
        "title": "Visitor orientation",
        "kind": "Information guide"
      },
      {
        "id": "B",
        "title": "Volunteer handbook",
        "kind": "Procedure guide"
      }
    ],
    "text": [
      "Source A — Visitor orientation: The fictional Pine Creek field station offers short outdoor observation walks. Before a walk, leaders introduce a question and show visitors how to record observations without filling gaps with guesses. A sketch, a counted group of objects, or a description of what was heard can all be useful. Visitors are asked to distinguish what they noticed directly from what they think might explain it.",
      "Source A continues: At the end of a walk, the group compares notes. Different observations can lead to new questions rather than a single quick answer. The station’s purpose is to help people practice careful inquiry, not to reward whoever makes the largest claim. A useful record says where and when an observation was made so later readers can understand its limits.",
      "Source B — Volunteer handbook: The station also depends on routines that let many groups share the same materials. Volunteers count clipboards before departure, mark damaged pencils for replacement, and return guide sheets to labeled folders. These tasks are not the observation lesson itself, but they make it possible for the next group to begin with the equipment it needs.",
      "Source B continues: After each visit, volunteers note missing materials and unclear directions. The coordinator uses those notes to prepare the next session. Taken together, the guides explain two connected ideas: careful observation helps visitors learn, and organized routines keep that learning opportunity available. A summary that mentions only the scenery or only the supply boxes would miss part of what the station is trying to accomplish."
    ],
    "question": "Which summary includes both main ideas?",
    "options": [
      "The station teaches careful observation and uses shared-material routines to keep visits running.",
      "The station is only a place to store pencils.",
      "Visitors must agree on one answer before leaving."
    ],
    "answer": 0,
    "hint": "Look for the purpose of each source and how the purposes connect.",
    "explanation": "The two guides describe learning practices and the routines that support them.",
    "evidenceOptions": [
      "A mentions sketches; B mentions folders.",
      "A separates observations from guesses; B explains preparing equipment for the next group.",
      "The station offers outdoor walks."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "These details show each source’s main purpose and why both matter.",
    "evidenceExplanation": "These details show each source’s main purpose and why both matter.",
    "reasoningQuestion": "Why is a summary about attractive scenery incomplete?",
    "reasoningOptions": [
      "Scenery is never worth describing.",
      "Summaries must copy the final sentence exactly.",
      "The sources focus on inquiry and organization, not on whether the scenery is attractive."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "A summary should preserve the central ideas actually developed in the sources.",
    "reasoningExplanation": "A summary should preserve the central ideas actually developed in the sources.",
    "prompt": "Write three short paragraphs explaining the station. Introduce its two main ideas, develop each with relevant details from the guides, and show how the ideas connect.",
    "frame": "Paragraph 1: The station supports… in two connected ways.\n\nParagraph 2: The orientation explains… For example…\n\nParagraph 3: The handbook adds… These routines support learning because…",
    "vocab": "inquiry",
    "definition": "A process of asking questions and using evidence to investigate them.",
    "color": "green",
    "week": 1,
    "genre": "original fictional source set",
    "talk": "What would be lost if a report included only Source A? What would be lost with only Source B?"
  },
  {
    "id": "g5-record",
    "title": "The Record That Needed a Date",
    "subtitle": "Ask whether evidence fits the question.",
    "label": "The Record That Needed a Date",
    "focus": "Source context and limits",
    "pattern": "The prefix pre- and the suffix -view family",
    "model": "Preview means to view before a main event. Review means to look again. Word parts help, but the sentence decides the intended meaning.",
    "words": [
      "preview",
      "review",
      "viewpoint"
    ],
    "wordQuestion": "Which action happens before a public opening?",
    "wordOptions": [
      "A preview for a small group",
      "A review written after the visit",
      "A memory of last year’s opening"
    ],
    "wordAnswer": 0,
    "wordHint": "Use pre-, meaning before.",
    "sources": [
      {
        "id": "A",
        "title": "An undated note",
        "kind": "Personal record"
      },
      {
        "id": "B",
        "title": "A dated schedule",
        "kind": "Planning record"
      },
      {
        "id": "C",
        "title": "A later interview",
        "kind": "Recollection"
      }
    ],
    "text": [
      "Source A — Undated note: A student finds a handwritten note in a box of theater records. It says, “We moved the afternoon performance into the library, and the audience sat between the shelves.” The note names the play but gives no date. The student wants to use it in a report about the theater club’s opening week in its new room. First, she needs to know which performance the note describes.",
      "Source B — Dated schedule: A printed schedule from the opening week lists performances in the new theater room on Thursday and Friday. It also lists a library preview on the previous Tuesday. The schedule was printed before the events, so it documents plans rather than proving that every performance happened exactly as listed. Still, its dates provide useful context that the handwritten note lacks.",
      "Source C — Later interview: A former club member remembers performing in the library but says he cannot recall whether it was a preview or a changed performance. He recognizes the handwriting as a classmate’s and suggests checking that classmate’s dated notebook. His memory supports the possibility of a library event, but it does not resolve when the note was written.",
      "Reader’s task: The records do not yet justify saying that the opening-night show was moved. A careful report can describe a documented plan for a library preview and an undated account of a library performance. It can then identify the missing connection. Finding another relevant dated record would be more useful than repeating an uncertain conclusion with greater confidence."
    ],
    "question": "What is the most useful next step before claiming the opening-night show moved?",
    "options": [
      "Treat the handwriting as proof of a date.",
      "Find a dated record linking the note to a particular performance.",
      "Ignore every source except the schedule."
    ],
    "answer": 1,
    "hint": "The unresolved issue is which event the undated note describes.",
    "explanation": "A dated connection is needed; neither the note nor the interview supplies it.",
    "evidenceOptions": [
      "The note mentions shelves.",
      "The theater club had a new room.",
      "A has no date, B lists a separate library preview, and C cannot identify which event is remembered."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The sources leave the event’s identity unresolved, so another dated record is needed.",
    "evidenceExplanation": "The sources leave the event’s identity unresolved, so another dated record is needed.",
    "reasoningQuestion": "Why do three mentions of the library not prove the opening-night claim?",
    "reasoningOptions": [
      "They may concern different events, and none connects the undated note to opening night.",
      "A library cannot host a performance.",
      "Three sources must always disagree."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "Repeated words are not enough; the sources must refer to the same event for that conclusion.",
    "reasoningExplanation": "Repeated words are not enough; the sources must refer to the same event for that conclusion.",
    "prompt": "Write a three-paragraph source report: what the records establish, what remains uncertain, and what you would seek next. Identify A, B, and C and avoid turning plans into confirmed events.",
    "frame": "Paragraph 1: Source A records… Source B establishes a plan for…\n\nParagraph 2: Source C adds… However…\n\nParagraph 3: Before concluding… I would look for…",
    "vocab": "context",
    "definition": "The circumstances that help explain the meaning and limits of information.",
    "color": "green",
    "week": 1,
    "genre": "original fictional source set",
    "talk": "What exact question would you ask when looking for another record?"
  },
  {
    "id": "g5-workshop",
    "title": "Three Notes About a Workshop",
    "subtitle": "Organize several needs into one explanation.",
    "label": "Three Notes About a Workshop",
    "focus": "Synthesis by topic",
    "pattern": "The root tele",
    "model": "The Greek root tele means far. Telecommunications send information over a distance.",
    "words": [
      "telephone",
      "television",
      "teleconference"
    ],
    "wordQuestion": "What does tele- suggest in teleconference?",
    "wordOptions": [
      "A meeting held only outdoors",
      "A meeting without a topic",
      "People communicating over a distance"
    ],
    "wordAnswer": 2,
    "wordHint": "Use the root meaning far.",
    "sources": [
      {
        "id": "A",
        "title": "Participant comments",
        "kind": "Feedback"
      },
      {
        "id": "B",
        "title": "Instructor notes",
        "kind": "Teaching observations"
      },
      {
        "id": "C",
        "title": "Supply record",
        "kind": "Material count"
      }
    ],
    "text": [
      "Source A — Participant comments: After a model-bridge workshop, visitors praised the chance to try their own designs. Several said the opening explanation contained too many steps to remember at once. Two wished they could see the instructions again after starting. The comments came from visitors who chose to return a feedback card, so they did not represent every person who attended.",
      "Source B — Instructor notes: The instructor demonstrated the entire build before handing out materials. During work time, many visitors asked the same questions about the first fold and the order of later steps. When the instructor showed a step again at one table, visitors there often continued independently. The notes suggest that access to instructions during work may matter, although they do not measure long-term learning.",
      "Source C — Supply record: Each table received twelve sheets of paper. Two tables requested more while testing repeated designs; another table returned several sheets unused. The supply helper recorded different amounts of experimentation, not simply waste. A future plan could keep extra paper in a shared location while asking groups to take a few sheets at a time.",
      "Reader’s task: A report could organize these notes around two topics: access to instructions and access to materials. Sources A and B overlap on the first topic, while Source C adds a different practical need. Copying three summaries in a row would preserve facts, but grouping related evidence can explain how the observations contribute to one improved workshop plan."
    ],
    "question": "Which plan integrates the notes most directly?",
    "options": [
      "Offer step cards during work and a shared supply area for additional testing.",
      "Remove independent design time entirely.",
      "Give every group unlimited paper and no instructions."
    ],
    "answer": 0,
    "hint": "Connect repeated instruction needs with uneven material use.",
    "explanation": "Step cards address A and B; a shared supply area responds to C.",
    "evidenceOptions": [
      "Visitors liked their own designs.",
      "A requests instructions to revisit, B records repeated step questions, and C shows different extra-paper needs.",
      "The instructor used tables."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The three details explain why the plan needs both instructional and material changes.",
    "evidenceExplanation": "The three details explain why the plan needs both instructional and material changes.",
    "reasoningQuestion": "Why group A and B together rather than give each source an unrelated paragraph?",
    "reasoningOptions": [
      "They were written by the same person.",
      "They prove all visitors had identical experiences.",
      "They address the same need, while C contributes a second part of the plan."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "Synthesis organizes evidence by the ideas it helps explain, while keeping source labels clear.",
    "reasoningExplanation": "Synthesis organizes evidence by the ideas it helps explain, while keeping source labels clear.",
    "prompt": "Use three paragraphs to explain a revised workshop plan. Group related evidence, name all three sources, and end with a check that could show whether the plan helps.",
    "frame": "Paragraph 1: The workshop needs…\n\nParagraph 2: Sources A and B suggest… Source C adds…\n\nParagraph 3: I recommend… A follow-up check would…",
    "vocab": "synthesis",
    "definition": "An explanation that connects relevant information from several sources.",
    "color": "blue",
    "week": 2,
    "genre": "original fictional source set",
    "talk": "Which two sources overlap? Which one adds a different need?"
  },
  {
    "id": "g5-garden-trial",
    "title": "When Results Seem to Disagree",
    "subtitle": "Compare conditions before choosing a conclusion.",
    "label": "When Results Seem to Disagree",
    "focus": "Conflicting findings",
    "pattern": "The suffix -ize",
    "model": "The suffix -ize can form a verb meaning to make or put into a condition. Standardize means to make consistent with a standard.",
    "words": [
      "standardize",
      "organize",
      "summarize"
    ],
    "wordQuestion": "What does standardize the procedure mean?",
    "wordOptions": [
      "Use a different procedure each time",
      "Make the procedure consistent",
      "Stop recording the procedure"
    ],
    "wordAnswer": 1,
    "wordHint": "Think about making the steps comparable.",
    "sources": [
      {
        "id": "A",
        "title": "Trial A",
        "kind": "Observation log"
      },
      {
        "id": "B",
        "title": "Trial B",
        "kind": "Observation log"
      },
      {
        "id": "C",
        "title": "Review note",
        "kind": "Method comparison"
      }
    ],
    "text": [
      "Source A — Trial A: A class tested two labels for returning garden tools. During a small-group session, all six participants returned tools to the marked hooks without help. The labels included a tool picture and its name. The observer concluded that the labels were easy for that group to use under those conditions. The observer did not claim to have tested every visitor or every time of day.",
      "Source B — Trial B: Another group used the same labels during a crowded open-house visit. Four of ten participants asked where to return a tool. Some hooks were hidden behind a temporary display board, and visitors approached from several directions. The observer wrote that the return area needed improvement. This report seemed to contradict the first trial if readers looked only at the overall judgments.",
      "Source C — Review note: The class compared what had changed between trials. The label design was the same, but visibility, crowding, and participant groups differed. The reports could both accurately describe their own sessions. To learn more about label usefulness, the class proposed another observation with clear sightlines and a consistent method for recording requests for help.",
      "Reader’s task: A useful conclusion should explain the conditions attached to each result rather than declaring one observer wrong. The first trial shows that a small group used the visible labels without help. The second reveals problems in a different arrangement. Together, the reports identify conditions worth checking before making a broad claim about whether the labels work."
    ],
    "question": "What best explains the different conclusions?",
    "options": [
      "One observer must have invented the results.",
      "The labels changed into a different language.",
      "The trials had different conditions that could affect how easily people found the hooks."
    ],
    "answer": 2,
    "hint": "Compare visibility, crowds, and groups rather than only the labels.",
    "explanation": "The conditions differed, so both results can be accurate descriptions of their own trials.",
    "evidenceOptions": [
      "A used visible hooks in a small session; B included crowding and hooks hidden by a board; C identifies these differences.",
      "Both trials included tools.",
      "Trial A had six people and therefore must be more accurate."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "The details identify plausible differences relevant to the task.",
    "evidenceExplanation": "The details identify plausible differences relevant to the task.",
    "reasoningQuestion": "Why is “the two reports disagree, so one is false” too strong?",
    "reasoningOptions": [
      "All observations have the same conditions.",
      "Different contexts can produce different results without either record being false.",
      "A larger group always gives a perfect answer."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "Explain the differences that matter before judging whether the records actually conflict.",
    "reasoningExplanation": "Explain the differences that matter before judging whether the records actually conflict.",
    "prompt": "Explain the apparent disagreement in three paragraphs. Describe each trial, connect the relevant differences, and propose a fair next observation without claiming a cause has been proven.",
    "frame": "Paragraph 1: Trial A reports… Trial B reports…\n\nParagraph 2: The review points out… This may explain…\n\nParagraph 3: A useful next observation would…",
    "vocab": "variable",
    "definition": "A condition or feature that can change and may affect a result.",
    "color": "blue",
    "week": 2,
    "genre": "original fictional source set",
    "talk": "Which condition would you keep consistent, and what question would that help answer?"
  },
  {
    "id": "g5-voices",
    "title": "The Same Story, Different Light",
    "subtitle": "Compare a narrator’s focus with a scene.",
    "label": "The Same Story, Different Light",
    "focus": "Narration and interpretation",
    "pattern": "Figurative meaning in context",
    "model": "A phrase can mean more than its literal words. In “The idea opened a door,” it suggests a new opportunity, not necessarily a real door.",
    "words": [
      "opportunity",
      "possibility",
      "opening"
    ],
    "wordQuestion": "What does “The idea opened a door” most likely mean?",
    "wordOptions": [
      "The idea created a new possibility",
      "The idea repaired a wooden frame",
      "The idea closed the discussion"
    ],
    "wordAnswer": 0,
    "wordHint": "Use the figurative meaning from the model.",
    "sources": [
      {
        "id": "A",
        "title": "Mina’s narration",
        "kind": "First-person fiction"
      },
      {
        "id": "B",
        "title": "A rehearsal scene",
        "kind": "Third-person fiction"
      }
    ],
    "text": [
      "Source A — Mina’s narration: I thought the rehearsal belonged to the loudest voices. Whenever I began a suggestion, someone spoke over the end of it. I kept my drawing of the stage in my notebook. When Devon asked why I had stopped talking, I said the design probably would not work anyway. The truth was that I had not had a chance to explain it.",
      "Source A continues: Devon asked everyone to look at the drawing before responding. For the first time that afternoon, I could finish a sentence without rushing. My design did not solve every problem; one entrance still needed to move. But the group used part of it, and I felt that the rehearsal had become a place where my ideas could be examined rather than guessed at.",
      "Source B — Rehearsal scene: Devon noticed Mina close her notebook while two actors debated the position of a bench. He asked to see her sketch and placed it in the center of the table. “Let’s hear the whole explanation first,” he told the group. The actors paused while Mina described a route behind the bench that could clear the middle of the stage.",
      "Source B continues: One actor questioned where the route ended. Mina drew a second entrance, and the group tested the path on the floor. The scene describes visible actions and dialogue without directly reporting Mina’s private feelings. Alongside her narration, it helps readers connect a change in how the group listens with a change in participation, while showing that listening still leaves room for questions and revision."
    ],
    "question": "What understanding comes from reading the accounts together?",
    "options": [
      "Listening requires accepting an idea without questions.",
      "A chance to explain fully helps Mina contribute, and discussion can still improve the idea.",
      "Mina’s first drawing solves every problem immediately."
    ],
    "answer": 1,
    "hint": "Connect Mina’s feelings with the actions shown in the scene.",
    "explanation": "The sources show how respectful listening supports participation and useful revision.",
    "evidenceOptions": [
      "There is a bench on the stage.",
      "Devon places a notebook on a table.",
      "A describes Mina finishing her explanation; B shows the group listening and then testing a revised route."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The pair connects participation with thoughtful discussion rather than automatic agreement.",
    "evidenceExplanation": "The pair connects participation with thoughtful discussion rather than automatic agreement.",
    "reasoningQuestion": "What does Source A add that Source B does not directly provide?",
    "reasoningOptions": [
      "Mina’s own account of how interrupted speech and later attention felt.",
      "The exact words Devon says to the group.",
      "A description of the revised entrance on the floor."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "A first-person narrator can reveal thoughts and feelings that an external scene does not state.",
    "reasoningExplanation": "A first-person narrator can reveal thoughts and feelings that an external scene does not state.",
    "prompt": "Compare the two presentations in three paragraphs. Explain what each reveals, quote a short line accurately, and connect the accounts to an idea about listening and revision.",
    "frame": "Paragraph 1: Source A emphasizes…\n\nParagraph 2: Source B shows… The line “…” supports…\n\nParagraph 3: Read together, the accounts suggest…",
    "vocab": "narration",
    "definition": "The telling of events from a particular point of view.",
    "color": "blue",
    "week": 2,
    "genre": "original fictional source set",
    "talk": "How would your interpretation change if you read only the scene and not Mina’s narration?"
  },
  {
    "id": "g5-timeline",
    "title": "A Timeline Is Not an Explanation",
    "subtitle": "Distinguish sequence from cause.",
    "label": "A Timeline Is Not an Explanation",
    "focus": "Relationships among events",
    "pattern": "The prefix post-",
    "model": "The prefix post- can mean after. A post-event review takes place after an event.",
    "words": [
      "postwar",
      "postgame",
      "post-event"
    ],
    "wordQuestion": "When does a post-event review happen?",
    "wordOptions": [
      "During the first announcement",
      "Before planning begins",
      "After the event"
    ],
    "wordAnswer": 2,
    "wordHint": "Use post-, meaning after.",
    "sources": [
      {
        "id": "A",
        "title": "Project timeline",
        "kind": "Dated sequence"
      },
      {
        "id": "B",
        "title": "Team interview",
        "kind": "Explanation of choices"
      },
      {
        "id": "C",
        "title": "Budget note",
        "kind": "Resource information"
      }
    ],
    "text": [
      "Source A — Project timeline: Monday: the model club ordered new wheels. Tuesday: the team changed the shape of its cart. Wednesday: the team shortened the track. Thursday: the cart reached the end without stopping. A reporter reading the timeline assumed that the new wheels caused the successful run because the order appeared before the success. The timeline itself did not explain the reason for any change.",
      "Source B — Team interview: The builders said the wheels had not arrived by Thursday. They used the old set during the successful run. They changed the cart’s shape because a wide corner caught against a guide rail. They shortened the track to fit a smaller demonstration space, not to test how far the cart could travel. Each decision answered a different need.",
      "Source C — Budget note: The wheel order was canceled after the team found an unused matching set in storage. The note records spending decisions; it does not measure cart speed or explain every design choice. It confirms that placing an order is different from receiving and using a part, a distinction missing from the reporter’s first interpretation.",
      "Reader’s task: Events appearing in a time sequence may be related, but earlier timing alone does not prove a cause. The interview gives reasons and clarifies which materials were used. The budget note adds another check on the wheel story. A careful explanation should connect the successful run to relevant design information while acknowledging that several conditions changed and no controlled comparison is described."
    ],
    "question": "Why is the claim that new wheels caused Thursday’s success unsupported?",
    "options": [
      "The interview says the new wheels had not arrived and the old wheels were used.",
      "Timelines can never contain useful facts.",
      "Thursday occurred before Monday."
    ],
    "answer": 0,
    "hint": "Separate ordering a part from actually using it.",
    "explanation": "A supposed cause cannot explain this run if that part was not used.",
    "evidenceOptions": [
      "The club had a budget.",
      "B states that the new wheels had not arrived; C distinguishes an order from receiving and using parts.",
      "A lists events on four days."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "These details directly challenge the assumption that ordered wheels were used.",
    "evidenceExplanation": "These details directly challenge the assumption that ordered wheels were used.",
    "reasoningQuestion": "Why does the timeline alone not establish the cause of success?",
    "reasoningOptions": [
      "Every earlier event causes every later event.",
      "A timeline is always a personal opinion.",
      "It records order but not the relevant mechanisms or whether the ordered parts were used."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "Use sequence to locate events and other evidence to explain relationships.",
    "reasoningExplanation": "Use sequence to locate events and other evidence to explain relationships.",
    "prompt": "Write an explanatory report in three paragraphs. Correct the wheel claim, explain what each source contributes, and identify what would still be needed to test a cause of success.",
    "frame": "Paragraph 1: The timeline shows… but it does not show…\n\nParagraph 2: The interview explains… The budget note adds…\n\nParagraph 3: A careful conclusion is… To test…",
    "vocab": "causation",
    "definition": "A relationship in which one event or condition helps bring about another.",
    "color": "blue",
    "week": 2,
    "genre": "original fictional source set",
    "talk": "What would make a stronger test of whether one design change improved the cart?"
  },
  {
    "id": "g5-water-station",
    "title": "A Recommendation with Conditions",
    "subtitle": "Use evidence and acknowledge a limit.",
    "label": "A Recommendation with Conditions",
    "focus": "Reasoned recommendation",
    "pattern": "The suffix -ity",
    "model": "The suffix -ity can turn a quality into a noun: flexible → flexibility. Spelling may change when a suffix is added.",
    "words": [
      "flexibility",
      "visibility",
      "accessibility"
    ],
    "wordQuestion": "Which word names the quality of being easy to see?",
    "wordOptions": [
      "flexibility",
      "visibility",
      "activity"
    ],
    "wordAnswer": 1,
    "wordHint": "Start with visible.",
    "sources": [
      {
        "id": "A",
        "title": "Visitor survey",
        "kind": "Preferences"
      },
      {
        "id": "B",
        "title": "Caretaker report",
        "kind": "Maintenance observations"
      },
      {
        "id": "C",
        "title": "Room plan",
        "kind": "Space constraints"
      }
    ],
    "text": [
      "Source A — Visitor survey: At a fictional community art room, fifteen of twenty respondents wanted drinking water closer to the workshop tables. Several said they missed part of an explanation when walking to the hallway fountain. Five were satisfied with the current arrangement. The survey asked about convenience, not about the cost or upkeep of a new station, and only people who returned a form were counted.",
      "Source B — Caretaker report: A refill station would need space for cleaning and a clear routine for checking spills. During a temporary trial, the caretaker found water near the busiest table twice. The report did not recommend abandoning the idea. It suggested placing the station away from worktables and assigning a regular check during each session.",
      "Source C — Room plan: The corner beside the storage wall has open space and is visible from the instructor’s desk. The entrance corner has more passing traffic, and a station there would narrow the walking route. The plan identifies possible locations but does not show whether every visitor can use a proposed setup comfortably. That would need checking during a trial.",
      "Reader’s task: A strong recommendation can recognize a preference without pretending it settles every practical question. The three sources support considering a visible location away from crowded work areas, with upkeep and visitor access checked. They do not establish that the station should be installed immediately with no review. The recommendation should state conditions under which the idea would be worth trying."
    ],
    "question": "Which recommendation best uses all three sources?",
    "options": [
      "Install a station at the entrance and stop checking it.",
      "Reject the idea because five people liked the old arrangement.",
      "Trial a station near the storage wall with spill checks and a review of visitor access."
    ],
    "answer": 2,
    "hint": "Use convenience, upkeep, and room layout together.",
    "explanation": "The trial responds to the preference while addressing maintenance and space concerns.",
    "evidenceOptions": [
      "A favors closer water, B calls for spill checks away from tables, and C identifies visible space by the storage wall.",
      "A has twenty respondents.",
      "The room has an entrance."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "Each source contributes a different condition needed for the recommendation.",
    "evidenceExplanation": "Each source contributes a different condition needed for the recommendation.",
    "reasoningQuestion": "Why include a trial and an access review instead of claiming the plan is proven?",
    "reasoningOptions": [
      "Preferences automatically establish all practical details.",
      "The sources describe needs and possible locations but leave some outcomes untested.",
      "Every trial must end in failure."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "Acknowledge the gap between a supported proposal and a demonstrated result.",
    "reasoningExplanation": "Acknowledge the gap between a supported proposal and a demonstrated result.",
    "prompt": "Write three paragraphs recommending a conditional trial. State your position, support it with A/B/C, address one concern, and explain how the trial should be reviewed.",
    "frame": "Paragraph 1: I recommend… under these conditions…\n\nParagraph 2: Source A… Source B… Source C…\n\nParagraph 3: A concern is… The trial should check…",
    "vocab": "conditional",
    "definition": "Depending on certain requirements or circumstances.",
    "color": "amber",
    "week": 3,
    "genre": "original fictional source set",
    "talk": "Which condition is most important to your recommendation, and which source supports it?"
  },
  {
    "id": "g5-time-tradeoff",
    "title": "More Time for What?",
    "subtitle": "Respond to a reasonable opposing concern.",
    "label": "More Time for What?",
    "focus": "Reasons and counterpoints",
    "pattern": "The root bene",
    "model": "The Latin root bene means well or good. A benefit is an advantage or helpful result.",
    "words": [
      "benefit",
      "beneficial",
      "benefactor"
    ],
    "wordQuestion": "What does beneficial suggest?",
    "wordOptions": [
      "Helpful or producing a good result",
      "Written long ago",
      "Impossible to compare"
    ],
    "wordAnswer": 0,
    "wordHint": "Use the root’s connection to good.",
    "sources": [
      {
        "id": "A",
        "title": "Student proposal",
        "kind": "Opinion"
      },
      {
        "id": "B",
        "title": "Facilitator response",
        "kind": "Practical concern"
      },
      {
        "id": "C",
        "title": "Session schedule",
        "kind": "Time record"
      }
    ],
    "text": [
      "Source A — Student proposal: Our design club should extend discussion time after each building challenge. We learn from hearing why a model failed and what another team would change. Last week, three groups had ideas to share when the session ended. Ten more minutes of discussion could help us compare strategies instead of leaving each group’s learning at its own table.",
      "Source B — Facilitator response: I agree that reflection matters, but the session cannot end later because another group uses the room. Ten extra minutes must come from somewhere else. Cleanup cannot be skipped, and reducing building time too much may leave teams without a model to discuss. I suggest choosing a clear discussion question and testing a smaller change first.",
      "Source C — Session schedule: The current sixty-minute meeting includes a ten-minute introduction, thirty-five minutes of building, five minutes of discussion, and ten minutes of cleanup. The last two introductions repeated several directions already printed on the project cards. A shorter introduction might recover some time, but newcomers would still need access to the essential instructions.",
      "Reader’s task: These sources support treating time as a trade-off rather than adding minutes that do not exist. A possible trial is to shorten repeated introductory material while preserving essential directions and cleanup, then use the recovered time for focused discussion. A reasoned response should address the facilitator’s concern directly, because the room schedule remains a real limit even when the proposed learning benefit is attractive."
    ],
    "question": "Which response best addresses the facilitator’s concern?",
    "options": [
      "Keep the same schedule but promise ten extra minutes.",
      "Trial a shorter, clear introduction and use recovered time for focused discussion without cutting cleanup.",
      "Cancel cleanup so discussion can continue indefinitely."
    ],
    "answer": 1,
    "hint": "Locate time that can change without ignoring the fixed ending.",
    "explanation": "The schedule identifies repeated introductory content as a possible source of time, with essential directions preserved.",
    "evidenceOptions": [
      "Students like discussion.",
      "The room is used by another group.",
      "A requests reflection, B requires a fixed end and cleanup, and C identifies repeated introductory directions."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The combined evidence connects the desired benefit to a practical way of respecting the limits.",
    "evidenceExplanation": "The combined evidence connects the desired benefit to a practical way of respecting the limits.",
    "reasoningQuestion": "Why should the response include Source B rather than dismiss it?",
    "reasoningOptions": [
      "Its time constraint affects whether the proposal can actually be carried out.",
      "Every concern disproves the original idea.",
      "The facilitator’s title makes all other evidence irrelevant."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "Addressing a relevant concern strengthens a proposal by showing how it could work.",
    "reasoningExplanation": "Addressing a relevant concern strengthens a proposal by showing how it could work.",
    "prompt": "Write a three-paragraph recommendation. Explain the benefit, address the time concern using the schedule, and describe a trial with a clear review question.",
    "frame": "Paragraph 1: More reflection could…\n\nParagraph 2: However, Source B… Source C suggests…\n\nParagraph 3: I propose a trial… We should check…",
    "vocab": "counterpoint",
    "definition": "A relevant concern or different view that responds to a claim.",
    "color": "amber",
    "week": 3,
    "genre": "original fictional source set",
    "talk": "What would you look for to decide whether shorter introductions still support newcomers?"
  },
  {
    "id": "g5-survey-change",
    "title": "A Survey Is Not a Vote for Everything",
    "subtitle": "Match each finding to the question asked.",
    "label": "A Survey Is Not a Vote for Everything",
    "focus": "Scope of a claim",
    "pattern": "The prefix over-",
    "model": "The prefix over- can mean too much. Overstate means to express something more strongly than the facts support.",
    "words": [
      "overstate",
      "overestimate",
      "overload"
    ],
    "wordQuestion": "What does overstate a result mean?",
    "wordOptions": [
      "Describe it with a source label",
      "Express it more strongly than the evidence supports",
      "Ask a follow-up question"
    ],
    "wordAnswer": 1,
    "wordHint": "Think about a statement going too far.",
    "sources": [
      {
        "id": "A",
        "title": "Interest survey",
        "kind": "Responses"
      },
      {
        "id": "B",
        "title": "Follow-up comments",
        "kind": "Open-ended feedback"
      },
      {
        "id": "C",
        "title": "Draft announcement",
        "kind": "Proposed public wording"
      }
    ],
    "text": [
      "Source A — Interest survey: Thirty students answered whether they would be interested in an after-school storytelling club. Twenty-two chose yes, five chose maybe, and three chose no. The form did not ask which day students could attend or whether they had transportation. It measured stated interest among respondents, not actual attendance at a future meeting.",
      "Source B — Follow-up comments: Several interested students said they already had activities on Tuesdays. Others wanted to know whether the club would include drawing and oral storytelling as well as writing. One student asked if an adult could collect them later than usual. These comments added planning questions that the yes/maybe/no choices did not capture.",
      "Source C — Draft announcement: “Nearly everyone will attend our Tuesday writing club!” The student editor underlined three problems. The survey did not include every student, interest did not guarantee attendance, and Tuesday writing meetings had not been described in the original question. A more accurate announcement could report interest and invite students to discuss possible formats and schedules.",
      "Reader’s task: Each finding should be connected to the question and group that produced it. The survey offers a reason to explore a club. The comments show what planners still need to learn. The draft announcement shows how a claim can grow beyond its sources when interest becomes a promise of attendance and an unasked question becomes an assumed agreement."
    ],
    "question": "Which announcement best fits the sources?",
    "options": [
      "Every student has agreed to attend on Tuesday.",
      "Nobody is interested because scheduling questions remain.",
      "Twenty-two of thirty respondents expressed interest; planners still need to discuss meeting times and activities."
    ],
    "answer": 2,
    "hint": "Keep interest, attendance, timing, and activity choices separate.",
    "explanation": "The revised wording reports the result while preserving the unanswered planning questions.",
    "evidenceOptions": [
      "A asked about interest only; B raises scheduling and activity questions; C assumes attendance at a Tuesday writing club.",
      "The form had three answer choices.",
      "One student mentioned an adult."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "The sources show exactly where the draft adds conclusions the survey did not establish.",
    "evidenceExplanation": "The sources show exactly where the draft adds conclusions the survey did not establish.",
    "reasoningQuestion": "Why is the new announcement more accurate?",
    "reasoningOptions": [
      "It makes the club sound more exciting.",
      "It identifies the measured group and leaves unasked questions open.",
      "It changes every maybe response to yes."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "Report what was asked and learned without turning it into a wider agreement.",
    "reasoningExplanation": "Report what was asked and learned without turning it into a wider agreement.",
    "prompt": "Write a three-paragraph explanation for the student editor. Report the findings, explain two overclaims in the draft using source labels, and propose a useful follow-up question.",
    "frame": "Paragraph 1: Source A establishes…\n\nParagraph 2: The announcement overstates… Source B shows…\n\nParagraph 3: A more accurate message would… Next, ask…",
    "vocab": "scope",
    "definition": "The range of people, situations, or questions a statement covers.",
    "color": "amber",
    "week": 3,
    "genre": "original fictional source set",
    "talk": "What question would you add to learn about actual attendance rather than interest?"
  },
  {
    "id": "g5-sound-map",
    "title": "A Sound Map for the School",
    "subtitle": "Use complementary sources for a decision.",
    "label": "A Sound Map for the School",
    "focus": "Integrating three perspectives",
    "pattern": "The suffix -ive",
    "model": "The suffix -ive can form an adjective describing a quality or tendency: support → supportive.",
    "words": [
      "supportive",
      "effective",
      "reflective"
    ],
    "wordQuestion": "Which word describes something that provides support?",
    "wordOptions": [
      "supportive",
      "supporter",
      "supporting yesterday"
    ],
    "wordAnswer": 0,
    "wordHint": "Look for the adjective ending in -ive.",
    "sources": [
      {
        "id": "A",
        "title": "Student sound map",
        "kind": "Location observations"
      },
      {
        "id": "B",
        "title": "Teacher comments",
        "kind": "Learning needs"
      },
      {
        "id": "C",
        "title": "Caretaker route",
        "kind": "Movement needs"
      }
    ],
    "text": [
      "Source A — Student sound map: A class marked sounds heard in different school spaces during a single afternoon. The hall beside the music room had repeated singing during practice. The reading alcove was quieter, except when classes passed through on their way outside. The map recorded locations and times; it did not measure exact sound levels or describe every day of the week.",
      "Source B — Teacher comments: Teachers wanted a place for small groups to rehearse spoken presentations without interrupting quiet reading. They did not want a completely silent school, because discussion and performance were part of learning. One teacher suggested reserving a nearby meeting room for short rehearsal periods if a simple booking system could prevent overlap.",
      "Source C — Caretaker route: The meeting room could be used after materials were moved away from its doorway. The alcove, however, could not be blocked off because it lay beside a regular route between classrooms and the outside doors. Any plan needed to keep movement clear rather than treating an apparently empty space as permanently available.",
      "Reader’s task: A useful recommendation should combine where sounds occur, what learning activities need, and how people move through the building. The sources support exploring scheduled use of the meeting room after its entrance is cleared. They do not support forbidding all sound or closing a passage. Additional observations at other times would help the class see whether the first afternoon’s map describes a recurring pattern."
    ],
    "question": "Which recommendation best combines the sources?",
    "options": [
      "Close the alcove route whenever anyone reads.",
      "Explore scheduled rehearsals in the meeting room after clearing its doorway, and collect more observations.",
      "Ban all spoken activities across the school."
    ],
    "answer": 1,
    "hint": "Account for sound, learning, and clear movement together.",
    "explanation": "The plan addresses rehearsal needs without blocking a regular route or claiming one map describes every day.",
    "evidenceOptions": [
      "The class made a map in one afternoon.",
      "The music room contains singing.",
      "A identifies a passing route through the alcove, B suggests rehearsal space, and C describes conditions for using the meeting room."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "Each source adds a different requirement that shapes the recommendation.",
    "evidenceExplanation": "Each source adds a different requirement that shapes the recommendation.",
    "reasoningQuestion": "Why are the caretaker’s notes relevant even though they do not describe teaching?",
    "reasoningOptions": [
      "They identify space and movement constraints that affect whether a learning plan is workable.",
      "Only maintenance staff can decide what students learn.",
      "They prove the sound map is false."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "Sources can contribute different kinds of information to the same decision.",
    "reasoningExplanation": "Sources can contribute different kinds of information to the same decision.",
    "prompt": "Write a three-paragraph recommendation using A, B, and C. Organize by needs rather than listing each source separately, and include a limitation and follow-up observation.",
    "frame": "Paragraph 1: The school needs…\n\nParagraph 2: The sound map… Teachers… The caretaker…\n\nParagraph 3: I recommend… Because the map covers only…",
    "vocab": "complementary",
    "definition": "Adding a useful part that another source or idea does not provide.",
    "color": "amber",
    "week": 3,
    "genre": "original fictional source set",
    "talk": "Which source would be easiest to overlook? What problem might that create?"
  },
  {
    "id": "g5-outline",
    "title": "An Outline with a Job",
    "subtitle": "Group evidence by the explanation it supports.",
    "label": "An Outline with a Job",
    "focus": "Planning across sources",
    "pattern": "The root form",
    "model": "The root form relates to shape. Transform means to change form, while reform can mean to improve by changing.",
    "words": [
      "transform",
      "formation",
      "reform"
    ],
    "wordQuestion": "What does transform mean?",
    "wordOptions": [
      "Keep exactly the same shape",
      "Count without changing",
      "Change in form or character"
    ],
    "wordAnswer": 2,
    "wordHint": "Connect trans- and form with a change of form.",
    "sources": [
      {
        "id": "A",
        "title": "Book exchange log",
        "kind": "Participation record"
      },
      {
        "id": "B",
        "title": "Reader interviews",
        "kind": "User experience"
      },
      {
        "id": "C",
        "title": "Volunteer notes",
        "kind": "Practical routine"
      }
    ],
    "text": [
      "Source A — Book exchange log: Over four meetings, a class recorded which book-exchange tables visitors used. The table with books grouped by topic received many visits, while several visitors missed the small return basket near the doorway. The log described use of the display; it did not show whether every borrowed book was read or enjoyed.",
      "Source B — Reader interviews: Readers said topic labels helped them begin browsing, but some wanted short descriptions that explained more than the title. One reader discovered a book by hearing another visitor describe it. These interviews suggest that both organization and personal recommendations can help readers choose, although the small group interviewed cannot speak for everyone.",
      "Source C — Volunteer notes: Volunteers found it easier to restock books when each table had a labeled storage box. They also reported that returned books sometimes appeared on the wrong table. A large, clearly marked return point would simplify sorting. The notes focus on keeping the exchange usable over time, rather than on deciding which books individual readers should like.",
      "Writing task: The class wants an explanatory article about making a book exchange easy to use. An outline could group evidence under finding books, choosing books, and returning/restocking books. Each section would have a job and could draw from more than one source. Organizing only by the order in which the notes were collected would hide useful connections between visitor experience and volunteer routines."
    ],
    "question": "Which outline best matches the article’s purpose?",
    "options": [
      "Finding books; choosing books; returning and restocking books",
      "Source A copied in full; Source B copied in full; Source C omitted",
      "The longest quotation; the shortest quotation; the writer’s favorite word"
    ],
    "answer": 0,
    "hint": "Organize around the tasks readers need explained.",
    "explanation": "Task-based sections connect evidence to the article’s purpose.",
    "evidenceOptions": [
      "A has four meetings in its log.",
      "A records missed returns, while C explains sorting problems and a clearer return point.",
      "B includes an interview."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "These details belong together in a section explaining the return process.",
    "evidenceExplanation": "These details belong together in a section explaining the return process.",
    "reasoningQuestion": "Why place the missed-return and sorting details in the same section?",
    "reasoningOptions": [
      "They have the same number of words.",
      "They were necessarily written by one person.",
      "They explain connected parts of returning books, even though they come from different sources."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "A section’s purpose determines which relevant evidence belongs together.",
    "reasoningExplanation": "A section’s purpose determines which relevant evidence belongs together.",
    "prompt": "Use source notes to plan a three-paragraph explanation organized by finding, choosing, and returning books. Give each paragraph a clear focus and connect details from at least two sources overall.",
    "frame": "Paragraph 1 — Finding: …\n\nParagraph 2 — Choosing: …\n\nParagraph 3 — Returning and keeping the exchange useful: …",
    "vocab": "coherence",
    "definition": "The quality of ideas fitting together in a clear, understandable way.",
    "color": "green",
    "week": 4,
    "genre": "original fictional source set",
    "talk": "Can you state the job of each paragraph in a few words?"
  },
  {
    "id": "g5-quote",
    "title": "A Quotation Needs a Frame",
    "subtitle": "Keep a speaker’s meaning intact.",
    "label": "A Quotation Needs a Frame",
    "focus": "Quotation and paraphrase",
    "pattern": "The prefix mis-",
    "model": "The prefix mis- can mean wrongly. Misrepresent means to describe someone or something inaccurately.",
    "words": [
      "misrepresent",
      "misinterpret",
      "misquote"
    ],
    "wordQuestion": "What does misquote mean?",
    "wordOptions": [
      "Repeat a quotation exactly",
      "Quote someone inaccurately",
      "List the source of a quotation"
    ],
    "wordAnswer": 1,
    "wordHint": "Use mis-, meaning wrongly.",
    "sources": [
      {
        "id": "A",
        "title": "Designer interview",
        "kind": "Direct quotation"
      },
      {
        "id": "B",
        "title": "Trial record",
        "kind": "Observed conditions"
      },
      {
        "id": "C",
        "title": "Draft review",
        "kind": "Proposed wording"
      }
    ],
    "text": [
      "Source A — Designer interview: Asked about a new puzzle display, the designer said, “The larger labels helped some visitors, but we still need to check the layout with people who approach from the side.” She explained that larger print was one change, not a guarantee that every visitor could find every puzzle. Her response included both a positive observation and a remaining question.",
      "Source B — Trial record: The first trial included twelve visitors entering from the main doorway. Most found a puzzle label without help. Two asked where the next display began. No visitors were observed entering from the side passage during that session. The record therefore offered information about one approach, leaving another approach untested.",
      "Source C — Draft review: A student wrote, “The designer said the labels helped visitors, so the display now works for everyone.” The sentence kept part of the positive statement but removed its limitation. The review could quote a short exact phrase such as “helped some visitors,” then explain the untested side approach using the rest of the interview and the trial record.",
      "Writing task: Quotation marks tell readers that words are exact, but even exact words can mislead if the surrounding explanation changes their scope. A paraphrase must also retain important limits. The writer should introduce who spoke, preserve the meaning of the passage, connect it to other evidence, and make clear which conclusion comes from the sources and which is a proposal for the next test."
    ],
    "question": "Which statement best preserves the designer’s meaning?",
    "options": [
      "The display works for every visitor without further testing.",
      "The designer thinks no label helped anyone.",
      "The labels helped some visitors, while the side approach still needs checking."
    ],
    "answer": 2,
    "hint": "Keep both the useful result and the remaining question.",
    "explanation": "The interview’s positive finding is limited, and the trial confirms the gap in observation.",
    "evidenceOptions": [
      "A says “helped some visitors” and calls for a side check; B records no side-passage visitors in the trial.",
      "The designer was interviewed.",
      "Twelve people attended the trial."
    ],
    "evidenceAnswer": 0,
    "evidenceHint": "The interview and trial together support a qualified conclusion.",
    "evidenceExplanation": "The interview and trial together support a qualified conclusion.",
    "reasoningQuestion": "Why can a short exact quotation still be misleading?",
    "reasoningOptions": [
      "Exact words are never useful evidence.",
      "Removing context or attaching a broader conclusion can change what readers think the speaker meant.",
      "Every quotation must include an entire interview."
    ],
    "reasoningAnswer": 1,
    "reasoningHint": "Keep the speaker’s important limits even when quoting only a small part.",
    "reasoningExplanation": "Keep the speaker’s important limits even when quoting only a small part.",
    "prompt": "Write a three-paragraph review of the draft. Introduce the topic, use one exact short quotation with its source and context, then revise the conclusion and propose the missing check.",
    "frame": "Paragraph 1: The draft claims…\n\nParagraph 2: In Source A, the designer says, “…” Source B shows…\n\nParagraph 3: A more accurate conclusion is… The next check should…",
    "vocab": "attribution",
    "definition": "Identifying who said something or where information came from.",
    "color": "green",
    "week": 4,
    "genre": "original fictional source set",
    "talk": "Which words in the quotation prevent the claim from becoming too broad?"
  },
  {
    "id": "g5-revision",
    "title": "The Paragraphs That Talk to Each Other",
    "subtitle": "Make the reasoning visible across paragraphs.",
    "label": "The Paragraphs That Talk to Each Other",
    "focus": "Logical connections and revision",
    "pattern": "Choose a precise transition",
    "model": "In contrast signals a difference. Consequently signals a result. In addition introduces another related point.",
    "words": [
      "in contrast",
      "consequently",
      "in addition"
    ],
    "wordQuestion": "Which transition best introduces a result?",
    "wordOptions": [
      "Consequently",
      "In contrast",
      "For instance"
    ],
    "wordAnswer": 0,
    "wordHint": "Look for the relationship between cause and outcome.",
    "sources": [
      {
        "id": "A",
        "title": "Observation note",
        "kind": "Reader behavior"
      },
      {
        "id": "B",
        "title": "Layout proposal",
        "kind": "Suggested change"
      },
      {
        "id": "C",
        "title": "Student draft",
        "kind": "Writing to revise"
      }
    ],
    "text": [
      "Source A — Observation note: At the class history display, readers often began with the largest photograph and then asked how it related to the dated documents beside it. The caption named the people in the photograph but did not explain when the picture was taken. Several visitors assumed it showed the same year as the nearest document, although the two items came from different years.",
      "Source B — Layout proposal: The display team suggested adding dates to every caption and grouping items by event rather than by size. A short introductory panel would explain the sequence. These changes had not yet been tried with visitors. The proposal aimed to reduce mistaken connections while preserving the chance to compare photographs and written records.",
      "Source C — Student draft: “Visitors asked questions. The display has photographs. In contrast, we should add dates. The project is finished.” The draft includes a possible action but does not explain why it addresses the observed problem. Its transition suggests a contrast where the writer needs a reason, and its final sentence announces success without a follow-up observation.",
      "Writing task: A revision could explain that missing dates encouraged an unsupported connection between items. It could then connect dated captions and event groups to that problem, using because or therefore where appropriate. A final paragraph could propose testing whether new visitors correctly place the items in time. Clear connections help readers follow the argument, while cautious wording keeps a planned improvement separate from an observed result."
    ],
    "question": "Which revision most improves the logic?",
    "options": [
      "Keep “in contrast” because long transitions always sound better.",
      "Explain how missing dates caused confusion, connect dated captions to that problem, and propose a follow-up check.",
      "Add more unrelated descriptions of the photographs."
    ],
    "answer": 1,
    "hint": "Ask how the proposed action responds to the evidence.",
    "explanation": "The revised chain connects observation, proposed response, and a way to evaluate the response.",
    "evidenceOptions": [
      "The display contains photographs.",
      "The student wrote four short sentences.",
      "A reports mistaken time connections; B proposes dates and event groups; C leaves the connection unexplained and claims completion."
    ],
    "evidenceAnswer": 2,
    "evidenceHint": "The combined details identify what the revision must connect and qualify.",
    "evidenceExplanation": "The combined details identify what the revision must connect and qualify.",
    "reasoningQuestion": "Why is “The project is finished” an unsuitable evidence-based conclusion here?",
    "reasoningOptions": [
      "The sources describe a proposed change that has not yet been checked with visitors.",
      "Every conclusion must be a question.",
      "A report may never describe a finished project."
    ],
    "reasoningAnswer": 0,
    "reasoningHint": "A conclusion should match the stage of work documented by the sources.",
    "reasoningExplanation": "A conclusion should match the stage of work documented by the sources.",
    "prompt": "Rewrite the explanation in three connected paragraphs. Explain the problem, link the proposed changes to evidence, and close with a review plan. Use transitions that match the actual relationships.",
    "frame": "Paragraph 1: Source A shows…\n\nParagraph 2: Because… the team proposes… This connects to the problem by…\n\nParagraph 3: Before claiming success…",
    "vocab": "transition",
    "definition": "A word, phrase, or sentence that shows how ideas connect.",
    "color": "green",
    "week": 4,
    "genre": "original fictional source set",
    "talk": "Read the first sentence of each paragraph aloud. Does the sequence of ideas make sense?"
  },
  {
    "id": "g5-final",
    "title": "The Community Learning Report",
    "subtitle": "Build and revise a report from three sources.",
    "label": "The Community Learning Report",
    "focus": "Final source-based report",
    "pattern": "The root cred",
    "model": "The Latin root cred relates to belief. Credible information has reasons or support that make it worthy of belief.",
    "words": [
      "credible",
      "credibility",
      "incredible"
    ],
    "wordQuestion": "What most helps make a report credible?",
    "wordOptions": [
      "A title written in large letters",
      "A claim repeated many times without checking",
      "Relevant evidence with clear sources and honest limits"
    ],
    "wordAnswer": 2,
    "wordHint": "A believable report lets readers examine its support.",
    "sources": [
      {
        "id": "A",
        "title": "Visitor feedback",
        "kind": "Learning experience"
      },
      {
        "id": "B",
        "title": "Volunteer record",
        "kind": "Staffing and flow"
      },
      {
        "id": "C",
        "title": "Planning brief",
        "kind": "Goals and limits"
      }
    ],
    "text": [
      "Source A — Visitor feedback: At a trial community learning afternoon, families tried storytelling, model building, and local-history activities. Many feedback cards praised having choices. Some visitors said they missed the beginning of an explanation when they moved between stations. Others wanted a short description of each activity before choosing. The cards represented those who returned them, not every person who attended.",
      "Source B — Volunteer record: Volunteers repeated introductions whenever a new group arrived. At the busiest time, one station had a line while another had empty seats. A few visitors did not realize they could return to a station later. Volunteers suggested visible activity descriptions, repeated start times, and a simple sign showing when places were available. They also wanted enough time to reset materials between groups.",
      "Source C — Planning brief: The next event must use the same rooms and number of volunteers. Its goals are to preserve meaningful choice, make explanations easier to join, and keep movement manageable. Planners can change signs and timing but cannot add a new room or promise constant one-to-one instruction. They want a plan that can be reviewed using observations and a short visitor response form.",
      "Final writing task: Develop a report that combines the three sources around the event’s needs. Introduce a clear recommendation, explain at least two connected changes with evidence, and address one limitation. End with a practical way to check the plan. Quote or paraphrase accurately, identify the source of each borrowed idea, and distinguish what the trial showed from what you predict a future event might achieve. The report should help a reader understand both the proposal and its reasoning."
    ],
    "question": "Which plan best meets the goals and limits in all three sources?",
    "options": [
      "Use clear activity descriptions, repeated start times, and availability signs while preserving choices and reset time.",
      "Add three rooms and a personal instructor for each family.",
      "Require every visitor to remain at one station all afternoon."
    ],
    "answer": 0,
    "hint": "Fit the visitors’ needs, volunteer observations, and fixed resources together.",
    "explanation": "The plan improves entry and flow within the stated limits while preserving choice.",
    "evidenceOptions": [
      "The event has three kinds of activities.",
      "A requests advance descriptions, B identifies timing and line problems, and C allows sign and schedule changes within fixed resources.",
      "Some stations have empty seats."
    ],
    "evidenceAnswer": 1,
    "evidenceHint": "The source combination connects needs and feasible responses.",
    "evidenceExplanation": "The source combination connects needs and feasible responses.",
    "reasoningQuestion": "What should the final report distinguish most clearly?",
    "reasoningOptions": [
      "Which source has the longest title.",
      "Which visitor arrived first, even if it does not affect the plan.",
      "Observed trial results, source-supported recommendations, and predictions that still need testing."
    ],
    "reasoningAnswer": 2,
    "reasoningHint": "A strong report tells readers what is known, what is proposed, and what remains uncertain.",
    "reasoningExplanation": "A strong report tells readers what is known, what is proposed, and what remains uncertain.",
    "prompt": "Create your final three-paragraph report. State a recommendation, combine details from all three sources, address a limit, and close with a specific check. Add a final “Sources used” line naming A, B, and C by title. Revise once for accuracy and logical connections.",
    "frame": "Paragraph 1: I recommend… because the trial shows…\n\nParagraph 2: Sources A and B… Source C sets a limit… Therefore…\n\nParagraph 3: A concern is… We can check the plan by…\n\nSources used: …",
    "vocab": "credible",
    "definition": "Worthy of belief because of relevant support and careful treatment of evidence.",
    "color": "green",
    "week": 4,
    "genre": "original fictional source set",
    "talk": "Ask a reader to identify your recommendation, two supporting details, one limitation, and the proposed check."
  }
];
export const gradeFiveUnits = [
  {
    "week": 1,
    "title": "Source Sleuths",
    "goal": "Infer across records, quote accurately, preserve main ideas, and check source context.",
    "project": "Explain what three theater records establish and what remains uncertain.",
    "family": "Ask which exact source supports a claim. Look for dates, purposes, and limits before combining details."
  },
  {
    "week": 2,
    "title": "Ideas in Conversation",
    "goal": "Connect overlapping sources, explain differing results, and distinguish sequence from cause.",
    "project": "Correct a timeline-based claim by connecting an interview and a budget note.",
    "family": "Ask whether sources disagree about the same conditions or describe different situations."
  },
  {
    "week": 3,
    "title": "Reasoned Recommendations",
    "goal": "Organize reasons, address a concern, and fit a recommendation to the evidence.",
    "project": "Recommend rehearsal space using a sound map, teacher comments, and movement notes.",
    "family": "Invite a reasonable counterpoint. Ask how the writer’s recommendation addresses it."
  },
  {
    "week": 4,
    "title": "Author’s Workshop",
    "goal": "Plan by topic, quote and paraphrase accurately, revise connections, and create a report.",
    "project": "Write a three-paragraph community learning report using three sources and a review plan.",
    "family": "Review the source labels, explanation of evidence, logical transitions, and honest limits. Ask for one useful revision."
  }
];
export const lessons = [...coreLessons,...kindergartenLessons,...gradeThreeLessons,...gradeFourLessons,...gradeFiveLessons];
export const isKindergarten=(id:string)=>id.startsWith('k-');
export const courseLessons=(grade:string)=>grade==='K'?kindergartenLessons:grade==='3'?gradeThreeLessons:grade==='4'?gradeFourLessons:grade==='5'?gradeFiveLessons:coreLessons;
export const courseUnits=(grade:string)=>grade==='K'?kindergartenUnits:grade==='3'?gradeThreeUnits:grade==='4'?gradeFourUnits:grade==='5'?gradeFiveUnits:units;
export const isGradeThree=(id:string)=>id.startsWith('g3-');
export const isGradeFour=(id:string)=>id.startsWith('g4-');
export const isGradeFive=(id:string)=>id.startsWith('g5-');
export const sourcesFor=(id:string)=>gradeFiveLessons.find(l=>l.id===id)?.sources;
export const reasoningFor=(id:string)=>gradeFourLessons.find(l=>l.id===id)??gradeFiveLessons.find(l=>l.id===id);
export const evidenceFor=(id:string)=>gradeThreeLessons.find(l=>l.id===id)??reasoningFor(id);
export const minimumWords=(id:string)=>isKindergarten(id)?1:isGradeThree(id)?20:isGradeFour(id)?40:isGradeFive(id)?60:6;
export const wordCount=(s:string)=>s.trim()?s.trim().split(/\s+/).length:0;
export const emptyRecord=(id:string):RecordData=>({lessonId:id,step:0,answers:{},draft:'',completed:false});

export const hasWritingChanges=(current:RecordData,saved?:RecordData)=>current.draft!==(saved?.draft??'')||['A','B','C'].some(k=>(current.sourceNotes?.[k]??'')!==(saved?.sourceNotes?.[k]??''));
