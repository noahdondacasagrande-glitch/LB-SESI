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


const cards = document.querySelectorAll('#s2, .card');

const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('visible');

                }, index * 200)
            });
        }else{
            cards.forEach((card) => {
                    card.classList.remove('visible');
            });
        }
    })
}, {threshold: 0.2})

observer.observe(document.querySelector('#s2'))