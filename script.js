const menuBtn = document.getElementById('menuBtn');

const dropdown = document.getElementById('menuDropdown');

menuBtn.addEventListener('click', (event) => {
event.stopPropagation();

dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '')
? 'block'
: 'none';
});

document.addEventListener('click', () => {
dropdown.style.display = 'none';
});