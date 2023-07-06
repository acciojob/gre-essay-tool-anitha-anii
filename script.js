//your code here
let text =document.getElementById('evaluatedText');
let counter =document.getElementById('wordCount');

  text.addEventListener('input',()=>{
     let textlength= text.value;
	  let count= textlength.replace(" ","").length;
	  counter.textContent = count;
  })