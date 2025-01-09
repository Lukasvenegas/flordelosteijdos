function scrollToComments() {
    const commentsSection = document.getElementById('comentarios');

    commentsSection.scrollIntoView({ behavior: 'smooth' });
}

function toggleTerms() {
    const termsSection = document.getElementById('terminos');
    if (termsSection.style.display === "none") {
        termsSection.style.display = "block";
    } else {
        termsSection.style.display = "none";
    }
}

document.querySelector('.search-button').addEventListener('click', function() {
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.getElementById('search');
    searchContainer.classList.toggle('active');

    if (searchContainer.classList.contains('active')) {
        searchInput.focus(); // Enfocar el campo de búsqueda al abrir
    }
});