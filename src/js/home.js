var cont = 1;

document.getElementById('radio1').checked = true;

setInterval(() => {
    proxImg();
}, 5000);

function proxImg() {
    cont++;
    if (cont > 2) {
        cont = 1;
    }
    document.getElementById('radio' + cont).checked = true;
}
