// Prevent page reload on form submit
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
});

// Menu toggle

const body = document.querySelector('body');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    body.style.overflow = 'visible';
});

// Features toggle

const tab1Btn = document.querySelector('.bookmarking');
const tab2Btn = document.querySelector('.searching');
const tab3Btn = document.querySelector('.sharing');
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const tab3 = document.querySelector('.tab3');
const blueShape = document.querySelector('.blue-shape-reverse');

tab1Btn.addEventListener('click', () => {
    tab1.classList.add('active');
    tab2.classList.remove('active');
    tab3.classList.remove('active');
    tab1Btn.classList.add('active');
    tab2Btn.classList.remove('active');
    tab3Btn.classList.remove('active');
    blueShape.classList.remove('active');
});

tab2Btn.addEventListener('click', () => {
    tab1.classList.remove('active');
    tab2.classList.add('active');
    tab3.classList.remove('active');
    tab1Btn.classList.remove('active');
    tab2Btn.classList.add('active');
    tab3Btn.classList.remove('active');
    blueShape.classList.add('active');
});

tab3Btn.addEventListener('click', () => {
    tab1.classList.remove('active');
    tab2.classList.remove('active');
    tab3.classList.add('active');
    tab1Btn.classList.remove('active');
    tab2Btn.classList.remove('active');
    tab3Btn.classList.add('active');
    blueShape.classList.add('active');
});

// Form validation

const inputEmail = document.querySelector('input[type="email"]');
const inputError = document.querySelectorAll('.error');
const pattern = document.querySelector('input[type="email"]').pattern;

submitBtn.addEventListener('click', () => {
    if (inputEmail.value === '' || !inputEmail.value.match(pattern)) {
        inputError.forEach((error) => {
            error.classList.add('active');
            inputEmail.classList.add('active');
        });
    } else {
        inputError.forEach((error) => {
            error.classList.remove('active');
            inputEmail.classList.remove('active');
        });
    }
});

// FAQ toggle

const faqBtn = document.querySelectorAll('.wrap-content');
const btns = document.querySelectorAll('.faq-btn');
const faqAnswer = document.querySelectorAll('.faq-answer');


for (let btn in faqBtn) {
    faqBtn[btn].addEventListener('click', () => {
        faqAnswer[btn].classList.toggle('active');
        btns[btn].classList.toggle('active');
    });
}












