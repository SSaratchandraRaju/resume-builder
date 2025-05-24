import { updateStepIndicators, updateButtons } from './form.js';
import { updatePreview } from './preview.js';

let currentStep = 1;
const totalSteps = 7;

document.addEventListener('DOMContentLoaded', () => {
  fetch("components/navbar.html").then(res => res.text()).then(data => document.getElementById("navbar").innerHTML = data);
  fetch("components/footer.html").then(res => res.text()).then(data => document.getElementById("footer").innerHTML = data);

  updateStepIndicators(currentStep);
  updatePreview();

  const stepCards = document.querySelectorAll('.step-card');
  const steps = document.querySelectorAll('.step');
  const backBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');
  const finishBtn = document.getElementById('finishBtn');

  function showStep(step) {
    steps.forEach((s) => s.classList.toggle('active', s.id === `step${step}`));
    stepCards.forEach((card) => card.classList.toggle('active', parseInt(card.dataset.step) === step));
    updateButtons(step, totalSteps);
    updateStepIndicators(step);
    updatePreview();
    currentStep = step;
  }

  stepCards.forEach((card) => {
    card.addEventListener('click', () => showStep(parseInt(card.dataset.step)));
  });

  backBtn.addEventListener('click', () => {
    if (currentStep > 1) showStep(currentStep - 1);
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < totalSteps) showStep(currentStep + 1);
  });

  finishBtn.addEventListener('click', () => {
    alert('Resume generated successfully!');
    document.getElementById('printBtn').style.display = 'inline-block';
    document.getElementById('downloadBtn').style.display = 'inline-block';
  });

  document.getElementById('resumeForm').addEventListener('input', updatePreview);

  showStep(currentStep);
});
