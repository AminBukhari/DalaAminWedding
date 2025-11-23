const countdown = document.getElementById('countdown');
const weddingDate = new Date("2026-05-01T00:00:00");

function updateCountdown() {
  const now = new Date();

  if (weddingDate <= now) {
    countdown.innerHTML = "It’s the big day!";
    return;
  }

  let years = weddingDate.getFullYear() - now.getFullYear();
  let months = weddingDate.getMonth() - now.getMonth();
  let days = weddingDate.getDate() - now.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(weddingDate.getFullYear(), weddingDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalMonths = years * 12 + months;

  countdown.innerHTML = `${totalMonths} month${totalMonths !== 1 ? 's' : ''} and ${days} day${days !== 1 ? 's' : ''} left`;
}

updateCountdown();
setInterval(updateCountdown, 60 * 1000); // update every minute
