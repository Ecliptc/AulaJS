function calcular()
{
    let altura, base, resultado;

    //entrada
        altura = document.getElementById("altura").value;
        base = document.getElementById("base").value;
    //processamento
        resultado = (base * altura / 2);
    
    //saida
    document.getElementById("resultado").innerHTML = "<p> A area do triangulo é " + resultado + "</p>";
    
}
