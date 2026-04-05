export type Difficulty = "easy" | "medium" | "hard";
export type Genre = "action" | "romance" | "comedy" | "drama" | "thriller" | "family" | "historical" | "fantasy" | "horror" | "sci-fi";

export interface Movie {
  id: number;
  title: string;
  teluguTitle?: string;
  year: number;
  genre: Genre;
  difficulty: Difficulty;
  hint?: string;
}

export const teluguMovies: Movie[] = [
  // ──────────── RECENT / NEW (2020-2025) ────────────
  { id: 1, title: "RRR", teluguTitle: "ఆర్ఆర్ఆర్", year: 2022, genre: "action", difficulty: "easy", hint: "Two freedom fighters, naatu naatu" },
  { id: 2, title: "Pushpa: The Rise", teluguTitle: "పుష్ప: ది రైజ్", year: 2021, genre: "action", difficulty: "easy", hint: "Red sandalwood smuggler from Nallamala" },
  { id: 3, title: "Pushpa 2: The Rule", teluguTitle: "పుష్ప 2: ది రూల్", year: 2024, genre: "action", difficulty: "easy", hint: "Pushpa becomes even more powerful" },
  { id: 4, title: "Ala Vaikunthapurramuloo", teluguTitle: "అల వైకుంఠపురమూలో", year: 2020, genre: "family", difficulty: "easy", hint: "Babies swapped at birth" },
  { id: 5, title: "Bheemla Nayak", teluguTitle: "భీమ్లా నాయక్", year: 2022, genre: "action", difficulty: "easy", hint: "Police constable vs SI rivalry" },
  { id: 6, title: "Sarkaru Vaari Paata", teluguTitle: "సర్కారు వారి పాట", year: 2022, genre: "action", difficulty: "easy", hint: "Bank employee fights loan sharks" },
  { id: 7, title: "Vikram Vedha", teluguTitle: "విక్రమ్ వేద", year: 2022, genre: "thriller", difficulty: "easy", hint: "Cop hunts gangster who tells stories" },
  { id: 8, title: "Godfather", teluguTitle: "గాడ్ ఫాదర్", year: 2022, genre: "action", difficulty: "medium", hint: "Political power struggle chiranjeevi" },
  { id: 9, title: "Waltair Veerayya", teluguTitle: "వాల్తేరు వీరయ్య", year: 2023, genre: "action", difficulty: "easy", hint: "Fisherman fights drug lord" },
  { id: 10, title: "Veera Simha Reddy", teluguTitle: "వీర సింహ రెడ్డి", year: 2023, genre: "action", difficulty: "easy", hint: "Balakrishna mass action" },
  { id: 11, title: "Dasara", teluguTitle: "దసర", year: 2023, genre: "action", difficulty: "easy", hint: "Coal mine saga natural Nani" },
  { id: 12, title: "Shaakuntalam", teluguTitle: "శాకుంతలం", year: 2023, genre: "historical", difficulty: "medium", hint: "Mythological love story Shakuntala" },
  { id: 13, title: "Custody", teluguTitle: "కస్టడీ", year: 2023, genre: "action", difficulty: "medium", hint: "Police custody drama Naga Chaitanya" },
  { id: 14, title: "Kisi Ka Bhai Kisi Ki Jaan", year: 2023, genre: "action", difficulty: "medium", hint: "Salman Khan family action" },
  { id: 15, title: "HanuMan", teluguTitle: "హను-మాన్", year: 2024, genre: "fantasy", difficulty: "easy", hint: "Hanuman powers ordinary man" },
  { id: 16, title: "Guntur Kaaram", teluguTitle: "గుంటూరు కారం", year: 2024, genre: "family", difficulty: "easy", hint: "Mother-son estrangement Mahesh Babu" },
  { id: 17, title: "Eagle", year: 2024, genre: "action", difficulty: "medium", hint: "Ravi Teja spy action" },
  { id: 18, title: "Tillu Square", teluguTitle: "టిల్లు స్క్వేర్", year: 2024, genre: "comedy", difficulty: "easy", hint: "Siddhu comedy sequel" },
  { id: 19, title: "Devara: Part 1", teluguTitle: "దేవర: పార్ట్ 1", year: 2024, genre: "action", difficulty: "easy", hint: "NTR as sea lord" },
  { id: 20, title: "Kalki 2898 AD", teluguTitle: "కల్కి 2898 ఎడీ", year: 2024, genre: "sci-fi", difficulty: "easy", hint: "Prabhas future world mythology" },
  { id: 21, title: "Stree 2", year: 2024, genre: "horror", difficulty: "easy", hint: "Ghost that abducts men sequel" },
  { id: 22, title: "The Greatest of All Time", year: 2024, genre: "action", difficulty: "medium", hint: "Vijay returns from retirement" },
  { id: 23, title: "Lucky Baskhar", teluguTitle: "లక్కీ భాస్కర్", year: 2024, genre: "thriller", difficulty: "easy", hint: "Bank employee bold heist" },
  { id: 24, title: "Saripodhaa Sanivaaram", teluguTitle: "సరిపోదా సనివారం", year: 2024, genre: "action", difficulty: "easy", hint: "NTR punishes wrongdoers only on Saturdays" },
  { id: 25, title: "Nanpaban", year: 2024, genre: "drama", difficulty: "medium", hint: "Tamil friendship drama" },
  { id: 26, title: "Maa Oori Polimera 2", teluguTitle: "మా ఊరి పోలిమేర 2", year: 2023, genre: "horror", difficulty: "medium", hint: "Village boundary ghost sequel" },
  { id: 27, title: "Skanda", teluguTitle: "స్కందా", year: 2023, genre: "action", difficulty: "medium", hint: "Ram Pothineni rescues village" },
  { id: 28, title: "Karthikeya 2", teluguTitle: "కార్తికేయ 2", year: 2022, genre: "thriller", difficulty: "medium", hint: "Mystery of Lord Krishna's anklet" },
  { id: 29, title: "Bangarraju", teluguTitle: "బంగార్రాజు", year: 2022, genre: "comedy", difficulty: "easy", hint: "Ghost grandfather matchmaking sequel" },
  { id: 30, title: "Acharya", teluguTitle: "ఆచార్య", year: 2022, genre: "action", difficulty: "medium", hint: "Naxalite fights temple corruption" },
  { id: 31, title: "Radhe Shyam", teluguTitle: "రాధే శ్యామ్", year: 2022, genre: "romance", difficulty: "easy", hint: "Palmist predicts his own fate Prabhas" },
  { id: 32, title: "Liger", teluguTitle: "లైగర్", year: 2022, genre: "action", difficulty: "medium", hint: "MMA fighter from Mumbai slums" },
  { id: 33, title: "DJ Tillu", teluguTitle: "డీజే టిల్లు", year: 2022, genre: "comedy", difficulty: "easy", hint: "DJ gets involved in murder comedy" },
  { id: 34, title: "F3: Fun and Frustration", teluguTitle: "ఎఫ్3: ఫన్ అండ్ ఫ్రస్ట్రేషన్", year: 2022, genre: "comedy", difficulty: "easy", hint: "F2 sequel money comedy" },
  { id: 35, title: "Ante Sundaraniki", teluguTitle: "అంటే సుందరానికి", year: 2022, genre: "romance", difficulty: "easy", hint: "Inter-religion love story Nani" },
  { id: 36, title: "Valimai", year: 2022, genre: "action", difficulty: "medium", hint: "Ajith Kumar bike chase" },
  { id: 37, title: "Beast", year: 2022, genre: "action", difficulty: "medium", hint: "Vijay in mall hostage situation" },
  { id: 38, title: "KGF: Chapter 2", year: 2022, genre: "action", difficulty: "easy", hint: "Rocky Bhai becomes more powerful" },
  { id: 39, title: "Vikrant Rona", year: 2022, genre: "thriller", difficulty: "medium", hint: "Forest mystery Kichcha Sudeep" },
  { id: 40, title: "Dhamaka", year: 2022, genre: "action", difficulty: "medium", hint: "Ravi Teja one man army" },
  { id: 41, title: "Bimbisara", teluguTitle: "బింబిసార", year: 2022, genre: "fantasy", difficulty: "medium", hint: "Ancient king time travels to present" },
  { id: 42, title: "Mahaan", year: 2022, genre: "action", difficulty: "medium", hint: "Vikram transformed by liquor" },
  { id: 43, title: "Brahmastra", year: 2022, genre: "fantasy", difficulty: "easy", hint: "Ayan discovers fire power" },
  { id: 44, title: "Yashoda", teluguTitle: "యశోద", year: 2022, genre: "thriller", difficulty: "medium", hint: "Surrogate mother uncovers dark conspiracy" },
  { id: 45, title: "Naandhi", teluguTitle: "నాంది", year: 2021, genre: "drama", difficulty: "medium", hint: "Man fights false imprisonment" },
  { id: 46, title: "Maestro", teluguTitle: "మేస్ట్రో", year: 2021, genre: "thriller", difficulty: "medium", hint: "Nithiin hitchcock thriller remake" },
  { id: 47, title: "Uppena", teluguTitle: "ఉప్పెన", year: 2021, genre: "romance", difficulty: "easy", hint: "Fisherman boy loves Zamindar's daughter" },
  { id: 48, title: "Republic", teluguTitle: "రిపబ్లిక్", year: 2021, genre: "drama", difficulty: "medium", hint: "IAS officer fights corruption" },
  { id: 49, title: "Krack", teluguTitle: "క్రాక్", year: 2021, genre: "action", difficulty: "easy", hint: "Ravi Teja ruthless cop" },
  { id: 50, title: "Vakeel Saab", teluguTitle: "వకీల్ సాబ్", year: 2021, genre: "drama", difficulty: "easy", hint: "Pawan Kalyan lawyer fights for women" },
  { id: 51, title: "Most Eligible Bachelor", teluguTitle: "మోస్ట్ ఎలిజిబిల్ బ్యాచెలర్", year: 2021, genre: "romance", difficulty: "easy", hint: "Modern vs traditional relationship Akhil" },
  { id: 52, title: "Love Story", teluguTitle: "లవ్ స్టోరీ", year: 2021, genre: "romance", difficulty: "easy", hint: "Dance trainer love Naga Chaitanya Sai Pallavi" },
  { id: 53, title: "Narappa", teluguTitle: "నరప్ప", year: 2021, genre: "drama", difficulty: "medium", hint: "Venkatesh village farmer fights upper caste" },
  { id: 54, title: "Kurup", year: 2021, genre: "thriller", difficulty: "medium", hint: "True crime fugitive Dulquer Salmaan" },
  { id: 55, title: "Tuck Jagadish", teluguTitle: "టక్ జగదీశ్", year: 2021, genre: "family", difficulty: "medium", hint: "Nani family land dispute" },
  { id: 56, title: "Maestro: Murder by Numbers", year: 2021, genre: "thriller", difficulty: "hard", hint: "Serial killer investigator Nithiin" },
  { id: 57, title: "Rang De", teluguTitle: "రంగ్ దే", year: 2021, genre: "romance", difficulty: "easy", hint: "Childhood enemies fall in love Nithiin" },
  { id: 58, title: "Jathi Ratnalu", teluguTitle: "జాతి రత్నాలు", year: 2021, genre: "comedy", difficulty: "easy", hint: "Three friends prison comedy" },
  { id: 59, title: "Zombie Reddy", teluguTitle: "జాంబీ రెడ్డి", year: 2021, genre: "horror", difficulty: "medium", hint: "First Telugu zombie comedy film" },
  { id: 60, title: "Akhanda", teluguTitle: "అఖండ", year: 2021, genre: "action", difficulty: "easy", hint: "Balakrishna double role saint & mass" },
  { id: 61, title: "Tholiprema", teluguTitle: "తొలి ప్రేమ", year: 2020, genre: "romance", difficulty: "medium", hint: "First love story Varun Tej" },
  { id: 62, title: "V", teluguTitle: "వి", year: 2020, genre: "thriller", difficulty: "medium", hint: "Villain vs hero Nani Adivi Sesh" },
  { id: 63, title: "Miss India", teluguTitle: "మిస్ ఇండియా", year: 2020, genre: "drama", difficulty: "medium", hint: "Woman builds chai business empire" },
  { id: 64, title: "World Famous Lover", teluguTitle: "వరల్డ్ ఫేమస్ లవర్", year: 2020, genre: "romance", difficulty: "easy", hint: "Vijay Deverakonda four love stories" },
  { id: 65, title: "Chitralahari", teluguTitle: "చిత్రలహరి", year: 2019, genre: "drama", difficulty: "medium", hint: "Music director struggle Sai Tej" },
  { id: 66, title: "Saaho", teluguTitle: "సాహో", year: 2019, genre: "action", difficulty: "easy", hint: "Prabhas heist thriller" },
  { id: 67, title: "Majili", teluguTitle: "మజిలీ", year: 2019, genre: "romance", difficulty: "easy", hint: "Cricketer rediscovers love Naga Chaitanya" },
  { id: 68, title: "Hello Guru Prema Kosame", teluguTitle: "హలో గురు ప్రేమ కోసమే", year: 2018, genre: "romance", difficulty: "medium", hint: "Ram Pothineni chasing his crush" },
  { id: 69, title: "Rangasthalam", teluguTitle: "రంగస్థలం", year: 2018, genre: "drama", difficulty: "easy", hint: "Ram Charan hearing-impaired village fighter" },
  { id: 70, title: "Geetha Govindam", teluguTitle: "గీత గోవిందం", year: 2018, genre: "romance", difficulty: "easy", hint: "Vijay Deverakonda misunderstanding love" },
  { id: 71, title: "Bharat Ane Nenu", teluguTitle: "భారత్ అనే నేను", year: 2018, genre: "action", difficulty: "easy", hint: "CM's son becomes CM" },
  { id: 72, title: "Jersey", teluguTitle: "జెర్సీ", year: 2019, genre: "drama", difficulty: "easy", hint: "Father plays cricket for son's jersey" },
  { id: 73, title: "Dear Comrade", teluguTitle: "డియర్ కామ్రేడ్", year: 2019, genre: "romance", difficulty: "easy", hint: "Vijay Deverakonda PTSD love story" },
  { id: 74, title: "Taxiwaala", teluguTitle: "టాక్సీవాల", year: 2018, genre: "thriller", difficulty: "medium", hint: "Vijay Deverakonda haunted cab" },
  { id: 75, title: "Ruler", teluguTitle: "రూలర్", year: 2019, genre: "action", difficulty: "medium", hint: "Balakrishna army officer saves village" },
  { id: 76, title: "MCA: Middle Class Abbayi", teluguTitle: "ఎంసీఏ", year: 2017, genre: "action", difficulty: "medium", hint: "Nani middle class fights injustice" },

  // ──────────── 2015-2019 ────────────
  { id: 77, title: "Baahubali: The Beginning", teluguTitle: "బాహుబలి", year: 2015, genre: "action", difficulty: "easy", hint: "Epic warrior rises" },
  { id: 78, title: "Baahubali 2: The Conclusion", teluguTitle: "బాహుబలి 2", year: 2017, genre: "action", difficulty: "easy", hint: "Why Kattappa killed Baahubali" },
  { id: 79, title: "Fidaa", teluguTitle: "ఫిదా", year: 2017, genre: "romance", difficulty: "medium", hint: "Telangana village girl Sai Pallavi" },
  { id: 80, title: "Arjun Reddy", teluguTitle: "అర్జున్ రెడ్డి", year: 2017, genre: "drama", difficulty: "easy", hint: "Brilliant troubled surgeon" },
  { id: 81, title: "Duvvada Jagannadham", teluguTitle: "దువ్వాడ జగన్నాధం", year: 2017, genre: "action", difficulty: "medium", hint: "Brahmin hitman" },
  { id: 82, title: "Nannaku Prematho", teluguTitle: "నన్నాకు ప్రేమతో", year: 2016, genre: "thriller", difficulty: "medium", hint: "NTR seeks revenge in Europe" },
  { id: 83, title: "Sarrainodu", teluguTitle: "సర్రైనోడు", year: 2016, genre: "action", difficulty: "medium", hint: "Hot-headed Allu Arjun mass" },
  { id: 84, title: "Khaidi No 150", teluguTitle: "ఖైదీ నంబర్ 150", year: 2017, genre: "action", difficulty: "medium", hint: "Chiranjeevi farmer vs corrupt minister" },
  { id: 85, title: "Srimanthudu", teluguTitle: "శ్రీమంతుడు", year: 2015, genre: "drama", difficulty: "medium", hint: "Rich man adopts village" },
  { id: 86, title: "Temper", teluguTitle: "టెంపర్", year: 2015, genre: "action", difficulty: "medium", hint: "Corrupt cop becomes honest" },
  { id: 87, title: "Kick 2", teluguTitle: "కిక్ 2", year: 2015, genre: "action", difficulty: "medium", hint: "Ravi Teja thrill-seeker sequel" },
  { id: 88, title: "Son of Satyamurthy", teluguTitle: "ఎస్ ఓ ఎస్", year: 2015, genre: "family", difficulty: "easy", hint: "Son inherits father's debts" },
  { id: 89, title: "Pelli Choopulu", teluguTitle: "పెళ్ళి చూపులు", year: 2016, genre: "romance", difficulty: "easy", hint: "Arranged meeting turns love Vijay Deverakonda" },
  { id: 90, title: "Mahanati", teluguTitle: "మహానటి", year: 2018, genre: "historical", difficulty: "medium", hint: "Savitri legendary actress biopic" },
  { id: 91, title: "Maharshi", teluguTitle: "మహర్షి", year: 2019, genre: "drama", difficulty: "medium", hint: "Mahesh Babu billionaire helps farmers" },
  { id: 92, title: "Agnyaathavaasi", teluguTitle: "అజ్ఞాతవాసి", year: 2018, genre: "action", difficulty: "medium", hint: "Prabhas son seeks father's killers" },

  // ──────────── 2010-2014 ────────────
  { id: 93, title: "Magadheera", teluguTitle: "మగధీర", year: 2009, genre: "action", difficulty: "easy", hint: "Reincarnation warrior Ram Charan" },
  { id: 94, title: "Eega", teluguTitle: "ఈగ", year: 2012, genre: "thriller", difficulty: "easy", hint: "Hero reborn as a housefly" },
  { id: 95, title: "Dookudu", teluguTitle: "దూకుడు", year: 2011, genre: "action", difficulty: "medium", hint: "Mahesh Babu cop saves father" },
  { id: 96, title: "Julayi", teluguTitle: "జులాయి", year: 2012, genre: "comedy", difficulty: "medium", hint: "Lazy man involved in heist" },
  { id: 97, title: "Maryada Ramanna", teluguTitle: "మర్యాద రామన్న", year: 2010, genre: "comedy", difficulty: "medium", hint: "Village rivalry comedy SS Rajamouli" },
  { id: 98, title: "Khaleja", teluguTitle: "ఖలేజా", year: 2010, genre: "action", difficulty: "medium", hint: "Taxi driver becomes god Mahesh" },
  { id: 99, title: "1: Nenokkadine", teluguTitle: "1: నేనొక్కడినే", year: 2014, genre: "thriller", difficulty: "medium", hint: "Musician with dark past Mahesh" },
  { id: 100, title: "Race Gurram", teluguTitle: "రేస్ గుర్రం", year: 2014, genre: "action", difficulty: "easy", hint: "Brothers cop vs rowdy Allu Arjun" },
  { id: 101, title: "Legend", teluguTitle: "లెజెండ్", year: 2014, genre: "action", difficulty: "medium", hint: "Balakrishna fights kidney mafia" },
  { id: 102, title: "SVSC: Seethamma Vakitlo Sirimalle Chettu", year: 2013, genre: "family", difficulty: "hard", hint: "Elder brother sacrifices for younger" },
  { id: 103, title: "Attarintiki Daredi", teluguTitle: "అత్తారింటికి దారేది", year: 2013, genre: "comedy", difficulty: "easy", hint: "Pawan Kalyan brings estranged family" },
  { id: 104, title: "Yevadu", teluguTitle: "యేవడు", year: 2014, genre: "action", difficulty: "medium", hint: "Ram Charan face swap action" },
  { id: 105, title: "Julayi 2", year: 2012, genre: "comedy", difficulty: "hard", hint: "Allu Arjun comedy crime" },
  { id: 106, title: "Businessman", teluguTitle: "బిజినెస్ మ్యాన్", year: 2012, genre: "action", difficulty: "medium", hint: "Mahesh Babu slum don" },
  { id: 107, title: "Mirchi", teluguTitle: "మిర్చి", year: 2013, genre: "action", difficulty: "easy", hint: "Prabhas fights for love and land" },
  { id: 108, title: "Rebel", teluguTitle: "రెబెల్", year: 2012, genre: "action", difficulty: "medium", hint: "Prabhas army cadet dual role" },
  { id: 109, title: "Baadshah", teluguTitle: "బాద్‌షా", year: 2013, genre: "action", difficulty: "medium", hint: "NTR undercover gangster" },
  { id: 110, title: "Ramayya Vasthavayya", teluguTitle: "రామయ్య వస్తావయ్య", year: 2013, genre: "action", difficulty: "medium", hint: "NTR fights land grabbers" },
  { id: 111, title: "Brindavanam", teluguTitle: "బృందావనం", year: 2010, genre: "romance", difficulty: "easy", hint: "NTR pretends to be boyfriend" },
  { id: 112, title: "Darling", teluguTitle: "డార్లింగ్", year: 2010, genre: "thriller", difficulty: "medium", hint: "Prabhas ghost love story" },
  { id: 113, title: "Cameraman Ganga Tho Rambabu", year: 2012, genre: "drama", difficulty: "hard", hint: "Pawan Kalyan journalist corruption" },

  // ──────────── 2005-2009 ────────────
  { id: 114, title: "Pokiri", teluguTitle: "పోకిరి", year: 2006, genre: "action", difficulty: "easy", hint: "Mahesh Babu undercover cop" },
  { id: 115, title: "Jalsa", teluguTitle: "జల్సా", year: 2008, genre: "action", difficulty: "easy", hint: "Two Pawan Kalyan roles" },
  { id: 116, title: "Athadu", teluguTitle: "అతడు", year: 2005, genre: "action", difficulty: "easy", hint: "Mahesh Babu hitman with heart" },
  { id: 117, title: "Bommarillu", teluguTitle: "బొమ్మరిల్లు", year: 2006, genre: "romance", difficulty: "easy", hint: "Siddharth father-son love story" },
  { id: 118, title: "Happy Days", teluguTitle: "హ్యాపీ డేస్", year: 2007, genre: "drama", difficulty: "easy", hint: "Engineering college life SS Rajamouli" },
  { id: 119, title: "Arya", teluguTitle: "ఆర్య", year: 2004, genre: "romance", difficulty: "easy", hint: "Allu Arjun crazy in love" },
  { id: 120, title: "Arya 2", teluguTitle: "ఆర్య 2", year: 2009, genre: "romance", difficulty: "medium", hint: "Allu Arjun sequel intense love" },
  { id: 121, title: "Okkadu", teluguTitle: "ఒక్కడు", year: 2003, genre: "action", difficulty: "easy", hint: "Mahesh Babu kabaddi player saves girl" },
  { id: 122, title: "Bujjigadu", teluguTitle: "బుజ్జిగాడు", year: 2008, genre: "action", difficulty: "medium", hint: "Prabhas settles in Australia" },
  { id: 123, title: "Munna", teluguTitle: "మున్నా", year: 2007, genre: "action", difficulty: "medium", hint: "Prabhas village rowdy love story" },
  { id: 124, title: "Bhadra", teluguTitle: "భద్ర", year: 2005, genre: "action", difficulty: "medium", hint: "Ravi Teja protects temple" },
  { id: 125, title: "Chhatrapati", teluguTitle: "ఛత్రపతి", year: 2005, genre: "action", difficulty: "medium", hint: "Prabhas Sri Lankan refugees" },
  { id: 126, title: "Mass", teluguTitle: "మాస్", year: 2004, genre: "action", difficulty: "medium", hint: "Nagarjuna mass village action" },
  { id: 127, title: "Jai Chiranjeeva", teluguTitle: "జై చిరంజీవ", year: 2005, genre: "action", difficulty: "medium", hint: "Chiranjeevi fights corrupt politician" },
  { id: 128, title: "Stalin", teluguTitle: "స్టాలిన్", year: 2006, genre: "action", difficulty: "medium", hint: "Chiranjeevi NRI helps 100 people" },
  { id: 129, title: "Tagore", teluguTitle: "తాగోర్", year: 2003, genre: "action", difficulty: "medium", hint: "Chiranjeevi fights corruption Tagore" },
  { id: 130, title: "Chatrapathi", year: 2005, genre: "action", difficulty: "medium", hint: "Prabhas protects Tamil fishermen" },
  { id: 131, title: "Nuvvostanante Nenoddantana", year: 2005, genre: "romance", difficulty: "easy", hint: "Siddharth Trisha love in village" },
  { id: 132, title: "Mr. Perfect", teluguTitle: "మిస్టర్ పర్ఫెక్ట్", year: 2011, genre: "romance", difficulty: "easy", hint: "Prabhas perfectionist vs free spirit" },
  { id: 133, title: "Ready", teluguTitle: "రెడీ", year: 2008, genre: "comedy", difficulty: "easy", hint: "Ram clash between two families" },
  { id: 134, title: "Kick", teluguTitle: "కిక్", year: 2009, genre: "action", difficulty: "easy", hint: "Ravi Teja thrill-seeker action" },

  // ──────────── 2000-2004 ────────────
  { id: 135, title: "Murari", teluguTitle: "మురారి", year: 2001, genre: "drama", difficulty: "hard", hint: "Mahesh Babu cursed family" },
  { id: 136, title: "Manmadhudu", teluguTitle: "మన్మధుడు", year: 2002, genre: "romance", difficulty: "hard", hint: "Nagarjuna anti-marriage becomes lover" },
  { id: 137, title: "Nuvvu Nenu Prema", teluguTitle: "నువ్వు నేను ప్రేమ", year: 2002, genre: "romance", difficulty: "medium", hint: "Suriya childhood friends love" },
  { id: 138, title: "Nuvvu Vasthavani", teluguTitle: "నువ్వు వస్తావని", year: 2002, genre: "romance", difficulty: "hard", hint: "Nagarjuna airport romance" },
  { id: 139, title: "Kushi", teluguTitle: "కుషి", year: 2001, genre: "romance", difficulty: "easy", hint: "Pawan Kalyan fights arranged marriage" },
  { id: 140, title: "Indra", teluguTitle: "ఇంద్ర", year: 2002, genre: "action", difficulty: "easy", hint: "Chiranjeevi village hero mass film" },
  { id: 141, title: "Tagore", year: 2003, genre: "action", difficulty: "medium", hint: "Chiranjeevi revenue officer fights evil" },
  { id: 142, title: "Simhadri", teluguTitle: "సింహాద్రి", year: 2003, genre: "action", difficulty: "easy", hint: "NTR servant reveals true identity" },
  { id: 143, title: "Varsham", teluguTitle: "వర్షం", year: 2004, genre: "romance", difficulty: "medium", hint: "Prabhas Trisha love in rain" },
  { id: 144, title: "Anukokunda Oka Roju", teluguTitle: "అనుకోకుండా ఒక రోజు", year: 2005, genre: "thriller", difficulty: "hard", hint: "Woman loses memory for one day" },
  { id: 145, title: "Devdas", teluguTitle: "దేవదాస్", year: 2002, genre: "drama", difficulty: "medium", hint: "Nagarjuna classic tragic love" },
  { id: 146, title: "Idiot", teluguTitle: "ఇడియట్", year: 2002, genre: "romance", difficulty: "medium", hint: "Ravi Teja fights for true love" },
  { id: 147, title: "Amma Nanna O Tamila Ammayi", year: 2003, genre: "romance", difficulty: "medium", hint: "Ravi Teja Tamil girl romance" },
  { id: 148, title: "Dil", teluguTitle: "దిల్", year: 2003, genre: "romance", difficulty: "medium", hint: "Nagarjuna Manisha classic romance" },
  { id: 149, title: "Dhee", teluguTitle: "ధీ", year: 2007, genre: "action", difficulty: "medium", hint: "Vijay fights for justice" },
  { id: 150, title: "Jayam", teluguTitle: "జయం", year: 2002, genre: "action", difficulty: "medium", hint: "Nitin debut action romance" },

  // ──────────── 1990-1999 ────────────
  { id: 151, title: "Kshana Kshanam", teluguTitle: "క్షణ క్షణం", year: 1991, genre: "thriller", difficulty: "hard", hint: "On-the-run comedy thriller Venkatesh" },
  { id: 152, title: "Kondaveeti Donga", teluguTitle: "కొండవీటి దొంగ", year: 1990, genre: "action", difficulty: "hard", hint: "Chiranjeevi Robin Hood hills" },
  { id: 153, title: "Preminchukundam Raa", teluguTitle: "ప్రేమించుకుందాం రా", year: 1997, genre: "romance", difficulty: "hard", hint: "Venkatesh college romance comedy" },
  { id: 154, title: "Ninne Pelladatha", teluguTitle: "నిన్నే పెళ్ళాడత", year: 1996, genre: "romance", difficulty: "hard", hint: "Nagarjuna determined marriage proposal" },
  { id: 155, title: "Pelli Sandadi", teluguTitle: "పెళ్ళి సందడి", year: 1996, genre: "comedy", difficulty: "hard", hint: "Wedding chaos comedy" },
  { id: 156, title: "Annamayya", teluguTitle: "అన్నమయ్య", year: 1997, genre: "historical", difficulty: "hard", hint: "Saint poet composer of Tirumala" },
  { id: 157, title: "Swarnakamalam", teluguTitle: "స్వర్ణకమలం", year: 1988, genre: "romance", difficulty: "hard", hint: "Classical dancer Bhanu romance" },
  { id: 158, title: "Aapadbandhavudu", teluguTitle: "ఆపద్బంధవుడు", year: 1992, genre: "action", difficulty: "hard", hint: "Chiranjeevi protector of helpless" },
  { id: 159, title: "Karthavyam", teluguTitle: "కర్తవ్యం", year: 1990, genre: "action", difficulty: "hard", hint: "Vijayashanthi honest police duty" },
  { id: 160, title: "Gang Leader", teluguTitle: "గ్యాంగ్ లీడర్", year: 1991, genre: "action", difficulty: "hard", hint: "Chiranjeevi protects slum youth" },
  { id: 161, title: "Alluda Majaka", teluguTitle: "అల్లుడు మాజాక", year: 1995, genre: "comedy", difficulty: "hard", hint: "Chiranjeevi comedy disguise in-laws" },
  { id: 162, title: "Bobbili Raja", teluguTitle: "బొబ్బిలి రాజా", year: 1990, genre: "action", difficulty: "hard", hint: "Venkatesh fights rowdyism" },
  { id: 163, title: "Subha Sankalpam", teluguTitle: "శుభ సంకల్పం", year: 1995, genre: "family", difficulty: "hard", hint: "Venkatesh family values film" },
  { id: 164, title: "Bangaru Bullodu", teluguTitle: "బంగారు బుల్లోడు", year: 1993, genre: "family", difficulty: "hard", hint: "Balakrishna gold child" },
  { id: 165, title: "Gharana Mogudu", teluguTitle: "ఘరానా మొగుడు", year: 1992, genre: "comedy", difficulty: "hard", hint: "Chiranjeevi hen-pecked husband comedy" },
  { id: 166, title: "State Rowdy", teluguTitle: "స్టేట్ రౌడీ", year: 1989, genre: "action", difficulty: "hard", hint: "Chiranjeevi fights system" },

  // ──────────── CLASSIC ERA 1970-1989 ────────────
  { id: 167, title: "Shankarabharanam", teluguTitle: "శంకరాభరణం", year: 1980, genre: "drama", difficulty: "hard", hint: "Classical music maestro K Vishwanath" },
  { id: 168, title: "Sagara Sangamam", teluguTitle: "సాగర సంగమం", year: 1983, genre: "drama", difficulty: "hard", hint: "Dancer's tragic love Kamal Haasan" },
  { id: 169, title: "Sirivennela", teluguTitle: "సిరివెన్నెల", year: 1986, genre: "drama", difficulty: "hard", hint: "Blind singer overcomes all" },
  { id: 170, title: "Meghasandesam", teluguTitle: "మేఘసందేశం", year: 1982, genre: "romance", difficulty: "hard", hint: "Cloud messenger eternal love" },
  { id: 171, title: "Swayamvaram", teluguTitle: "స్వయంవరం", year: 1987, genre: "comedy", difficulty: "hard", hint: "Three suitors compete for girl" },
  { id: 172, title: "Vijetha", teluguTitle: "విజేత", year: 1985, genre: "drama", difficulty: "hard", hint: "Father son air force drama" },
  { id: 173, title: "Nireekshana", teluguTitle: "నిరీక్షణ", year: 1982, genre: "romance", difficulty: "hard", hint: "Rajendra Prasad blind man's love" },
  { id: 174, title: "Seetha Kalyanam", teluguTitle: "సీతా కళ్యాణం", year: 1976, genre: "historical", difficulty: "hard", hint: "Mythological Ram Sita marriage" },
  { id: 175, title: "Devadasu", teluguTitle: "దేవదాసు", year: 1953, genre: "drama", difficulty: "hard", hint: "NTR classic tragic lover" },
  { id: 176, title: "Pathala Bhairavi", teluguTitle: "పాతాళ భైరవి", year: 1951, genre: "fantasy", difficulty: "hard", hint: "NTR magical fantasy classic" },

  // ──────────── HINDI BOLLYWOOD ────────────
  { id: 177, title: "Sholay", year: 1975, genre: "action", difficulty: "easy", hint: "Jai Veeru friends dacoit Gabbar" },
  { id: 178, title: "Dilwale Dulhania Le Jayenge", year: 1995, genre: "romance", difficulty: "easy", hint: "DDLJ train romance Raj Simran" },
  { id: 179, title: "3 Idiots", year: 2009, genre: "comedy", difficulty: "easy", hint: "Three engineering friends Rancho" },
  { id: 180, title: "Dangal", year: 2016, genre: "drama", difficulty: "easy", hint: "Aamir Khan trains daughters wrestling" },
  { id: 181, title: "Kabhi Khushi Kabhie Gham", year: 2001, genre: "family", difficulty: "easy", hint: "Amitabh family reunion K3G" },
  { id: 182, title: "Dil Chahta Hai", year: 2001, genre: "comedy", difficulty: "easy", hint: "Three friends growing up" },
  { id: 183, title: "Lagaan", year: 2001, genre: "drama", difficulty: "easy", hint: "Villagers play cricket against British" },
  { id: 184, title: "Bajrangi Bhaijaan", year: 2015, genre: "drama", difficulty: "easy", hint: "Salman Khan takes mute girl to Pakistan" },
  { id: 185, title: "PK", year: 2014, genre: "comedy", difficulty: "easy", hint: "Aamir Khan alien questions god" },
  { id: 186, title: "Andhadhun", year: 2018, genre: "thriller", difficulty: "easy", hint: "Blind pianist witnesses murder" },
  { id: 187, title: "Tumbbad", year: 2018, genre: "horror", difficulty: "hard", hint: "Greed demon gold Maharashtra" },
  { id: 188, title: "Article 15", year: 2019, genre: "drama", difficulty: "medium", hint: "IPS officer fights caste discrimination" },
  { id: 189, title: "Gully Boy", year: 2019, genre: "drama", difficulty: "easy", hint: "Ranveer Singh Mumbai street rapper" },
  { id: 190, title: "Tanhaji", year: 2020, genre: "historical", difficulty: "medium", hint: "Maratha warrior Tanhaji Malusare" },
  { id: 191, title: "Shershaah", year: 2021, genre: "drama", difficulty: "easy", hint: "Vikram Batra Kargil war biopic" },
  { id: 192, title: "83", year: 2021, genre: "drama", difficulty: "easy", hint: "India 1983 World Cup Kapil Dev" },
  { id: 193, title: "Pathaan", year: 2023, genre: "action", difficulty: "easy", hint: "Shah Rukh Khan spy blockbuster return" },
  { id: 194, title: "Jawan", year: 2023, genre: "action", difficulty: "easy", hint: "Shah Rukh Khan two roles hospital" },
  { id: 195, title: "Animal", year: 2023, genre: "action", difficulty: "easy", hint: "Ranbir Kapoor son's obsession with father" },
  { id: 196, title: "Dunki", year: 2023, genre: "comedy", difficulty: "easy", hint: "Shah Rukh Khan illegal immigration" },
  { id: 197, title: "Fighter", year: 2024, genre: "action", difficulty: "easy", hint: "Hrithik Rosahn air force patriotism" },
  { id: 198, title: "Crew", year: 2024, genre: "comedy", difficulty: "medium", hint: "Three air hostesses smuggling comedy" },
  { id: 199, title: "Munjya", year: 2024, genre: "horror", difficulty: "medium", hint: "Childhood ghost follows grown man" },
  { id: 200, title: "Stree", year: 2018, genre: "horror", difficulty: "easy", hint: "Ghost abducts men in small town" },
  { id: 201, title: "Bhediya", year: 2022, genre: "horror", difficulty: "medium", hint: "Varun Dhawan werewolf comedy" },
  { id: 202, title: "Bhool Bhulaiyaa 2", year: 2022, genre: "thriller", difficulty: "easy", hint: "Haunted haveli Manjulika returns" },

  // ──────────── TAMIL / SOUTH DUBBED ────────────
  { id: 203, title: "Enthiran", teluguTitle: "రోబో", year: 2010, genre: "sci-fi", difficulty: "easy", hint: "Rajinikanth robot falls in love" },
  { id: 204, title: "2.0", year: 2018, genre: "sci-fi", difficulty: "easy", hint: "Rajinikanth robot vs bird spirit" },
  { id: 205, title: "Kabali", year: 2016, genre: "action", difficulty: "easy", hint: "Rajinikanth Tamil rights in Malaysia" },
  { id: 206, title: "Petta", year: 2019, genre: "action", difficulty: "easy", hint: "Rajinikanth hostel warden past" },
  { id: 207, title: "Bigil", year: 2019, genre: "action", difficulty: "easy", hint: "Vijay trains women football team" },
  { id: 208, title: "Master", year: 2021, genre: "action", difficulty: "easy", hint: "Vijay professor fights child trafficker" },
  { id: 209, title: "Vikram", year: 2022, genre: "action", difficulty: "easy", hint: "Kamal Haasan secret agent black ops" },
  { id: 210, title: "Ponniyin Selvan 1", year: 2022, genre: "historical", difficulty: "medium", hint: "Chola empire Mani Ratnam" },
  { id: 211, title: "Ponniyin Selvan 2", year: 2023, genre: "historical", difficulty: "medium", hint: "Chola empire conclusion Mani Ratnam" },
  { id: 212, title: "Leo", year: 2023, genre: "action", difficulty: "easy", hint: "Vijay cafe owner with dangerous past" },
  { id: 213, title: "Jailer", year: 2023, genre: "action", difficulty: "easy", hint: "Rajinikanth retired jailer fights for son" },
  { id: 214, title: "Vettaiyan", year: 2024, genre: "action", difficulty: "easy", hint: "Rajinikanth cop against encounter killings" },
  { id: 215, title: "Amaran", year: 2024, genre: "drama", difficulty: "easy", hint: "Siva Kartik biopic army officer" },
  { id: 216, title: "Suriya 44", year: 2024, genre: "action", difficulty: "medium", hint: "Suriya latest action film" },
  { id: 217, title: "GOAT", year: 2024, genre: "action", difficulty: "easy", hint: "Vijay spy returns from retirement" },
  { id: 218, title: "Jigarthanda DoubleX", year: 2023, genre: "comedy", difficulty: "medium", hint: "SJ Suryah gangster comedy sequel" },
  { id: 219, title: "Kanguva", year: 2024, genre: "fantasy", difficulty: "medium", hint: "Suriya warrior across centuries" },

  // ──────────── KANNADA ────────────
  { id: 220, title: "KGF: Chapter 1", year: 2018, genre: "action", difficulty: "easy", hint: "Rocky rises in Kolar gold fields" },
  { id: 221, title: "KGF: Chapter 2", year: 2022, genre: "action", difficulty: "easy", hint: "Rocky Bhai becomes most powerful" },
  { id: 222, title: "Kantara", year: 2022, genre: "thriller", difficulty: "easy", hint: "Forest tribe deity possession" },
  { id: 223, title: "Bagheera", year: 2023, genre: "action", difficulty: "medium", hint: "Srinagar Kitty vigilante cop" },

  // ──────────── MALAYALAM ────────────
  { id: 224, title: "Drishyam", year: 2013, genre: "thriller", difficulty: "easy", hint: "Mohanlal father protects family crime" },
  { id: 225, title: "Premam", year: 2015, genre: "romance", difficulty: "easy", hint: "Nivin Pauly three-phase love story" },
  { id: 226, title: "Lucifer", year: 2019, genre: "thriller", difficulty: "easy", hint: "Mohanlal political power game" },
  { id: 227, title: "Bhramayugam", year: 2024, genre: "horror", difficulty: "medium", hint: "Mammootty supernatural haunted house" },
  { id: 228, title: "Manjummel Boys", year: 2024, genre: "thriller", difficulty: "easy", hint: "Friends cave rescue real incident" },
  { id: 229, title: "Aadujeevitham", year: 2024, genre: "drama", difficulty: "easy", hint: "Prithviraj goat shepherd desert survival" },
  { id: 230, title: "Aavesham", year: 2024, genre: "comedy", difficulty: "easy", hint: "College boys adopted by gangster" },

  // ──────────── INTERNATIONAL / HOLLYWOOD DUBBED ────────────
  { id: 231, title: "Avengers: Endgame", year: 2019, genre: "action", difficulty: "easy", hint: "All heroes vs Thanos finale" },
  { id: 232, title: "Spider-Man: No Way Home", year: 2021, genre: "action", difficulty: "easy", hint: "Three Spider-Men multiverse" },
  { id: 233, title: "Jurassic Park", year: 1993, genre: "thriller", difficulty: "easy", hint: "Dinosaurs in amusement park" },
  { id: 234, title: "Titanic", year: 1997, genre: "romance", difficulty: "easy", hint: "Jack Rose ship sinking love" },
  { id: 235, title: "The Lion King", year: 1994, genre: "family", difficulty: "easy", hint: "Simba becomes king of pride rock" },
  { id: 236, title: "Interstellar", year: 2014, genre: "sci-fi", difficulty: "medium", hint: "Astronauts find new planet for humanity" },
  { id: 237, title: "The Dark Knight", year: 2008, genre: "action", difficulty: "easy", hint: "Batman vs Joker chaos Gotham" },

  // ──────────── WEB-SERIES POPULAR TITLES ────────────
  { id: 238, title: "Aarya", year: 2020, genre: "thriller", difficulty: "medium", hint: "Sushmita Sen drug lord wife" },
  { id: 239, title: "Mirzapur", year: 2018, genre: "thriller", difficulty: "easy", hint: "Gangster power UP crime series" },
  { id: 240, title: "Scam 1992", year: 2020, genre: "drama", difficulty: "easy", hint: "Harshad Mehta stock market scam" },
];

export function getMoviesByDifficulty(difficulty: Difficulty): Movie[] {
  return teluguMovies.filter(m => m.difficulty === difficulty);
}

export function getRandomMovies(difficulty: Difficulty, count: number): Movie[] {
  const pool = getMoviesByDifficulty(difficulty);
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function getAllMoviesShuffled(difficulties: Difficulty[], count: number): Movie[] {
  const pool = teluguMovies.filter(m => difficulties.includes(m.difficulty));
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function searchMovies(query: string): Movie[] {
  if (!query.trim()) return teluguMovies;
  const q = query.toLowerCase().trim();
  return teluguMovies.filter(m =>
    m.title.toLowerCase().includes(q) ||
    (m.teluguTitle && m.teluguTitle.includes(q)) ||
    m.year.toString().includes(q) ||
    m.genre.toLowerCase().includes(q) ||
    (m.hint && m.hint.toLowerCase().includes(q))
  );
}
