export function updatePreview() {
  const form = document.getElementById('resumeForm');
  const formData = new FormData(form);
  const preview = document.getElementById('preview');
  const data = {};

  for (let [key, value] of formData.entries()) {
  const path = key.replace(/\]/g, '').split('[');
  if (path.length === 1) {
    data[key] = value;
  } else {
    let ref = data;
    for (let i = 0; i < path.length - 1; i++) {
      const part = path[i];
      const nextPart = path[i + 1];

      if (!ref[part]) {
        // Create an array if the next part is a number, otherwise object
        ref[part] = /^\d+$/.test(nextPart) ? [] : {};
      }
      ref = ref[part];
    }
    ref[path[path.length - 1]] = value;
  }
}


  let html = `
    <div class="resume">
      <header>
        <h1>${data.name || 'Your Name'}</h1>
        <div class="contact-info">
          ${data.email ? `<p>Email: ${data.email}</p>` : ''}
          ${data.phone ? `<p>Phone: ${data.phone}</p>` : ''}
          ${data.address ? `<p>Address: ${data.address}</p>` : ''}
          ${data.linkedin ? `<p>LinkedIn: ${data.linkedin}</p>` : ''}
          ${data.github ? `<p>GitHub: ${data.github}</p>` : ''}
          ${data.portfolio ? `<p>Portfolio: ${data.portfolio}</p>` : ''}
        </div>
      </header>
  `;

  if (data.summary) {
    html += `<section class="summary"><h2>Summary</h2><p>${data.summary}</p></section>`;
  }

  if (data.experience) {
    html += `<section class="experience"><h2>Experience</h2>`;
    data.experience.forEach(exp => {
      if (exp && exp.title) {
        html += `
          <div class="experience-item">
            <h3>${exp.title}</h3>
            <p class="company">${exp.company || ''} ${exp.location ? `(${exp.location})` : ''}</p>
            <p class="date">${exp.start || ''} - ${exp.current ? 'Present' : (exp.end || '')}</p>
            ${exp.description ? `<p class="description">${exp.description}</p>` : ''}
          </div>
        `;
      }
    });
    html += `</section>`;
  }

  if (data.education) {
    html += `<section class="education"><h2>Education</h2>`;
    data.education.forEach(edu => {
      if (edu && edu.degree) {
        html += `
          <div class="education-item">
            <h3>${edu.degree}</h3>
            <p class="institution">${edu.institution || ''} ${edu.field ? `in ${edu.field}` : ''}</p>
            <p class="date">${edu.start || ''} - ${edu.end || ''}</p>
            ${edu.gpa ? `<p class="gpa">GPA: ${edu.gpa}</p>` : ''}
          </div>
        `;
      }
    });
    html += `</section>`;
  }

  if (data.skills) {
    html += `<section class="skills"><h2>Skills</h2><ul>`;
    data.skills.forEach(skill => {
      if (skill && skill.name) {
        html += `<li>${skill.name} ${skill.level ? `(${skill.level})` : ''}</li>`;
      }
    });
    html += `</ul></section>`;
  }

  if (data.projects) {
    html += `<section class="projects"><h2>Projects</h2>`;
    data.projects.forEach(project => {
      if (project && project.name) {
        html += `
          <div class="project-item">
            <h3>${project.name}</h3>
            ${project.tech ? `<p class="tech">Technologies: ${project.tech}</p>` : ''}
            ${project.description ? `<p class="description">${project.description}</p>` : ''}
            ${project.url ? `<p class="url">URL: ${project.url}</p>` : ''}
          </div>
        `;
      }
    });
    html += `</section>`;
  }

  let additionalHtml = '';
  if (data.languages) additionalHtml += `<p><strong>Languages:</strong> ${data.languages}</p>`;
  if (data.hobbies) additionalHtml += `<p><strong>Hobbies:</strong> ${data.hobbies}</p>`;
  if (data.certifications) additionalHtml += `<p><strong>Certifications:</strong> ${data.certifications}</p>`;

  if (additionalHtml) {
    html += `<section class="additional">${additionalHtml}</section>`;
  }

  html += `</div>`;
  preview.innerHTML = html;
}
