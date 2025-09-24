// Script pour menu burger responsive
window.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.label_burger');
    const navToggle = document.getElementById('toggle');
    const navMenu = document.querySelector('.main_pages');

    // Pour fermer le menu quand on clique sur un lien
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle.checked) navToggle.checked = false;
        });
    });

    // Accessibilité : fermer le menu si on clique en dehors
    document.addEventListener('click', (e) => {
        if (
            navToggle.checked &&
            !navMenu.contains(e.target) &&
            e.target !== burger &&
            e.target !== navToggle
        ) {
            navToggle.checked = false;
        }
    });
});
