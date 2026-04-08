function calcular()
{
    let valor, taxa, tempo, resultado;

    //entrada
    valor = document.getElementById("valor").value;
    taxa = document.getElementById("taxa").value;
    tempo = document.getElementById("tempo").value;
    //processamento
    resultado = valor + ( valor *(taxa * taxa / 100) * tempo);




    //saida
    document.getElementById("resultado").innerHTML = "<p> O valor da parcela é " + resultado + "</p>";
    
}
