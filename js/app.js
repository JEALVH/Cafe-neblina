document.addEventListener('DOMContentLoaded',function(){
    const header=documet.querySelector('.header');
    const menuLinks=document.querySelectorAll('.menu a');
    const videoBackgrouund=document.querySelector('.video-background');
    const headerContent=document.querySelector('.header-content');

    window.addEventListener('scroll',function(){
        if (window.scrollY>100){
            header.style.height='80px'
            headerContent.style.backgroundColor='rgba(0,0,0,0.8)'   
        }else{
            heade.style.height='100vh';
            headerContent.style.backgroundColor='rgba(0,0,0,0.3)'
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