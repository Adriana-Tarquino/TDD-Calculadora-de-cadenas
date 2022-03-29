function calcularCadena(delimitador,cadena)
{
    var suma = 0;
   // var digitos;
    var cont =0;
    var digitos = "";
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
                cont ++;
            }
            else
            {
                cont = 0;
            }
            if(cont >= 2)
            {
                digitos = digitos.concat(cadena[i-1] + cadena[i]);
                suma = suma + parseInt(digitos);
                suma = suma - parseInt(digitos[0]); 
            }
            
        }    
        return  suma;
    }
}

export default calcularCadena;
//refactoring
