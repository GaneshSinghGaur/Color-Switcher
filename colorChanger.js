let btns = document.querySelectorAll(".btn");
let body = document.querySelector("body");
const newGameBtn = document.querySelector("#reset");

btns.forEach((btn) => {
    // console.log(box);
    btn.addEventListener("click",(e) => {
        
        console.log(e.target);

        if(e.target.id === "red"){
                body.style.backgroundColor = e.target.id;
                btn.innerText = "clicked!";
                // body.style.backgroundColor = "red";
        }
        else if(e.target.id === "white"){
                body.style.backgroundColor = "white";
                btn.innerText = "clicked!";
        }
        else if(e.target.id === "green"){
                body.style.backgroundColor = "greenyellow";
                btn.innerText = "clicked!";
        }
        else if(e.target.id === "blue"){
                body.style.backgroundColor = "blue";
                btn.innerText = "clicked!";
        }
        else if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id;
            btn.innerText = "clicked!";
        }
        btn.disabled = true;
    });
});

const enableBtns = () => {
        btns.forEach((btn) => {
                btn.disabled = false;
                body.style.backgroundColor = "white";
                btn.innerText = "click me!";
        });
}

newGameBtn.addEventListener('click',enableBtns);
