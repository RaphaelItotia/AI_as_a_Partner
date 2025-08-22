document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.section-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Get the target content ID from the data-target attribute
            const targetId = this.dataset.target;
            const content = document.getElementById(targetId);
            const icon = this.querySelector('.toggle-icon'); // Get the icon within THIS header

            // Toggle the 'active' class on the header
            this.classList.toggle('active');

            // Toggle the 'active' class on the content
            content.classList.toggle('active');

            // Change the icon based on whether the content is now active or not
            if (content.classList.contains('active')) {
                icon.innerHTML = '&#9660;'; // Down-pointing triangle
            } else {
                icon.innerHTML = '&#9654;'; // Right-pointing triangle
            }
        });
    });
});