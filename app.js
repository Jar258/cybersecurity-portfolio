// Application Data
const projectsData = [
  {
    id: "apt-simulation",
    title: "Advanced Persistent Threat (APT) Simulation Lab",
    category: "forensics",
    description:
      "Comprehensive APT simulation environment for forensic analysis training",
    challenge:
      "Need for realistic APT scenarios for forensic skill development",
    solution:
      "Built multi-stage attack simulation with comprehensive logging and evidence trails",
    tools: ["VMware", "Atomic Red Team", "Splunk", "MITRE ATT&CK"],
    impact:
      "Improved forensic analysis skills by 40% through realistic scenario training",
    github: "https://github.com/shivraj-cyber/apt-simulation-lab",
  },
  {
    id: "ai-log-analyzer",
    title: "AI-Powered Log Analysis Engine",
    category: "ai-ml",
    description:
      "Machine learning system for automated security log analysis and threat detection",
    challenge: "Manual log analysis is time-intensive and prone to human error",
    solution:
      "Developed ML pipeline for automated anomaly detection and threat classification",
    tools: ["Python", "TensorFlow", "ELK Stack", "Pandas"],
    impact: "Reduced threat detection time by 75% with 95% accuracy rate",
    github: "https://github.com/shivraj-cyber/ai-log-analyzer",
  },
  {
    id: "zero-trust-network",
    title: "Zero-Trust Network Implementation",
    category: "cloud",
    description:
      "Complete zero-trust architecture implementation for small enterprise",
    challenge: "Traditional perimeter security insufficient for modern threats",
    solution:
      "Implemented comprehensive zero-trust model with identity-based access control",
    tools: ["AWS", "Okta", "Palo Alto", "Terraform"],
    impact:
      "Eliminated lateral movement threats and improved security posture by 60%",
    github: "https://github.com/shivraj-cyber/zero-trust-implementation",
  },
  {
    id: "cloud-forensics-framework",
    title: "Cloud Forensics Automation Framework",
    category: "cloud",
    description:
      "Automated evidence collection and analysis for cloud environments",
    challenge: "Manual cloud forensics is complex and time-consuming",
    solution:
      "Created automated framework for evidence preservation and analysis across cloud platforms",
    tools: ["Python", "AWS API", "Azure CLI", "Docker"],
    impact:
      "Reduced cloud investigation time by 80% while maintaining evidence integrity",
    github: "https://github.com/shivraj-cyber/cloud-forensics-framework",
  },
  {
    id: "mobile-forensics-lab",
    title: "Mobile Device Forensics Laboratory",
    category: "mobile",
    description:
      "Complete mobile forensics setup for iOS and Android investigations",
    challenge:
      "Mobile devices present unique forensic challenges and security measures",
    solution:
      "Established comprehensive mobile forensics lab with bypass techniques and analysis tools",
    tools: ["Cellebrite", "Oxygen Suite", "MSAB", "Custom Scripts"],
    impact:
      "Successfully analyzed 50+ mobile devices with 98% data recovery rate",
    github: "https://github.com/shivraj-cyber/mobile-forensics-lab",
  },
  {
    id: "darkweb-intelligence",
    title: "Dark Web Intelligence Gathering System",
    category: "intelligence",
    description:
      "Automated system for gathering threat intelligence from dark web sources",
    challenge: "Manual dark web monitoring is dangerous and inefficient",
    solution:
      "Built secure automated system for threat intelligence collection and analysis",
    tools: ["Tor", "Python", "MongoDB", "YARA"],
    impact: "Identified 100+ new threats and IOCs through automated monitoring",
    github: "https://github.com/shivraj-cyber/darkweb-intelligence",
  },
];

// DOM Elements
const loadingScreen = document.getElementById("loading-screen");
const matrixCanvas = document.getElementById("matrix-canvas");
const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.getElementById("theme-toggle");
const mainTitle = document.getElementById("main-title");
const subtitle = document.getElementById("subtitle");
const certTrack = document.getElementById("cert-track");
const contactForm = document.getElementById("contact-form");
const sections = document.querySelectorAll(".section");

// Matrix Rain Effect
class MatrixRain {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.chars = "⛓️,🔒, 🔑, 🌐, 🛡️";
    this.charArray = this.chars.split("");
    this.fontSize = 14;
    this.columns = 0;
    this.drops = [];

