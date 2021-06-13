const quotes= [
  {
    quote : "This is impossible",
    author : "chanyeop",
  },
  {
    quote : "this is sparta",
    author: "300",
  },
  {
    quote : "this is madness",
    author: "meet the spartan",
  },
  {
    quote : "load of the rings",
    author: "golumm",
  },
  {
    quote : "i am king in the world",
    author: "anastasha",
  },
  {
    quote : "fail is only for forgivenss man",
    author: "chanyeop",
  },
]
const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random()* quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;