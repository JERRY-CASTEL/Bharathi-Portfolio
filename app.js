function toggleNav() {
    var navUl = document.querySelector('nav ul');
    navUl.classList.toggle('nav-hidden');
  }
  

  function downloadCV() {
    // Path to the file on your local machine
    var filePath = "./Asset/Bharathi Resume.pdf"; // Update this with the actual path to your CV file
    
    // Create an anchor element
    var anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = filePath;
    anchor.download = "cv.pdf"; // The name you want the downloaded file to have
    
    // Append the anchor to the body
    document.body.appendChild(anchor);
    
    // Trigger a click event on the anchor
    anchor.click();
    
    // Remove the anchor from the body
    document.body.removeChild(anchor);
}
