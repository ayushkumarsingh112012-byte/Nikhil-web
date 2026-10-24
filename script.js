const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Mobile navigation menu
if (menuBtn && navMenu) {
menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

// Close menu after clicking a link
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

}

// Reveal sections smoothly as you scroll
const sections = document.querySelectorAll(".content-section");

if ("IntersectionObserver" in window) {
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});

}