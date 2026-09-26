document.addEventListener("DOMContentLoaded", () => {

const downloadLinks =
    document.querySelectorAll(
        'a[href^="downloads/"]'
    );

downloadLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Copper Installer download started."
        );

    });

});

});
