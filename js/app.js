document.addEventListener('DOMContentLoaded',function(){
    const header=document.querySelector('.header');
    const headerContent=document.querySelector('.header-content');  
    const menuLinks=document.querySelectorAll('.menu a');
    const videoBackground=document.querySelector('.video-background');
    
    window.addEventListener('scroll',function(){
        const scrollPosition=window.scrollY;

        if (scrollPosition>100){
            header.classList.add('scrolled');
            headerContent.style.backgroundColor='rgba(0,0,0,0.8)';
        }else{
            header.classList.remove('scrolled');
            headerContent.style.backgroundColor='rgba(0,0,0,0.1)';
        }

    });
})

menuLinks.forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const targetId=this.getAttribute('href');
        const targetSection=document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop-(header.classList.conntains('scrolled')? 60:80),       
        });
    });
    
});

document.getElementById('reservar-btn').addEventListener('click',()=>{
    alert('¡Reserva recibida! Te esperamos.');
});