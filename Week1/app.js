
// variabels 


const workBtn = document.querySelector('.work');
const profileContainer = document.querySelector('.foto-info-container');
const workInfoContainer = document.querySelector('.work-info-container');
const profileBtn        = document.querySelector('.profile');
const resumeBtn         = document.querySelector('.resume');
const resumeContainer   = document.querySelector('.resume-info-container');
const educationContainer = document.querySelector('.education-info-container');
const educationBtn        = document.querySelector('.education');
const contactBtn         =  document.querySelector('.contact');
const contactContainer   = document.querySelector('.contact-info-container');








// listeners 


profileBtn.addEventListener('click' , function(){

    profileContainer.classList.add('visible');
    profileContainer.classList.remove('hidden');
    resumeContainer.classList.add('hidden');
    educationContainer.classList.add('hidden');
    workInfoContainer.classList.add('hidden')
    contactContainer.classList.add('hidden');

})


workBtn.addEventListener('click' , function(){

    profileContainer.classList.add('hidden');
    resumeContainer.classList.add('hidden');
    workInfoContainer.classList.add('visible');
    workInfoContainer.classList.remove('hidden');
    educationContainer.classList.add('hidden')
    contactContainer.classList.add('hidden');

})

resumeBtn.addEventListener('click' , function(){

    resumeContainer.classList.add('visible');
    resumeContainer.classList.remove('hidden');
    profileContainer.classList.add('hidden');
    workInfoContainer.classList.add('hidden')
    educationContainer.classList.add('hidden')
    contactContainer.classList.add('hidden');

})

educationBtn.addEventListener('click' , function(){


    educationContainer.classList.add('visible')
    educationContainer.classList.remove('hidden')
    profileContainer.classList.add('hidden');
    workInfoContainer.classList.add('hidden');
    resumeContainer.classList.add('hidden');
    contactContainer.classList.add('hidden');
    

})

contactBtn.addEventListener('click' , function(){

contactContainer.classList.add('visible');
contactContainer.classList.remove('hidden');
educationContainer.classList.add('hidden');
profileContainer.classList.add('hidden');
resumeContainer.classList.add('hidden');
workInfoContainer.classList.add('hidden')

})






