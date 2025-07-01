var typed = new Typed(".multiple",{
    strings: ["Data Scientist", "UI/UX Engineer", 
        "Frontend Developer", "Programmer", "Game Developer"],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 1000,
        loop: true        
})

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let pixels_scrolled = window.scrollY;
        let section_start = sec.offsetTop - 100;
        let height_of_section = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(pixels_scrolled >= section_start && pixels_scrolled < section_start + height_of_section){
            navlinks.forEach(light =>{
                light.classList.remove('active');
                document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


