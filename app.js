const startBtn = document.getElementById('startBtn');
const modules = document.getElementById('modules');
const practiceForm = document.getElementById('practiceForm');
const minutesInput = document.getElementById('minutes');
const feedback = document.getElementById('feedback');
const logList = document.getElementById('logList');

startBtn.addEventListener('click', () => {
  modules.scrollIntoView({ behavior: 'smooth' });
});

practiceForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const minutes = Number(minutesInput.value);

  if (Number.isNaN(minutes) || minutes < 0) {
    feedback.textContent = 'Please enter a valid number of minutes.';
    return;
  }

  let message = 'Great consistency! Keep going!';
  if (minutes < 15) message = 'Nice start! Try for 15+ minutes tomorrow.';
  else if (minutes < 30) message = 'Awesome! You are building strong habits.';
  else if (minutes < 60) message = 'Excellent effort—your skills will level up fast!';
  else message = 'Stellar practice session! 🚀';

  feedback.textContent = `Logged ${minutes} minutes. ${message}`;

  const entry = document.createElement('li');
  entry.textContent = `${new Date().toLocaleDateString()}: ${minutes} minutes`;
  logList.prepend(entry);

  practiceForm.reset();
});
