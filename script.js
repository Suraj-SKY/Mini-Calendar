const monthNameElement = document.getElementById('month-name');
const dayNameElement = document.getElementById('day-name');
const dayNumElement = document.getElementById('day-number');
const yearElement = document.getElementById('year');

const date = new Date();
monthNameElement.innerHTML = date.toLocaleString('default', { month: 'long' });
// default is language
// month can long, short or narrow

dayNameElement.innerHTML = date.toLocaleString('default', { weekday: 'long' });

dayNumElement.innerHTML = date.getDate();

yearElement.innerHTML = date.getFullYear();