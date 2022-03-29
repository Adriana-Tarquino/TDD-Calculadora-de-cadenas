function calcularCadena(delimitador,cadena)
{
    var suma = 0;
   // var digitos;
    if(cadena == "")
    {
        return 0;
    }   
    else
    {
        for(var i = 0; i < cadena.length ;i++)
        {
            if(isNaN(cadena[i]) == false && cadena[i] != delimitador)
            {
                suma = suma + parseInt(cadena[i]);
            }
        }    
        return  suma;
    }
}

export default calcularCadena;
//refactoring
