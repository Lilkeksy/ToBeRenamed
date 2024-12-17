const toggleButton = document.getElementById('toggle-dark-mode');
const ldToggle = document.getElementById('ld-toggle');
const hideImage = document.getElementById('gradient-img')
const img = document.getElementById('mode-icon');


document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
  const closebtn = document.getElementById('closebtn');

  // Function to open the overlay
  function openOverlay() {
      overlay.style.right = '0'; // Open the overlay
      hamburger.querySelector('svg').style.display = 'none'; // Hide hamburger icon
  }

  // Function to close the overlay
  function closeOverlay() {
      overlay.style.right = '-300px'; // Close the overlay
      hamburger.querySelector('svg').style.display = 'inline-block'; // Show hamburger icon
  }

  // Event listener for hamburger click
  hamburger.addEventListener('click', function() {
      openOverlay();
  });

  // Event listener for close button click
  closebtn.addEventListener('click', function() {
      closeOverlay();
  });

  // Event listener for clicking outside the overlay
  document.addEventListener('click', function(event) {
      // Check if the click was outside the overlay and the hamburger
      if (!overlay.contains(event.target) && !hamburger.contains(event.target)) {
          closeOverlay();
      }
  });
});




toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // document.body.hideImage.classList.toggle('hidden-img');
  
  const currentSrc = img.src.split('/').pop();  // Get the current filename

  if (currentSrc === 'Logo1.png') {
    img.src = './Assets/pictures and logos/Logo.png';  // Switch to light mode logo
  } else {
    img.src = './Assets/pictures and logos/Logo1.png';  // Switch to dark mode logo
  }
  });

  ldToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // document.body.hideImage.classList.toggle('hidden-img');
    
    const currentSrc = img.src.split('/').pop();  // Get the current filename
  
    if (currentSrc === 'Logo1.png') {
      img.src = './Assets/pictures and logos/Logo.png';  // Switch to light mode logo
    } else {
      img.src = './Assets/pictures and logos/Logo1.png';  // Switch to dark mode logo
    }
    });

  document.getElementById('button1').addEventListener('click', function() {
     event.preventDefault();
    document.getElementById('contact-section').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.getElementById('about-me-link').addEventListener('click', function() {
    event.preventDefault();
   document.getElementById('about-me').scrollIntoView({
     behavior: 'smooth'
   });
 });

document.getElementById('services').addEventListener('click', function() {
  event.preventDefault();
 document.getElementById('service-section').scrollIntoView({
   behavior: 'smooth'
 });
});

 document.getElementById('works').addEventListener('click', function() {
  event.preventDefault();
 document.getElementById('portfolio').scrollIntoView({
   behavior: 'smooth'
 });
});

document.getElementById('contact').addEventListener('click', function() {
  event.preventDefault();
 document.getElementById('contact-section').scrollIntoView({
   behavior: 'smooth'
 });
});






document.getElementById('about-me-link2').addEventListener('click', function() {
  event.preventDefault();
 document.getElementById('about-me2').scrollIntoView({
   behavior: 'smooth'
 });
});

document.getElementById('services2').addEventListener('click', function() {
event.preventDefault();
document.getElementById('service-section').scrollIntoView({
 behavior: 'smooth'
});
});

document.getElementById('works2').addEventListener('click', function() {
event.preventDefault();
document.getElementById('portfolio').scrollIntoView({
 behavior: 'smooth'
});
});

document.getElementById('contact2').addEventListener('click', function() {
event.preventDefault();
document.getElementById('contact-section').scrollIntoView({
 behavior: 'smooth'
});
});