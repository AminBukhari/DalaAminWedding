const countdown = document.getElementById('countdown');

if (countdown) {
  const page = window.location.pathname;
  let weddingDate;

  if (page.includes('women.html')) {
    weddingDate = new Date("2025-10-11T21:00:00");
  } else if (page.includes('men.html')) {
    weddingDate = new Date("2025-10-10T21:00:00");
  } else {
    countdown.innerHTML = "";
    return;
  }

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      countdown.innerHTML = "It's the big day!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    countdown.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes left`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
}
