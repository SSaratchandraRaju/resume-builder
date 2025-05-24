export function updateButtons(currentStep, totalSteps) {
  const backBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');
  const finishBtn = document.getElementById('finishBtn');

  backBtn.style.display = currentStep === 1 ? 'none' : 'inline-block';
  nextBtn.style.display = currentStep === totalSteps ? 'none' : 'inline-block';
  finishBtn.style.display = currentStep === totalSteps ? 'inline-block' : 'none';
}

export function updateStepIndicators(currentStep) {
  const indicators = document.querySelectorAll('.step-indicator');
  indicators.forEach(indicator => {
    const stepNum = parseInt(indicator.getAttribute('data-step'));
    indicator.classList.toggle('active', stepNum === currentStep);
    indicator.classList.toggle('completed', stepNum < currentStep);
  });
}

window.addExperience = addExperience;
window.removeExperience = removeExperience;
window.addEducation = addEducation;
window.removeEducation = removeEducation;
window.addSkill = addSkill;
window.removeSkill = removeSkill;
window.addProject = addProject;
window.removeProject = removeProject;

// Experience Section Functions
function addExperience() {
            const container = document.getElementById('experience-container');
            const itemCount = container.querySelectorAll('.experience-item').length;
            
            const newItem = document.createElement('div');
            newItem.className = 'experience-item';
            newItem.innerHTML = `
                <label>Job Title: <input type="text" name="experience[${itemCount}][title]" required /></label>
                <label>Company: <input type="text" name="experience[${itemCount}][company]" required /></label>
                <label>Location: <input type="text" name="experience[${itemCount}][location]" /></label>
                <label>Start Date: <input type="month" name="experience[${itemCount}][start]" required /></label>
                <label>End Date: <input type="month" name="experience[${itemCount}][end]" /></label>
                <label>Currently Working Here: <input type="checkbox" name="experience[${itemCount}][current]" /></label>
                <label>Description:
                    <textarea name="experience[${itemCount}][description]" rows="3" required></textarea>
                </label>
            `;
            
            container.appendChild(newItem);
            newItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        function removeExperience() {
            const container = document.getElementById('experience-container');
            const items = container.querySelectorAll('.experience-item');
            
            if (items.length > 1) {
                container.removeChild(items[items.length - 1]);
            } else {
                alert("You need to have at least one experience entry.");
            }
        }
        
        function addEducation() {
            const container = document.getElementById('education-container');
            const itemCount = container.querySelectorAll('.education-item').length;
            
            const newItem = document.createElement('div');
            newItem.className = 'education-item';
            newItem.innerHTML = `
                <label>Degree: <input type="text" name="education[${itemCount}][degree]" required /></label>
                <label>Institution: <input type="text" name="education[${itemCount}][institution]" required /></label>
                <label>Field of Study: <input type="text" name="education[${itemCount}][field]" /></label>
                <label>Location: <input type="text" name="education[${itemCount}][location]" /></label>
                <label>Start Date: <input type="month" name="education[${itemCount}][start]" required /></label>
                <label>End Date: <input type="month" name="education[${itemCount}][end]" required /></label>
                <label>GPA: <input type="text" name="education[${itemCount}][gpa]" /></label>
            `;
            
            container.appendChild(newItem);
            newItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        function removeEducation() {
            const container = document.getElementById('education-container');
            const items = container.querySelectorAll('.education-item');
            
            if (items.length > 1) {
                container.removeChild(items[items.length - 1]);
            } else {
                alert("You need to have at least one education entry.");
            }
        }
        
        function addSkill() {
            const container = document.getElementById('skills-container');
            const itemCount = container.querySelectorAll('.skill-item').length;
            
            const newItem = document.createElement('div');
            newItem.className = 'skill-item';
            newItem.innerHTML = `
                <label>Skill: <input type="text" name="skills[${itemCount}][name]" required /></label>
                <label>Proficiency:
                    <select name="skills[${itemCount}][level]" required>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Expert">Expert</option>
                    </select>
                </label>
            `;
            
            container.appendChild(newItem);
            newItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        function removeSkill() {
            const container = document.getElementById('skills-container');
            const items = container.querySelectorAll('.skill-item');
            
            if (items.length > 1) {
                container.removeChild(items[items.length - 1]);
            } else {
                alert("You need to have at least one skill entry.");
            }
        }
        
        function addProject() {
            const container = document.getElementById('projects-container');
            const itemCount = container.querySelectorAll('.project-item').length;
            
            const newItem = document.createElement('div');
            newItem.className = 'project-item';
            newItem.innerHTML = `
                <label>Project Name: <input type="text" name="projects[${itemCount}][name]" required /></label>
                <label>Technologies Used: <input type="text" name="projects[${itemCount}][tech]" /></label>
                <label>Description:
                    <textarea name="projects[${itemCount}][description]" rows="3" required></textarea>
                </label>
                <label>Project URL: <input type="url" name="projects[${itemCount}][url]" /></label>
            `;
            
            container.appendChild(newItem);
            newItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        function removeProject() {
            const container = document.getElementById('projects-container');
            const items = container.querySelectorAll('.project-item');
            
            if (items.length > 1) {
                container.removeChild(items[items.length - 1]);
            } else {
                alert("You need to have at least one project entry.");
            }
        }