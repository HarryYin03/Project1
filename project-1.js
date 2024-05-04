//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        person: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.", 
        person: "Walt Disney"
    },
    {
        quote: "If u want to let ur dick bigger, watch porn and jerk off everyday",
        person: "Ye Myat Moe"
    },
    {
        quote: "If u want ur wife or girlfriend love u all the time let her to suck ur dick",
        person: "Peter Griffin"
    },
    
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});