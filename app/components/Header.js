async function Header() {
  // google fonts requires this in the head
  const preconnect = document.createElement('link');
  preconnect.rel = 'preconnect'
  preconnect.href = 'https://fonts.gstatic.com'
  document.head.appendChild(preconnect);

  // add google fonts to head
  const googleFonts = document.createElement('link');
  googleFonts.rel = 'stylesheet'
  googleFonts.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap'
  document.head.appendChild(googleFonts);
}

export default Header;