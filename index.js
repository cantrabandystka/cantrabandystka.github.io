const text = "Беларускі балотнічак сарамлівы";

const textAnimation = (textNode, text) => {
    let index = 0;

const interval = setInterval(() =>{
    debugger;
index = index + 1;
h1.textContent = text.slice(0, index);
if(index >= text.length){
    clearInterval(intervel);
};
console.log(index, text.length)}, [100]);
}

const textChangeClasses = (node) => {
    const interval = setInterval(() => { 
        node.classList.toggle();
        node.style["right"] = "10px";
    }, [500]);



};

document.addEventListener("DOMContentLoaded", () => {
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const heat = document.querySelector("heat");
textAnimation(h1, h1.textContent);
textAnimation(h2, h2.textContent);
//textAnimation(heat, h2.textContent);
});
