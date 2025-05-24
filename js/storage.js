// Future implementation for saving/loading resumes

export function saveResume(data) {
  localStorage.setItem('resumeData', JSON.stringify(data));
}

export function loadResume() {
  const data = localStorage.getItem('resumeData');
  return data ? JSON.parse(data) : null;
}
