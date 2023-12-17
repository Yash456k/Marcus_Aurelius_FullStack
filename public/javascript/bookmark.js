const theme = localStorage.getItem('theme')

if(theme)
document.body.classList.add(theme);

function removeClass() {
    document.body.classList.remove('theme-purp', 'bw', 'forest');
}

document.getElementById('theme-purp-button').addEventListener('click', function (event) {
    removeClass();
    document.body.classList.add('theme-purp');
    localStorage.setItem('theme', 'theme-purp');
});

document.getElementById('theme-bw-button').addEventListener('click', function (event) {
    removeClass();
    document.body.classList.add('bw');
    localStorage.setItem('theme', 'bw');
});

document.getElementById('theme-green-button').addEventListener('click', function (event) {
    removeClass();
    document.body.classList.add('forest');
    localStorage.setItem('theme', 'forest');
});

