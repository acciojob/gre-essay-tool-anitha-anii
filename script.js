//your code here
let text = document.getElementById('evaluatedText');
let counter = document.getElementById('wordCount');

text.addEventListener('input', () => {
  let textLength = text.value;
  let count = textLength.split(" ").length;
  counter.textContent = count;
});
