const htmlInput = document.querySelector(".html-editor textarea");
const cssInput = document.querySelector(".css-editor textarea");
const jsInput = document.querySelector(".js-editor textarea");
const saveButton = document.querySelector("#save");
const outputContainer = document.querySelector(".output-container");
const outputFrame = document.querySelector("#output");
const fullButton = document.querySelector("#full");
const copyButtons = document.querySelectorAll(".copy");

saveButton.addEventListener("click", () => {
    outputFrame.contentDocument.body.innerHTML = htmlInput.value;
    outputFrame.contentDocument.head.innerHTML = `<style>${cssInput.value}</style>`;
    outputFrame.contentWindow.eval(jsInput.value);
});

fullButton.addEventListener("click", () => {
    outputContainer.classList.toggle("output-full-active");
    if (outputContainer.classList.contains("output-full-active")) {
        fullButton.style.transform = "rotate(180deg)";
    } else {
        fullButton.style.transform = "rotate(0deg)";
    }
});

copyButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("copy1")) {
            navigator.clipboard.writeText(htmlInput.value);
        } else if (button.classList.contains("copy2")) {
            navigator.clipboard.writeText(cssInput.value);
        } else if (button.classList.contains("copy3")) {
            navigator.clipboard.writeText(jsInput.value);
        }
    });
});
