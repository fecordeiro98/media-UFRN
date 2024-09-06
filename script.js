function calcular() {
    let unidade1 = parseFloat(document.getElementById('u1').value);
    let unidade2 = parseFloat(document.getElementById('u2').value);
    let unidade3 = parseFloat(document.getElementById('u3').value);
    let media = (unidade1 + unidade2 + unidade3) / 3;
    document.getElementById('media').value = media.toFixed(1);
}