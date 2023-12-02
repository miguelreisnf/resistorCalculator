export default class Util {
    valorPraCor(val) {
        var cor1;
        var cor2;
        var cor3;

        if (val)
        if (val[0] == "") {

        }


    }

    corPravalor(cor1, cor2, cor3) {
        res = "";

        switch (cor1) {
            case "preto":
                res += 0;
                break;
            
            case "marrom":
                res += 1;
                break;

            case "vermelho":
                res += 2;
                break;

            case "laranja":
                res += 3;
                break;

            case "amarelo":
                res += 4;
                break;

            case "verde":
                res += 5;
                break;

            case "azul":
                res += 6;
                break;

            case "violeta":
                res += 7;
                break;

            case "cinza":
                res += 8;
                break;

            case "branco":
                res += 9;
                break;
            
            default:
                break;
        }

        switch (cor2) {
            case "preto":
                res += 0;
                break;
            
            case "marrom":
                res += 1;
                break;

            case "vermelho":
                res += 2;
                break;

            case "laranja":
                res += 3;
                break;

            case "amarelo":
                res += 4;
                break;

            case "verde":
                res += 5;
                break;

            case "azul":
                res += 6;
                break;

            case "violeta":
                res += 7;
                break;

            case "cinza":
                res += 8;
                break;

            case "branco":
                res += 9;
                break;
            
            default:
                break;
        }

        switch (cor3) {
            case "preto":
                //nada acontece
                res += "";
                break;
            
            case "marrom":
                res += 0;
                break;

            case "vermelho":
                res += "00";
                break;

            case "laranja":
                res += "000";
                break;

            case "amarelo":
                res += "0000";
                break;

            case "verde":
                res += "00000";
                break;

            case "azul":
                res += "000000";
                break;

            case "violeta":
                res += "0000000";
                break;

            case "cinza":
                res += "00000000";
                break;

            case "branco":
                res += "000000000";
                break;
            
            default:
                break;
        }
    }
}