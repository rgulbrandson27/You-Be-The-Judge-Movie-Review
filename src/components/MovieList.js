import React from "react";
import MovieComponent from './MovieComponent.js';

/*
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
      "link": "https://www.imdb.com/title/tt0050083/"
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
    "reviews": [{rating:"", author:"", review:""}, {rating:4.5, author:"", review:""}],
    "ratings-count": null,
    "average-rating": null
},

{
  "id": "4",
  "imbd": "tt0250494",
  "title": "Bridge of Spies",
  "year": "2001",
  "rating": "PG-13",
  "runtime": "96 min.",
  "description": "During the Cold War, an American lawyer is recruited to defend an arrested Soviet spy in court, and then help the CIA facilitate an exchange of the spy for the Soviet captured American U2 spy plane pilot, Francis Gary Powers.",
  "poster": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRZ6oDFDqM5KcTSfSs0P7tfloqzCLhg_X44IeXf26BREYQVMZFE2E7TRSYnTup_kWTTLCHGl5ofFZO9F0e33vbOvE6CzN0oqg",
  "link": "https://www.imdb.com/title/tt3682448/"
},

    {
        "id": "1",
        "imbd": "tt0115862",
        "title": "The Chamber",
        "year": "1996",
        "rating": "R",
        "runtime": "113 min.",
        "description": "A young man fresh out of law school tries to win a reprieve for his racist grandfather who is on death row.",
        "poster": "https://m.media-amazon.com/images/I/51Eom-OzFrL.jpg",
        "link": "https://www.imdb.com/title/tt0115862/?ref_=fn_al_tt_2"
    },


    
    {
        "id": "2",
        "imbd": "tt0120633",
        "title": "A Civil Action",
        "year": "1993",
        "rating": "PG-13",
        "runtime": "115 min.",
        "description": "A tenacious lawyer takes on a case involving two companies responsible for causing several children to be diagnosed with leukemia due to the town's water supply being contaminated, at the risk of bankrupting his firm and career.",
        "poster": "https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "link": "https://www.imdb.com/title/tt0120633/?ref_=fn_al_tt_1"
    },

    {
        "id": "3",
        "imbd": "tt",
        "title": "The Client",
        "year": "1994",
        "rating": "PG-13",
        "runtime": "115 min.",
        "description": "A tenacious lawyer takes on a case involving two companies responsible for causing several children to be diagnosed with leukemia due to the town's water supply being contaminated, at the risk of bankrupting his firm and career.",
        "poster": "https://m.media-amazon.com/images/I/51LtjImar6L._AC_.jpg",
        "link": "https://www.imdb.com/title/tt0109446/?ref_=fn_al_tt_1"
    },

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "A Cry in the Dark",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257"
  },

  {
    "id": "4",
    "imbd": "tt9071322",
    "title": "Dark Waters",
    "year": "2019",
    "rating": "PG-13",
    "runtime": "126 min.",
    "description": "A corporate defense attorney takes on an environmental lawsuit against a chemical company that exposes a lengthy history of pollution.",
    "poster": "https://m.media-amazon.com/images/I/41aVNc9-yvL._AC_.jpg",
    "link": "https://www.imdb.com/title/tt9071322"
},

  {
    "id": "4",
    "imbd": "tt0250494",
    "title": "The Devil's Advocate",
    "year": "2001",
    "rating": "PG-13",
    "runtime": "96 min.",
    "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
    "link": "https://www.imdb.com/title/tt0104257"
},

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "Erin Brock",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257"
  },
    {
        "id": "4",
        "imbd": "tt0250494",
        "title": "A Few Good Men",
        "year": "2001",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
        "link": "https://www.imdb.com/title/tt0104257"
    },

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "The Firm",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257"
  },

  {
    "id": "4",
    "imbd": "tt0250494",
    "title": "Fracture",
    "year": "2007",
    "rating": "PG-13",
    "runtime": "96 min.",
    "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
    "link": "https://www.imdb.com/title/tt0104257"
},

  {
    "id": "4",
    "imbd": "tt0250494",
    "title": "In Cold Blood",
    "year": "2001",
    "rating": "PG-13",
    "runtime": "96 min.",
    "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
    "link": "https://www.imdb.com/title/tt0104257"
},

{
  "id": "4",
  "imbd": "tt0250494",
  "title": "In the Name of the Father",
  "year": "2001",
  "rating": "PG-13",
  "runtime": "96 min.",
  "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
  "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
  "link": "https://www.imdb.com/title/tt0104257"
},

{
  "id": "4",
  "imbd": "tt0250494",
  "title": "The Insider",
  "year": "1999",
  "rating": "PG-13",
  "runtime": "96 min.",
  "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
  "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
  "link": "https://www.imdb.com/title/tt0104257"
},

{
  "id": "4",
  "imbd": "tt0250494",
  "title": "Just Cause",
  "year": "2001",
  "rating": "PG-13",
  "runtime": "96 min.",
  "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
  "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
  "link": "https://www.imdb.com/title/tt0104257"
},

{
  "id": "4",
  "imbd": "tt0250494",
  "title": "And Justice for All",
  "year": "2001",
  "rating": "PG-13",
  "runtime": "96 min.",
  "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
  "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
  "link": "https://www.imdb.com/title/tt0104257"
},
  {
    "id": "4",
    "imbd": "tt0250494",
    "title": "Judgment at Nuremberg",
    "year": "2001",
    "rating": "PG-13",
    "runtime": "96 min.",
    "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
    "link": "https://www.imdb.com/title/tt0104257"
},

{
  "id": "4",
  "imbd": "tt0250494",
  "title": "Kramer vs. Kramer",
  "year": "2001",
  "rating": "PG-13",
  "runtime": "96 min.",
  "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
  "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
  "link": "https://www.imdb.com/title/tt0104257"
},

    {
        "id": "5",
        "imbd": "tt0250494",
        "title": "Legally Blonde",
        "year": "2001",
        "rating": "PG-13",
        "runtime": "96 min.",
        "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
        "poster":  "https://www.moviepostersetc.com/_staticProxy/content/ff808081163c05b001169d6655243ae9/Legally_Blonde_2_video_poster.jpg"   
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
        "link": "https://www.imdb.com/title/tt0104257"
    },

    {
      "id": "4",
      "imbd": "tt0250494",
      "title": "Liar Liar",
      "year": "2001",
      "rating": "PG-13",
      "runtime": "96 min.",
      "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
      "link": "https://www.imdb.com/title/tt0104257"
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
        "link": "https://www.imdb.com/title/tt0104257"
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
        "link": "https://www.imdb.com/title/tt0104257"
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
      "link": "https://www.imdb.com/title/tt0104257"
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
      "link": "https://www.imdb.com/title/tt0104257"
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
    "link": "https://www.imdb.com/title/tt0104257"
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
      "link": "https://www.imdb.com/title/tt0104257"
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
        "link": "https://www.imdb.com/title/tt0104257"
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
        "link": "https://www.imdb.com/title/tt0104257"
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
      "link": "https://www.imdb.com/title/tt0104257"
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
      "link": "https://www.imdb.com/title/tt0104257"
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
    "link": "https://www.imdb.com/title/tt0104257"
},

  {
    "id": "4",
    "imbd": "tt0250494",
    "title": "Witness for the Prosecution",
    "year": "2001",
    "rating": "PG-13",
    "runtime": "96 min.",
    "description": "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
    "poster": "https://www.imdb.com/title/tt0250494/?ref_=fn_al_tt_1",
    "link": "https://www.imdb.com/title/tt0104257"
},
];

export default movies;