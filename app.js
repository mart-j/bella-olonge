const nav = document.querySelector('.js-nav')
const hamburger = document.querySelector('.js-hamburger')


hamburger.addEventListener('click', ()=> {
    if (nav.classList.contains('active')) {
        nav.classList.add('animate__animated', 'animate__fadeOutRightBig')
        hamburger.classList.add('hamburger--stacked')
        
        setTimeout(() => {
            nav.classList.remove('active', 'animate__animated', 'animate__fadeInRight')
            hamburger.classList.remove('hamburger--close')
            
        }, 200)


        
        
        
    } else {
        nav.classList.remove('animate__animated', 'animate__fadeOutRightBig' )
        hamburger.classList.remove('hamburger--stacked')
        hamburger.classList.add('hamburger--close')
        nav.classList.add('active', 'animate__animated', 'animate__fadeInRight')
       
}


    
})