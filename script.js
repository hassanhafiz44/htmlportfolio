function toggleDarkMode() {
    const body = document.body;
    const toggle = document.querySelector('.dark-mode-toggle');
    const icon = toggle.querySelector('i');
    const toggleText = toggle.querySelector('.toggle-text');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        if (toggleText) toggleText.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = 'fas fa-moon';
        if (toggleText) toggleText.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Check system preference and saved preference
function initializeTheme() {
    const savedPreference = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const toggle = document.querySelector('.dark-mode-toggle');
    const toggleText = toggle.querySelector('.toggle-text');
    
    if (savedPreference === 'enabled' || (savedPreference === null && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        toggle.querySelector('i').className = 'fas fa-sun';
        if (toggleText) toggleText.textContent = 'Light Mode';
    } else {
        toggle.querySelector('i').className = 'fas fa-moon';
        if (toggleText) toggleText.textContent = 'Dark Mode';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    if (!nav.contains(event.target) && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
        closeMobileMenu();
    }
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) {
        const toggle = document.querySelector('.dark-mode-toggle');
        const toggleText = toggle.querySelector('.toggle-text');
        
        if (e.matches) {
            document.body.classList.add('dark-mode');
            toggle.querySelector('i').className = 'fas fa-sun';
            if (toggleText) toggleText.textContent = 'Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            toggle.querySelector('i').className = 'fas fa-moon';
            if (toggleText) toggleText.textContent = 'Dark Mode';
        }
    }
});
