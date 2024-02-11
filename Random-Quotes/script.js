const btn=document.getElementById("btn");
const lower=document.getElementsByClassName("lower");

let quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "Abraham Lincoln"
    },
    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "It always seems impossible until it is done.",
        author: "Nelson Mandela"
    }
];


btn.addEventListener("click",()=>{
   console.log("clicked");
   let random = Math.floor(Math.random() * quotes.length);
   lower[0].innerHTML = quotes[random].quote + "<br>" + "-"+ quotes[random].author;
})