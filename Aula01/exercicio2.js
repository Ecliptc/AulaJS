function calcular()
{
    let celsius;

    numero = document.getElementById("numero").Value

    celsius = Number(numero) - Number(32) * Number(5) / Number(9);


    document.getElementById("resultado").innerHTML=
    "<p>O quadrado do número é " + quadrado +
    " e o cubo é " + cubo + "</p>"
}