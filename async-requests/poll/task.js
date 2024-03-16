fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {

    const pollTitle = document.getElementById('poll__title');
    pollTitle.innerText = data.data.title;
    const pollAnswers = document.getElementById('poll__answers');

    data.data.answers.forEach(answer => {

      const button = document.createElement('button');
      button.classList.add('poll__answer');
      button.innerText = answer;

      button.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
      pollAnswers.appendChild(button);
    });
  });