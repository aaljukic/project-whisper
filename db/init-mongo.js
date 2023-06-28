db = db.getSiblingDB("whisper_db");

db.createUser({
  user: "whisper",
  pwd: "whisper",
  roles: [
    {
      role: "readWrite",
      db: "whisper_db"
    },
  ],
});


// test data
// db.getCollection("users").insertMany([
//   {
//     id: "550e8400-e29b-41d4-a716-446655440000",
//     isAdmin: false,
//     lastActivity: Date.now(),
//   },
//   {
//     id: "550e8400-e29b-41d4-a716-446655440001",
//     isAdmin: false,
//     lastActivity: Date.now(),
//   },
//   {
//     id: "550e8400-e29b-41d4-a716-446655440002",
//     isAdmin: false,
//     lastActivity: Date.now(),
//   },
//   {
//     id: "550e8400-e29b-41d4-a716-446655440003",
//     isAdmin: true,
//     lastActivity: Date.now(),
//     password: "admin", // replace with real password
//   },
// ]);
// db.getCollection("confessions").insertMany([
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb1",
//     title: "The Case of the Vanishing Wallet",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "So, a couple of months ago, I went out with my friends and realized I forgot my wallet at home. Panic mode activated! frantically searches pockets Why? Because I secretly wanted someone to pay for me! Classic move, right? Lesson learned: always double-check for your wallet before leaving the house!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb2",
//     title: "The Unforgettable Travel Misadventure",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Prepare yourself for a tale of travel misfortune that will leave you both cringing and entertained. It all began with the excitement and anticipation of a long-awaited vacation. I had meticulously planned every aspect of the trip, from flights and accommodations to sightseeing itineraries and local delicacies to savor.\n\nAs the departure day arrived, I found myself brimming with enthusiasm and a touch of naivety. Little did I know that the universe had prepared a series of unexpected twists and turns that would test my resilience and redefine the meaning of adventure.\n\nThe first sign of trouble appeared when I arrived at the airport, armed with my meticulously packed suitcase. To my dismay, the weight of my luggage exceeded the airline's limit, resulting in exorbitant excess baggage fees. Determined not to let this setback dampen my spirits, I reluctantly parted ways with a considerable sum of money, bidding farewell to my carefully planned shopping budget.\n\nUndeterred, I boarded the plane with renewed enthusiasm, eager to explore new horizons. However, fate had other plans. Midway through the flight, turbulence struck with a vengeance, transforming the cabin into a rollercoaster of panic and airsickness. As the plane shook violently, my dreams of serene skies and smooth sailing quickly evaporated. I clung to my seat, praying for the ordeal to end.\n\nMiraculously, the turbulence subsided, and we landed at our destination, albeit several hours behind schedule. Exhausted and disheveled, I headed to the baggage claim area, only to be met with disappointment. My luggage was nowhere to be found. It seemed that my trusty suitcase had embarked on its own unplanned adventure.\n\nAfter hours of filing reports and enduring the bureaucratic labyrinth of lost luggage procedures, I left the airport empty-handed but not defeated. I ventured into the city, armed with borrowed toiletries and a determination to make the most of my vacation, even without my beloved belongings.\n\nDays turned into a whirlwind of improvisation and unexpected encounters. I navigated foreign streets with a questionable map and relied on the kindness of strangers for directions. Language barriers became opportunities for comical misunderstandings and memorable miscommunications. Culinary adventures led me to try exotic dishes that tested my taste buds and challenged my notions of gastronomic delight.\n\nThroughout the trip, I discovered hidden gems that were absent from guidebooks—the quaint cafes tucked away in narrow alleys, the breathtaking views from unexpected vantage points, and the friendships forged with fellow travelers who had also fallen victim to travel misadventures. In the midst of chaos and unpredictability, I found a renewed sense of adventure and an appreciation for the beauty of embracing the unknown.\n\nAs the journey drew to a close, I reflected on the mishaps and the unexpected detours that had colored my travel experience. While my meticulously planned vacation had deviated from the script, it had given me memories and stories that would be recounted for years to come. The challenges I faced became the catalysts for personal growth and a reminder of the resilience of the human spirit.\n\nLesson learned: in the realm of travel, the unexpected can become the most cherished souvenir. Embrace the detours, laugh in the face of misfortune, and let the adventures unfold, even when they deviate from the well-planned path.",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb3",
//     title: "Dancing Disasters",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Picture this—me, on the dance floor, busting out my 'killer' moves. Little did I know, my moves were more 'killer' than expected. In my enthusiastic flailing, I accidentally elbowed someone in the face. Ouch! I apologized profusely, but it's safe to say my dancing career ended that night. Sorry, random dance floor victim!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb4",
//     title: "The Case of the Mysterious Burrito",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Late-night hunger strikes! I stumbled into the kitchen, half-asleep, and grabbed what I thought was a delicious burrito from the fridge. Little did I know, it was a frozen sock. Yes, a SOCK! I took a huge bite before realizing my mistake. The crunch still haunts my dreams. Moral of the story: always turn on the lights before raiding the fridge!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb5",
//     title: "The Accidental Email",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Oh boy, this one still makes me cringe. I was gossiping about a coworker with my best friend and decided to vent my frustrations in an email. You guessed it—I accidentally sent it to the coworker instead of my friend! The embarrassment was immeasurable. Let's just say, I learned the importance of double-checking recipients. Sorry, coworker, you didn't deserve those scathing remarks!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb6",
//     title: "The Great Toilet Paper Disaster",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "During the height of the toilet paper shortage, I hoarded rolls like a treasure hunter. I built a fortress out of toilet paper rolls in my bathroom, thinking I was being clever. Little did I know, the weight of the fortress caused my bathroom shelves to collapse, resulting in a great toilet paper disaster. My dreams of becoming the TP king were shattered, along with my bathroom shelves. Lesson learned: greed never pays off!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb7",
//     title: "The Catastrophic Cake Fail",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "I decided to impress my friends by baking a beautiful cake from scratch. Armed with a recipe and determination, I started mixing ingredients. Little did I know, I mistook salt for sugar and added a generous amount. The result? A cake that could be used as a weapon! It was a cringe-worthy moment when everyone took a bite. Sorry, taste buds! Lesson learned: always double-check your ingredients!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb8",
//     title: "The Accidental Sleepover",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "After a late-night party, I crashed at a friend's place. In the middle of the night, I sleepwalked into their parents' room and cuddled up next to their mom! Imagine my horror when I woke up to find myself snuggling a stranger. Needless to say, the awkwardness was real. Sorry, friend's mom, you didn't sign up for my accidental sleepover!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb9",
//     title: "The Parking Lot Mix-up",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Picture this—after a long day of shopping, I approached what I thought was my car in the parking lot. I struggled with the key for a good minute, wondering why it wouldn't unlock. It was only after I noticed the unfamiliar items in the backseat that I realized I was trying to break into someone else's car! I swiftly made my exit, hoping no one witnessed my car mix-up blunder. Lesson learned: always double-check your license plate!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb10",
//     title: "The Infamous Haircut Disaster",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "During a moment of wild inspiration, I decided to give myself a haircut. Armed with a pair of scissors and zero experience, I went for it. Let's just say, it didn't end well. I ended up with a lopsided, choppy mess that required a professional to fix. Sorry, hair! Lesson learned: leave the hairstyling to the experts!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb11",
//     title: "The Unfortunate Wardrobe Malfunction",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Let me take you back to a fateful day when fashion betrayed me in the most embarrassing way. I was attending a formal event, dressed to the nines in an elegant gown that seemed to embody grace and sophistication. Little did I know, it had other plans.\n\nAs I mingled with the crowd, savoring the ambiance and compliments on my attire, disaster struck. With a resounding rip, the delicate fabric of my gown surrendered to the force of gravity, exposing more than I intended to share with the world.\n\nPanic set in as I desperately tried to find a discreet corner to assess the damage. However, the universe seemed to conspire against me. Every step I took, the rip grew larger, transforming my graceful glide into an awkward shuffle.\n\nWith a heavy heart, I realized that my beautiful gown had become a fashion nightmare. In a stroke of luck, a kind stranger appeared, armed with safety pins and a reassuring smile. We discreetly worked together to salvage what we could, improvising a makeshift solution to cover the revealing tear.\n\nI spent the rest of the evening in a state of constant vigilance, fearing that the safety pins would fail me at any moment. Every compliment I received on my resilience and ability to carry on masked the underlying humiliation that lurked beneath the surface.\n\nLesson learned: always have a backup plan for wardrobe malfunctions, and remember, even in the face of fashion disasters, resilience and a sense of humor can be your best accessories.",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb12",
//     title: "The Unfortunate Sneezing Incident",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Ah, the joys of allergies! One fine day, I found myself in a library, surrounded by silence. Out of nowhere, a sneeze attack struck. Despite my best efforts to stifle it, the sneeze exploded out of me like a cannon. The entire library turned to stare at the unexpected disturbance. Sorry, fellow library-goers, I hope you found my sneeze entertaining at least!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb13",
//     title: "The Not-So-Stealthy Midnight Snack",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Late at night, with a growling stomach, I embarked on a stealth mission to the kitchen for a snack. I tiptoed, trying to avoid making any noise. However, my efforts were in vain. I accidentally knocked over a tower of pots and pans, creating a clattering symphony that echoed through the house. Sorry, family members, you can blame my appetite for the midnight commotion!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb14",
//     title: "The Case of the Misplaced Phone",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Ever misplaced your phone while talking on it? Yep, that's me! I once spent a good ten minutes searching for my phone while it was comfortably resting against my ear. Talk about absent-mindedness! Sorry, brain, for the temporary disconnection. I guess I was multitasking on a whole new level!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb15",
//     title: "The Embarrassing Autocorrect Mishap",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Ah, autocorrect, the not-so-trustworthy companion. I once sent an important work email, only to realize too late that autocorrect had swapped a professional term for a hilariously inappropriate word. Needless to say, it created quite a stir in the office. Sorry, colleagues, for the unexpected laughter. Blame it on technology, not me!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb16",
//     title: "The Failed DIY Experiment",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "I decided to channel my inner DIY guru and attempted to fix a leaky faucet. Armed with a wrench and a YouTube tutorial, I went to work. Long story short, the faucet ended up in worse condition than before. Water sprayed everywhere like a fountain. Sorry, bathroom, I tried to save you but only made things worse. Lesson learned: some jobs are best left to professionals!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb17",
//     title: "The Misguided Hair Dye Disaster",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Feeling adventurous, I decided to dye my hair a bold, vibrant color. Excitement turned to horror when the dye turned out to be a shade closer to radioactive slime. I walked around with a neon glow for weeks, turning heads for all the wrong reasons. Sorry, eyes of innocent bystanders! I promise, my hair experiments are now strictly in the hands of professionals!",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   },
//   {
//     id: "2814fbef-ee5b-45d3-80cb-df943d491cb18",
//     title: "The Epic Kitchen Catastrophe",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     content:
//       "Brace yourself for the tale of the epic kitchen catastrophe! It all started innocently enough—I decided to impress my friends with a homemade dinner. With grand ambitions and a pinch of naivety, I embarked on a culinary adventure. I carefully selected a complex recipe that promised gourmet flavors and mouthwatering perfection. Little did I know, I was about to unleash chaos upon my kitchen.\n\nThe preparation began with slicing and dicing, measuring and mixing. As I juggled pots and pans, the kitchen transformed into a battleground of ingredients. Flour dusted the countertops like a snowy landscape, while pots bubbled and spat like mini volcanoes. It was a symphony of sizzles, sputters, and the occasional clang of a dropped utensil.\n\nBut amidst the chaos, I remained determined. I followed the recipe religiously, measuring each ingredient with precision. However, fate had other plans. In a moment of distraction, I accidentally grabbed the cayenne pepper instead of the paprika. The result? A dish that could set even the bravest taste buds ablaze!\n\nUndeterred by the fiery mishap, I soldiered on. The timer ticked down, and anticipation filled the air. Finally, the moment of truth arrived—I presented my masterpiece to my eagerly awaiting friends. They took cautious bites, their expressions shifting from anticipation to confusion, and ultimately, to horror.\n\nAs it turns out, my culinary creation had transformed into an unappetizing fusion of flavors. The spicy undertones dominated every bite, rendering the other carefully chosen ingredients almost unrecognizable. It was a disaster of epic proportions, and the laughter that followed could have filled a comedy club.\n\nIn the end, we resorted to ordering takeout and shared a night of laughter and unforgettable memories. My dreams of being a culinary prodigy were shattered, but the bonds of friendship grew stronger through shared adversity. Lesson learned: sometimes, it's the mishaps that create the most memorable moments.",
//     approved: true,
//     likeCount: Math.floor(Math.random() * 1000),
//     dislikeCount: Math.floor(Math.random() * 1000),
//     commentCount: Math.floor(Math.random() * 1000),
//   }
// ]);
// db.getCollection("comments").insertMany([
//   {
//     id: "7266d6f4-e872-4d6b-8bad-54e15c33e420",
//     content: "This is a comment on the first post",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     confession: "2814fbef-ee5b-45d3-80cb-df943d491cb1",
//     approved: true,
//     likeCount: 389,
//     dislikeCount: 1142,
//     commentCount: 12,
//   },
//   {
//     id: "7266d6f4-e872-4d6b-8bad-54e15c33e422",
//     content: "This is another comment on the first post",
//     creationDate: Date.now(),
//     user: "550e8400-e29b-41d4-a716-446655440001",
//     confession: "2814fbef-ee5b-45d3-80cb-df943d491cb1",
//     parentComment: "ObjectId of First Comment",
//     approved: true,
//     likeCount: 889,
//     dislikeCount: 54,
//     commentCount: 27,
//   },
// ]);
// db.getCollection("likes").insertMany([
//   {
//     id: "7266d6f4-e872-4d6b-8bad-54e15c33e301",
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     confession: "2814fbef-ee5b-45d3-80cb-df943d491cb1",
//     creationDate: Date.now(),
//   },
//   {
//     id: "7266d6f4-e872-4d6b-8bad-54e15c33e302",
//     user: "550e8400-e29b-41d4-a716-446655440001",
//     comment: "ObjectId of First Comment",
//     creationDate: Date.now(),
//   },
// ]);
// db.getCollection("dislikes").insertMany([
//   {
//     id: "7266d6f4-e872-4d6b-8bad-54e15c33e303",
//     user: "550e8400-e29b-41d4-a716-446655440000",
//     confession: "ObjectId of Second Post",
//     creationDate: Date.now(),
//   },
//   {
//     id: "7266d6f4-e872-4d6b-8bad-54e15c33e304",
//     user: "550e8400-e29b-41d4-a716-446655440001",
//     comment: "ObjectId of First Comment",
//     creationDate: Date.now(),
//   },
// ]);