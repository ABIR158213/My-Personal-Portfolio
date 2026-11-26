/* =========================================================
   ABIR HASAN SARKER — PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   1. SELECT ELEMENTS
========================================================= */

const themeToggle = document.getElementById("theme-toggle");

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

const typingText = document.getElementById("typing-text");


/* =========================================================
   2. DARK / LIGHT MODE
========================================================= */

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        /* Change icon */

        const icon = themeToggle.querySelector("i");


        if (document.body.classList.contains("dark-mode")) {

            icon.classList.remove("fa-moon");

            icon.classList.add("fa-sun");

        } else {

            icon.classList.remove("fa-sun");

            icon.classList.add("fa-moon");

        }


        /* Save theme */

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}


/* =========================================================
   3. LOAD SAVED THEME
========================================================= */

const savedTheme = localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");


    if (themeToggle) {

        const icon = themeToggle.querySelector("i");

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

}


/* =========================================================
   4. MOBILE MENU
========================================================= */

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {


        navLinks.classList.toggle("active");


        const isOpen =
            navLinks.classList.contains("active");


        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );


        /* Change hamburger icon */

        const icon =
            menuToggle.querySelector("i");


        if (isOpen) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });

}


/* =========================================================
   5. CLOSE MOBILE MENU AFTER CLICKING LINK
========================================================= */

if (navLinks) {

    const links =
        navLinks.querySelectorAll("a");


    links.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");


            if (menuToggle) {

                const icon =
                    menuToggle.querySelector("i");


                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    });

}


/* =========================================================
   6. TYPING ANIMATION
========================================================= */

if (typingText) {


    const texts = [

        "I am a CSE Student",

        "I am a Web Developer",

        "I love Programming",

        "I build Creative Projects",

        "I am learning New Technologies"

    ];


    let textIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function typeEffect() {


        const currentText =
            texts[textIndex];


        /* Typing */

        if (!deleting) {

            typingText.textContent =
                currentText.substring(
                    0,
                    characterIndex + 1
                );


            characterIndex++;


            /* Finished typing */

            if (
                characterIndex ===
                currentText.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1600
                );

                return;

            }


            setTimeout(
                typeEffect,
                80
            );


        }


        /* Deleting */

        else {

            typingText.textContent =
                currentText.substring(
                    0,
                    characterIndex - 1
                );


            characterIndex--;


            /* Finished deleting */

            if (characterIndex === 0) {

                deleting = false;


                textIndex++;


                if (
                    textIndex >=
                    texts.length
                ) {

                    textIndex = 0;

                }


                setTimeout(
                    typeEffect,
                    400
                );

                return;

            }


            setTimeout(
                typeEffect,
                45
            );

        }

    }


    /* Start animation */

    typeEffect();

}


/* =========================================================
   7. PAGE LOAD ANIMATION
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);