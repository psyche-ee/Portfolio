let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){ 
            navLinks.forEach(links => {links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// -------about--------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ---------about_favorites---------
var movie = document.getElementById('movie');
var music = document.getElementById('music');
var food = document.getElementById('food');

function showMovie(){
    movie.style.display = 'block';
    music.style.display = 'none';
    food.style.display = 'none';
}
function showMusic(){
    movie.style.display = 'none';
    music.style.display = 'block';
    food.style.display = 'none';
}
function showFood(){
    movie.style.display = 'none';
    music.style.display = 'none';
    food.style.display = 'block';
}
showMovie();

// --------------portfolio-------------
var photo = document.getElementById('photo');
var video = document.getElementById('video');
var button = document.getElementById('slide-buttons');

function showPhoto(){
    photo.style.display = 'flex';
    video.style.display = 'none';
    button.style.display = 'block';
}
function showVideo(){
    photo.style.display = 'none';
    video.style.display = 'block';
    button.style.display = 'none';
}
showPhoto();

let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
slides[currentSlide].classList.add('active'); // Show the first slide

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active'); // Hide current slide
    currentSlide += direction; // Update the current slide index

    // Loop back to the first slide if at the end
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('active'); // Show the new slide
}

// --------------contact-------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxQPzj0Ym9bbKw1iNgAqogvIDAFlcxh7TRtSaz9FIYWEvoX3HXAPrBeuy3KPjTiK3A/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
      
    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

//responsive
var menu = document.getElementById("menu");
var menu_icon = document.getElementById("menu-icon")

function openmenu(){
    menu.style.right = "0";
    menu_icon.style.display = 'none';
}
function closemenu(){
    menu.style.right = "-200px";
    menu_icon.style.display = 'block';
}

