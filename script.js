console.log("JavaScript is connected!");
 

document.addEventListener('DOMContentLoaded', function() {
  console.log('JS loaded'); 
  
  const form = document.getElementById('feedbackForm');
  const popup = document.getElementById('thankYouPopup');
  const closeBtn = document.getElementById('closePopup');

  if (!form) {
    console.error('Form with id="feedbackForm" not found!');
    return;
  }

  form.addEventListener('submit', async function(e) {
    e.preventDefault(); 
    console.log('Form intercepted, sending to Formspree...');

    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log('Formspree success');
        popup.style.display = 'block'; 
        form.reset(); 
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    } catch (error) {
      console.log('Fetch error:', error);
      alert('Oops! There was a problem submitting your form.');
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  }

  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  }
});