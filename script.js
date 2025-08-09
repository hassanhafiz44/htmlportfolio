function toggleDarkMode() {
    const body = document.body;
    const toggle = document.querySelector('.dark-mode-toggle');
    const icon = toggle.querySelector('i');
    
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        toggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = 'fas fa-moon';
        toggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check system preference and saved preference
function initializeTheme() {
    const savedPreference = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const toggle = document.querySelector('.dark-mode-toggle');
    
    if (savedPreference === 'enabled' || (savedPreference === null && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        toggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (localStorage.getItem('darkMode') === null) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
            document.querySelector('.dark-mode-toggle').innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            document.querySelector('.dark-mode-toggle').innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }
});
