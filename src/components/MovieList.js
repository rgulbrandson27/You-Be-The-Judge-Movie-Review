/*
1 - 12 Angry Men                    21 - Legally Blonde
2 - Anatomy of a Murder             22 - Legally Blonde II
3 - Bridge of Spies                 23 - Liar Liar
4 - The Chamber                     24 - The Lincoln Lawyer
5 - A Civil Action                  25 - My Cousin Vinny
6 - The Client                      26 - The Mauritanian
7 - A Cry in the Dark               27 - The Pelican Brief
8 - Dark Waters                     28 - The People vs. Larry Flint
9 - The Devil's Advocate            29 - Philadelphia
10 - Erin Brock                     30 - Presumed Innocent
11 - A Few Good Men                 31 - Primal Fear
12 - The Firm                       32 - The Rainmaker
13 - Fracture                       33 - Roman J. Israel, Esq.
14 - In Cold Blood                  34 - Runaway Jury
15 - In the Name of the Father      35 - A Time to Kill
16 - The Insider                    36 - To Kill a Mockingbird
17 - Just Cause                     37 - Trial by Jury
18 - And Justice For All            38 - The Verdict
19 - Judgment at Nuremberg          39 - The Whole Truth
20 - Kramer vs. Kramer              40 - Witness for the Prosecution

Potential Additions:
 Red Corner 
 JFK
 Star Chamber
 Absence of Malice
 Jagged Edge
 Supsect
 Changing Lanes
 Legal Eagles
 Created Equal
 The Third Murder
 Disclosure
 Sleepers
 Criminal Law
 Guilty as Sin
 The Star Chamber
 Red Corner
 Beyond a Reasonable Doubt
 High Crimes
 Michael Clayton
 The Insult
 Compulsion
 Irreconcilable Differences
 */

