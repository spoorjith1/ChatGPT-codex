const moodButton = document.getElementById('moodButton');
const moodResult = document.getElementById('moodResult');

const activityIdeas = [
  'Read one short article on something new.',
  'Play your favorite song and stretch for 3 minutes.',
  'Make a cup of tea and sit away from screens.',
  'Draw a tiny doodle of your current mood.',
  'Text a friend you have not talked to in a while.'
];

if (moodButton && moodResult) {
  moodButton.addEventListener('click', () => {
    const random = activityIdeas[Math.floor(Math.random() * activityIdeas.length)];
    moodResult.textContent = random;
  });
}

const ideaForm = document.getElementById('ideaForm');
const ideaInput = document.getElementById('ideaInput');
const ideaList = document.getElementById('ideaList');
const STORAGE_KEY = 'little-compass-ideas';

function renderIdeas(items) {
  if (!ideaList) return;
  ideaList.innerHTML = '';

  if (items.length === 0) {
    const empty = document.createElement('li');
    empty.textContent = 'No ideas yet. Add your first one!';
    ideaList.appendChild(empty);
    return;
  }

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ideaList.appendChild(li);
  });
}

if (ideaList) {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  renderIdeas(saved);
}

if (ideaForm && ideaInput) {
  ideaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = ideaInput.value.trim();
    if (!value) return;

    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    saved.push(value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
    renderIdeas(saved);
    ideaInput.value = '';
    ideaInput.focus();
  });
}
