// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {

    // Select the button by its ID
    const contactButton = document.getElementById('contactButton');
    
    // Add a click event listener to the button
    contactButton.addEventListener('click', () => {
        alert('Thank you for clicking! We will reach out soon.');
    });


    
});
