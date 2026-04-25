const WORDS = {
  object: [
    "abacus","accordion","anchor","anvil","apron","arrow","axe","backpack","badge","bag",
    "ball","balloon","banjo","basket","bat","battery","beaker","bell","belt","bench",
    "bicycle","binoculars","blanket","blender","boat","book","bookcase","boomerang","boot","bottle",
    "bowl","box","bracelet","brick","brush","bucket","button","cable","calculator","camera",
    "candle","cane","canoe","carpet","cart","catapult","cello","chain","chair","chalk",
    "charger","chessboard","chisel","clock","comb","compass","computer","corkscrew","crayon","crown",
    "cup","curtain","cushion","dice","dictionary","dish","doll","doorbell","doormat","drill",
    "drum","dumbbell","envelope","eraser","fan","feather","fiddle","flashlight","flute","fork",
    "frisbee","gavel","globe","glove","goggles","guitar","hammer","harmonica","helmet","hook",
    "horn","hourglass","jacket","jar","jug","kettle","keyboard","keyring","kite","knife",
    "ladder","lamp","lantern","laptop","lasso","lock","magnet","map","marker","mask",
    "medal","microphone","microscope","mirror","mop","mug","needle","net","notebook","oar",
    "pan","parachute","pencil","phone","piano","pillow","pin","pipe","plate","printer",
    "purse","radio","rake","remote","ring","rope","rug","saddle","saw","scooter",
    "screwdriver","scissors","shovel","skateboard","skillet","sledgehammer","slipper","spade","spoon","stapler",
    "stethoscope","stool","stopwatch","suitcase","sword","table","tambourine","teacup","telescope","thermometer",
    "thimble","toaster","torch","towel","tripod","trophy","trumpet","typewriter","umbrella","vase",
    "violin","wallet","watch","wheelbarrow","whisk","whistle","wrench","xylophone","yoyo","zipper",
    "airplane","album","amulet","aquarium","arrowhead","backhoe","barometer","barrel","bead","beehive",
    "billboard","boiler","bookmark","broom","bugle","buttonhole","cabinet","cage","calendar","cannon",
    "caravan","cashbox","cassette","cauldron","chopstick","clipboard","cloche","coin","colander","corset",
    "cradle","crate","cymbal","dagger","decanter","diary","domino","duster","easel","faucet",
    "ferry","flag","flask","furnace","goblet","gramophone","grater","hammock","harp","hoe",
    "javelin","joystick","kayak","kilt","ladle","leash","loom","mallet","marble","marionette",
    "megaphone","mortar","mousetrap","napkin","necklace","obelisk","palette","pendulum","plunger","podium",
    "postcard","puck","quill","quiver","razor","saxophone","sieve","siren","sundial","tarp",
    "thermos","ticket","tiara","tongs","turntable","urn","vacuum","wagon","walkie","wheelchair",
    "wok","zeppelin"
  ],
  nature: [
    "acorn","algae","ant","ash","avalanche","badger","bamboo","bay","beach","beak",
    "bear","beaver","bee","beetle","berry","birch","blizzard","blossom","bog","boulder",
    "brook","bush","cactus","canyon","cedar","cliff","cloud","clover","comet","coral",
    "crab","crater","creek","cricket","crow","cyclone","daisy","dandelion","deer","delta",
    "desert","dew","duck","dune","eagle","earthquake","elm","fern","firefly","fjord",
    "flamingo","flood","flower","fog","forest","fossil","fox","frog","frost","fungus",
    "galaxy","geode","geyser","glacier","grass","grasshopper","gull","hail","hawk","hedge",
    "heron","hill","horizon","hurricane","iceberg","icicle","ivy","jaguar","jellyfish","jungle",
    "kelp","kingfisher","koala","lagoon","landslide","lava","leaf","lichen","lightning","lily",
    "lizard","magma","mangrove","maple","meadow","meteor","mist","moss","moth","mountain",
    "mud","mushroom","nest","oak","oasis","ocean","orchid","otter","owl","panda",
    "panther","pebble","penguin","pine","plankton","pond","pollen","poppy","prairie","quartz",
    "quicksand","rabbit","rain","rainbow","reef","river","rock","root","rose","sand",
    "sapling","savanna","seagull","seashell","seed","shark","shrimp","sky","slug","snow",
    "sparrow","spider","spruce","squirrel","starfish","storm","stream","sunbeam","swamp","swan",
    "tadpole","thunder","tide","tiger","tornado","tree","trout","tsunami","tundra","turtle",
    "valley","vine","volcano","waterfall","whale","willow","wind","wolf","woodland","worm",
    "wren","zebra","asteroid","aurora","badlands","bark","basalt","beech","blossom","bramble",
    "bud","butterfly","canopy","cave","clay","coast","cobweb","coconut","cypress","dawn",
    "drizzle","drought","eclipse","eel","egret","ember","estuary","falcon","flint","gorge",
    "granite","grove","harbor","heather","hibiscus","hyena","island","lotus","marsh","mesa",
    "monsoon","orchid","peony","reef","ridge","savanna","shale","sprout","summit","twig",
    "walnut","wilderness"
  ],
  random: [
    "ability","absence","accident","advice","ambition","anger","apology","argument","attention","balance",
    "belief","betrayal","bravery","boredom","calm","chance","charity","chaos","choice","clue",
    "comfort","competition","compromise","confidence","confusion","courage","curiosity","danger","debate","decision",
    "delay","democracy","destiny","dignity","disaster","doubt","dream","duty","effort","embarrassment",
    "energy","envy","evidence","excuse","failure","faith","fame","fear","freedom","friendship",
    "future","gossip","gravity","greed","grudge","habit","happiness","honesty","hope","humour",
    "idea","identity","imagination","instinct","irony","jealousy","justice","karma","kindness","knowledge",
    "language","laughter","legend","liberty","logic","loyalty","luck","memory","mercy","mistake",
    "mystery","nostalgia","opinion","opportunity","panic","patience","peace","pressure","privacy","promise",
    "proof","purpose","puzzle","regret","reputation","revenge","risk","rumour","sacrifice","sarcasm",
    "secret","silence","skill","sorrow","strategy","surprise","suspicion","teamwork","temptation","theory",
    "tradition","trust","truth","victory","warning","wisdom","wish","wonder","worry","zeal",
    "achievement","addiction","adventure","affection","agreement","anxiety","beauty","blame","bluff","boundary",
    "celebration","coincidence","connection","conscience","consequence","control","creativity","deadline","defeat","delusion",
    "discipline","discovery","dreaming","education","equality","etiquette","experience","fate","fiction","focus",
    "forgiveness","fortune","frustration","generosity","gratitude","guilt","honour","illusion","influence","inspiration",
    "intelligence","intention","judgement","leadership","legacy","maturity","motivation","obsession","optimism","paradox",
    "perfection","perspective","prediction","pride","principle","progress","question","reason","respect","responsibility",
    "routine","security","shame","shortcut","strength","success","talent","tension","trouble","vanity",
    "vision","weakness"
  ],
  person: [
    "Albert Einstein","Isaac Newton","Charles Darwin","Galileo Galilei","Marie Curie","Nikola Tesla","Ada Lovelace","Alan Turing","Stephen Hawking","Jane Goodall",
    "Florence Nightingale","Alexander Fleming","Louis Pasteur","Rosalind Franklin","Katherine Johnson","Neil Armstrong","Buzz Aldrin","Yuri Gagarin","Amelia Earhart","Charles Lindbergh",
    "Leonardo da Vinci","Michelangelo","Pablo Picasso","Vincent van Gogh","Claude Monet","Frida Kahlo","Salvador Dali","Andy Warhol","Rembrandt","Banksy",
    "William Shakespeare","Jane Austen","Charles Dickens","Mark Twain","George Orwell","J K Rowling","Roald Dahl","Agatha Christie","Ernest Hemingway","Maya Angelou",
    "Homer","Plato","Aristotle","Socrates","Confucius","Sun Tzu","Mahatma Gandhi","Nelson Mandela","Martin Luther King","Rosa Parks",
    "Abraham Lincoln","George Washington","Winston Churchill","Julius Caesar","Cleopatra","Queen Victoria","Queen Elizabeth II","Napoleon Bonaparte","Alexander the Great","Joan of Arc",
    "Mother Teresa","Malala Yousafzai","Greta Thunberg","Princess Diana","Dalai Lama","Pope Francis","Pope John Paul II","Barack Obama","Donald Trump","Joe Biden",
    "John F Kennedy","Theodore Roosevelt","Franklin Roosevelt","Ronald Reagan","Margaret Thatcher","Jacinda Ardern","Angela Merkel","Vladimir Putin","Volodymyr Zelenskyy","Xi Jinping",
    "Elon Musk","Steve Jobs","Bill Gates","Mark Zuckerberg","Jeff Bezos","Warren Buffett","Oprah Winfrey","Walt Disney","Henry Ford","Richard Branson",
    "Michael Jordan","Serena Williams","Venus Williams","Muhammad Ali","Mike Tyson","Usain Bolt","Simone Biles","Tiger Woods","LeBron James","Kobe Bryant",
    "Lionel Messi","Cristiano Ronaldo","Pele","Diego Maradona","David Beckham","Roger Federer","Rafael Nadal","Novak Djokovic","Michael Phelps","Cathy Freeman",
    "Shane Warne","Don Bradman","Sachin Tendulkar","Shaquille ONeal","Tom Brady","Babe Ruth","Wayne Gretzky","Tony Hawk","Kelly Slater","Naomi Osaka",
    "Beyonce","Taylor Swift","Madonna","Michael Jackson","Elvis Presley","Freddie Mercury","Bob Dylan","John Lennon","Paul McCartney","David Bowie",
    "Prince","Adele","Rihanna","Lady Gaga","Stevie Wonder","Bob Marley","Eminem","Kanye West","Dolly Parton","Elton John",
    "Mozart","Beethoven","Bach","Tchaikovsky","Chopin","Vivaldi","Mick Jagger","Kurt Cobain","Whitney Houston","Tina Turner",
    "Meryl Streep","Tom Hanks","Leonardo DiCaprio","Brad Pitt","Angelina Jolie","Julia Roberts","Denzel Washington","Morgan Freeman","Samuel L Jackson","Harrison Ford",
    "Robin Williams","Jim Carrey","Will Smith","Jackie Chan","Bruce Lee","Arnold Schwarzenegger","Sylvester Stallone","Keanu Reeves","Johnny Depp","Robert Downey Jr",
    "Emma Watson","Daniel Radcliffe","Jennifer Lawrence","Scarlett Johansson","Zendaya","Chris Hemsworth","Hugh Jackman","Nicole Kidman","Cate Blanchett","Margot Robbie",
    "Charlie Chaplin","Marilyn Monroe","Audrey Hepburn","James Dean","Alfred Hitchcock","Steven Spielberg","George Lucas","Martin Scorsese","Quentin Tarantino","Christopher Nolan",
    "Stan Lee","Wes Anderson","Greta Gerwig","James Cameron","Ridley Scott","Peter Jackson","Hayao Miyazaki","Akira Kurosawa","Bindi Irwin","Steve Irwin",
    "David Attenborough","Bear Grylls","Gordon Ramsay","Jamie Oliver","Anthony Bourdain","Marie Antoinette","Tutankhamun","Genghis Khan","Marco Polo","Christopher Columbus",
    "Ferdinand Magellan","Harriet Tubman","Anne Frank","Helen Keller","Hedy Lamarr","Grace Hopper","Rachel Carson","Carl Sagan","Richard Feynman","Niels Bohr",
    "Dmitri Mendeleev","Alfred Nobel","Sigmund Freud","Carl Jung","Noam Chomsky","Stephen King","Isaac Asimov","C S Lewis","Lewis Carroll","Dr Seuss",
    "Victor Hugo","Leo Tolstoy","Fyodor Dostoevsky","Mary Shelley","Virginia Woolf","Oscar Wilde","Edgar Allan Poe","Harper Lee","Toni Morrison","Emily Dickinson",
    "Walt Whitman","Alexander Hamilton","Benjamin Franklin","Thomas Edison","Orville Wright","Wilbur Wright","Megan Rapinoe","Billie Jean King","Alex Morgan","Mia Hamm"
  ],
  world: [
    "Eiffel Tower","The Great Wall","The Pyramids","Stonehenge","Mount Everest","The Amazon","The Sahara","Niagara Falls","Venice","Times Square",
    "Taj Mahal","Hollywood","Antarctica","The Vatican","Tokyo","The Kremlin","The Colosseum","The Alps","The Nile","The Grand Canyon",
    "The Louvre","The Bermuda Triangle","The Dead Sea","Machu Picchu","Silicon Valley","Broadway","Area 51","Wall Street","Big Ben","The Sydney Opera House",
    "Route 66","The Galapagos","Mecca","The Maldives","Iceland","The Silk Road","Rio de Janeiro","Chernobyl","Bali","Buckingham Palace",
    "The Gobi Desert","The Arctic Circle","Atlantis","Easter Island","The Statue of Liberty","The Himalayas","The Serengeti","The Acropolis","Alcatraz","The Andes",
    "The Atacama Desert","The Atlantic Ocean","Ayers Rock","Bangkok","Barcelona","Beijing","The Berlin Wall","Bondi Beach","Bora Bora","The Brandenburg Gate",
    "Buenos Aires","The Burj Khalifa","Cairo","Cape Town","The Caribbean","Central Park","The Champs Elysees","Christ the Redeemer","The Congo River","Death Valley",
    "Disneyland","Dubai","Edinburgh Castle","The Egyptian Museum","Everest Base Camp","Fiji","The Forbidden City","The Ganges","Geneva","The Golden Gate Bridge",
    "The Grand Bazaar","The Great Barrier Reef","Greenland","Hagia Sophia","Havana","Hoover Dam","Iguazu Falls","Jerusalem","Kilimanjaro","Lake Baikal",
    "Lake Como","Las Vegas","The Leaning Tower of Pisa","Loch Ness","The London Eye","Los Angeles","Madagascar","Manhattan","Marrakesh","The Mediterranean Sea",
    "The Mekong","Mexico City","Miami Beach","Monaco","Mont Blanc","Moscow Metro","Mount Fuji","Mount Rushmore","Mumbai","Nairobi",
    "Naples","New Orleans","New York","Notre Dame","Olympic Stadium","Osaka","Oxford","Panama Canal","Paris","Petra",
    "Pompeii","Prague Castle","Red Square","The Rocky Mountains","Rome","Santorini","Seoul","Shanghai","Siberia","Singapore",
    "The Sistine Chapel","Trafalgar Square","Tulum","Uluru","Versailles","Victoria Falls","Vienna","The White House","Yellowstone","Yosemite",
    "Zanzibar","Angkor Wat","Mount Kilimanjaro","Mount Vesuvius","Mount Olympus","Mount Sinai","Mount Etna","Mount Cook","Blue Mountains","Daintree",
    "The Great Ocean Road","Kakadu","Uluru","Tasmania","The Great Lakes","Lake Victoria","Lake Titicaca","Lake Superior","Lake Tahoe","Lake Geneva",
    "The Mississippi","The Danube","The Rhine","The Thames","The Seine","The Amazon River","The Yangtze","The Yellow River","The Suez Canal","The English Channel",
    "The Black Sea","The Red Sea","The Baltic Sea","The Pacific Ocean","The Indian Ocean","The Arctic Ocean","The Southern Ocean","The North Pole","The South Pole","The Equator",
    "The Tropics","The Outback","The Sahara Desert","The Kalahari","The Mojave","The Sonoran","The Everglades","The Okavango","Patagonia","Mongolia",
    "Kyoto","Oslo","Stockholm","Copenhagen","Amsterdam","Brussels","Lisbon","Madrid","Berlin","Munich",
    "Florence","Milan","Athens","Istanbul","Casablanca","Marrakech","Luxor","Alexandria","Doha","Riyadh",
    "Jericho","Baghdad","Tehran","Delhi","Agra","Varanasi","Kathmandu","Lhasa","Hanoi","Phuket",
    "Auckland","Queenstown","Honolulu","Hawaii","Alaska","Quebec","Toronto","Vancouver","Chicago","Boston",
    "Philadelphia","Washington","Seattle","San Francisco","Orlando","Memphis","Nashville","Detroit","Newcastle","Manchester"
  ],
  action: [
    "acting","arguing","balancing","bargaining","bending","blinking","blushing","boasting","bouncing","bowling",
    "boxing","breathing","building","cartwheeling","chasing","cheering","chewing","clapping","climbing","complaining",
    "cooking","crawling","crying","dancing","daydreaming","digging","diving","dodging","dribbling","driving",
    "eavesdropping","fainting","falling","fishing","flirting","floating","frowning","gargling","giggling","golfing",
    "grinning","hammering","hiccuping","hitchhiking","hugging","interrupting","jogging","juggling","jumping","kicking",
    "kneeling","knitting","laughing","limping","marching","meditating","mopping","napping","nodding","painting",
    "panicking","peeking","pointing","praying","pretending","procrastinating","punching","reading","rowing","saluting",
    "shivering","shopping","shrugging","singing","skipping","skydiving","sleeping","sleepwalking","sneezing","snoring",
    "snowboarding","sprinting","staring","stretching","surfing","swimming","teaching","throwing","tickling","tiptoeing",
    "tripping","typing","vacuuming","waiting","walking","waving","whispering","whistling","winking","wrestling",
    "yawning","yodeling","applauding","baking","bathing","begging","biting","brushing","camping","chanting",
    "cleaning","counting","cycling","drawing","dreaming","drinking","escaping","explaining","folding","galloping",
    "gardening","grabbing","hiding","hopping","hunting","itching","joking","kayaking","listening","melting",
    "ordering","packing","paddling","posing","pulling","pushing","racing","reaching","recycling","relaxing",
    "repairing","resting","riding","rolling","running","sailing","searching","sewing","shouting","singing",
    "skating","skiing","smiling","sniffing","spinning","stomping","studying","sweeping","talking","tapping",
    "thinking","travelling","trembling","unpacking","visiting","washing","watching","weaving","writing","zipping"
  ]
};

