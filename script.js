/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });



/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeBtn.textContent = "☀";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* Load saved theme */

if (
    localStorage.getItem("theme") === "light"
) {

    document.body.classList.add("light");

    themeBtn.textContent = "🌙";

}



/* =========================
   SCROLL REVEAL
========================= */

const reveals =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


reveals.forEach(element => {

    revealObserver.observe(element);

});



/* =========================
   SKILL BARS
========================= */

const progressBars =
    document.querySelectorAll(".progress");

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        width;

                }

            });

        },
        {
            threshold: 0.5
        }
    );


progressBars.forEach(bar => {

    skillObserver.observe(bar);

});



/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projects =
    document.querySelectorAll(".project");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;


        projects.forEach(project => {

            if (
                filter === "all" ||
                project.dataset.category === filter
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});



/* =========================
   FAQ
========================= */

document.querySelectorAll(".faq-question")
    .forEach(question => {

        question.addEventListener("click", () => {

            const item =
                question.parentElement;

            item.classList.toggle("active");

        });

    });



/* =========================
   COUNTER ANIMATION
========================= */

const counters =
    document.querySelectorAll("[data-count]");

const counterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    !entry.target.dataset.started
                ) {

                    entry.target.dataset.started =
                        "true";

                    const target =
                        Number(
                            entry.target.dataset.count
                        );

                    let current = 0;

                    const speed =
                        Math.max(
                            10,
                            1500 / target
                        );

                    const timer =
                        setInterval(() => {

                            current++;

                            entry.target.textContent =
                                current;

                            if (
                                current >= target
                            ) {

                                clearInterval(timer);

                            }

                        }, speed);

                }

            });

        },
        {
            threshold: 0.5
        }
    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});



/* =========================
   BACK TO TOP
========================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



/* =========================
   CONTACT FORM
========================= */

document.getElementById("contactForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const subject =
            document.getElementById("subject").value;

        const message =
            document.getElementById("message").value;


        const mailBody =
            `Name: ${name}%0D%0A` +
            `Email: ${email}%0D%0A%0D%0A` +
            `${message}`;


        window.location.href =
            `mailto:hello@example.com` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${mailBody}`;

    });



/* =========================
   MOUSE SPOTLIGHT
========================= */

document.addEventListener(
    "mousemove",
    e => {

        document.body.style.background =
            `radial-gradient(
                circle at ${e.clientX}px ${e.clientY}px,
                rgba(124,92,255,0.06),
                var(--bg) 350px
            )`;

    }
);



/* =========================
   3D CARD TILT
========================= */

document.querySelectorAll(".card")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 20;

                const rotateY =
                    (centerX - x) / 20;


                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform = "";

            }
        );

    });