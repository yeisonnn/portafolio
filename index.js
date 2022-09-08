const resumeBtn = document.querySelector('.see-resume-btn');
const resume = document.querySelector('.resume');

resumeBtn.addEventListener('click', () => {
  resume.classList.toggle('hidden');
  let btnText = resumeBtn.textContent === 'See Resume' ? 'close' : 'See Resume';
  resumeBtn.textContent = btnText;
});
