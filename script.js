function calcularValorFuturo(){
    const quantiaInicial = parseFloat(document.getElementById('quantiaInicial').value);

    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value / 100);

    const anos = parseFloat(document.getElementById('anos').value);

    const periodo = document.getElementById('periodo').value;

    //---------------------------------------

    if(isNaN (quantiaInicial) || isNaN(taxaJuros) || isNaN(anos)){
        document.getElementById('resultado').innerText = `Por favor, insira valores válidos`;
        return;
    }

    const totalMeses = periodo ===  'anual' ? anos * 12 : anos;
    const taxaMensal = taxaJuros / 12;
    const valorFuturo = quantiaInicial * Math.pow((1 + taxaMensal), totalMeses);
    document.getElementById('resultado').innerText = `Valor Futuro: R$${valorFuturo.toFixed(2)}`;

}

document.getElementById('periodo').addEventListener('change', function(){
    const periodo = document.getElementById('periodo').value;
    const anosInput =document.getElementById('anos');
    const mesesInput = document.getElementById('meses');

    if(periodo === 'anual'){
        anosInput.required = true;
        mesesInput.required = false;
    }else if (periodo === 'mensal'){
        anosInput.required = false;
        mesesInput.required = true;
    }
});