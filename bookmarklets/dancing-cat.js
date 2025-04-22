if (window._dancingCatsExist) {
    // Remove all cats if they exist
    var cats = document.querySelectorAll('.dc-cat');
    for (var i = 0; i < cats.length; i++) {
        document.body.removeChild(cats[i]);
    }
    window._dancingCatsExist = false;
    alert('Dancing cats removed!');
    return;
}
window._dancingCatsExist = true;

var cat = document.createElement('img');

var catGifs = [
    'https://i.imgur.com/2jLJx.gif',
    'https://media4.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
    'https://media1.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif',
    'https://i.gifer.com/ZMLy.gif'
];

function tryLoadImage(urls, index) {
    if (index >= urls.length) {
        // If all fail, use a text backup
        cat.outerHTML = '<div class="dc-cat" style="position:fixed;bottom:20px;right:20px;background:#ff69b4;color:white;padding:20px;border-radius:10px;font-family:Arial;z-index:9999;cursor:pointer;">🐱 Dancing Cat! (Click me)</div>';
        return;
    }
    cat.src = urls[index];
    cat.onerror = function() {
        tryLoadImage(urls, index + 1);
    };
}

tryLoadImage(catGifs, 0);

cat.className = 'dc-cat';
cat.style.position = 'fixed';
cat.style.bottom = '20px';
cat.style.right = '20px';
cat.style.width = '150px';
cat.style.zIndex = '2147483647'; // Maximum z-index
cat.style.cursor = 'pointer';
cat.style.userSelect = 'none';

document.body.appendChild(cat);

cat.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var newCat = document.createElement('img');
    newCat.className = 'dc-cat';

    var randomGif = catGifs[Math.floor(Math.random() * catGifs.length)];
    newCat.src = randomGif;

    newCat.style.position = 'fixed';
    newCat.style.top = Math.floor(Math.random() * 70) + '%';
    newCat.style.left = Math.floor(Math.random() * 70) + '%';
    newCat.style.width = (100 + Math.random() * 100) + 'px';
    newCat.style.zIndex = '2147483647';
    newCat.style.cursor = 'pointer';

    newCat.addEventListener('click', arguments.callee);

    document.body.appendChild(newCat);
});

alert('Dancing cat added! Click it to add more cats. Run the bookmarklet again to remove all cats.');