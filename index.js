const text = "Беларускі балотнічак сарамлівы";

document.addEventListener("DOMContentLoaded", () => {
const h1 = document.querySelector("h1");
let index = 0;

const intervel = setInterval(() =>{
index = index + 1;
h1.textContent = index;
if(index >50){
    clearInterval(intervel);
};
console.log(h1)}, [3000]);
});