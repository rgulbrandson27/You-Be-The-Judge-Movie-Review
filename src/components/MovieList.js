import React from "react";
import MovieComponent from './MovieComponent.js';

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

Additional to add:
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
    "id": "1",
    "imbd": "tt0050083",
    "title": "12 Angry Men",
    "year": "1957",
    "rating": "PG",
    "runtime": "96 min.",
    "description": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
    "poster": "https://m.media-amazon.com/images/I/51wkw7SAntL._SX300_SY300_QL70_FMwebp_.jpg",
    "link": "https://www.imdb.com/title/tt0050083/",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
  },

    {
    "id": "2",
    "imbd": "tt0052561",
    "title": "Anatomy of a Murder",
    "year": "1959",
    "rating": "Not Rated",
    "runtime": "161 min.",
    "description": "An upstate Michigan lawyer defends a soldier who claims he killed an innkeeper due to temporary insanity after the victim raped his wife. What is the truth, and will he win his case?",
    "poster": "https://m.media-amazon.com/images/I/51BYIh9ntUL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "link": "https://www.imdb.com/title/tt0052561/?ref_=tt_mv_close",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
  },

  {
  "id": "3",
  "imbd": "tt0250494",
  "title": "Bridge of Spies",
  "year": "2001",
  "rating": "PG-13",
  "runtime": "96 min.",
  "description": "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
  "poster": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZ6oDFDqM5KcTSfSs0P7tfloqzCLhg_X44IeXf26BREYQVMZFE2E7TRSYnTup_kWTTLCHGl5ofFZO9F0e33vbOvE6CzN0oqg",
  "link": "https://www.imdb.com/title/tt3682448/",
  "reviews": [{rating:"", author:"", review:""}],
  "ratingsList": "[]",
  "ratings-count": "0",
  "average-rating": null
},

  {
    "id": "4",
      "imbd": "tt0115862",
      "title": "The Chamber",
      "year": "1996",
      "rating": "R",
      "runtime": "113 min.",
      "description": "A young man fresh out of law school tries to win a reprieve for his racist grandfather who is on death row.",
      "poster": "https://m.media-amazon.com/images/I/51Eom-OzFrL.jpg",
      "link": "https://www.imdb.com/title/tt0115862/?ref_=fn_al_tt_2",
      "reviews": [{rating:"", author:"", review:""}],
      "ratingsList": "[]",
      "ratings-count": "0",
      "average-rating": null
    },
    
    {
      "id": "5",
      "imbd": "tt0120633",
      "title": "A Civil Action",
      "year": "1993",
      "rating": "PG-13",
      "runtime": "115 min.",
      "description": "A tenacious lawyer takes on a case involving two companies responsible for causing several children to be diagnosed with leukemia due to the town's water supply being contaminated, at the risk of bankrupting his firm and career.",
      "poster": "https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      "link": "https://www.imdb.com/title/tt0120633/?ref_=fn_al_tt_1",
      "reviews": [{rating:"", author:"", review:""}],
      "ratingsList": "[]",
      "ratings-count": "0",
      "average-rating": null
  },

    {
        "id": "6",
        "imbd": "tt",
        "title": "The Client",
        "year": "1994",
        "rating": "PG-13",
        "runtime": "115 min.",
        "description": "A tenacious lawyer takes on a case involving two companies responsible for causing several children to be diagnosed with leukemia due to the town's water supply being contaminated, at the risk of bankrupting his firm and career.",
        "poster": "https://m.media-amazon.com/images/I/51LtjImar6L._AC_.jpg",
        "link": "https://www.imdb.com/title/tt0109446/?ref_=fn_al_tt_1",
        "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
    },

    {
      "id": "7",
      "imbd": "tt0094924",
      "title": "A Cry in the Dark",
      "year": "1988",
      "rating": "PG-13",
      "runtime": "120 min.",
      "description": "A mother whose child was killed in a dingo attack in the Australian Outback fights to prove her innocence when she is accused of murder.",
      "poster": "https://m.media-amazon.com/images/I/51ZRrLM3mtL.__AC_SX342_SY445_QL70_FMwebp_.jpg",
      "link": "https://www.imdb.com/title/tt0094924/",
      "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
  },

  {
    "id": "8",
    "imbd": "tt9071322",
    "title": "Dark Waters",
    "year": "2019",
    "rating": "PG-13",
    "runtime": "126 min.",
    "description": "A corporate defense attorney takes on an environmental lawsuit against a chemical company that exposes a lengthy history of pollution.",
    "poster": "https://m.media-amazon.com/images/I/41aVNc9-yvL._AC_.jpg",
    "link": "https://www.imdb.com/title/tt9071322",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

  {
    "id": "9",
    "imbd": "tt0118971",
    "title": "The Devil's Advocate",
    "year": "1997",
    "rating": "R",
    "runtime": "144 min.",
    "description": "An exceptionally-adept Florida lawyer is offered a job at a high-end New York City law firm with a high-end boss--the biggest opportunity of his career to date.",
    "poster": "https://m.media-amazon.com/images/I/81zHU61rn-L._SY500_.jpg",
    "link": "https://www.imdb.com/title/tt0118971/",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

    {
      "id": "10",
      "imbd": "tt0195685",
      "title": "Erin Brockovich",
      "year": "2000",
      "rating": "R",
      "runtime": "131 min.",
      "description": "An unemployed single mother becomes a legal assistant and almost single-handedly brings down a California power company accused of polluting a city's water supply.",
      "poster": "https://m.media-amazon.com/images/I/716l8iT-UJS.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "link": "https://www.imdb.com/title/tt0195685/",
      "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
  },

/////////////// ---11---

      {
      "id": "11",
      "imbd": "tt0104257",
      "title": "A Few Good Men",
      "year": "1992",
      "rating": "R",
      "runtime": "138 min.",
      "description": "Military lawyer Lieutenant Daniel Kaffee defends Marines accused of murder. They contend they were acting under orders.",
      "poster": "https://m.media-amazon.com/images/I/517uQhvmwFL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
      "link": "https://www.imdb.com/title/tt0104257/",
      "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
  },

    {
      "id": "12",
      "imbd": "tt0106918",
      "title": "The Firm",
      "year": "1993",
      "rating": "R",
      "runtime": "154 min.",
      "description": "A young lawyer joins a prestigious law firm only to discover that it has a sinister dark side.",
      "poster": "https://m.media-amazon.com/images/I/519qrkzSt0L._AC_.jpg",
      "link": "https://www.imdb.com/title/tt0106918/",
      "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
  },

  {
    "id": "13",
    "imbd": "tt0488120",
    "title": "Fracture",
    "year": "2007",
    "rating": "R",
    "runtime": "113 min.",
    "description": "An attorney intending on climbing the career ladder toward success finds an unlikely opponent in a manipulative criminal he is trying to prosecute.",
    "poster": "https://m.media-amazon.com/images/I/418F7FqAOlL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    "link": "https://www.imdb.com/title/tt0488120/",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

  {
    "id": "14",
    "imbd": "tt0104257",
    "title": "In Cold Blood",
    "year": "1967",
    "rating": "R",
    "runtime": "134 min.",
    "description": "Two ex-cons murder a family in a robbery attempt, before going on the run from the authorities. The police try to piece together the details of the murder in an attempt to track down the killers.",
    "poster": "https://m.media-amazon.com/images/I/41DlS9JFJoL._AC_.jpg",
    "link": "https://www.imdb.com/title/tt0104257",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

{
  "id": "15",
  "imbd": "tt0107207",
  "title": "In the Name of the Father",
  "year": "1993",
  "rating": "R",
  "runtime": "133 min.",
  "description": "A man's coerced confession to an I.R.A. bombing he did not commit results in the imprisonment of his father as well. An English lawyer fights to free them.",
  "poster": "https://m.media-amazon.com/images/I/61aSC5SzTtL._AC_SL1337_.jpg",
  "link": "https://www.imdb.com/title/tt0107207/",
  "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

{
  "id": "16",
  "imbd": "tt0140352",
  "title": "The Insider",
  "year": "1999",
  "rating": "R",
  "runtime": "157 min.",
  "description": "A research chemist comes under personal and professional attack when he decides to appear in a 60 Minutes exposé on Big Tobacco.",
  "poster": "https://m.media-amazon.com/images/I/51f4bgoWuML._AC_.jpg",
  "link": "https://www.imdb.com/title/tt0140352/",
  "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

{
  "id": "17",
  "imbd": "tt0113501",
  "title": "Just Cause",
  "year": "1995",
  "rating": "R",
  "runtime": "102 min.",
  "description": "A Harvard professor is lured back into the courtroom after twenty-five years to take the case of a young black man condemned to death for the horrific murder of a child.",
  "poster": "https://m.media-amazon.com/images/I/410pC9T24vL._AC_.jpg",
  "link": "https://www.imdb.com/title/tt0113501/",
  "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

{
  "id": "18",
  "imbd": "tt0078718",
  "title": "And Justice for All",
  "year": "1979",
  "rating": "R",
  "runtime": "119 min.",
  "description": "A lawyer is forced to defend a guilty judge, while defending other innocent clients, and trying to find punishment for the guilty and provide justice for the innocent.",
  "poster": "https://m.media-amazon.com/images/I/61tYVEXnARL._AC_SY879_.jpg",
  "link": "https://www.imdb.com/title/tt0078718/",
  "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

  {
    "id": "19",
    "imbd": "tt0055031",
    "title": "Judgment at Nuremberg",
    "year": "1961",
    "rating": "Approved",
    "runtime": "179 min.",
    "description": "In 1948, an American court in occupied Germany tries four Nazis judged for war crimes.",
    "poster": "https://m.media-amazon.com/images/I/81I1oYUQHZL._SY500_.jpg",
    "link": "https://www.imdb.com/title/tt0055031/",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

{
  "id": "20",
  "imbd": "tt0079417",
  "title": "Kramer vs. Kramer",
  "year": "1979",
  "rating": "PG",
  "runtime": "105.",
  "description": "After his wife leaves him, a work-obsessed Manhattan advertising executive is forced to learn long-neglected parenting skills, but a heated custody battle over the couple's young son deepens the wounds left by the separation.",
  "poster": "https://m.media-amazon.com/images/I/41UqjuolJyL._SX300_SY300_QL70_FMwebp_.jpg",
  "link": "https://www.imdb.com/title/tt0079417/plotsummary/?ref_=tt_ov_pl",
  "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},


/////////////// ---21---


    {
        "id": "",
        "imbd": "tt0250494",
        "title": "Legally Blonde",
        "year": "2001",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster": "https://m.media-amazon.com/images/I/61WMm25IbXL._AC_UF894,1000_QL80_.jpg",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
      },

      {
        "id": "4",
        "imbd": "tt0250494",
        "title": "Legally Blonde 2",
        "year": "2001",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
        "link": "https://www.imdb.com/title/tt0104257",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
    },

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "Liar Liar",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://m.media-amazon.com/images/I/41y8mKybnHL._AC_.jpg",
      "link": "https://www.imdb.com/title/tt0104257",
      "reviews": [{rating:"", author:"", review:""}],
      "ratingsList": "[]",
      "ratings-count": "0",
      "average-rating": null
  },

  {
        "id": "6",
        "imbd": "tt0250494",
        "title": "The Lincoln Lawyer",
        "year": "2001",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
    },



    {
        "id": "7",
        "imbd": "tt0104952",
        "title": "My Cousin Vinny",
        "year": "1992",
        "rating": "R",
        "runtime": "120 min.",
        "description": "Two New Yorkers accused of murder in rural Alabama while on their way back to college call in the help of one of their cousins, a loudmouth lawyer with no trial experience.",
        "poster": "https://m.media-amazon.com/images/M/MV5BMTQxNDYzMTg1M15BMl5BanBnXkFtZTgwNzk4MDgxMTE@._V1_.jpg",
        "link": "https://www.imdb.com/title/tt0104952/?ref_=fn_al_tt_1",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
      },
  

      {
        "id": "4",
        "imbd": "tt0250494",
        "title": "The Mauritanian",
        "year": "2021",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
        "link": "https://www.imdb.com/title/tt0104257",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
    },
      {
        "id": "4",
        "imbd": "tt0250494",
        "title": "The Pelican Brief",
        "year": "2001",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
        "link": "https://www.imdb.com/title/tt0104257",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
    },

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "The People vs. Larry Flint",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257",
      "reviews": [{rating:"", author:"", review:""}],
      "ratingsList": "[]",
      "ratings-count": "0",
      "average-rating": null
  },

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "Philadelphia",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257",
      "reviews": [{rating:"", author:"", review:""}],
      "ratingsList": "[]",
      "ratings-count": "0",
      "average-rating": null
  },

  {
    "id": "4",
    "imbd": "tt0250494",
    "title": "Presumed Innocent",
    "year": "2001",
    "rating": "PG-13",
    "runtime": "96 min.",
    "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
    "link": "https://www.imdb.com/title/tt0104257",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},
    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "Primal Fear",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257",
      "reviews": [{rating:"", author:"", review:""}],
      "ratingsList": "[]",
      "ratings-count": "0",
      "average-rating": null
  },

      {
        "id": "8",
        "imbd": "tt0104952",
        "title": "The Rainmaker",
        "year": "1992",
        "rating": "R",
        "runtime": "120 min.",
        "description": "A tenacious lawyer takes on a case involving two companies responsible for causing several children to be diagnosed with leukemia due to the town's water supply being contaminated, at the risk of bankrupting his firm and career.",
        "poster": "https://m.media-amazon.com/images/I/41aVNc9-yvL._AC_.jpg",
        "link": "https://www.imdb.com/title/tt0104952/?ref_=fn_al_tt_1",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
      },

      {
        "id": "4",
        "imbd": "tt0250494",
        "title": "Roman J. Israel, Esq.",
        "year": "2001",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
        "link": "https://www.imdb.com/title/tt0104257",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
    },

      {
        "id": "9",
        "imbd": "tt0313542",
        "title": "Runaway Jury",
        "year": "2003",
        "rating": "PG-13",
        "runtime": "127 min.",
        "description": "A juror on the inside and a woman on the outside manipulate a court trial involving a major gun manufacturer.",
        "poster": "https://m.media-amazon.com/images/M/MV5BYTdlM2E4NDItMWFlNS00MzBkLTliOTktNTVlMjllNGZlZGIwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        "link": "https://www.imdb.com/title/tt0313542/?ref_=fn_al_tt_1",
      },

      {
        "id": "10",
        "imbd": "tt0117913",
        "title": "A Time to Kill",
        "year": "2003",
        "rating": "R",
        "runtime": "149 min.",
        "description": "In Clanton, Mississippi, a fearless young lawyer and his assistant defend a black man accused of murdering two white men who raped his ten-year-old daughter, inciting violent retribution and revenge from the Ku Klux Klan.",
        "poster": "https://m.media-amazon.com/images/M/MV5BOWExZTg4ZWYtOTQxMi00YWZkLTkxYzgtOTg1MTUxNzNiNDcxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "link": "https://www.imdb.com/title/tt0117913",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
      },

      {
        "id": "4",
        "imbd": "tt0250494",
        "title": "To Kill a Mockingbird",
        "year": "2001",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
        "link": "https://www.imdb.com/title/tt0104257",
        "reviews": [{rating:"", author:"", review:""}],
        "ratingsList": "[]",
        "ratings-count": "0",
        "average-rating": null
    },

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "Trial By Jury",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257",
      "reviews": [{rating:"", author:"", review:""}],
      "ratingsList": "[]",
      "ratings-count": "0",
      "average-rating": null
  },

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "The Verdict",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257",
      "reviews": [{rating:"", author:"", review:""}],
      "ratingsList": "[]",
      "ratings-count": "0",
      "average-rating": null
  },

  {
    "id": "4",
    "imbd": "tt0250494",
    "title": "The Whole Truth",
    "year": "2016",
    "rating": "PG-13",
    "runtime": "96 min.",
    "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
    "link": "https://www.imdb.com/title/tt0104257",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},

  {
    "id": "40",
    "imbd": "tt0250494",
    "title": "Witness for the Prosecution",
    "year": "2001",
    "rating": "PG-13",
    "runtime": "96 min.",
    "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
    "link": "https://www.imdb.com/title/tt0104257",
    "reviews": [{rating:"", author:"", review:""}],
    "ratingsList": "[]",
    "ratings-count": "0",
    "average-rating": null
},
];

export default movies;