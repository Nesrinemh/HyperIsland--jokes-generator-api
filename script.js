'use strict';

const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':
      '9cbaf74bb7msh021c88310e046b6p1c25d1jsn4ffa74b08d71',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
  },
};

async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    const jokeEl = document.querySelector('.joke');
    jokeEl.textContent = result.body[0].setup;

    const answerEl = document.querySelector('.answer');
    answerEl.textContent = result.body[0].punchline;
    answerEl.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
}

function displayAnswer() {
  const container = document.querySelector('.answer');
  if (container.style.display === 'none') {
    container.style.display = 'block';
  } else {
    container.style.display = 'none';
  }
}

getData();
