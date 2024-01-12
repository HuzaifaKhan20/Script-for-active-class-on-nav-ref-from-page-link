  const currentUrl = window.location.href;
  const lastSegment = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
  const anchors = document.querySelectorAll('.navbar-nav li a, .footer-nav li a');
  anchors.forEach(anchor => {
    if (anchor.innerText.toLowerCase().replace(/ /g, '-') === lastSegment) {
      anchor.classList.add('active');
    }   
    
  });
