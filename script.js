document.addEventListener("DOMContentLoaded", function () {
    // Navigation functionality
    const navLinks = document.querySelectorAll(".sidebar nav ul li a");
    const sections = document.querySelectorAll(".section");

    // Function to show the selected section and hide others
    function showSection(target) {
        sections.forEach((section) => {
            if (section.id === target) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const target = link.getAttribute("data-target");
            showSection(target);
        });
    });

    // Show the home section by default on page load
    showSection("home");

    // Typing Effect for Home Section
    const roles = [
        "Student in Data Science & Software Engineering",
        "Passionate about AI and data analysis.",
        "Software engineer combining data analysis and development to fuel business innovation.",
        "Data explorer and creator of insights.",
        "Passionate about coding and solving complex problems.",
        "Data-driven thinker and problem solver.",
        "Unlocking the power of data to drive innovation."
    ];
    let index = 0;
    const typingElement = document.querySelector(".typing");

    function typeEffect() {
        typingElement.textContent = roles[index];
        index = (index + 1) % roles.length;
        setTimeout(typeEffect, 2000); // Change every 2 seconds
    }

    typeEffect();

    // Projects functionality
    const projectButtons = document.querySelectorAll(".project-button");
    const projectDetails = document.getElementById("project-details");

    // Function to generate screenshot paths
    function generateScreenshots(start, end) {
        const screenshots = [];
        for (let i = start; i <= end; i++) {
            screenshots.push(`101_${i}.png`);
        }
        return screenshots;
    }

    // Project details data
    const projects = {
        istihqaq:{
            title: "Application pour la bourse istihqaq de la Fondation M6",
            description: `
                <p>Développement d'une application de gestion des bourses ISTIHQAQ en utilisant Java et le framework Spring Boot. <br>
                Ce projet permet de gérer les candidatures, l'attribution des bourses, le suivi des engagements et des paiements, ainsi que la génération de lettres standards et de statistiques. Il inclut également la gestion des notifications et l'échange d'informations avec des partenaires externes.</p>
                <br><p><strong>Technologies utilisées :</strong> Java, Spring Boot, MySQL,HTML,CSS,JS.</p><br>
                
            `,
            report: "reports/istihqaq_report.pdf"

        },
        pacman: {
            title: "Jeu Pac-Man en C",
            description: `
                <br><p>Développement d'un jeu Pac-Man en langage C, utilisant la bibliothèque SDL2. <br>
                Ce projet inclut la possibilité de choisir parmi 4 thèmes différents pour personnaliser l'expérience de jeu, tout en mettant en œuvre des concepts avancés de programmation orientée objet et de gestion de matrices.</p>
                <br><p><strong>Technologies utilisées :</strong> C, SDL2.</p><br>
            `,
            report: "reports/pacman_report.pdf"
        },
        hospital: {
            title: "Système de gestion d'hôpital",
            description: `
                <br><p>Une application web complète pour gérer les patients, planifier les rendez-vous et organiser les dossiers médicaux dans un hôpital. <br>
                Ce projet garantit une meilleure efficacité opérationnelle et une gestion optimisée des ressources.</p>
                <br><p><strong>Technologies utilisées :</strong> Java,PLSQL.</p><br>
            `,
            report: "reports/hospital_report.pdf"
        },
        tourism: {
            title: "Base de connaissances pour le tourisme",
            description: `
                <br><p>Création d'une base de connaissances pour le tourisme au Maroc. Ce système expert recommande des destinations et fournit des informations essentielles pour les touristes en fonction de leurs préférences. <br>
                Il comprend des listes détaillées de lieux à visiter, des activités à faire et des conseils pratiques pour les voyageurs.</p>
                <br><p><strong>Technologies utilisées :</strong> HTML,CSS,JS</p><br>
            `,
            report: "reports/tourism_report.pdf",
            screenshots: generateScreenshots(1, 26)
        },
        "erp-cms": {
            title: "Gestion de contenu avec ERP et CMS",
            description: `
                <br><p>Gestion et automatisation de contenu pour plusieurs entreprises en intégrant des systèmes ERP et CMS. <br>
                Ce projet combine les fonctionnalités d'Odoo et WordPress pour optimiser les processus métier, tout en assurant une gestion efficace des ressources et du contenu en ligne.</p>
                <br><p><strong>Technologies utilisées :</strong> Odoo, WordPress.</p><br>
            `,
            report: "reports/ecm_report.pdf"
        },
        restaurant: {
            title: "Système de gestion de restaurant",
            description: `
               <br> <p>Création d'un système de gestion pour un restaurant, permettant la gestion des commandes en ligne, des réservations, des stocks et des employés. <br>
                Cette application simplifie les processus internes et améliore l'expérience utilisateur avec une interface intuitive et une gestion automatisée.</p>
                <br><p><strong>Technologies utilisées :</strong> WIX, HTML, CSS, JS</p><br>
            `,
            report: "reports/restaurant_report.pdf",
            website: "https://manalmaati8.wixsite.com/ez-noodles",
            screenshots: ["wix_1.png", "wix_2.png", "wix_3.png", "wix_4.png", "wix_5.png", "wix_6.png", "wix_7.png"]
        },

        fifa: {
            title: "Analyse des données de la Coupe du Monde FIFA",
            description: `
                <br>
                <p>Un projet de science des données utilisant trois ensembles de données liés à la Coupe du Monde FIFA. <br>
                Chaque ensemble a été analysé avec un langage différent (Python, R, Scala) pour en tirer des conclusions significatives sur les performances des équipes, les tendances historiques et les statistiques clés.</p>
                <br>
                <p><strong>Technologies utilisées :</strong> Python, Pandas, Matplotlib, R, Scala.</p><br>
            `,
            report: "reports/fifa_report.pdf"
        },
    };
    

    // Add click event listeners to project buttons
    projectButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const projectId = button.getAttribute("data-project");
            const project = projects[projectId];

            if (project) {
                // Display project details
                let screenshotsHTML = '';
                let websiteHTML = '';
                if (project.website) {
                    websiteHTML = `
                        <div class="website-link">
                           <br> <h4>Visiter le Site Web</h4><br>

                            <a href="${project.website}" target="_blank" class="download-button">Ouvrir dans un nouvel onglet</a>
                        </div>
                    `;
                }
                if (project.screenshots) {
                    screenshotsHTML = `
                        <div class="screenshots">
                            <h4>Captures d'écran</h4>
                            ${project.screenshots.map(screenshot => `
                                <img src="${screenshot}" alt="Screenshot" class="screenshot">
                            `).join('')}
                        </div>
                    `;
                }

                

                projectDetails.innerHTML = `
                    <h3>${project.title}</h3>
                    ${project.description}
                    <a href="${project.report}" class="download-button" download>Télécharger le Rapport</a>
                    ${screenshotsHTML}
                    ${websiteHTML}
                `;
            } else {
                projectDetails.innerHTML = "<p>No details available.</p>";
            }
        });
    });
});