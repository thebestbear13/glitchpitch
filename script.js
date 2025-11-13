// Smooth scroll when clicking navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fake subscribe button action
const subscribeBtn = document.querySelector('#subscribe-btn');
if (subscribeBtn) {
  subscribeBtn.addEventListener('click', () => {
    const emailInput = document.querySelector('#email-input');
    if (!emailInput.value) {
      alert("Please enter an email.");
    } else {
      alert("Subscribed successfully!");
      emailInput.value = "";
    }
  });
}
