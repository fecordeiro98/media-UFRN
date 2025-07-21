const resultado = document.getElementById('resultado');

function calcular() {
    let unidade1 = parseFloat(document.getElementById('u1').value);
    let unidade2 = parseFloat(document.getElementById('u2').value);
    let unidade3 = parseFloat(document.getElementById('u3').value);
    let media = ((unidade1 + unidade2 + unidade3) / 3).toFixed(1);
    document.getElementById('media').value = media;

    if (media < 6) {
        resultado.textContent = 'Estudante reprovado por média!';
        resultado.style.color = 'red';
    } else if (unidade1 < 4 || unidade2 < 4 || unidade3 < 4) {
        resultado.textContent = 'Estudante em recuperação (uma nota abaixo de 4)!';
        resultado.style.color = 'orange';
    } else {
        resultado.textContent = 'Estudante aprovado!';
        resultado.style.color = '#164194';
    }
}