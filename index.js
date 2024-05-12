const allInput = document.querySelectorAll('input');
const nameLabel = document.querySelector('label[class="name"]');
const emailLabel = document.querySelector('label[class="email"]');
const messageLabel = document.querySelector('label[class="message"]');
const navLinks = document.querySelectorAll('nav div');
const contact = document.querySelector('.contact');
const aboutOuterDiv = document.querySelector('.about-outer-div');
const resume=document.querySelector('.resume-container');
const project=document.querySelector('.project-container');

const contentSections = [aboutOuterDiv, contact,resume,project];


contentSections.forEach(section => section.style.display = 'none');

aboutOuterDiv.style.display = 'block';

navLinks.forEach((particularLink, i) => {
  particularLink.addEventListener('click', () => {
    contentSections.forEach(section => section.style.display = 'none');


    if (particularLink.id === 'home') {
      aboutOuterDiv.style.display = 'block';
    } 
    else if(particularLink.id==='resume'){
      resume.style.display = 'block';

    }
    else if(particularLink.id==='project'){
      project.style.display = 'block';
    }
    else if (particularLink.id === 'contact') {
      contact.style.display = 'block';
    }
  });
});
allInput.forEach((inputElement,i)=>{
 inputElement.addEventListener('focus',(e)=>{
  console.log("hii");
  inputElement.style.borderBottomColor = '#e4306d';

  
  if(inputElement.id=='name')  {
    console.log('name');
    nameLabel.classList.add('name-label-change')
   }      

  if(inputElement.id=='email')  {
    console.log('email');
    emailLabel.classList.add('email-label-change')
   }      
   
   if(inputElement.id=='message')  {
    console.log('message');
    messageLabel.classList.add('message-label-change')
   }      


})
inputElement.addEventListener('blur',(e)=>{
  inputElement.style.borderBottomColor = '#9999';
  if(inputElement.id=='name')  {
    console.log('name');
    nameLabel.classList.remove('name-label-change')
   }     
   

  if(inputElement.id=='email')  {
    console.log('email');
    emailLabel.classList.remove('email-label-change')
   }      
   
   if(inputElement.id=='message')  {
    console.log('message');
    messageLabel.classList.remove('message-label-change')
   } 


})

})

window.addEventListener('load', function() {
  const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(function(bar) {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = `${progress}%`;
  });
});