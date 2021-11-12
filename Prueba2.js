let x = 4, y = 8, operador = "/";
function functionFactory(x, y, operator) {
    if (!isNaN(x) && !isNaN(y)) {
        if (operador !== "" || operador !== null) {
            switch (operador) {
                case '*': return x * y;
                    break;
                case "/": return x / y;
                    break;
                case "+": return x + y;
                    break;
                case "-": return x - y;
                    break;
                default: return "Operador no valido";
                    break;
            }
        } else {
            return "Operador no valido";
        }
    } else {
        return "Valores no validos";
    }
}

console.log(functionFactory(x, y, operador));
