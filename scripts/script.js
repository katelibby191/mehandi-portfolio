// Function to load a component
async function loadComponent(component) {
    const response = await fetch(`components/${component}.html`);
    const html = await response.text();
    document.getElementById('main-content').innerHTML = html;
  }
  
  // Function to handle navigation
  function handleNavigation() {
    const hash = window.location.hash || '#home'; // Default to home
    const component = hash.substring(1); // Remove the '#' from the hash
    loadComponent(component);
  }
  
  // Event listener for hash change
  window.addEventListener('hashchange', handleNavigation);
  
  // Initial load
  handleNavigation();