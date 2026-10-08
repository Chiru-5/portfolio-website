export const config = {
    developer: {
        name: "Chiru Chandan",
        fullName: "Chiru Chandan",
        title: "Software Developer",
        resumeUrl: "", // Add resume URL or PDF path here
        description: "Software Developer building high-performance microservices, full-stack web applications, and scalable backend systems with Java, Spring Boot, React, and Kafka."
    },
    social: {
        github: "Chiru-5",
        email: "mandavallichiruchandan@gmail.com",
        location: "India"
    },
    about: {
        title: "About Me",
        description: "I am a Software Developer specializing in building high-performance backend microservices, event-driven architectures, and full-stack web applications. My core expertise spans Java, Spring Boot, Spring Security, gRPC, Apache Kafka, PostgreSQL, MySQL, and React. I am passionate about engineering reliable, scalable distributed systems, writing clean maintainable code, and solving complex technical challenges across the full software stack."
    },
    experiences: [] as Array<{
        position: string;
        company: string;
        period: string;
        location: string;
        description: string;
        responsibilities: string[];
        technologies: string[];
    }>,
    projects: [
        {
            id: 1,
            title: "Patient Management System",
            category: "Microservices / Backend",
            technologies: "Java, Spring Boot, Spring Security, gRPC, Kafka, PostgreSQL, Docker, JUnit 5",
            image: "/images/Drishti.png",
            description: "Built a 5-service healthcare backend to manage patient records, authentication, billing, and analytics using a microservices architecture. Automated patient onboarding via gRPC & Kafka while securing REST APIs with JWT & Spring Security.",
            link: "https://github.com/Chiru-5/Patient-Management"
        },
        {
            id: 2,
            title: "LawEZY - AI Legal Platform",
            category: "Full-Stack / AI Tech",
            technologies: "HTML, CSS, JavaScript, React.js, MongoDB, REST APIs, JWT",
            image: "/images/VoteChain.png",
            description: "Developed a legal-tech platform connecting clients with lawyers through AI-assisted queries, real-time chat, appointment scheduling, document sharing, and secure JWT authentication.",
            link: "https://github.com/Chiru-5/LawEzy"
        },
        {
            id: 3,
            title: "E-Commerce Platform Backend",
            category: "Backend / Spring Boot",
            technologies: "Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, H2, REST APIs, Maven",
            image: "/images/Prodesk.png",
            description: "Developed a scalable backend for an E-Commerce platform using Spring Boot, enabling full management of customers, products, carts, and orders with layered architecture and transactional safety.",
            link: "https://github.com/Chiru-5/ecommerce"
        },
        {
            id: 4,
            title: "CPU Scheduler Simulator",
            category: "Web / Systems",
            technologies: "HTML, CSS, JavaScript, Python",
            image: "/images/FloodSpaces.png",
            description: "Built a responsive CPU scheduling simulator providing interactive Gantt chart visualizations and real-time execution flow simulation for multiple scheduling algorithms.",
            link: "https://github.com/Chiru-5"
        }
    ],
    contact: {
        email: "mandavallichiruchandan@gmail.com",
        github: "https://github.com/Chiru-5",
        linkedin: "https://www.linkedin.com/in/chiruchandan/",
        twitter: "https://x.com/chiruchandanm",
        facebook: "https://github.com/Chiru-5",
        instagram: "https://github.com/Chiru-5"
    },
    skills: {
        develop: {
            title: "BACKEND & MICROSERVICES",
            description: "Building scalable distributed systems & RESTful APIs",
            details: "Specializing in microservices architecture, event-driven design with Kafka, high-speed RPC with gRPC, secure authentication with Spring Security/JWT, and robust database persistence.",
            tools: ["Java", "Spring Boot", "Spring Security", "gRPC", "Kafka", "PostgreSQL", "MySQL", "Docker", "REST APIs", "Maven"]
        },
        design: {
            title: "FULL-STACK & CLOUD",
            description: "Modern interactive web applications & developer tools",
            details: "Crafting intuitive responsive frontends using React, JavaScript, HTML, CSS, integrated with cloud deployment, containerization, and automated testing.",
            tools: ["React", "JavaScript", "Node.js", "Kotlin", "HTML5", "CSS3", "Linux", "AWS", "Git", "Postman"]
        }
    }
};
