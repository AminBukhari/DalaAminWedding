const countdown = document.getElementById('countdown');
const weddingDate = new Date("2026-05-01T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "It’s the big day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdown.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes left`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
