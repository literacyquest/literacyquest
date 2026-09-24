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
export const lessons = [
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
export const emptyRecord=(id:string):RecordData=>({lessonId:id,step:0,answers:{},draft:'',completed:false});
