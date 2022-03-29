function calcularCadena(cadena)
{
    var suma = 0;
    if(cadena == "")
    {
        return 0;
    }   
    else
    {
        for(var i = 0; i < cadena.length ;i++)
        {
            if(isNaN(cadena[i]) == false)// && isNaN(cadena[i] == true))
            {
                suma = suma + parseInt(cadena[i]);
            }
            else{
                               
            }
        }    
        return  suma;
    }
}

export default calcularCadena;
//refactoring