    this.init();
    this.animate();
  }

  init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.canvas.width / this.fontSize);

    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.random() * this.canvas.height;
    }
  }

  draw() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "#00ff88";
    this.ctx.font = `${this.fontSize}px monospace`;

    for (let i = 0; i < this.drops.length; i++) {
      const text =
        this.charArray[Math.floor(Math.random() * this.charArray.length)];
      this.ctx.fillText(text, i * this.fontSize, this.drops[i]);

      if (this.drops[i] > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i] += this.fontSize;
    }
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }

  resize() {
    this.init();
  }
}

// Initialize Matrix Rain
const matrixRain = new MatrixRain(matrixCanvas);
window.addEventListener("resize", () => matrixRain.resize());

// Loading Screen Animation
let progressValue = 0;
const progressBar = document.querySelector(".progress-bar");
const progressPercentage = document.querySelector(".progress-percentage");

function updateProgress() {
  if (progressValue < 100) {
    progressValue += Math.random() * 3 + 1;
    if (progressValue > 100) progressValue = 100;

    if (progressPercentage) {
      progressPercentage.textContent = Math.floor(progressValue) + "%";
    }

    requestAnimationFrame(updateProgress);
  } else {
    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      startTypingAnimation();
    }, 500);
  }
}

window.addEventListener("load", () => {
  setTimeout(updateProgress, 500);
});

// Typing Animation with Glitch Effect
function startTypingAnimation() {
  const texts = [
    { element: mainTitle, text: "Hello, I'm Shiv Raj", speed: 100 },
    {
      element: subtitle,
      text: "MCA Final Year | Digital Forensics Specialist",
      speed: 80,
    },
    {
      element: certTrack,
      text: "CEH & CISSP Track | Cybersecurity Enthusiast",
      speed: 70,
    },
  ];

  let currentIndex = 0;

  function typeNextText() {
    if (currentIndex < texts.length) {
      const current = texts[currentIndex];
      current.element.setAttribute("data-text", current.text);
      typeText(current.element, current.text, current.speed, () => {
        currentIndex++;
        setTimeout(typeNextText, 300);
      });
    }
  }

  typeNextText();
}

function typeText(element, text, speed, callback) {
  let i = 0;
  element.textContent = "";
  element.style.borderRight = "2px solid #00d4ff";

  const typing = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;

      // Add glitch effect randomly
      if (Math.random() < 0.05) {
        element.style.textShadow = "2px 0 #ff5459, -2px 0 #00d4ff";
        setTimeout(() => {
          element.style.textShadow = "0 0 10px #00d4ff";
        }, 50);
      }
    } else {
      clearInterval(typing);
      setTimeout(() => {
        element.style.borderRight = "none";
        if (callback) callback();
      }, 1000);
    }
  }, speed);
}

// Navigation Functions
navToggle.addEventListener("click", toggleMobileMenu);
themeToggle.addEventListener("click", toggleTheme);

function toggleMobileMenu() {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = themeToggle.querySelector(".theme-icon");

  if (body.getAttribute("data-color-scheme") === "dark") {
    body.setAttribute("data-color-scheme", "light");
    themeIcon.textContent = "🌙";
  } else {
    body.setAttribute("data-color-scheme", "dark");
    themeIcon.textContent = "☀️";
  }
}

// Smooth Scrolling
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    navMenu.classList.remove("active");
  });
});

// Intersection Observer for Active Navigation
const observerOptions = {
  root: null,
  rootMargin: "-70px 0px -50% 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeLink = document.querySelector(
        `.nav-link[href="#${entry.target.id}"]`
      );

      navLinks.forEach((link) => link.classList.remove("active"));

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => {
  observer.observe(section);
});

