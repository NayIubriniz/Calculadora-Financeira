document.getElementById('calculate').addEventListener('click', function(){
    const quantiaInicial = document.getElementById('quantiaInicial').value
    const taxaJuros = (document.getElementById('taxaJuros').value / 100)
    const time = document.getElementById('time').value
   

    const total = quantiaInicial * (1 + taxaJuros)**time;
    
    document.getElementById('total').innerHTML = ('R$ ' + total.toFixed(2).replace('.',','));
});