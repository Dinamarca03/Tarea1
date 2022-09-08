var nom = document.getElementById("nombreid")
var ape = document.getElementById("apellido")
var num1 = document.getElementById("numero1")
var num2 = document.getElementById("numero2")
var con1 = document.getElementById("contraseña1")
var con2 = document.getElementById("contraseña2")
var op1 = document.getElementById("opcion1")
var op2 = document.getElementById("opcion2")
var op3 = document.getElementById("opcion3")
var op4 = document.getElementById("opcion4")
var op5 = document.getElementById("opcion5")
var op6 = document.getElementById("opcion6")
 var cont = 0;

document.write(nom, "muestra el nombre <br>" )
document.write(ape, "muestra el apellido <br>")
document.write(num1, "muestra el numero 1<br>")
document.write(num2, "muestra el numero 2")



function comparar()
{
    if (num1 < num2)
    {
        document.write ("El el primer numero ingresado debe ser menor que el segundo ");
    }
}
function contraseña()
{
    if (con1==con2)
    {

    }
    else{
        document.write("La contraseña ingresada no es correcta");
    }
}


for (var i = 0; i < checkboxes.length; i++) 
{
 if (checkboxes[i].checked) {
  cont = cont + 1;
 }
}
if( cont < 3)
{
    document.write("Faltan seleccionar opciones");
}else{
    document.write("Se encuentran ",cont," Seleccionados");
}



