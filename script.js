const imageBox = document.querySelector(".image-box");
const textLeft = document.querySelector(".text-left");
const textRight = document.querySelector(".text-right");
const imageBoxBtn = document.querySelector("#sign-btn");
const formBox = document.querySelector(".form-box");
const formBoxH3 = document.querySelector(".form-box form h3");
let finish = false;
imageBoxBtn.onclick = () => {
    finish = !finish;
    if (finish) {
        imageBoxBtn.classList.add("active");
        imageBox.classList.add("active");
        formBox.classList.add("active");
        textLeft.classList.add("active");
        textRight.style.opacity = "0";
        textRight.style.display = "block";
        setTimeout(() => {
            textRight.classList.remove("active");
            textLeft.style.display = "none";
            textRight.style.opacity = "1";
        }, 500);
        setTimeout(() => {
            formBoxH3.innerHTML = "Welcome back";
        }, 500);
    } else {
        imageBoxBtn.classList.remove("active");
        imageBox.classList.remove("active");
        formBox.classList.remove("active");
        textRight.classList.add("active");
        setTimeout(() => {
            textLeft.style.display = "block";
            textLeft.style.opacity = "0";
        }, 500);

        setTimeout(() => {
            textRight.style.display = "none";
            textLeft.classList.remove("active");
            textLeft.style.opacity = "1";
        }, 550);
        setTimeout(() => {
            formBoxH3.innerHTML = "Time to feel like home,";
        }, 500);
    }
};
