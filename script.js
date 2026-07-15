// --- SÉLECTEUR DE THÈME (DARK/LIGHT MODE) ---
const themeToggleButton = document.getElementById('theme-toggle-btn');
const body = document.body;

// Applique le thème sauvegardé au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    // Par défaut, le site est en mode sombre. On ajoute la classe light-mode uniquement si elle est sauvegardée.
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
        themeToggleButton.textContent = '☀️';
    }
});

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Sauvegarde le choix de l'utilisateur dans le localStorage
    if (body.classList.contains('light-mode')) {
        themeToggleButton.textContent = '☀️';
        localStorage.setItem('theme', 'light-mode'); // Sauvegarde le thème clair
    } else {
        themeToggleButton.textContent = '🌙'; // Corrigé l'émoji de lune
        localStorage.removeItem('theme'); // Le mode sombre est le défaut, on retire la clé
    }
});