const movies = [
  {
    id: 1,
    movieId: 1,
    imbd: "tt0050083",
    title: "12 Angry Men",
    year: "1957",
    rating: "PG",
    runtime: "96 min.",
    description: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    poster: "https://m.media-amazon.com/images/I/51wkw7SAntL._SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0050083/",
    reviews: [
      {
        id: 101,
        movieId: 1,
        reviewId: 101,
        reviewerName: "Adam",
        reviewerRating: 5,
        reviewerComments:
          "Love a good classic and would definitely watch again.",
      },
      {
        id: 102,
        movieId: 1,
        reviewId: 102,
        reviewerName: "Bryan",
        reviewerRating: 4,
        reviewerComments: "Overall pretty good, just a bit drawn out.",
      },
      {
        id: 103,
        movieId: 1,
        reviewId: 103,
        reviewerName: "Cathy",
        reviewerRating: 2,
        reviewerComments:
          "The acting was overdone.",
      },
      {
        id: 104,
        movieId: 1,
        reviewId: 104,
        reviewerName: "Darren",
        reviewerRating: 3,
        reviewerComments:
          "Impressive that those men are in a hot room for as many hours as were and not have loosened their ties.",
      },
    ],
  },

  {
    id: 2,
    movieId: 2,
    imbd: "tt0052561",
    title: "Anatomy of a Murder",
    year: "1959",
    rating: "Not Rated",
    runtime: "161 min.",
    description: "An upstate Michigan lawyer defends a soldier who claims he killed an innkeeper due to temporary insanity after the victim raped his wife. What is the truth, and will he win his case?",
    poster: "https://m.media-amazon.com/images/I/51BYIh9ntUL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0052561/",
    reviews: [
      {
        id: 201,
        movieId: 2,
        reviewId: 201,
        reviewerName: "Elise",
        reviewerRating: 2,
        reviewerComments:
          "I thought this movie was pretty interesting.  As usual though, the book is so much better than the movie.",
      },
    ],
  },

  {
    id: 3,
    movieId: 3,
    imbd: "tt3682448",
    title: "Bridge of Spies",
    year: "2001",
    rating: "PG-13",
    runtime: "96 min.",
    description: "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
    poster: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZ6oDFDqM5KcTSfSs0P7tfloqzCLhg_X44IeXf26BREYQVMZFE2E7TRSYnTup_kWTTLCHGl5ofFZO9F0e33vbOvE6CzN0oqg",
    link: "https://www.imdb.com/title/tt3682448/",
    reviews: [],
  },

  {
    id: 4,
    movieId: 4,
    imbd: "tt0115862",
    title: "The Chamber",
    year: "1996",
    rating: "R",
    runtime: "113 min.",
    description: "A young man fresh out of law school tries to win a reprieve for his racist grandfather who is on death row.",
    poster: "https://m.media-amazon.com/images/I/51Eom-OzFrL.jpg",
    link: "https://www.imdb.com/title/tt0115862/",
    reviews: [],
  },

  {
    id: 5,
    movieId: 5,
    imbd: "tt0120633",
    title: "A Civil Action",
    year: "1993",
    rating: "PG-13",
    runtime: "115 min.",
    description: "A tenacious lawyer takes on a case involving two companies responsible for causing several children to be diagnosed with leukemia due to the town's water supply being contaminated, at the risk of bankrupting his firm and career.",
    poster: "https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.imdb.com/title/tt0120633/",
    reviews: [],
  },

  {
    id: 6,
    movieId: 6,
    imbd: "tt0109446",
    title: "The Client",
    year: "1994",
    rating: "PG-13",
    runtime: "115 min.",
    description: "A young boy who witnessed the suicide of a mafia lawyer hires an attorney to protect him when the District Attorney tries to use him to take down a mob family.",
    poster: "https://m.media-amazon.com/images/I/51LtjImar6L._AC_.jpg",
    link: "https://www.imdb.com/title/tt0109446/",
    reviews: [],
  },

  {
    id: 7,
    movieId: 7,
    imbd: "tt0094924",
    title: "A Cry in the Dark",
    year: "1988",
    rating: "PG-13",
    runtime: "120 min.",
    description: "A mother whose child was killed in a dingo attack in the Australian Outback fights to prove her innocence when she is accused of murder.",
    poster: "https://m.media-amazon.com/images/I/51ZRrLM3mtL.__AC_SX342_SY445_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0094924/",
    reviews: [],
  },

  {
    id: 8,
    movieId: 8,
    imbd: "tt9071322",
    title: "Dark Waters",
    year: "2019",
    rating: "PG-13",
    runtime: "126 min.",
    description: "A corporate defense attorney takes on an environmental lawsuit against a chemical company that exposes a lengthy history of pollution.",
    poster: "https://m.media-amazon.com/images/I/41aVNc9-yvL._AC_.jpg",
    link: "https://www.imdb.com/title/tt9071322",
    reviews: [],
  },

  {
    id: 9,
    movieId: 9,
    imbd: "tt0118971",
    title: "The Devil's Advocate",
    year: "1997",
    rating: "R",
    runtime: "144 min.",
    description: "An exceptionally-adept Florida lawyer is offered a job at a high-end New York City law firm with a high-end boss--the biggest opportunity of his career to date.",
    poster: "https://m.media-amazon.com/images/I/81zHU61rn-L._SY500_.jpg",
    link: "https://www.imdb.com/title/tt0118971/",
    reviews: [],
  },

  {
    id: 10,
    movieId: 10,
    imbd: "tt0195685",
    title: "Erin Brockovich",
    year: "2000",
    rating: "R",
    runtime: "131 min.",
    description: "An unemployed single mother becomes a legal assistant and almost single-handedly brings down a California power company accused of polluting a city's water supply.",
    poster: "https://m.media-amazon.com/images/I/716l8iT-UJS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0195685/",
    reviews: [],
  },

  /////////////// ---11---

  {
    id: 11,
    movieId: 11,
    imbd: "tt0104257",
    title: "A Few Good Men",
    year: "1992",
    rating: "R",
    runtime: "138 min.",
    description: "Military lawyer Lieutenant Daniel Kaffee defends Marines accused of murder. They contend they were acting under orders.",
    poster: "https://m.media-amazon.com/images/I/517uQhvmwFL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0104257/",
    reviews: [],
  },

  {
    id: 12,
    movieId: 12,
    imbd: "tt0106918",
    title: "The Firm",
    year: "1993",
    rating: "R",
    runtime: "154 min.",
    description: "A young lawyer joins a prestigious law firm only to discover that it has a sinister dark side.",
    poster: "https://m.media-amazon.com/images/I/519qrkzSt0L._AC_.jpg",
    link: "https://www.imdb.com/title/tt0106918/",
    reviews: [],
  },

  {
    id: 13,
    movieId: 13,
    imbd: "tt0488120",
    title: "Fracture",
    year: "2007",
    rating: "R",
    runtime: "113 min.",
    description: "An attorney intending on climbing the career ladder toward success finds an unlikely opponent in a manipulative criminal he is trying to prosecute.",
    poster: "https://m.media-amazon.com/images/I/418F7FqAOlL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0488120/",
    reviews: [],
  },

  {
    id: 14,
    movieId: 14,
    imbd: "tt0061809",
    title: "In Cold Blood",
    year: "1967",
    rating: "R",
    runtime: "134 min.",
    description: "Two ex-cons murder a family in a robbery attempt, before going on the run from the authorities. The police try to piece together the details of the murder in an attempt to track down the killers.",
    poster: "https://m.media-amazon.com/images/I/41DlS9JFJoL._AC_.jpg",
    link: "https://www.imdb.com/title/tt0061809/",
    reviews: [],
  },

  {
    id: 15,
    movieId: 15,
    imbd: "tt0107207",
    title: "In the Name of the Father",
    year: "1993",
    rating: "R",
    runtime: "133 min.",
    description: "A man's coerced confession to an I.R.A. bombing he did not commit results in the imprisonment of his father as well. An English lawyer fights to free them.",
    poster: "https://m.media-amazon.com/images/I/61aSC5SzTtL._AC_SL1337_.jpg",
    link: "https://www.imdb.com/title/tt0107207/",
    reviews: [],
  },

  {
    id: 16,
    movieId: 16,
    imbd: "tt0140352",
    title: "The Insider",
    year: "1999",
    rating: "R",
    runtime: "157 min.",
    description: "A research chemist comes under personal and professional attack when he decides to appear in a 60 Minutes exposé on Big Tobacco.",
    poster: "https://m.media-amazon.com/images/I/51f4bgoWuML._AC_.jpg",
    link: "https://www.imdb.com/title/tt0140352/",
    reviews: [],
  },

  {
    id: 17,
    movieId: 17,
    imbd: "tt0113501",
    title: "Just Cause",
    year: "1995",
    rating: "R",
    runtime: "102 min.",
    description: "A Harvard professor is lured back into the courtroom after twenty-five years to take the case of a young black man condemned to death for the horrific murder of a child.",
    poster: "https://m.media-amazon.com/images/I/410pC9T24vL._AC_.jpg",
    link: "https://www.imdb.com/title/tt0113501/",
    reviews: [],
  },

  {
    id: 18,
    movieId: 18,
    imbd: "tt0078718",
    title: "And Justice for All",
    year: "1979",
    rating: "R",
    runtime: "119 min.",
    description: "A lawyer is forced to defend a guilty judge, while defending other innocent clients, and trying to find punishment for the guilty and provide justice for the innocent.",
    poster: "https://m.media-amazon.com/images/I/61tYVEXnARL._AC_SY879_.jpg",
    link: "https://www.imdb.com/title/tt0078718/",
    reviews: [],
  },

  {
    id: 19,
    movieId: 19,
    imbd: "tt0055031",
    title: "Judgment at Nuremberg",
    year: "1961",
    rating: "Approved",
    runtime: "179 min.",
    description: "In 1948, an American court in occupied Germany tries four Nazis judged for war crimes.",
    poster: "https://m.media-amazon.com/images/I/81I1oYUQHZL._SY500_.jpg",
    link: "https://www.imdb.com/title/tt0055031/",
    reviews: [],
  },

  {
    id: 20,
    movieId: 20,
    imbd: "tt0079417",
    title: "Kramer vs. Kramer",
    year: "1979",
    rating: "PG",
    runtime: "105 min.",
    description: "After his wife leaves him, a work-obsessed Manhattan advertising executive is forced to learn long-neglected parenting skills, but a heated custody battle over the couple's young son deepens the wounds left by the separation.",
    poster: "https://m.media-amazon.com/images/I/41UqjuolJyL._SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0079417/",
    reviews: [],
  },

  /////////////// ---21---

  {
    id: 21,
    movieId: 21,
    imbd: "tt0250494",
    title: "Legally Blonde",
    year: "2001",
    rating: "PG-13",
    runtime: "96 min.",
    description: "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    poster: "https://m.media-amazon.com/images/I/61WMm25IbXL._AC_UF894,1000_QL80_.jpg",
    link: "https://www.imdb.com/title/tt0250494/",
    reviews: [],
  },

  {
    id: 22,
    movieId: 22,
    imbd: "tt0333780",
    title: "Legally Blonde 2",
    year: "2003",
    rating: "PG-13",
    runtime: "95 min.",
    description: "Elle Woods heads to Washington, D.C. to join the staff of a Representative in order to pass a bill to ban animal testing.",
    poster: "https://m.media-amazon.com/images/I/51+HSYQqNQL._AC_.jpg",
    link: "https://www.imdb.com/title/tt0333780/",
    reviews: [],
  },

  {
    id: 23,
    movieId: 23,
    imbd: "tt0119528",
    title: "Liar Liar",
    year: "1997",
    rating: "PG-13",
    runtime: "86 min.",
    description: "A pathological liar-lawyer finds his career turned upside down when he inexplicably cannot physically lie for 24 whole hours.",
    poster: "https://m.media-amazon.com/images/I/41y8mKybnHL._AC_.jpg",
    link: "https://www.imdb.com/title/tt0119528/",
    reviews: [],
  },

  {
    id: 24,
    movieId: 24,
    imbd: "tt1189340",
    title: "The Lincoln Lawyer",
    year: "2011",
    rating: "R",
    runtime: "118 min.",
    description: "A lawyer defending a wealthy man begins to believe his client is guilty of more than just one crime.",
    poster: "https://m.media-amazon.com/images/I/718zztlOldL._AC_SY879_.jpg",
    link: "https://www.imdb.com/title/tt1189340/",
    reviews: [],
  },

  {
    id: 25,
    movieId: 25,
    imbd: "tt0104952",
    title: "My Cousin Vinny",
    year: "1992",
    rating: "R",
    runtime: "120 min.",
    description: "Two New Yorkers accused of murder in rural Alabama while on their way back to college call in the help of one of their cousins, a loudmouth lawyer with no trial experience.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTQxNDYzMTg1M15BMl5BanBnXkFtZTgwNzk4MDgxMTE@._V1_.jpg",
    link: "https://www.imdb.com/title/tt0104952/",
    reviews: [],
  },

  {
    id: 26,
    movieId: 26,
    imbd: "tt4761112",
    title: "The Mauritanian",
    year: "2021",
    rating: "R",
    runtime: "129 min.",
    description: "Mohamedou Ould Slahi fights for freedom after being detained and imprisoned without charge by the U.S. Government for years.",
    poster: "https://m.media-amazon.com/images/I/61zxpRVs3YL._AC_SX679_.jpg",
    link: "https://www.imdb.com/title/tt4761112/",
    reviews: [],
  },
  {
    id: 27,
    movieId: 27,
    imbd: "tt0107798",
    title: "The Pelican Brief",
    year: "1993",
    rating: "PG-13",
    runtime: "141 min.",
    description: "A law student uncovers a conspiracy, putting herself and others in danger.",
    poster: "https://m.media-amazon.com/images/I/513P+ULnwqL._AC_.jpg",
    link: "https://www.imdb.com/title/tt0107798/",
    reviews: [],
  },

  {
    id: 28,
    movieId: 28,
    imbd: "tt0117318",
    title: "The People vs. Larry Flint",
    year: "1996",
    rating: "R",
    runtime: "130 min.",
    description: "The story of controversial pornography publisher Larry Flynt, and how he became a defender of free speech.",
    poster: "https://m.media-amazon.com/images/I/41ew1LLwyRL.jpg",
    link: "https://www.imdb.com/title/tt0117318/",
    reviews: [],
  },

  {
    id: 29,
    movieId: 29,
    imbd: "tt0107818",
    title: "Philadelphia",
    year: "1993",
    rating: "PG-13",
    runtime: "125 min.",
    description: "When a man with HIV is fired by his law firm because of his condition, he hires a homophobic small time lawyer as the only willing advocate for a wrongful dismissal suit.",
    poster: "https://m.media-amazon.com/images/I/51ixYQraLUL._AC_.jpg",
    link: "https://www.imdb.com/title/tt0107818/",
    reviews: [],
  },

  {
    id: 30,
    movieId: 30,
    imbd: "tt0104257",
    title: "Presumed Innocent",
    year: "1990",
    rating: "R",
    runtime: "127 min.",
    description: "As a lawyer investigates the murder of a colleague, he finds himself more connected to the crime than anyone else.",
    poster: "https://m.media-amazon.com/images/I/516pfcqtQXL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0104257",
    reviews: [],
  },
  {
    id: 31,
    movieId: 31,
    imbd: "tt0117381",
    title: "Primal Fear",
    year: "1996",
    rating: "R",
    runtime: "129 min.",
    description: "An altar boy is accused of murdering a priest, and the truth is buried several layers deep.",
    poster: "https://m.media-amazon.com/images/I/51yNsZiYmgL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    link: "https://www.imdb.com/title/tt0117381/",
    reviews: [],
  },

  {
    id: 32,
    movieId: 32,
    imbd: "tt0119978",
    title: "The Rainmaker",
    year: "1997",
    rating: "PG-13",
    runtime: "135 min.",
    description: "An underdog lawyer takes on a fraudulent insurance company.",
    poster: "https://m.media-amazon.com/images/I/51uHiBzNTsL._AC_UF894,1000_QL80_.jpg",
    link: "https://www.imdb.com/title/tt0119978/",
    reviews: [],
  },

  {
    id: 33,
    movieId: 33,
    imbd: "tt6000478",
    title: "Roman J. Israel, Esq.",
    year: "2017",
    rating: "PG-13",
    runtime: "122 min.",
    description: "Roman J. Israel, Esq., a driven, idealistic defense attorney, finds himself in a tumultuous series of events that lead to a crisis and the necessity for extreme action.",
    poster: "https://m.media-amazon.com/images/I/712qvtM7VZL._AC_SY879_.jpg",
    link: "https://www.imdb.com/title/tt6000478/",
    reviews: [],
  },

  {
    id: 34,
    movieId: 34,
    imbd: "tt0313542",
    title: "Runaway Jury",
    year: "2003",
    rating: "PG-13",
    runtime: "127 min.",
    description: "A juror on the inside and a woman on the outside manipulate a court trial involving a major gun manufacturer.",
    poster: "https://m.media-amazon.com/images/M/MV5BYTdlM2E4NDItMWFlNS00MzBkLTliOTktNTVlMjllNGZlZGIwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    link: "https://www.imdb.com/title/tt0313542/",
    reviews: [],
  },

  {
    id: 35,
    movieId: 35,
    imbd: "tt0117913",
    title: "A Time to Kill",
    year: "2003",
    rating: "R",
    runtime: "149 min.",
    description: "In Clanton, Mississippi, a fearless young lawyer and his assistant defend a black man accused of murdering two white men who raped his ten-year-old daughter, inciting violent retribution and revenge from the Ku Klux Klan.",
    poster: "https://m.media-amazon.com/images/M/MV5BOWExZTg4ZWYtOTQxMi00YWZkLTkxYzgtOTg1MTUxNzNiNDcxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    link: "https://www.imdb.com/title/tt0117913",
    reviews: [],
  },

  {
    id: 36,
    movieId: 36,
    imbd: "tt0056592",
    title: "To Kill a Mockingbird",
    year: "1962",
    rating: "Approved",
    runtime: "129 min.",
    description: "Atticus Finch, a widowed lawyer in Depression-era Alabama, defends a Black man against an undeserved rape charge, and tries to educate his young children against prejudice.",
    poster: "https://m.media-amazon.com/images/I/61hmZA6mOBL._AC_SX679_.jpg",
    link: "https://www.imdb.com/title/tt0056592/",
    reviews: [],
  },

  {
    id: 37,
    movieId: 37,
    imbd: "tt0111488",
    title: "Trial By Jury",
    year: "1994",
    rating: "R",
    runtime: "107 min.",
    description: "Valerie is a juror in the trial of a mob boss. When her young son's life is threatened, she has no option other than to see that justice isn't done.",
    poster: "https://m.media-amazon.com/images/I/41B7nkrL8yL._AC_.jpg",
    link: "https://www.imdb.com/title/tt0111488/",
    reviews: [],
  },

  {
    id: 38,
    movieId: 38,
    imbd: "tt0084855",
    title: "The Verdict",
    year: "1982",
    rating: "R",
    runtime: "129 min.",
    description: "An outcast, alcoholic Boston lawyer sees the chance to salvage his career and self-respect by taking a medical malpractice case to trial rather than settling.",
    poster: "https://m.media-amazon.com/images/I/51J46QE5I7L._AC_.jpg",
    link: "https://www.imdb.com/title/tt0084855/",
    reviews: [],
  },

  {
    id: 39,
    movieId: 39,
    imbd: "tt3503406",
    title: "The Whole Truth",
    year: "2016",
    rating: "R",
    runtime: "93 min.",
    description: "A defense attorney works to get his teenage client acquitted of murdering his wealthy father.",
    poster: "https://m.media-amazon.com/images/I/714R9B9is2L._AC_UF894,1000_QL80_.jpg",
    link: "https://www.imdb.com/title/tt3503406/",
    reviews: [],
  },

  {
    id: 40,
    movieId: 40,
    imbd: "tt0051201",
    title: "Witness for the Prosecution",
    year: "1957",
    rating: "Approved",
    runtime: "116 min.",
    description: "A veteran British barrister must defend his client in a murder trial that has surprise after surprise.",
    poster: "https://m.media-amazon.com/images/I/71Y+fuZQFyL._AC_SY879_.jpg",
    link: "https://www.imdb.com/title/tt0051201/",
    reviews: [],
  },
];

export default movies;
