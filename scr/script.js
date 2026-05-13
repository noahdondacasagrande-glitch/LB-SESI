window.addEventListener('scroll', ()=> {
    const nav = document.querySelector('nav')


    if(window.scrollY > 0){
        nav.classList.add('cs')
    }else{
        nav.classList.remove('cs')
    }
})


function navTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block:'start'
    })
}