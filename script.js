// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
const glitchSections = [1, 2, 4, 5, 6]; // sections to animate

```
glitchSections.forEach(num => {
    const section = document.getElementById(`section-${num}`);
    const title = section.querySelector('.section-title');

    // Apply random glitch flicker every 1-2 seconds
    setInterval(() => {
        // Random offset for glitch
        const offsetX = Math.floor(Math.random() * 4 - 2); // -2 to 2 px
        const offsetY = Math.floor(Math.random() * 4 - 2);
        const color1 = offsetX > 0 ? "#FF00C8" : "#39FF14";
        const color2 = offsetY > 0 ? "#39FF14" : "#FF00C8";

        title.style.textShadow = `${offsetX}px ${offsetY}px ${color1}, ${-offsetX}px ${-offsetY}px ${color2}`;
    }, 1500);

    // Optional: slight jump animation
    setInterval(() => {
        title.style.transform = `translate(${Math.floor(Math.random() * 4 - 2)}px, ${Math.floor(Math.random() * 4 - 2)}px)`;
        setTimeout(() => {
            title.style.transform = "translate(0, 0)";
        }, 200);
    }, 2000);
});
```

});
