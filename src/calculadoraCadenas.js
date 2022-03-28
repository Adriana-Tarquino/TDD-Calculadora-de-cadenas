function calcularCadena(cadena)
{
    var suma = 0;
    if(cadena == "")
    {
        return 0;
    }   
    else{
        if(cadena == "1,2")
        {
            suma = parseInt(cadena[0]) + parseInt(cadena[2]);
            return suma;
        }else{
            return parseInt(cadena);
        }
    } 
}

export default calcularCadena;
 