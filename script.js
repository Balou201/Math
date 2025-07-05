document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour basculer la visibilité d'une solution
    const toggleSolution = (buttonId, solutionId) => {
        const button = document.getElementById(buttonId);
        const solutionDiv = document.getElementById(solutionId);

        if (button && solutionDiv) {
            button.addEventListener('click', () => {
                const isHidden = solutionDiv.classList.contains('solution-hidden');
                if (isHidden) {
                    solutionDiv.classList.remove('solution-hidden');
                    solutionDiv.classList.add('solution-visible');
                    button.textContent = 'Masquer la Complexité';
                } else {
                    solutionDiv.classList.remove('solution-visible');
                    solutionDiv.classList.add('solution-hidden');
                    button.textContent = 'Révéler la Complexité';
                }
            });
        }
    };

    // Appels pour chaque défi
    toggleSolution('revealSolution1', 'solution1');
    toggleSolution('revealSolution2', 'solution2');
    toggleSolution('revealSolution3', 'solution3');

    // Optionnel : Animation d'apparition des sections
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, // Le viewport est le root
        rootMargin: '0px',
        threshold: 0.1 // Quand 10% de la section est visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
                entry.target.style.opacity = '1'; // S'assurer que l'opacité finale est 1
                observer.unobserve(entry.target); // Cesse d'observer une fois l'animation déclenchée
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Idée pour le bouton "Rejoignez Math Nerd Central"
    // Pour l'instant, il ne fait rien, mais on pourrait ajouter :
    // - Un formulaire d'inscription pop-up
    // - Un lien vers une page de contact/inscription
    const joinButton = document.querySelector('.btn-join');
    if (joinButton) {
        joinButton.addEventListener('click', () => {
            alert("Félicitations, vous êtes suffisamment fou pour nous rejoindre ! Préparez-vous à douter de tout. (Page d'inscription à venir !)");
            // Ou window.location.href = 'inscription.html';
        });
    }
});
