function calcularCadena(cadena)
{
    var suma = 0, digitos =0;
    var numero ="";
    if(cadena == "")
    {
        return 0;
    }   
    else{
        for(var i = 0; i < cadena.length;i++)
        {
            if(isNaN(cadena[i]) == false)
            {
                suma = parseInt(cadena[i]) + suma;
            }
        }
        return suma;
        } 
}

export default calcularCadena;
//refactoring
