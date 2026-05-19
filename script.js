console.log("JavaScript is connected!");
 

document.addEventListener('DOMContentLoaded', function() {
  console.log('JS loaded');

  const feedbackForm = document.getElementById('feedback-form');
        const formCard = document.getElementById('feedback-form-card');
        const successCard = document.getElementById('feedback-success-card');
        const closeBtn = document.getElementById('form-close-btn');

        if (feedbackForm) {
            feedbackForm.addEventListener('submit', function(event) {
                // 1. Immediately drop browser layout redirects to preserve the stay on the current screen
                event.preventDefault();
                
                // 2. Wrap all input attributes safely into a package stream
                const data = new FormData(feedbackForm);
                
                // 3. Post to Formspree silently in the backchannel
                fetch(feedbackForm.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // 4. If submission succeeded, swap modules to flash our elegant custom popup
                        formCard.style.display = 'none';
                        successCard.style.display = 'block';
                    } else {
                        alert("Oops! There was a problem submitting your form. Please check fields and try again.");
                    }
                })
                .catch(error => {
                    alert("Oops! There was a network connectivity issue. Please check your internet line.");
                });
            });
        }

        // Return loop cycle when closing out the popup view block
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                if (feedbackForm) feedbackForm.reset(); // Safely flushes historical text values
                if (successCard) successCard.style.display = 'none';
                if (formCard) formCard.style.display = 'block';
            });
          }});


          const backToTopButton = document.getElementById('back-to-top'); 

 

window.addEventListener('scroll', function() { 

    if (window.scrollY > 300) { 

        backToTopButton.style.display = 'block'; 

    } else { 

        backToTopButton.style.display = 'none'; 

    } 

}); 

 

backToTopButton.addEventListener('click', function() { 

    window.scrollTo({ top: 0, behavior: 'smooth' }); 

}); 


const hamburgerBtn = document.getElementById('hamburger-btn');
const navGroup = document.getElementById('nav-group');

hamburgerBtn.addEventListener('click', () => {
    // Toggles the 'show-menu' class on and off when clicked
    navGroup.classList.toggle('show-menu');
});