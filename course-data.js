const courseData = {
    // --- DEVELOPMENT ---
    "python": {
        title: "Python Full Stack Development",
        description: "Master Python from basics to advanced enterprise applications using Django, Flask, and React.",
        duration: "5 Months",
        level: "Beginner to Advanced",
        technologies: "Python, Django, React, PostgreSQL, Docker",
        roadmap: [
            { week: "Week 1-3", topic: "Python Core", details: ["Syntax & Data Types", "OOP Concepts", "File Handling", "Exception Handling"] },
            { week: "Week 4-6", topic: "Advanced Python", details: ["Decorators & Generators", "Multithreading", "API Integration", "Virtual Environments"] },
            { week: "Week 7-10", topic: "Backend with Django", details: ["MVC Architecture", "ORM & Database", "Authentication", "REST APIs"] },
            { week: "Week 11-14", topic: "Frontend Integration", details: ["React Basics", "Connecting Frontend to Django", "State Management", "Deployment"] }
        ]
    },
    "java": {
        title: "Java Enterprise Edition",
        description: "Master Java from basics to advanced enterprise applications using Spring Boot, Hibernate, and Microservices.",
        duration: "6 Months",
        level: "Advanced",
        technologies: "Java, Spring Boot, Hibernate, Maven, MySQL",
        roadmap: [
            { week: "Week 1-4", topic: "Core Java Fundamentals", details: ["OOPs Concepts", "Exception Handling", "Collections Framework", "Multithreading"] },
            { week: "Week 5-8", topic: "Advanced Java & Database", details: ["JDBC & SQL", "Servlets & JSP", "Design Patterns", "Maven Build Tool"] },
            { week: "Week 9-12", topic: "Spring Framework", details: ["Spring Core (IoC/DI)", "Spring MVC", "Spring Boot Basics", "RESTful APIs"] },
            { week: "Week 13-16", topic: "Microservices", details: ["Microservices Architecture", "Docker Basics", "AWS Deployment", "Capstone Project"] }
        ]
    },
    "react": {
        title: "React JS: Frontend Mastery",
        description: "Build modern, interactive, and fast web applications using React, Redux, and Hooks.",
        duration: "3 Months",
        level: "Intermediate",
        technologies: "HTML, CSS, JavaScript, React, Redux",
        roadmap: [
            { week: "Week 1-2", topic: "ES6 & React Basics", details: ["Arrow Functions", "JSX", "Components & Props", "State Management"] },
            { week: "Week 3-5", topic: "Hooks & Routing", details: ["useState & useEffect", "React Router", "Custom Hooks", "Form Handling"] },
            { week: "Week 6-8", topic: "State Management", details: ["Context API", "Redux Toolkit", "Async Thunks", "API Integration"] },
            { week: "Week 9-12", topic: "Project Build", details: ["Performance Optimization", "Testing with Jest", "Final Portfolio Project", "Deployment"] }
        ]
    },
    "web-dev": {
        title: "MERN Stack Bootcamp",
        description: "Become a full-stack developer. Build complete web apps with MongoDB, Express, React, and Node.js.",
        duration: "6 Months",
        level: "Beginner to Pro",
        technologies: "MongoDB, Express.js, React, Node.js",
        roadmap: [
            { week: "Week 1-4", topic: "Web Foundations", details: ["HTML5 Semantic Structure", "CSS3 Flexbox & Grid", "Responsive Design", "JavaScript ES6+"] },
            { week: "Week 5-8", topic: "Frontend with React", details: ["Components & Props", "Hooks (useState, useEffect)", "Routing", "Tailwind CSS"] },
            { week: "Week 9-12", topic: "Backend with Node", details: ["Node.js Runtime", "Express Server", "REST API Design", "Middleware"] },
            { week: "Week 13-16", topic: "Database & Full Stack", details: ["MongoDB Schema Design", "JWT Authentication", "Connecting FE & BE", "Deployment on Vercel/Render"] }
        ]
    },

    // --- DESIGN ---
    "ui-ux": {
        title: "Google UX Design Professional",
        description: "Learn how to conduct user research, create wireframes, and design high-fidelity prototypes.",
        duration: "4 Months",
        level: "Beginner",
        technologies: "Figma, Adobe XD, Miro, Usability Testing",
        roadmap: [
            { week: "Week 1-3", topic: "Foundations of UX", details: ["User Centric Design", "Design Thinking", "User Research", "Personas"] },
            { week: "Week 4-6", topic: "Wireframing", details: ["Information Architecture", "User Flows", "Sketching", "Figma Basics"] },
            { week: "Week 7-10", topic: "Hi-Fi Prototyping", details: ["Typography & Color", "Design Systems", "Interactive Prototypes", "Micro-interactions"] },
            { week: "Week 11-14", topic: "Portfolio Building", details: ["Case Studies", "Usability Testing", "Mock Interviews", "Final Review"] }
        ]
    },
    "figma": {
        title: "Figma Mastery",
        description: "A deep dive into Figma for UI designers. Auto-layout, components, and variants.",
        duration: "2 Months",
        level: "Intermediate",
        technologies: "Figma, Plugins, Prototyping",
        roadmap: [
            { week: "Week 1-2", topic: "Figma Interface", details: ["Frames vs Groups", "Vector Networks", "Pen Tool", "Constraints"] },
            { week: "Week 3-4", topic: "Advanced Layouts", details: ["Auto Layout", "Responsive Resize", "Grids", "Styles"] },
            { week: "Week 5-6", topic: "Components System", details: ["Master Components", "Variants", "Properties", "Asset Libraries"] },
            { week: "Week 7-8", topic: "Prototyping", details: ["Smart Animate", "Overlays", "Interactive Components", "Sharing & Handoff"] }
        ]
    },
    "graphic": {
        title: "Graphic Design Masterclass",
        description: "Learn the principles of design and master Photoshop, Illustrator, and InDesign.",
        duration: "3 Months",
        level: "Beginner",
        technologies: "Photoshop, Illustrator, InDesign, Color Theory",
        roadmap: [
            { week: "Week 1-2", topic: "Design Theory", details: ["Color Theory", "Typography", "Layout & Composition", "Branding Basics"] },
            { week: "Week 3-6", topic: "Adobe Photoshop", details: ["Layers & Masks", "Photo Editing", "Retouching", "Digital Painting"] },
            { week: "Week 7-10", topic: "Adobe Illustrator", details: ["Vector Graphics", "Logo Design", "Pen Tool Mastery", "Illustration"] },
            { week: "Week 11-12", topic: "Portfolio", details: ["Brand Identity Project", "Social Media Graphics", "Print Design", "Final Portfolio"] }
        ]
    },
    "adobe-xd": {
        title: "Adobe XD Experience Design",
        description: "Create stunning user experiences and interactive prototypes specifically using Adobe XD.",
        duration: "2 Months",
        level: "Intermediate",
        technologies: "Adobe XD, Prototyping, Wireframing",
        roadmap: [
            { week: "Week 1-2", topic: "Interface Basics", details: ["Artboards & Grids", "Drawing Tools", "Assets Panel", "Responsive Resize"] },
            { week: "Week 3-5", topic: "Prototyping", details: ["Auto-Animate", "Voice Triggers", "Transition Effects", "Micro-interactions"] },
            { week: "Week 6-7", topic: "Collaboration", details: ["Sharing for Review", "Developer Handoff", "Design Specs", "Feedback Loops"] },
            { week: "Week 8", topic: "Design Challenge", details: ["App Design Sprint", "Final Prototype Presentation"] }
        ]
    },

    // --- DATA & OTHERS ---
    "data-science": {
        title: "Data Science with Python",
        description: "Analyze complex data sets and build predictive models.",
        duration: "6 Months",
        level: "Intermediate",
        technologies: "Python, R, SQL, Tableau",
        roadmap: [
            { week: "Week 1-4", topic: "Statistics & Math", details: ["Probability", "Linear Algebra", "Descriptive Stats", "Hypothesis Testing"] },
            { week: "Week 5-8", topic: "Data Wrangling", details: ["Pandas", "SQL for Data Science", "Data Cleaning", "Feature Engineering"] },
            { week: "Week 9-12", topic: "Visualization", details: ["Tableau Basics", "Matplotlib/Seaborn", "Storytelling", "Dashboards"] },
            { week: "Week 13-16", topic: "Machine Learning", details: ["Supervised vs Unsupervised", "Clustering", "NLP Basics", "Final Project"] }
        ]
    },
    "ml": {
        title: "Machine Learning A-Z",
        description: "Build powerful Machine Learning models using Python and Scikit-Learn.",
        duration: "5 Months",
        level: "Advanced",
        technologies: "Python, Scikit-Learn, Pandas, NumPy",
        roadmap: [
            { week: "Week 1-4", topic: "Data Preprocessing", details: ["Handling Missing Data", "Categorical Data", "Splitting Datasets", "Feature Scaling"] },
            { week: "Week 5-8", topic: "Regression", details: ["Simple Linear Regression", "Multiple Linear Regression", "Polynomial Regression", "Support Vector Regression"] },
            { week: "Week 9-12", topic: "Classification", details: ["Logistic Regression", "K-Nearest Neighbors", "SVM", "Kernel SVM"] },
            { week: "Week 13-16", topic: "Deep Learning Intro", details: ["ANN Basics", "Building an ANN", "Model Selection", "Boosting"] }
        ]
    },
    "sql": {
        title: "The Complete SQL Bootcamp",
        description: "Learn to manage and query data effectively using MySQL and PostgreSQL.",
        duration: "2 Months",
        level: "Beginner",
        technologies: "MySQL, PostgreSQL, ER Diagrams",
        roadmap: [
            { week: "Week 1-2", topic: "Basics", details: ["SELECT Queries", "Filtering & Sorting", "Data Types", "Creating Tables"] },
            { week: "Week 3-4", topic: "Joins & Aggregation", details: ["Inner/Outer Joins", "Group By & Having", "Subqueries", "Set Operations"] },
            { week: "Week 5-6", topic: "Database Design", details: ["Normalization", "ER Modeling", "Constraints", "Indexes"] },
            { week: "Week 7-8", topic: "Advanced SQL", details: ["Stored Procedures", "Triggers", "Views", "Performance Tuning"] }
        ]
    },
    "devops": {
        title: "DevOps: Docker & Kubernetes",
        description: "Bridge the gap between development and operations using Docker, Kubernetes, and Jenkins.",
        duration: "5 Months",
        level: "Advanced",
        technologies: "Linux, Docker, K8s, Jenkins, Terraform",
        roadmap: [
            { week: "Week 1-3", topic: "Linux & Scripting", details: ["Bash Scripting", "Linux Permissions", "Networking", "Git Advanced"] },
            { week: "Week 4-7", topic: "Containerization", details: ["Docker Basics", "Docker Compose", "Container Security", "Registry"] },
            { week: "Week 8-12", topic: "Orchestration", details: ["Kubernetes Architecture", "Pods & Services", "Helm Charts", "Cluster Mgmt"] },
            { week: "Week 13-16", topic: "IaC & CI/CD", details: ["Terraform", "Jenkins Pipelines", "Monitoring (Prometheus)", "Project"] }
        ]
    }
};