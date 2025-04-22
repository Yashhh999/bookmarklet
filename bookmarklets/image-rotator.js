// Image Rotator Bookmarklet
// This bookmarklet rotates all images on the webpage by 180 degrees

// Create a style element for our CSS
const style = document.createElement('style');
style.id = 'bookmarklet-image-rotator';

// Check if our rotator is already active
function toggleImageRotation() {
  const existingStyle = document.getElementById('bookmarklet-image-rotator');
  
  if (existingStyle) {
    // If style exists, remove it (toggle off)
    existingStyle.parentNode.removeChild(existingStyle);
    
    // Show toast that rotation is turned off
    createToast('Image rotation turned OFF');
  } else {
    // Apply rotation transformation to all images
    style.textContent = `
      img {
        transform: rotate(180deg) !important;
        transition: transform 0.5s ease-out !important;
      }
    `;
    document.head.appendChild(style);
    
    // Show toast that rotation is turned on
    createToast('Image rotation turned ON');
  }
}

// Function to create and show a toast notification
function createToast(message) {
  // Remove any existing toast
  const existingToast = document.getElementById('bookmarklet-toast');
  if (existingToast) {
    document.body.removeChild(existingToast);
  }
  
  // Create toast element
  const toast = document.createElement('div');
  toast.id = 'bookmarklet-toast';
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '5px';
  toast.style.zIndex = '1000000';
  document.body.appendChild(toast);
  
  // Remove toast after 3 seconds
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 3000);
}

// Toggle image rotation when the bookmarklet is activated
toggleImageRotation();