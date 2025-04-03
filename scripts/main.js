// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
    (prefersDarkScheme.matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);
themeToggle.innerHTML = currentTheme === 'dark' ? 
    '<i class="fas fa-sun"></i>' : 
    '<i class="fas fa-moon"></i>';

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    themeToggle.innerHTML = newTheme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Experience Timeline Data
const experienceData = [
    {
        title: 'Principal Consultant',
        company: 'PWC',
        period: 'July 2022 - Present',
        description: 'System discovery and application design based on the functional requirements. Working on Mulesoft development as a senior developer and API design using RAML.'
    },
    {
        title: 'Integration Architect',
        company: 'Netrovert Ind Pvt Ltd (PWC)',
        period: 'July 2021 - July 2022',
        description: 'System discovery and application design based on the functional requirements. Working closely with the client and the Mulesoft Delivery managers.'
    },
    {
        title: 'Engineering Manager',
        company: 'HSBC Software Pvt Ltd',
        period: 'September 2018 - July 2021',
        description: 'Product design and development using Mulesoft and Java. Leading teams, managing projects, and handling stakeholder relationships. Responsible for project and resource management.'
    },
    {
        title: 'Senior Consultant',
        company: 'Deloitte India Pvt Ltd',
        period: 'May 2016 - September 2018',
        description: 'Worked on Mulesoft development as a senior developer. API design using RAML.'
    },
    {
        title: 'Mule Consultant',
        company: 'Whishworks Pvt Ltd',
        period: 'November 2014 - May 2016',
        description: 'Worked on Mulesoft development as a senior developer. API design using RAML and project leading.'
    },
    {
        title: 'System Engineer',
        company: 'IBM',
        period: 'March 2010 - September 2014',
        description: 'Worked as Integration developer.'
    },
    {
        title: 'Senior Software Engineer',
        company: 'MARLABS India Pvt Ltd',
        period: 'November 2008 - March 2010',
        description: 'Worked as senior Java developer.'
    },
    {
        title: 'Software Engineer',
        company: 'Cellarch Tech Pvt. Ltd',
        period: 'February 2008 - November 2008',
        description: 'Worked as Java developer.'
    }
];

// Projects Data
const projectsData = [
    {
        title: 'Enterprise API Gateway',
        description: 'Designed and implemented a scalable API gateway solution for enterprise clients.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
        link: '#'
    },
    {
        title: 'Microservices Platform',
        description: 'Built a robust microservices platform with service mesh architecture.',
        technologies: ['Kubernetes', 'Istio', 'Spring Boot', 'PostgreSQL'],
        link: '#'
    },
    // Add more projects as needed
];

// Render Experience Timeline
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    timeline.innerHTML = experienceData.map(exp => `
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary">View Project</a>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderProjects();
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
}); 