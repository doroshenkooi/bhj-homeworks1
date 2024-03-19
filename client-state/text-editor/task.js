const editor = document.getElementById('editor');

function saveText() {
  localStorage.setItem('savedText', editor.value);
}

function restoreText() {
  const savedText = localStorage.getItem('savedText');
  if (savedText) {
    editor.value = savedText;
  }
}

document.addEventListener('DOMContentLoaded', restoreText);

editor.addEventListener('input', saveText);