// Skills Radar Chart
function createSkillsRadarChart() {
  const ctx = document.getElementById("skills-radar");
  if (!ctx) return;

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: [
        "Digital Forensics",
        "Penetration Testing",
        "Cloud Security",
        "AI/ML Security",
        "Incident Response",
      ],
      datasets: [
        {
          label: "Proficiency Level (%)",
          data: [98, 85, 90, 70, 88],
          borderColor: "#00d4ff",
          backgroundColor: "rgba(0, 212, 255, 0.1)",
          borderWidth: 2,
          pointBackgroundColor: "#00d4ff",
          pointBorderColor: "#00d4ff",
          pointHoverBackgroundColor: "#00ff88",
          pointHoverBorderColor: "#00ff88",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            color: "rgba(255, 255, 255, 0.5)",
            backdropColor: "transparent",
          },
          grid: {
            color: "rgba(0, 212, 255, 0.3)",
          },
          angleLines: {
            color: "rgba(0, 212, 255, 0.3)",
          },
          pointLabels: {
            color: "#00d4ff",
            font: {
              size: 12,
              weight: "bold",
            },
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

// Project Filtering and Display
function initializeProjects() {
  const projectsGrid = document.getElementById("projects-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!projectsGrid) return;

  // Render projects
  renderProjects(projectsData);

  // Filter functionality
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (filter === "all") {
        renderProjects(projectsData);
      } else {
        const filteredProjects = projectsData.filter(
          (project) => project.category === filter
        );
        renderProjects(filteredProjects);
      }
    });
  });
}

function renderProjects(projects) {
  const projectsGrid = document.getElementById("projects-grid");

  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-header">
                <div class="project-category">${getCategoryLabel(
                  project.category
                )}</div>
                <h3 class="project-title">🔒 ${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-details">
                <div class="project-detail">
                    <h4>Challenge</h4>
                    <p>${project.challenge}</p>
                </div>
                <div class="project-detail">
                    <h4>Solution</h4>
                    <p>${project.solution}</p>
                </div>
                <div class="project-detail">
                    <h4>Tools & Technologies</h4>
                    <div class="project-tools">
                        ${project.tools
                          .map(
                            (tool) =>
                              `<span class="project-tool">${tool}</span>`
                          )
                          .join("")}
                    </div>
                </div>
                <div class="project-detail">
                    <h4>Impact & Results</h4>
                    <p>${project.impact}</p>
                </div>
                <a href="${project.github}" target="_blank" class="github-link">
                    💻 View on GitHub
                </a>
            </div>
        </div>
    `
    )
    .join("");

  // Add reveal animation
  const projectCards = projectsGrid.querySelectorAll(".project-card");
  projectCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
}

function getCategoryLabel(category) {
  const labels = {
    forensics: "Digital Forensics",
    cloud: "Cloud Security",
    "ai-ml": "AI/ML Security",
    mobile: "Mobile Forensics",
    intelligence: "Threat Intelligence",
  };
  return labels[category] || category.toUpperCase();
}

// Contact Form Validation and Submission
contactForm.addEventListener("submit", handleFormSubmission);

function handleFormSubmission(e) {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const formValues = Object.fromEntries(formData);

  if (!validateForm(formValues)) {
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalHTML = submitButton.innerHTML;

  submitButton.innerHTML = "<span>🔄 Encrypting & Transmitting...</span>";
  submitButton.disabled = true;

  // Simulate encryption process
  setTimeout(() => {
    submitButton.innerHTML = "<span>🔐 Establishing Secure Channel...</span>";
  }, 1000);

  setTimeout(() => {
    showNotification(
      "🚀 Message transmitted successfully! Secure response incoming within 24 hours.",
      "success"
    );
    contactForm.reset();
    submitButton.innerHTML = originalHTML;
    submitButton.disabled = false;
  }, 3000);
}

function validateForm(values) {
  const { name, email, subject, message } = values;

  if (!name.trim()) {
    showNotification("⚠️ Agent identification required.", "error");
    return false;
  }

  if (!email.trim()) {
    showNotification("⚠️ Secure communication channel required.", "error");
    return false;
  }

  if (!isValidEmail(email)) {
    showNotification("⚠️ Invalid communication protocol format.", "error");
    return false;
  }

  if (!subject) {
    showNotification("⚠️ Mission type classification required.", "error");
    return false;
  }

  if (!message.trim()) {
    showNotification("⚠️ Encrypted message content required.", "error");
    return false;
  }

  if (containsSuspiciousContent(name) || containsSuspiciousContent(message)) {
    showNotification(
      "🔒 Security protocols activated: Suspicious content detected.",
      "error"
    );
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function containsSuspiciousContent(text) {
  const suspiciousPatterns = [
    /<script/i,
    /<\/script>/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /<form/i,
  ];
  return suspiciousPatterns.some((pattern) => pattern.test(text));
}

function showNotification(message, type = "info") {
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  const notification = document.createElement("div");
  notification.className = `notification notification--${type}`;

  const colors = {
    success: {
      bg: "rgba(0, 255, 136, 0.1)",
      border: "#00ff88",
      text: "#00ff88",
    },
    error: { bg: "rgba(255, 84, 89, 0.1)", border: "#ff5459", text: "#ff5459" },
    info: { bg: "rgba(0, 212, 255, 0.1)", border: "#00d4ff", text: "#00d4ff" },
  };

  const color = colors[type];

  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;

  notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${color.bg};
        border: 1px solid ${color.border};
        color: ${color.text};
        padding: 16px;
        border-radius: 8px;
        z-index: 10000;
        max-width: 350px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 20px ${color.border}30;
        animation: slideIn 0.3s ease-out;
        backdrop-filter: blur(10px);
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = "slideOut 0.3s ease-out";
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Parallax and Scroll Effects
window.addEventListener(
  "scroll",
  throttle(() => {
    const scrolled = window.pageYOffset;

    // Update navigation background
    if (scrolled > 50) {
      nav.style.background = "rgba(10, 10, 10, 0.95)";
      nav.style.borderBottom = "1px solid rgba(0, 212, 255, 0.5)";
    } else {
      nav.style.background = "rgba(10, 10, 10, 0.9)";
      nav.style.borderBottom = "1px solid rgba(0, 212, 255, 0.2)";
    }

    // Parallax effect for floating icons
    const floatingIcons = document.querySelectorAll(".floating-icon");
    floatingIcons.forEach((icon, index) => {
      const speed = 0.5 + index * 0.2;
      const yPos = -(scrolled * speed);
      icon.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${
        scrolled * 0.1
      }deg)`;
    });
  }, 16)
);

