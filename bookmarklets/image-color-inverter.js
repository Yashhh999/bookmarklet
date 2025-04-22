const images = document.querySelectorAll('img');

const style = document.createElement('style');
style.id = 'bookmarklet-image-inverter';

function toggleImageInversion() {
  const existingStyle = document.getElementById('bookmarklet-image-inverter');
  
  if (existingStyle) {
    existingStyle.parentNode.removeChild(existingStyle);
    
    createToast('Image inversion turned OFF');
  } else {
    style.textContent = `
      img {
        filter: invert(100%) !important;
        transition: filter 0.3s ease !important;
      }
    `;
    document.head.appendChild(style);
    
    createToast('Image inversion turned ON');
  }
}

function createToast(message) {
  const existingToast = document.getElementById('bookmarklet-toast');
  if (existingToast) {
    document.body.removeChild(existingToast);
  }
  
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
  
  setTimeout(() => {
    if (document.body.contains(toast)) {
      document.body.removeChild(toast);
    }
  }, 3000);
}

toggleImageInversion();