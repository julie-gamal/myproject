document.querySelector('.new-recipes-button')?.addEventListener('click', () => {
    alert('Redirecting to new recipes...');
});
fetch('footer.html')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(html => {
        document.getElementById('footer-container').innerHTML = html;
    })
    .catch(error => {
        console.error('Error loading footer:', error);
    })