// =============================
// Copy Email / Phone
// =============================

document.querySelectorAll(".copy-btn").forEach(button=>{

button.addEventListener("click",()=>{

const id=button.dataset.copy;

const text=document.getElementById(id).innerText;

navigator.clipboard.writeText(text);

button.innerHTML="✓ Copied";

setTimeout(()=>{

button.innerHTML="Copy";

},2000);

});

});


// =============================
// Prevent form submission
// =============================

const form=document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message feature will be connected soon.");

});