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
        description: 'System discovery and application design based on the functional requirements. Working on Mulesoft development as a senior developer and API design using RAML.',
        achievements: ['Lead a team of 5 developers', 'Implemented a new API design framework'],
        technologies: ['Mulesoft', 'RAML', 'API Design']
    },
    {
        title: 'Integration Architect',
        company: 'Netrovert Ind Pvt Ltd (PWC)',
        period: 'July 2021 - July 2022',
        description: 'System discovery and application design based on the functional requirements. Working closely with the client and the Mulesoft Delivery managers.',
        achievements: ['Integrated 3 new enterprise systems'],
        technologies: ['Mulesoft', 'Anypoint Platform', 'API Management']
    },
    {
        title: 'Engineering Manager',
        company: 'HSBC Software Pvt Ltd',
        period: 'September 2018 - July 2021',
        description: 'Product design and development using Mulesoft and Java. Leading teams, managing projects, and handling stakeholder relationships. Responsible for project and resource management.',
        achievements: ['Managed a team of 10 engineers', 'Increased project completion rate by 20%'],
        technologies: ['Mulesoft', 'Java', 'Project Management']
    },
    {
        title: 'Senior Consultant',
        company: 'Deloitte India Pvt Ltd',
        period: 'May 2016 - September 2018',
        description: 'Worked on Mulesoft development as a senior developer. API design using RAML.',
        achievements: ['Developed a new API design tool'],
        technologies: ['Mulesoft', 'RAML', 'API Design']
    },
    {
        title: 'Mule Consultant',
        company: 'Whishworks Pvt Ltd',
        period: 'November 2014 - May 2016',
        description: 'Worked on Mulesoft development as a senior developer. API design using RAML and project leading.',
        achievements: ['Led a project to integrate 5 enterprise systems'],
        technologies: ['Mulesoft', 'RAML', 'Project Management']
    },
    {
        title: 'System Engineer',
        company: 'IBM',
        period: 'March 2010 - September 2014',
        description: 'Worked as Integration developer.',
        achievements: ['Developed a new integration framework'],
        technologies: ['Integration', 'API Development']
    },
    {
        title: 'Senior Software Engineer',
        company: 'MARLABS India Pvt Ltd',
        period: 'November 2008 - March 2010',
        description: 'Worked as senior Java developer.',
        achievements: ['Developed a new API design tool'],
        technologies: ['Java', 'API Design']
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
        title: "AI-Powered Customer Service Platform",
        description: "Led the development of an intelligent customer service platform leveraging ML for automated response generation and sentiment analysis. Implemented using Python, TensorFlow, and NLP techniques.",
        achievements: [
            "Achieved 85% accuracy in automated response generation",
            "Reduced customer service response time by 60%",
            "Processed over 1M customer interactions monthly"
        ],
        technologies: ["Python", "TensorFlow", "NLP", "AWS SageMaker", "Docker", "Kubernetes"],
        image: "assets/project1.jpg",
        link: "#"
    },
    {
        title: "Enterprise Integration Hub",
        description: "Architected and implemented a scalable integration hub using Mule 4, handling 1M+ transactions daily. Integrated with multiple enterprise systems and implemented real-time monitoring.",
        achievements: [
            "Reduced integration latency by 40%",
            "Implemented real-time monitoring dashboard",
            "Successfully integrated 5 major enterprise systems"
        ],
        technologies: ["Mule 4", "Anypoint Platform", "API Management", "Kafka", "Docker"],
        image: "assets/project2.jpg",
        link: "#"
    },
    {
        title: "ML-Based Fraud Detection System",
        description: "Developed an ML-powered fraud detection system for financial transactions. Achieved 95% accuracy in fraud detection using ensemble learning techniques.",
        achievements: [
            "Achieved 95% accuracy in fraud detection",
            "Reduced false positives by 30%",
            "Processed 500K+ transactions daily"
        ],
        technologies: ["Python", "Scikit-learn", "TensorFlow", "AWS Lambda", "MLOps"],
        image: "assets/project3.jpg",
        link: "#"
    }
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
                ${exp.achievements ? `
                    <ul class="achievements-list">
                        ${exp.achievements.map(achievement => `
                            <li>${achievement}</li>
                        `).join('')}
                    </ul>
                ` : ''}
                ${exp.technologies ? `
                    <div class="tech-stack">
                        ${exp.technologies.map(tech => `
                            <span class="tech-tag">${tech}</span>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

// Render Projects
function renderProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projectsData.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/default-project.jpg'">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                        ${project.achievements.map(achievement => `
                            <li>${achievement}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">View Details <i class="fas fa-arrow-right"></i></a>
            </div>
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