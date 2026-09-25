export type Answer = {choice:number; attempts:number; hinted:boolean};
export type RecordData = {lessonId:string; step:number; answers:Record<string,Answer>; draft:string; completed:boolean; updatedAt?:string};
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
export const lessons = [...coreLessons,...kindergartenLessons,...gradeThreeLessons];
export const isKindergarten=(id:string)=>id.startsWith('k-');
export const courseLessons=(grade:string)=>grade==='K'?kindergartenLessons:grade==='3'?gradeThreeLessons:coreLessons;
export const courseUnits=(grade:string)=>grade==='K'?kindergartenUnits:grade==='3'?gradeThreeUnits:units;
export const isGradeThree=(id:string)=>id.startsWith('g3-');
export const evidenceFor=(id:string)=>gradeThreeLessons.find(l=>l.id===id);
export const minimumWords=(id:string)=>isKindergarten(id)?1:isGradeThree(id)?20:6;
export const wordCount=(s:string)=>s.trim()?s.trim().split(/\s+/).length:0;
export const emptyRecord=(id:string):RecordData=>({lessonId:id,step:0,answers:{},draft:'',completed:false});
