/* Minimal client-side router for 3 pages */
(function () {
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var pages = {
    home: document.getElementById('page-home'),
    televisions: document.getElementById('page-televisions'),
    about: document.getElementById('page-about')
  };

  function setActive(route) {
    Object.keys(pages).forEach(function (key) {
      var page = pages[key];
      var isMatch = key === route;
      page.hidden = !isMatch;
      page.classList.toggle('is-visible', isMatch);
    });

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute('data-route') === route;
      link.classList.toggle('is-active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }

  function navigate(route) {
    if (!pages[route]) {
      route = 'home';
    }
    if (location.hash.replace('#', '') !== route) {
      location.hash = route;
    }
    setActive(route);
  }

  function onHashChange() {
    var route = location.hash.replace('#', '') || 'home';
    navigate(route);
  }

  // Bind clicks
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var route = link.getAttribute('data-route');
      navigate(route);
    });
  });

  var brand = document.getElementById('brandHome');
  if (brand) {
    function goHome() { navigate('home'); }
    brand.addEventListener('click', goHome);
    brand.addEventListener('keypress', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goHome();
      }
    });
  }

  // Footer year
  var yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear().toString();
  }

  // Initialize route
  window.addEventListener('hashchange', onHashChange);
  onHashChange();
})();