function uniqueList(words) {
  const seen = new Set();
  return words.filter(word => {
    const key = word.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

for (const category of Object.keys(WORDS)) {
  WORDS[category] = uniqueList(WORDS[category]);
}

WORDS.object.push(
  "adapter","antenna","armour","ashtray","backgammon","balaclava","ballista","bangle","barcode","barge",
  "barrette","basin","baton","beacon","bedroll","beeper","biplane","blowtorch","bolster","bonnet",
  "brooch","bulldozer","bunk","buoy","canteen","capsule","carafe","carabiner","carriage","cardigan",
  "censer","chalice","cleaver","cog","cooler","cufflink","dart","dehumidifier","derrick","detector",
  "diadem","dirigible","divan","dolly","doughnut","drawer","duplicator","flannel","folder","fretsaw",
  "gondola","gurney","hatchet","headrest","highlighter","holster","incubator","inkwell","insignia","jukebox",
  "keepsake","kerchief","kiln","laminator","lanyard","latch","lectern","machete","mannequin","mattress",
  "metronome","mixer","monocle","parasol","periscope","pipette","phonograph","pitchfork","poncho","pulley",
  "revolver","satchel","scalpel","scanner","scepter","semaphore","sextant","shampoo","snorkel","spindle",
  "sundial","syringe","tablet","telescope","totem","trampoline","tweezers","ukulele","vise","visor"
);

WORDS.nature.push(
  "adder","alpaca","anchovy","apricot","aspen","badlands","basil","beech","beetroot","blackberry",
  "bluebell","bobcat","bramble","bud","buffalo","bulrush","canary","canopy","caribou","chestnut",
  "cicada","cobweb","coconut","coyote","crocodile","cypress","dawn","dolphin","drizzle","drought",
  "eel","egret","ember","estuary","falcon","flint","gazelle","gorge","granite","grove",
  "harbor","heather","hibiscus","hyena","iris","jasmine","leopard","lotus","marsh","mesa",
  "monsoon","newt","opal","peony","puma","ridge","salamander","shale","sprout","summit",
  "walnut","wilderness","yam","yucca"
);

WORDS.random.push(
  "acceptance","accuracy","admiration","advantage","awe","blessing","burden","certainty","challenge","climate",
  "commitment","community","conflict","consent","crisis","culture","curfew","deception","desire","distraction",
  "empathy","equality","failure","fantasy","festival","fortune","gesture","glory","guidance","heritage",
  "humility","impact","justice","leisure","loss","loyalty","meaning","merit","miracle","mischief",
  "momentum","myth","network","patriotism","permission","poverty","practice","priority","rebellion","rhythm",
  "ritual","safety","scandal","solution","status","survival","symbol","tolerance","triumph","wealth"
);

WORDS.action.push(
  "admiring","aiming","answering","arriving","asking","borrowing","carrying","catching","celebrating","charging",
  "chuckling","collecting","copying","coughing","counting","decorating","delivering","describing","dialing","discovering",
  "dragging","entering","examining","failing","fetching","filming","fixing","following","forgiving","freezing",
  "gathering","guessing","helping","imagining","inspecting","inventing","landing","learning","lifting","measuring",
  "mixing","noticing","obeying","offering","opening","performing","planning","polishing","questioning","remembering",
  "rescuing","returning","scratching","serving","sharing","sinking","solving","spilling","stealing","testing",
  "thanking","training","twisting","vanishing","volunteering","wandering","winning","wrapping"
);

WORDS.object.push(
  "aerosol","amplifier","anklet","armband","awning","backrest","bandage","banner","beanie","bedpan",
  "bedsheet","bib","binder","blazer","brace","briefs","buckle","buzzer","campstool","cartridge",
  "chandelier","chequebook","clamp","cloak","cobblestone","coffin","collar","corsage","costume","cushion",
  "cylinder","doorknob","earplug","earring","elevator","escutcheon","firework","flamethrower","flipper","flyswatter",
  "footstool","generator","goggles","gurney","hairpin","handbag","handcuffs","headband","headset","hearse",
  "hinge","hydrant","inhaler","jersey","kaleidoscope","kimono","knapsack","knocker","lampshade","laptop",
  "lawnmower","leotard","lifeboat","locker","luggage","mailbox","manacle","mantel","medallion","megaphone",
  "minibus","moccasin","monument","motorboat","motorcycle","muzzle","nightstand","nozzle","overcoat","pajamas",
  "pamphlet","parka","passport","pedestal","peg","pendant","triangle","perfume","pick","pinwheel",
  "placard","pocketbook","ponytail","pram","propeller","quilt","racket","raft","refrigerator","ribbon",
  "rifle","sandal","sari","saucer","scabbard","shawl","shears","shoelace","shuttle","skewer",
  "sled","sling","sneaker","socket","sombrero","spanner","spool","sprinkler","staple","suit",
  "swatter","switch","tanker","tape","teapot","telephone","tent","ticket","toilet","tongs",
  "toothpick","tricycle","trowel","tutu","tweeter","vest","waistcoat","washtub","webcam","windmill"
);

WORDS.nature.push(
  "abalone","albatross","amethyst","anemone","antelope","armadillo","badger","banana","barracuda","beech",
  "bluetongue","bonobo","breeze","carp","cassowary","caterpillar","cheetah","chimpanzee","cloudburst","cockatoo",
  "cod","conifer","cougar","daffodil","dingo","dodo","dove","echidna","emu","falcon",
  "ferret","fig","finch","fir","flounder","gazelle","gecko","goanna","goose","gorilla",
  "gully","hare","hazel","hedgehog","hippo","iguana","impala","iris","jackal","juniper",
  "kookaburra","lemur","lilac","lynx","macaw","mackerel","mahogany","mantis","marigold","marmoset",
  "meerkat","minnow","mole","mongoose","nectar","ocelot","octopus","opossum","orangutan","orca",
  "osprey","ostrich","otter","panther","papaya","parrot","pelican","perch","platypus","porcupine",
  "possum","prawn","puffin","python","raccoon","raven","redwood","ripple","robin","salmon",
  "scorpion","seal","sequoia","shrew","skunk","sloth","snail","sparrow","stingray","sturgeon",
  "sunflower","sycamore","tapir","thistle","toad","toucan","urchin","vulture","wallaby","wasp",
  "weasel","wombat","woodpecker","yak","yew"
);

WORDS.random.push(
  "abundance","adaptation","allegiance","ambivalence","appeal","approval","arrogance","assumption","astonishment","authority",
  "awareness","bias","bitterness","capitalism","censorship","caution","citizenship","clarity","cooperation","corruption",
  "curiosity","defiance","delight","disappointment","discomfort","discovery","diversity","dread","economy","emergency",
  "enthusiasm","evolution","expectation","failure","fairness","familiarity","fascination","fatigue","generosity","government",
  "harmony","hesitation","identity","ignorance","impatience","independence","innocence","integrity","jealousy","law",
  "liberation","literacy","loneliness","majority","minority","morality","nation","negotiation","obligation","patience",
  "peace","popularity","prejudice","privilege","probability","prosperity","rebellion","recovery","reliability","religion",
  "remorse","revolution","scarcity","scepticism","sincerity","solidarity","sophistication","stability","sympathy","tradition",
  "uncertainty","unity","urgency","value","vulnerability","wealth","welfare","whimsy"
);

WORDS.person.push(
  "Ariana Grande","Billie Eilish","Bruno Mars","Dua Lipa","Ed Sheeran","Harry Styles","Justin Bieber","Katy Perry","Miley Cyrus","Olivia Rodrigo",
  "Shakira","Sia","Lorde","Drake","Jay Z","Snoop Dogg","Tupac Shakur","Kendrick Lamar","Nicki Minaj","Travis Scott",
  "Megan Thee Stallion","Lizzo","Post Malone","Bad Bunny","Harry Houdini","David Copperfield","Penn Jillette","Usain Bolt","Jesse Owens","Jackie Robinson",
  "Michael Schumacher","Lewis Hamilton","Ayrton Senna","Valentino Rossi","Lydia Ko","Ash Barty","Pat Rafter","Ian Thorpe","Stephanie Rice","Ariarne Titmus",
  "Adam Goodes","Sam Kerr","Mary Fowler","Patty Mills","Lauren Jackson","Evonne Goolagong","Rod Laver","Margaret Court","Ellyse Perry","Tim Cahill",
  "Gal Gadot","Natalie Portman","Sandra Bullock","Anne Hathaway","Viola Davis","Whoopi Goldberg","Betty White","Lucille Ball","Judi Dench","Helen Mirren",
  "Anthony Hopkins","Christian Bale","Heath Ledger","Russell Crowe","Mel Gibson","Reese Witherspoon","Ryan Reynolds","Ryan Gosling","Dwayne Johnson","Jason Momoa",
  "Tom Cruise","George Clooney","Matt Damon","Ben Affleck","Eddie Murphy","Adam Sandler","Ben Stiller","Steve Carell","Tina Fey","Amy Poehler",
  "Lin Manuel Miranda","Andrew Lloyd Webber","Tim Burton","Francis Coppola","Spike Lee","Jordan Peele","M Night Shyamalan","Sofia Coppola","Kathryn Bigelow","Jane Campion",
  "Willem Dafoe","Tilda Swinton","Benedict Cumberbatch","Tom Holland","Andrew Garfield","Tobey Maguire","Mark Hamill","Carrie Fisher","Alec Guinness","Ewan McGregor",
  "Patrick Stewart","Ian McKellen","J R R Tolkien","George R R Martin","Suzanne Collins","Stephenie Meyer","John Green","Rick Riordan","Philip Pullman","Neil Gaiman",
  "Margaret Atwood","Chimamanda Adichie","Kazuo Ishiguro","Gabriel Garcia Marquez","Jorge Borges","Pablo Neruda","Rumi","Dante Alighieri","Geoffrey Chaucer","Miguel Cervantes",
  "Arthur Conan Doyle","H G Wells","Jules Verne","George Eliot","Charlotte Bronte","Emily Bronte","Louisa Alcott","Beatrix Potter","Enid Blyton","A A Milne",
  "Elizabeth I","Henry VIII","Richard III","Charlemagne","Hannibal","Spartacus","Ramses II","Nefertiti","Hatshepsut","Catherine the Great",
  "Peter the Great","Otto von Bismarck","Simone de Beauvoir","Hannah Arendt","Mary Wollstonecraft","Emmeline Pankhurst","Susan B Anthony","Sojourner Truth","Frederick Douglass","Booker T Washington",
  "Desmond Tutu","Kofi Annan","Indira Gandhi","Benazir Bhutto","Aung San Suu Kyi","Ho Chi Minh","Mao Zedong","Deng Xiaoping","Fidel Castro","Che Guevara",
  "Mikhail Gorbachev","Boris Yeltsin","Kim Jong Un","Yasser Arafat","Golda Meir","David Ben Gurion","King Charles","Prince William","Mary Anning","Dian Fossey",
  "Prince Harry","Meghan Markle","Kamala Harris","Hillary Clinton","Michelle Obama","Nancy Pelosi","Ruth Bader Ginsburg","Greta Garbo","Grace Kelly","Elizabeth Taylor",
  "Shirley Temple","Judy Garland","Liza Minnelli","Fred Astaire","Gene Kelly","Buster Keaton","Orson Welles","Marlon Brando","Clint Eastwood","Al Pacino",
  "Robert De Niro","Joe Pesci","Tom Hardy","Idris Elba","Daniel Craig","Sean Connery","Pierce Brosnan","Roger Moore","Christopher Lee","Bela Lugosi",
  "Boris Johnson","Rishi Sunak","Justin Trudeau","Emmanuel Macron","Nicolas Sarkozy","Bashar Assad","Hugo Chavez","Eva Peron","Simon Bolivar","Frida Kahlo",
  "Diego Rivera","Georgia OKeeffe","Jackson Pollock","Henri Matisse","Paul Cezanne","Edvard Munch","Johannes Vermeer","Caravaggio","Donatello","Raphael",
  "Claude Debussy","Johannes Brahms","Franz Schubert","Richard Wagner","George Gershwin","Igor Stravinsky","John Williams","Hans Zimmer","Ennio Morricone","Andrew Lloyd Webber",
  "Tim Berners Lee","Larry Page","Sergey Brin","Sundar Pichai","Satya Nadella","Sam Altman","Linus Torvalds","Dennis Ritchie","Ken Thompson","Guido van Rossum",
  "James Watson","Francis Crick","Gregor Mendel","Robert Oppenheimer","Edward Teller","Edwin Hubble","Johannes Kepler","Tycho Brahe","Euclid","Pythagoras",
  "Archimedes","Hippocrates","Avicenna","Ibn Battuta","Mansa Musa","Haile Selassie","Shaka Zulu","Jane Austen","Sally Ride","Mae Jemison"
);

WORDS.world.push(
  "Australia","Canada","China","India","Brazil","Argentina","Chile","Peru","Egypt","Kenya",
  "Nigeria","South Africa","Morocco","Japan","Thailand","Vietnam","Indonesia","Malaysia","New Zealand","Ireland",
  "Scotland","Wales","England","France","Germany","Italy","Spain","Portugal","Greece","Turkey",
  "Poland","Ukraine","Russia","Norway","Sweden","Finland","Denmark","Switzerland","Austria","Belgium",
  "The Netherlands","The United States","The United Kingdom","The Philippines","The Bahamas","The United Arab Emirates","The Czech Republic","South Korea","North Korea","Saudi Arabia",
  "Sri Lanka","Costa Rica","Puerto Rico","Hong Kong","Macau","Taiwan","Tibet","Nepal","Bhutan","Cambodia",
  "Laos","Myanmar","Mongolia","Kazakhstan","Uzbekistan","Afghanistan","Pakistan","Bangladesh","Iran","Iraq",
  "Syria","Jordan","Lebanon","Israel","Palestine","Qatar","Kuwait","Oman","Yemen","Ethiopia",
  "Ghana","Tanzania","Uganda","Rwanda","Zimbabwe","Zambia","Botswana","Namibia","Madagascar","Mauritius",
  "The Seychelles","The Canary Islands","The Azores","Sicily","Sardinia","Corsica","Crete","Rhodes","Cyprus","Malta",
  "Reykjavik","Dublin","London","Cardiff","Glasgow","Edinburgh","Belfast","Birmingham","Liverpool","Leeds",
  "Nottingham","Cambridge","Brighton","Bristol","Bordeaux","Lyon","Marseille","Nice","Cannes","Monaco",
  "Naples","Venice","Verona","Pisa","Turin","Palermo","Bologna","Pompeii","Sorrento","Capri",
  "Mykonos","Crete","Rhodes","Delphi","Olympia","Sparta","Santorini","Corfu","Dubrovnik","Split",
  "Zagreb","Prague","Vienna","Salzburg","Budapest","Warsaw","Krakow","Gdansk","Tallinn","Riga",
  "Vilnius","Helsinki","Bergen","Oslo","Stockholm","Gothenburg","Copenhagen","Hamburg","Frankfurt","Cologne",
  "Dresden","Nuremberg","Zurich","Geneva","Bern","Lucerne","Interlaken","Bruges","Antwerp","Rotterdam",
  "The Hague","Utrecht","Luxembourg","Andorra","Lisbon","Porto","Seville","Granada","Valencia","Bilbao",
  "Toledo","Cordoba","Malaga","Ibiza","Mallorca","Tenerife","Madeira","Casablanca","Fez","Tangier",
  "Rabat","Tunis","Carthage","Algiers","Cairo","Giza","Luxor","Aswan","Alexandria","Nairobi",
  "Mombasa","Zanzibar","Arusha","Kigali","Lagos","Abuja","Accra","Dakar","Cape Town","Johannesburg",
  "Pretoria","Durban","Harare","Lusaka","Windhoek","Gaborone","Victoria Falls","The Nile Delta","The Sphinx","The Valley of the Kings",
  "The Red Centre","The Nullarbor","The Kimberley","The Barossa Valley","The Yarra Valley","The Blue Mountains","The Snowy Mountains","The Whitsundays","The Gold Coast","The Sunshine Coast",
  "Byron Bay","Noosa","Broome","Darwin","Perth","Adelaide","Melbourne","Sydney","Canberra","Brisbane",
  "Hobart","Christchurch","Wellington","Auckland","Rotorua","Queenstown","Fjordland","Milford Sound","Mount Cook","Hobbiton",
  "Los Angeles","San Diego","San Jose","Sacramento","Portland","Seattle","Las Vegas","Phoenix","Denver","Dallas",
  "Houston","Austin","New Orleans","Atlanta","Miami","Tampa","Orlando","Nashville","Memphis","Chicago",
  "Detroit","Cleveland","Pittsburgh","Philadelphia","Baltimore","Washington","Boston","New York","Brooklyn","Manhattan",
  "Harlem","Queens","The Bronx","Long Island","New Jersey","Connecticut","Rhode Island","Maine","Vermont","New Hampshire",
  "Toronto","Montreal","Quebec City","Ottawa","Vancouver","Calgary","Banff","Jasper","Winnipeg","Halifax",
  "Mexico City","Cancun","Tulum","Guadalajara","Monterrey","Havana","Kingston","Nassau","Port au Prince","Panama City",
  "Bogota","Medellin","Cartagena","Quito","Lima","Cusco","Machu Picchu","Santiago","Buenos Aires","Montevideo",
  "Rio de Janeiro","Sao Paulo","Brasilia","Salvador","Iguazu Falls","The Amazon Basin","The Andes","The Pampas","Patagonia","Tierra del Fuego",
  "Tokyo","Kyoto","Osaka","Hiroshima","Nagasaki","Sapporo","Mount Fuji","Seoul","Busan","Jeju",
  "Beijing","Shanghai","Hong Kong","Macau","Taipei","Singapore","Bangkok","Chiang Mai","Phuket","Bali",
  "Jakarta","Kuala Lumpur","Manila","Hanoi","Ho Chi Minh City","Angkor Wat","Siem Reap","Yangon","Kathmandu","Lhasa",
  "Delhi","Mumbai","Agra","Jaipur","Varanasi","Goa","Kolkata","Bangalore","Chennai","Hyderabad",
  "Dubai","Abu Dhabi","Doha","Riyadh","Jeddah","Mecca","Medina","Jerusalem","Bethlehem","Petra",
  "The Great Mosque of Mecca","The Dome of the Rock","The Wailing Wall","The Temple Mount","The Panama Canal","The Erie Canal","The Grand Canal","The Ring of Kerry","The Cliffs of Moher","The Giant's Causeway"
);

WORDS.action.push(
  "accepting","accusing","admitting","advising","agreeing","announcing","apologising","arguing","arranging","attacking",
  "attempting","avoiding","babysitting","backing","balancing","banning","believing","blaming","boiling","bothering",
  "bowing","bragging","breaking","brewing","bringing","browsing","bumping","calculating","camping","carving",
  "celebrating","choking","choosing","circling","clapping","clutching","coaching","collapsing","commanding","comparing",
  "competing","confessing","confusing","congratulating","connecting","considering","constructing","controlling","crawling","criticising",
  "debating","deciding","defending","delaying","destroying","disagreeing","disappearing","dividing","doubting","dressing",
  "dripping","dropping","earning","educating","encouraging","ending","escaping","exercising","exploring","fighting",
  "floating","forgetting","gasping","gliding","gossiping","grumbling","guiding","haunting","healing","hearing",
  "hesitating","hoping","ignoring","improvising","joking","judging","knocking","launching","leading","leaping",
  "lying","managing","marching","mending","miming","mocking","mourning","muttering","negotiating","observing",
  "organising","oversleeping","panicking","patrolling","persuading","photographing","practising","predicting","pretending","protesting",
  "publishing","punishing","recording","refusing","regretting","rehearsing","removing","renting","reporting","requesting",
  "risking","roasting","robing","screaming","separating","shaking","sketching","slipping","smashing","sneaking",
  "soaring","sparkling","speaking","spying","squeezing","stitching","struggling","succeeding","suffering","suggesting",
  "surprising","surviving","teasing","tempting","trading","translating","tripping","trusting","understanding","unlocking",
  "voting","warning","wishing","worrying"
);

WORDS.object.push(
  "appliance","armoire","atlas","badge","beacon","beanie","beater","bedspread","beret","bin",
  "blackboard","blouse","boombox","bottlecap","briefcase","brochure","canister","cape","casserole","clipboard",
  "clutch","coaster","cot","crutch","decoy","dishwasher","doily","duct","earbud","engine",
  "fender","filament","flask","freezer","gauntlet","goggles","griddle","grommet","halter","harness",
  "headlamp","hoodie","hosepipe","ignition","jack","jerkin","jumpsuit","kiosk","lantern","leotard",
  "locket","magazine","manuscript","mat","medallion","muzzle","necktie","notepad","organ","paddle",
  "pager","parcel","patch","pellet","piston","plaque","poncho","porch","pouch","pullover",
  "pump","rattle","recorder","sail","satchel","sconce","screen","scroll","sequin","shield",
  "shoebox","skewer","sling","speaker","spinner","stroller","switchboard","syringe","tackle","teaspoon",
  "thermostat","tile","toboggan","trailer","trident","tunic","turnstile","uniform","valve","visor",
  "wafer","wardrobe","wetsuit","winch","windshield","zither"
);

WORDS.nature.push(
  "acacia","alligator","aphid","arbutus","avocado","baboon","barnacle","barramundi","beetroot","bilby",
  "bison","bluefin","boab","bowerbird","bracken","bream","brumby","bryophyte","caldera","camel",
  "capybara","caracal","carrot","cascade","cassava","celery","chasm","cicada","cormorant","cougar",
  "crayfish","cucumber","dahlia","dingo","dragonfly","eucalypt","fennel","firestorm","flamingo","floodplain",
  "frangipani","galah","gannet","gardenia","gibbon","ginseng","giraffe","glade","gooseberry","gourd",
  "grevillea","grouper","guava","gumtree","hamster","hare","haze","herring","honeybee","honeyeater",
  "horizon","ibis","icecap","jellyfish","kelpie","kingfisher","ladybird","lagoon","limestone","lobster",
  "lorikeet","magnolia","mallee","mandarin","mangosteen","mangrove","manta","marigold","melon","mineral",
  "mongoose","mulberry","narwhal","nutmeg","orca","oregano","papaya","parakeet","pasture","peacock",
  "persimmon","petrichor","pike","pinnacle","pistachio","pomegranate","prawn","quokka","rapids","raspberry",
  "rhododendron","saffron","sardine","savannah","sequoia","shallot","sleet","squid","sunrise","sunset",
  "tarantula","terrace","thicket","thyme","topaz","truffle","tulip","walrus","warthog","watercress"
);

WORDS.random.push(
  "abstraction","accountability","adversity","aesthetic","alliance","analysis","anecdote","anticipation","appetite","argument",
  "artistry","aspiration","asset","astonishment","balance","benchmark","bias","camaraderie","capacity","catharsis",
  "caution","ceremony","charisma","clarity","coalition","commerce","complexity","consensus","constraint","context",
  "contradiction","convention","credibility","curiosity","debacle","dedication","deficit","demonstration","dependence","dialogue",
  "dilemma","diplomacy","discretion","distinction","dominance","efficiency","elaboration","empathy","endurance","enterprise",
  "equity","ethics","excellence","exclusion","expansion","expertise","familiarity","fascination","flexibility","foresight",
  "fragility","framework","gratitude","grievance","hierarchy","hypocrisy","idealism","innovation","insight","instability",
  "interpretation","intuition","irritation","liberty","limitation","mentality","moderation","neglect","obstacle","parody",
  "partnership","perception","persistence","phenomenon","plausibility","popularity","precision","prestige","principle","protocol",
  "rationale","realisation","reassurance","recognition","reform","resilience","restraint","sarcasm","scenario","skepticism",
  "solidarity","spectacle","stereotype","structure","symbolism","transparency","uncertainty","validity","virtue","whim"
);

WORDS.action.push(
  "absorbing","accelerating","achieving","addressing","adjusting","analysing","annoying","applying","approaching","approving",
  "assembling","assisting","balancing","bending","blessing","blocking","boasting","bouncing","broadcasting","bursting",
  "carrying","challenging","cheating","checking","chipping","chuckling","claiming","climbing","combining","comforting",
  "composing","concentrating","concluding","confirming","conserving","consulting","crawling","creating","crossing","crushing",
  "curving","damaging","daring","debating","declaring","declining","decorating","defeating","demanding","detecting",
  "developing","directing","discussing","diving","dragging","educating","emerging","emphasising","entering","examining",
  "expanding","experimenting","fading","fastening","feeding","finishing","fleeing","flipping","foraging","gathering",
  "glancing","grinding","guarding","handling","harvesting","imagining","improving","including","inspiring","interviewing",
  "inventing","investigating","joining","juggling","knitting","laughing","measuring","melting","navigating","noticing",
  "offering","organising","performing","picking","polishing","preparing","protecting","questioning","realising","rebuilding",
  "recovering","rejecting","resisting","rolling","sheltering","sliding","sorting","spinning","splitting","squinting",
  "staggering","steering","stirring","studying","teaching","tracking","transforming","tumbling","whispering","wrapping"
);

for (const category of Object.keys(WORDS)) {
  WORDS[category] = uniqueList(WORDS[category]);
}
