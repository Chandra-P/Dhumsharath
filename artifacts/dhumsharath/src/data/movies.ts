export type Difficulty = "easy" | "medium" | "hard";
export type Genre = "action" | "romance" | "comedy" | "drama" | "thriller" | "family" | "historical";

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
  // EASY
  { id: 1, title: "Baahubali", teluguTitle: "బాహుబలి", year: 2015, genre: "action", difficulty: "easy", hint: "Epic warrior prince" },
  { id: 2, title: "Magadheera", teluguTitle: "మగధీర", year: 2009, genre: "action", difficulty: "easy", hint: "Reincarnation warrior" },
  { id: 3, title: "Pokiri", teluguTitle: "పోకిరి", year: 2006, genre: "action", difficulty: "easy", hint: "Undercover cop" },
  { id: 4, title: "Arya", teluguTitle: "ఆర్య", year: 2004, genre: "romance", difficulty: "easy", hint: "Crazy in love" },
  { id: 5, title: "Bommarillu", teluguTitle: "బొమ్మరిల్లు", year: 2006, genre: "romance", difficulty: "easy", hint: "Father-son love story" },
  { id: 6, title: "Happy Days", teluguTitle: "హ్యాపీ డేస్", year: 2007, genre: "drama", difficulty: "easy", hint: "College life" },
  { id: 7, title: "Jalsa", teluguTitle: "జల్సా", year: 2008, genre: "action", difficulty: "easy", hint: "Two heroes one role" },
  { id: 8, title: "Athadu", teluguTitle: "అతడు", year: 2005, genre: "action", difficulty: "easy", hint: "Hitman with a heart" },
  { id: 9, title: "Okkadu", teluguTitle: "ఒక్కడు", year: 2003, genre: "action", difficulty: "easy", hint: "Kabaddi player saves girl" },
  { id: 10, title: "Arjun Reddy", teluguTitle: "అర్జున్ రెడ్డి", year: 2017, genre: "drama", difficulty: "easy", hint: "Brilliant troubled surgeon" },
  { id: 11, title: "RRR", teluguTitle: "ఆర్ఆర్ఆర్", year: 2022, genre: "action", difficulty: "easy", hint: "Two freedom fighters" },
  { id: 12, title: "Pushpa", teluguTitle: "పుష్ప", year: 2021, genre: "action", difficulty: "easy", hint: "Red sandalwood smuggler" },
  { id: 13, title: "Ala Vaikunthapurramuloo", teluguTitle: "అల వైకుంఠపురమూలో", year: 2020, genre: "family", difficulty: "easy", hint: "Babies swapped at birth" },
  { id: 14, title: "Jersey", teluguTitle: "జెర్సీ", year: 2019, genre: "drama", difficulty: "easy", hint: "Father plays cricket for son" },
  { id: 15, title: "Eega", teluguTitle: "ఈగ", year: 2012, genre: "thriller", difficulty: "easy", hint: "Hero reborn as a fly" },

  // MEDIUM
  { id: 16, title: "Maryada Ramanna", teluguTitle: "మర్యాద రామన్న", year: 2010, genre: "comedy", difficulty: "medium", hint: "Village rivalry comedy" },
  { id: 17, title: "Seethamma Vakitlo Sirimalle Chettu", teluguTitle: "సీతమ్మ వాకిట్లో సిరిమల్లె చెట్టు", year: 2013, genre: "family", difficulty: "medium", hint: "Brothers and family values" },
  { id: 18, title: "Nuvvu Nenu Prema", teluguTitle: "నువ్వు నేను ప్రేమ", year: 2002, genre: "romance", difficulty: "medium", hint: "Childhood friends love" },
  { id: 19, title: "Dookudu", teluguTitle: "దూకుడు", year: 2011, genre: "action", difficulty: "medium", hint: "Cop son saves father" },
  { id: 20, title: "1: Nenokkadine", teluguTitle: "1: నేనొక్కడినే", year: 2014, genre: "thriller", difficulty: "medium", hint: "Musician with dark past" },
  { id: 21, title: "Mahanati", teluguTitle: "మహానటి", year: 2018, genre: "historical", difficulty: "medium", hint: "Legendary actress biopic" },
  { id: 22, title: "Fidaa", teluguTitle: "ఫిదా", year: 2017, genre: "romance", difficulty: "medium", hint: "Telangana village girl" },
  { id: 23, title: "Khaidi No 150", teluguTitle: "ఖైదీ నంబర్ 150", year: 2017, genre: "action", difficulty: "medium", hint: "Farmer vs corrupt minister" },
  { id: 24, title: "Srimanthudu", teluguTitle: "శ్రీమంతుడు", year: 2015, genre: "drama", difficulty: "medium", hint: "Rich man adopts village" },
  { id: 25, title: "Agnyaathavaasi", teluguTitle: "అజ్ఞాతవాసి", year: 2018, genre: "action", difficulty: "medium", hint: "Son seeks father's killers" },
  { id: 26, title: "Julayi", teluguTitle: "జులాయి", year: 2012, genre: "comedy", difficulty: "medium", hint: "Lazy man involved in heist" },
  { id: 27, title: "Khaleja", teluguTitle: "ఖలేజా", year: 2010, genre: "action", difficulty: "medium", hint: "Taxi driver becomes god" },
  { id: 28, title: "Nannaku Prematho", teluguTitle: "నన్నకు ప్రేమతో", year: 2016, genre: "thriller", difficulty: "medium", hint: "Son's revenge mission" },
  { id: 29, title: "Chirutha", teluguTitle: "చిరుత", year: 2007, genre: "action", difficulty: "medium", hint: "Goa action romance" },
  { id: 30, title: "Sarrainodu", teluguTitle: "సర్రైనోడు", year: 2016, genre: "action", difficulty: "medium", hint: "Hot-headed hero" },
  { id: 31, title: "Duvvada Jagannadham", teluguTitle: "దువ్వాడ జగన్నాధం", year: 2017, genre: "action", difficulty: "medium", hint: "Brahmin hitman" },
  { id: 32, title: "Maharshi", teluguTitle: "మహర్షి", year: 2019, genre: "drama", difficulty: "medium", hint: "Billionaire helps farmers" },
  { id: 33, title: "Bheemla Nayak", teluguTitle: "భీమ్లా నాయక్", year: 2022, genre: "action", difficulty: "medium", hint: "Police constable vs SI" },
  { id: 34, title: "Jurassic Park", year: 1993, genre: "thriller", difficulty: "medium", hint: "Dinosaurs in amusement park" },
  { id: 35, title: "Godfather", teluguTitle: "గాడ్ ఫాదర్", year: 2022, genre: "action", difficulty: "medium", hint: "Political power struggle" },

  // HARD
  { id: 36, title: "Annamayya", teluguTitle: "అన్నమయ్య", year: 1997, genre: "historical", difficulty: "hard", hint: "Saint composer of Tirumala" },
  { id: 37, title: "Sagara Sangamam", teluguTitle: "సాగర సంగమం", year: 1983, genre: "drama", difficulty: "hard", hint: "Dancer's tragic love" },
  { id: 38, title: "Shankarabharanam", teluguTitle: "శంకరాభరణం", year: 1980, genre: "drama", difficulty: "hard", hint: "Classical music maestro" },
  { id: 39, title: "Kondaveeti Donga", teluguTitle: "కొండవీటి దొంగ", year: 1990, genre: "action", difficulty: "hard", hint: "Robin Hood of hills" },
  { id: 40, title: "Nireekshana", teluguTitle: "నిరీక్షణ", year: 1982, genre: "romance", difficulty: "hard", hint: "Blind man's love" },
  { id: 41, title: "Kshana Kshanam", teluguTitle: "క్షణ క్షణం", year: 1991, genre: "thriller", difficulty: "hard", hint: "On-the-run comedy thriller" },
  { id: 42, title: "Manmadhudu", teluguTitle: "మన్మధుడు", year: 2002, genre: "romance", difficulty: "hard", hint: "Anti-love becomes love" },
  { id: 43, title: "Nuvvu Vasthavani", teluguTitle: "నువ్వు వస్తావని", year: 2002, genre: "romance", difficulty: "hard", hint: "Airport love story" },
  { id: 44, title: "Murari", teluguTitle: "మురారి", year: 2001, genre: "drama", difficulty: "hard", hint: "Cursed family tulasi plant" },
  { id: 45, title: "Swayamvaram", teluguTitle: "స్వయంవరం", year: 2010, genre: "comedy", difficulty: "hard", hint: "Three suitors one girl" },
  { id: 46, title: "Vijetha", teluguTitle: "విజేత", year: 1985, genre: "drama", difficulty: "hard", hint: "Father son air force drama" },
  { id: 47, title: "Preminchukundam Raa", teluguTitle: "ప్రేమించుకుందాం రా", year: 1997, genre: "romance", difficulty: "hard", hint: "College romance comedy" },
  { id: 48, title: "Aapadbandhavudu", teluguTitle: "ఆపద్బంధవుడు", year: 1992, genre: "action", difficulty: "hard", hint: "Protector of the helpless" },
  { id: 49, title: "Karthavyam", teluguTitle: "కర్తవ్యం", year: 1990, genre: "action", difficulty: "hard", hint: "Honest cop's duty" },
  { id: 50, title: "Matru Devo Bhava", teluguTitle: "మాతృ దేవో భవ", year: 1993, genre: "family", difficulty: "hard", hint: "Mother's sacrifice" },
  { id: 51, title: "Seetharama Kalyanam", teluguTitle: "సీతారామ కల్యాణం", year: 1987, genre: "family", difficulty: "hard", hint: "Hindu wedding traditions" },
  { id: 52, title: "Sirivennela", teluguTitle: "సిరివెన్నెల", year: 1986, genre: "drama", difficulty: "hard", hint: "Blind singer's journey" },
  { id: 53, title: "Meghasandesam", teluguTitle: "మేఘసందేశం", year: 1982, genre: "romance", difficulty: "hard", hint: "Cloud messenger love" },
  { id: 54, title: "Upendra", year: 1999, genre: "thriller", difficulty: "hard", hint: "Kannada meta film hero" },
  { id: 55, title: "Bangaru Bullodu", teluguTitle: "బంగారు బుల్లోడు", year: 1993, genre: "family", difficulty: "hard", hint: "Gold child village story" },
  { id: 56, title: "Pellaniki Premalekha Priyuraliki Shubhalekha", year: 1998, genre: "comedy", difficulty: "hard", hint: "Wedding letters comedy" },
  { id: 57, title: "Ninne Pelladatha", teluguTitle: "నిన్నే పెళ్ళాడత", year: 1996, genre: "romance", difficulty: "hard", hint: "Determined marriage proposal" },
  { id: 58, title: "Pelli Sandadi", teluguTitle: "పెళ్ళి సందడి", year: 1996, genre: "comedy", difficulty: "hard", hint: "Wedding chaos comedy" },
  { id: 59, title: "Adhurs", teluguTitle: "అధుర్స్", year: 2010, genre: "action", difficulty: "hard", hint: "Double role twins separated" },
  { id: 60, title: "Cameraman Ganga Tho Rambabu", teluguTitle: "కెమెరామన్ గంగతో రాంబాబు", year: 2012, genre: "drama", difficulty: "hard", hint: "Journalist fights corruption" },
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
