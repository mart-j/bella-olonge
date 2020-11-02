const nav = document.querySelector('.js-nav')
const hamburger = document.querySelector('.js-hamburger')
const navItem = document.querySelectorAll('.js-nav-item')


document.addEventListener('scroll', (e)=> {
    if(window.pageYOffset < 95) {
        navItem.forEach(item => item.classList.remove('active-nav'))
        navItem[0].classList.add('active-nav')
    }if(window.pageYOffset > 95) {
        navItem.forEach(item => item.classList.remove('active-nav'))
        navItem[1].classList.add('active-nav')
    }
    if(window.pageYOffset > 1383) {
        navItem.forEach(item => item.classList.remove('active-nav'))
        navItem[2].classList.add('active-nav')
    }
    if(window.pageYOffset> 4000) {
        navItem.forEach(item => item.classList.remove('active-nav'))
        navItem[3].classList.add('active-nav')
    }
    
})


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




document.addEventListener('click', (e)=> {
if(e.target.getAttribute('href') || e.target.classList.contains('myBtn')){
        if (nav.classList.contains('active')) {
        nav.classList.add('animate__animated', 'animate__fadeOutRightBig')
        hamburger.classList.add('hamburger--stacked')
        
        setTimeout(() => {
            nav.classList.remove('active', 'animate__animated', 'animate__fadeInRight')
            hamburger.classList.remove('hamburger--close')
            
        }, 200)}
}
})
    

    





const links = document.querySelectorAll('a')

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault()
        const href = e.target.getAttribute('href')
        const offsetTop = document.querySelector(href).offsetTop
        console.log(offsetTop)

        scroll({
            top: offsetTop - 50,
            behavior: 'smooth'
        })
    })
})



const mybutton = document.getElementById("myBtn");

window.onscroll = () => scrollFunction()

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    scroll({
        top: 0,
        behavior: 'smooth'
    })

}