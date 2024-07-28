/* scripts.js */
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    });

    // Video interactivity example
    const videoContainers = document.querySelectorAll(".video-container");
    videoContainers.forEach(container => {
        container.addEventListener("click", () => {
            const iframe = container.querySelector("iframe");
            const src = iframe.getAttribute("src");
            iframe.setAttribute("src", src + "?autoplay=1");
        });
    });
});
