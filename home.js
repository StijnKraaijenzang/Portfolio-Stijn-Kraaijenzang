

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const element = entry.target;
            const animation = element.dataset.animation;
            const delay = element.dataset.delay;

            if (delay) {
                element.style.animationDelay = delay;
            }

            element.classList.add(
                "animate__animated",
                animation
            );

            observer.unobserve(element);
        }

    });

}, {
    threshold: 0.2
});


    document.querySelectorAll(".scroll-animate").forEach(element => {
    observer.observe(element);
});
