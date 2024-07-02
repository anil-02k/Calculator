let box1 = document.querySelector(".content1");
let box2 = document.querySelector(".content2");
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map((button) => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case 'C':
                box1.innerText = '';
                box2.innerText = '';
                break;
            case 'D':
                if (box1.innerText) {
                    box1.innerText = box1.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    box2.innerText = box1.innerText;
                    box1.innerText = eval(box1.innerText);
                } catch {
                    box1.innerText = "Error";
                }
                break;
            default:
                box1.innerText = box1.innerText + e.target.innerText;
                break;  // Add break to prevent fall-through
        }
        box1.scrollLeft = 0;
    });
});
