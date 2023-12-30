let boxes = document.querySelectorAll(".box");
console.log(boxes);

const randomColorGen = () =>{
    let val1 = Math.floor(Math.random()*256);
    let val2 = Math.floor(Math.random()*256);
    let val3 = Math.floor(Math.random()*256);
    return `rgb(${val1},${val2},${val3})`;
}

boxes.forEach((box)=>{
    box.style.backgroundColor = randomColorGen();
    box.style.color = randomColorGen();
})