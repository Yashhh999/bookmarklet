if (window._memesActive) {
  var memedImages = document.querySelectorAll('img[data-original-src]');
  for (var i = 0; i < memedImages.length; i++) {
    memedImages[i].src = memedImages[i].getAttribute('data-original-src');
    memedImages[i].removeAttribute('data-original-src');
  }
  window._memesActive = false;
  alert('Restored ' + memedImages.length + ' original images!');
  return;
}

window._memesActive = true;

var memes = [
  'https://i.imgur.com/ASWUD7E.jpg',
  'https://i.imgur.com/YHCqSTk.jpg',
  'https://i.imgur.com/1keR1BT.jpg',
  'https://i.imgur.com/bMoGG0k.jpg',
  'https://i.imgur.com/Aa44Etm.jpg'
];

var images = document.getElementsByTagName('img');
var count = 0;

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  
  if (img.width < 60 || img.height < 60) continue;
  
  if (img.hasAttribute('data-original-src')) continue;
  
  if (!img.src || img.src.indexOf('data:') === 0) continue;
  
  img.setAttribute('data-original-src', img.src);
  img.src = memes[Math.floor(Math.random() * memes.length)];
  count++;
}

alert('Replaced ' + count + ' images with memes! Run the bookmarklet again to restore original images.');