const form = document.querySelector('form');
const joke = document.querySelector('p');
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a06bfaa869msh20ca78a11c98668p1ceec3jsndc847b881672',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
  },
};

getJoke();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getJoke();
});

async function getJoke() {
  try {
    const response = await fetch(
      'https://dad-jokes.p.rapidapi.com/random/joke',
      options
    );
    if (response.status !== 200)
      throw Error('We are cheap and only let you hit the API a few times');
    const { body } = await response.json();
    const { setup, punchline } = body[0];
    joke.innerHTML = '';
    joke.innerText = `${setup} ${punchline}`;
  } catch (error) {
    joke.innerHTML = error;
  }
}
