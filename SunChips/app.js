const navSlide = ()=>{
    const colapse = document.querySelector(".colapse");
    const nav = document.querySelector(".links");
    const nav2 = document.querySelectorAll(".links li");
    const card1 = document.querySelector('.card1 img');
    const card2 = document.querySelector('.card2 img');
    const card3 = document.querySelector('.card3 img');
    const card4 = document.querySelector('.card4 img');
    const two = document.querySelector('.two');
    const body = document.body;

    let lastScroll = 0;
    // background cahnge collor
    card1.addEventListener('mouseover', ()=>{
        two.style.transition= "background-color 0.4s linear";
        two.style.backgroundColor = "var(--bg-blue-light)";
    });
    card2.addEventListener('mouseover', ()=>{
        two.style.transition= "background-color 0.4s linear";
        two.style.backgroundColor = "var(--bg-red-light)";
    });
    card3.addEventListener('mouseover', ()=>{
        two.style.transition= "background-color 0.4s linear";
        two.style.backgroundColor = "var(--bg-yellow-light)";
    });
    card4.addEventListener('mouseover', ()=>{
        two.style.transition= "background-color 0.4s linear";
        two.style.backgroundColor = "var(--bg-green-light)";
    });

    // Scroll Stuff
   
    window.addEventListener('scroll', ()=>{

        const currentScroll = window.pageYOffset;
         if (nav.classList.contains('colapse-active')){
         }
         else{
        if (currentScroll > 70){
        if (currentScroll <= 0){
            body.classList.remove('scroll-up');
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")){
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        }
        if (currentScroll < lastScroll && body.classList.contains("scroll-down")){
            body.classList.add("scroll-up");
            body.classList.remove("scroll-down");
        }
        lastScroll = currentScroll;
        }
    }
    });

    //Toggle Nav
    colapse.addEventListener('click', ()=>{
        if (nav.classList.contains('colapse-active')){
            nav.classList.remove('colapse-active');
            nav.classList.add('colapse-nActive');
        }
        else{
        nav.classList.add('colapse-active');
        nav.classList.remove('colapse-nActive');
        }

        // Animate Links
        nav2.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
    
        // Rectangle Animation
        colapse.classList.toggle('toggle')

    })
}


function readMore() {
    var dots = document.querySelector(".dots");
    var moreText = document.querySelector(".more");
    var btnText = document.querySelector(".myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

navSlide();

