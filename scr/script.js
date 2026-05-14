window.addEventListener('scroll', ()=> {
    const nav = document.querySelector('nav')
    const footer = document.querySelector('footer')


    if(window.scrollY > 0){
        nav.classList.add('cs')
        nav.classList.add('ft')
    }else{
        nav.classList.remove('cs')
        footer.classList.remove('ft')
    }
})


function navTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block:'start'
    })
}