// Reveal animations for elements on scroll
const revealElements = document.querySelectorAll(
  ".skill-card, .future-card, .goal-item, .achievement-item, .cert-item"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
);

revealElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  revealObserver.observe(element);
});

// Enhanced button interactions
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    if (
      this.getAttribute("href") &&
      this.getAttribute("href").startsWith("#")
    ) {
      return; // Let smooth scroll handle it
    }

    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Enhanced CTA button scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offsetTop = target.offsetTop - 70;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Utility Functions
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance optimizations
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Add notification and ripple styles
const dynamicStyles = document.createElement("style");
dynamicStyles.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.1);
    }
    
    .notification-message {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid #00d4ff !important;
        outline-offset: 2px;
    }
    
    body:not(.keyboard-navigation) *:focus {
        outline: none;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #00d4ff, #1fb8cd);
        border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #00ff88, #00d4ff);
    }
`;
document.head.appendChild(dynamicStyles);

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set initial theme
  document.body.setAttribute("data-color-scheme", "dark");

  // Initialize components
  createSkillsRadarChart();
  initializeProjects();
  lazyLoadImages();

  // Set initial navigation state
  const homeLink = document.querySelector('.nav-link[href="#home"]');
  if (homeLink) {
    homeLink.classList.add("active");
  }

  // Keyboard navigation handling
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      document.body.classList.add("keyboard-navigation");
    }
  });

  document.addEventListener("mousedown", () => {
    document.body.classList.remove("keyboard-navigation");
  });

  // Easter egg: Konami code
  let konamiCode = "";
  const konami = "38,38,40,40,37,39,37,39,66,65";

  document.addEventListener("keydown", (e) => {
    konamiCode += e.keyCode + ",";
    if (konamiCode.indexOf(konami) >= 0) {
      showNotification(
        "🎮 Cyber Defense Systems Activated! Welcome, Elite Hacker!",
        "success"
      );
      document.body.style.filter = "hue-rotate(180deg)";
      setTimeout(() => {
        document.body.style.filter = "none";
      }, 3000);
      konamiCode = "";
    }
    if (konamiCode.length > konami.length * 2) {
      konamiCode = konamiCode.slice(-konami.length);
    }
  });
});

// Service Worker Registration (for offline functionality)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

// Export for potential module use
window.CyberPortfolio = {
  showNotification,
  toggleTheme,
  MatrixRain,
};
