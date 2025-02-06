const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1, // Number of slides to show at once
    spaceBetween: 20, // Space between slides
});
window.addEventListener('scroll', function() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            item.classList.add('active');
        }
    });
});
// Add this to a <script> tag in your HTML or in a separate JS file

const projectDetails = {
    'medstory': {
        title: 'MedStory',
        description: 'MedStory is a health management application that helps users manage their medical records and appointments.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    'ar-creative': {
        title: 'AR Creative Company Profile',
        description: 'AR Creative Company Profile is a website showcasing the company\'s portfolio and services.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
    },
    'kalkulator-fisika': {
        title: 'Kalkulator Fisika SMP',
        description: 'Kalkulator Fisika SMP is an educational tool designed to help students calculate physics problems.',
        techStack: ['HTML', 'CSS', 'JavaScript']
    },
    'air-strike': {
        title: 'Air Strike Game',
        description: 'Air Strike Game is an interactive browser game where players control a fighter jet to complete missions.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'Phaser']
    },
    'weather-app': {
        title: 'Weather APP',
        description: 'Weather APP provides real-time weather updates and forecasts for various locations.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'API']
    },
    'myque': {
        title: 'MyQue',
        description: 'MyQue is a task management app designed to help users organize and prioritize their tasks efficiently.',
        techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql']
    }
};

function showDetails(project) {
    const details = projectDetails[project];
    document.getElementById('details-title').textContent = details.title;
    document.getElementById('details-description').textContent = details.description;
    const techStackList = document.getElementById('details-tech-stack');
    techStackList.innerHTML = '';
    details.techStack.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        techStackList.appendChild(li);
    });
    document.getElementById('details-modal').classList.remove('hidden');
}

function closeDetails() {
    document.getElementById('details-modal').classList.add('hidden');
}


