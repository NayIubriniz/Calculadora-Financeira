function calcularValorFuturo(){
    const quantiaInicial = parseFloat(document.getElementById('quantiaInicial').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value / 100);
    const anos = parseFloat(document.getElementById('anos').value);

    if(isNaN (quantiaInicial) || isNaN(taxaJuros) || isNaN(anos)){
        document.getElementById('resultado').innerText = `Por favor, insira valores válidos`;
        return;
    }

    const valorFuturo = quantiaInicial * Math.pow((1 + taxaJuros), anos);
    document.getElementById('resultado').innerText = `Valor Futuro: R$${valorFuturo.toFixed(2)}`;

}