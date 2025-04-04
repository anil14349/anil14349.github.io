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
        title: "ZAYO - Financial Data Migration",
        company: "PWC",
        description: "Led the migration of financial data from Salesforce CRM to OIC, handling accounts, contacts, invoices, projects, and attachments. Implemented using Salesforce APEX Triggers, AWS Lambdas, and Kafka Services.",
        achievements: [
            "Successfully migrated complex financial data structures",
            "Implemented automated data validation and transformation",
            "Reduced migration time by 40% through optimized processes"
        ],
        technologies: ["Salesforce CRM", "APEX", "Data Loader", "AWS Lambda", "REST APIs", "Kafka"],
        image: "assets/project1.jpg",
        link: "#"
    },
    {
        title: "MCKESSON - Product Integration",
        company: "PWC",
        description: "Architected and implemented integration between Salesforce and SM API, using Apache Kafka and Oracle DB Systems with Mulesoft APIs hosted on RTF.",
        achievements: [
            "Reduced data synchronization time by 60%",
            "Implemented real-time product updates",
            "Achieved 99.9% data accuracy"
        ],
        technologies: ["Anypoint Platform", "Salesforce", "SM APIs", "Oracle DB", "Kafka"],
        image: "assets/project2.jpg",
        link: "#"
    },
    {
        title: "Copperpoint Integration",
        company: "PWC",
        description: "Led the migration of Java Services to Mule4, connecting to Postgres and Webservices. Services expose policy-related data to consuming applications in JSON/XML format, deployed on Cloudhub.",
        achievements: [
            "Reduced service response time by 45%",
            "Successfully migrated 20+ services",
            "Implemented new security protocols"
        ],
        technologies: ["Mule 4", "Postgres", "Cloudhub", "REST APIs", "JSON/XML"],
        image: "assets/project3.jpg",
        link: "#"
    },
    {
        title: "Hertz Integration",
        company: "Netrovert India Pvt Ltd",
        description: "Managed migration of Mule 3 APIs to Mule4, integrating with SFDC, Oracle, and AMQ. Services expose customer data, services, policy, and payment details for Hertz UI applications.",
        achievements: [
            "Reduced API response time by 35%",
            "Implemented new caching mechanisms",
            "Enhanced security protocols"
        ],
        technologies: ["Mule 4", "SFDC", "Oracle", "AMQ", "REST APIs"],
        image: "assets/project4.jpg",
        link: "#"
    },
    {
        title: "GCAPI - Global Customer API",
        company: "HSBC Software Development Pvt Ltd",
        description: "Developed a product providing Global API endpoints for retrieving customer information from multiple source systems.",
        achievements: [
            "Reduced customer data retrieval time by 50%",
            "Implemented unified customer view",
            "Enhanced system reliability"
        ],
        technologies: ["Mulesoft", "API Management", "REST APIs", "SOA"],
        image: "assets/project5.jpg",
        link: "#"
    },
    {
        title: "NYU Healthcare Management",
        company: "Deloitte India Pvt Ltd",
        description: "Developed integration solutions for NYU's Student Health Center, providing universal healthcare services to students with hassle-free appointment scheduling and walk-in services.",
        achievements: [
            "Reduced appointment scheduling time by 70%",
            "Implemented real-time availability checking",
            "Enhanced student experience"
        ],
        technologies: ["Mulesoft", "Healthcare APIs", "REST APIs", "SOA"],
        image: "assets/project6.jpg",
        link: "#"
    },
    {
        title: "STARZ PLAY Arabia",
        company: "Whishworks Pvt Ltd",
        description: "Led the ESB and Backend Tech team for a video-on-demand service, building integration middleware between client applications and business systems using Mule ESB.",
        achievements: [
            "Reduced content delivery time by 40%",
            "Implemented multi-device support",
            "Enhanced streaming quality"
        ],
        technologies: ["Mule ESB", "Video Streaming", "REST APIs", "SOA"],
        image: "assets/project7.jpg",
        link: "#"
    },
    {
        title: "CHC Bank Integration",
        company: "Whishworks Pvt Ltd",
        description: "Developed interfaces and batch jobs for a new onshore digital banking environment, focusing on mobile and online customer experience.",
        achievements: [
            "Reduced transaction processing time by 45%",
            "Implemented new security protocols",
            "Enhanced customer experience"
        ],
        technologies: ["Banking APIs", "Batch Processing", "REST APIs", "SOA"],
        image: "assets/project8.jpg",
        link: "#"
    },
    {
        title: "SNET - SunTrust Bank",
        company: "IBM",
        description: "Developed Service Network (SNET) enabling applications to be loosely coupled, integrating various channels with legacy systems. Supporting over 97 services for consumers across ARGO, Mobile Banking, IVR, and e-Banking.",
        achievements: [
            "Reduced service integration time by 60%",
            "Implemented multi-channel support",
            "Enhanced customer satisfaction"
        ],
        technologies: ["SOA", "WebSphere", "Mainframe", "REST APIs"],
        image: "assets/project9.jpg",
        link: "#"
    },
    {
        title: "Gategourmet - IFX4S",
        company: "Marlabs Ind Pvt Ltd",
        description: "Developed ESS-ESO Communication system for handling Flight Events from ESO and generating FSS based on FSS Objects.",
        achievements: [
            "Reduced event processing time by 40%",
            "Implemented real-time updates",
            "Enhanced system reliability"
        ],
        technologies: ["Flight Systems", "Event Processing", "REST APIs"],
        image: "assets/project10.jpg",
        link: "#"
    },
    {
        title: "Investor Relation System",
        company: "Cellarch Technologies",
        description: "Developed an automation system for workflow execution, facilitating communication between client representatives and US doctors for appointment scheduling across various states.",
        achievements: [
            "Reduced appointment scheduling time by 50%",
            "Implemented multi-module integration",
            "Enhanced workflow efficiency"
        ],
        technologies: ["Workflow Automation", "Email System", "Fax System", "REST APIs"],
        image: "assets/project11.jpg",
        link: "#"
    }
];

// Render Experience Timeline
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    experienceData.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const content = `
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <div class="period">${exp.period}</div>
                <p>${exp.description}</p>
                ${exp.achievements ? `
                    <div class="achievements">
                        <h4>Key Achievements:</h4>
                        <ul class="achievements-list">
                            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                ${exp.technologies ? `
                    <div class="tech-stack">
                        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        `;
        
        timelineItem.innerHTML = content;
        timeline.appendChild(timelineItem);
    });
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const content = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/default-project.jpg'">
            </div>
            <div class="project-content">
                <div class="project-company">${project.company}</div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                        ${project.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">
                    View Project <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        projectCard.innerHTML = content;
        projectsGrid.appendChild(projectCard);
    });
}

// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000);
});

// Mobile Menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : 
        '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Enhanced Scroll Animations
const sections = document.querySelectorAll('.section');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Update active nav link
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Smooth Scroll with Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderProjects();
    
    // Add visible class to first section
    const firstSection = document.querySelector('.section');
    if (firstSection) {
        firstSection.classList.add('visible');
    }
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