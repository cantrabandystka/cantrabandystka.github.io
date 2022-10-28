const text = "Беларускі балотнічак сарамлівы";

const textAnimation = (textNode) => {
    let index = 0;

const intervel = setInterval(() =>{
    debugger;
index = index + 1;
h1.textContent = text.slice(0, index);
if(index >= text.length){
    clearInterval(intervel);
};
console.log(index, text.length)}, [100]);
}

const textChangeClasses = (h1) = {

};

document.addEventListener("DOMContentLoaded", () => {
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
textAnimation(h1);
hextAnimation(h2);
});
