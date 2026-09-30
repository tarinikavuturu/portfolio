document.getElementById('year').textContent = new Date().getFullYear();

const filters = document.querySelectorAll('.skill');
const skills = document.querySelectorAll('[data-skill]');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const group = filter.dataset.group;
    skills.forEach((skill) => {
      skill.classList.toggle('hidden', group !== 'all' && skill.dataset.skill !== group);
    });
  });
});
