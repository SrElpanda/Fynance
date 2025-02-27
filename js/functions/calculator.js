document.addEventListener("DOMContentLoaded", function () {
    console.log("Documento cargado correctamente.");
});
/* Funciones calculadora */
//Constantes con los datos


//Función que calcula Futuro con presente
async function calcular_FP() {
    const vp = parseFloat(document.getElementById("vp").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = vp * factor_in;
    document.getElementById("resul_FP").innerText = `Valor Futuro: $${resultado.toFixed(2)}`;
}
//Funcion que calcula Presente con futuro
async function calcular_PF() {
    const vf = parseFloat(document.getElementById("vf").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = vf / factor_in;
    document.getElementById("resul_PF").innerText = `Valor Presente: $${resultado.toFixed(2)}`;
}

/*Series uniformes*/
//Funcion que calcula Presente con anual
async function calcular_PA() {
    const a = parseFloat(document.getElementById("a").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = (a*(factor_in-1))/(i*factor_in);
    document.getElementById("resul_PA").innerText = `Valor Presente: $${resultado.toFixed(2)}`;
}
//Funcion que calcula anual con presente
async function calcular_AP() {
    const vp = parseFloat(document.getElementById("vp").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = (vp*(i*factor_in))/(factor_in-1);
    document.getElementById("resul_AP").innerText = `Valor Anual: $${resultado.toFixed(2)}`;
}
//Funcion que calcula futuro con anual
async function calcular_FA() {
    const a = parseFloat(document.getElementById("a").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = (a*(factor_in-1))/i;
    document.getElementById("resul_FA").innerText = `Valor Futuro: $${resultado.toFixed(2)}`;
}
//Funcion que calcula anual con futuro
async function calcular_AF() {
    const vf = parseFloat(document.getElementById("vf").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = (vf*i)/(factor_in-1);
    document.getElementById("resul_AF").innerText = `Valor Anual: $${resultado.toFixed(2)}`;
}

/*Series gradientes Aritmético */
//Funcion que calcula presente con G
async function calcular_PG() {
    const g = parseFloat(document.getElementById("g").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = (g/i*i)*((factor_in-1-(i*n))/factor_in);
    document.getElementById("resul_PG").innerText = `Valor Presente: $${resultado.toFixed(2)}`;
}
//Funcion que calcula G con presente
async function calcular_GP() {
    const vp = parseFloat(document.getElementById("vp").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = vp*i*i*((factor_in)/(factor_in-1-(i*n)));
    document.getElementById("resul_GP").innerText = `Valor Gradiente: $${resultado.toFixed(2)}`;
}
//Funcion que calcula futuro con G
async function calcular_FG() {
    const g = parseFloat(document.getElementById("g").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = g*(1/i)*(((factor_in-1)/i)-n);
    document.getElementById("resul_FG").innerText = `Valor Futuro: $${resultado.toFixed(2)}`;
}
//Funcion que calcula G con futuro
async function calcular_GF() {
    const vf = parseFloat(document.getElementById("vf").value);
    const i = parseFloat(document.getElementById("i").value);
    const n = parseInt(document.getElementById("n").value);
    const factor_in = Math.pow(1 + i, n);
    let resultado = ((vf*i*i)/(factor_in-1-(i*n)));
    document.getElementById("resul_GF").innerText = `Valor Gradiente: $${resultado.toFixed(2)}`;
}
//Funciones del simulador de CDT
//Principal
async function CDT() {
    const vi = parseFloat(document.getElementById("vi").value);
    const n = parseFloat(document.getElementById("n").value);
    //pybank
    const resul_pybank = await pybank(n, vi);
    if (isNaN(resul_pybank)) {
        document.getElementById("resul_pybank").innerText = "--";
    } else {
        document.getElementById("resul_pybank").innerText = `$${resul_pybank.toFixed(2)}`;
    }
    //Colte financiera
    const resul_colte = await colte(n, vi);
    if (isNaN(resul_colte)) {
        document.getElementById("resul_colte").innerText = "--";
    } else {
        document.getElementById("resul_colte").innerText = `$${resul_colte.toFixed(2)}`;
    }
    //Santander
    const resul_santa = await santa(n, vi);
    if (isNaN(resul_santa)) {
        document.getElementById("resul_santa").innerText = "--";
    } else {
        document.getElementById("resul_santa").innerText = `$${resul_santa.toFixed(2)}`;
    }
    //Ban100
    const resul_ban = await ban(n, vi);
    if (isNaN(resul_ban)) {
        document.getElementById("resul_ban").innerText = "--";
    } else {
        document.getElementById("resul_ban").innerText = `$${resul_ban.toFixed(2)}`;
    }
    //Davivienda
    const resul_dav = await dav(n, vi);
    if (isNaN(resul_dav)) {
        document.getElementById("resul_dav").innerText = "--";
    } else {
        document.getElementById("resul_dav").innerText = `$${resul_dav.toFixed(2)}`;
    }
    //Bancolombia
    const resul_colombia = await colombia(n, vi);
    if (isNaN(resul_colombia)) {
        document.getElementById("resul_colombia").innerText = "--";
    } else {
        document.getElementById("resul_colombia").innerText = `$${resul_colombia.toFixed(2)}`;
    }
    //Falabella
    const resul_fala = await fala(n, vi);
    if (isNaN(resul_fala)) {
        document.getElementById("resul_fala").innerText = "--";
    } else {
        document.getElementById("resul_fala").innerText = `$${resul_fala.toFixed(2)}`;
    }
    //BBVA
    const resul_bbva = await bbva(n, vi);
    if (isNaN(resul_bbva)) {
        document.getElementById("resul_bbva").innerText = "--";
    } else {
        document.getElementById("resul_bbva").innerText = `$${resul_bbva.toFixed(2)}`;
    }
    //AV Villas
    const resul_av = await av(n, vi);
    if (isNaN(resul_av)) {
        document.getElementById("resul_av").innerText = "--";
    } else {
        document.getElementById("resul_av").innerText = `$${resul_av.toFixed(2)}`;
    }
    //Caja Social
    const resul_cs = await cs(n, vi);
    if (isNaN(resul_cs)) {
        document.getElementById("resul_cs").innerText = "--";
    } else {
        document.getElementById("resul_cs").innerText = `$${resul_cs.toFixed(2)}`;
    }


}
//Especifica para cada banco
//Pybank
async function pybank(n,vi) {
    let i;
    switch (n) {
        case 0.5:
            if (vi>=250000 && vi<=500000){
                i=0.1;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=250000 && vi<=500000){
                i=0.0925;
            }else{
                return NaN;
            }
            break;
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}
//Coltefinanciera
async function colte(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=250000 && vi<=500000){
                i=0.092;
            }else if(vi>500000){
                i=0.045;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=250000 && vi<=500000){
                i=0.094;
            }else if(vi>500000){
                i=0.096;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=250000 && vi<=500000){
                i=0.098;
            }else if(vi>500000){
                i=0.1;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=250000 && vi<=500000){
                i=0.094;
            }else if(vi>500000){
                i=0.096;
            }else{
                return NaN;
            }
            break;
        case 2:
            if (vi>=250000 && vi<=500000){
                i=0.094;
            }else if(vi>500000){
                i=0.096;
            }else{
                return NaN;
            }
            break;
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}
//Banco Santander
async function santa(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=500000){
                i=0.092;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=500000){
                i=0.1;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=500000){
                i=0.1;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=500000){
                i=0.095;
            }else{
                return NaN;
            }
            break; 
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}
//Ban100
async function ban(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=250000){
                i=0.04;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=250000){
                i=0.102;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=250000){
                i=0.104;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=250000){
                i=0.103;
            }else{
                return NaN;
            }
            break; 
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}
//Davivienda
async function dav(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=500000){
                i=0.085;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=500000){
                i=0.087;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=500000){
                i=0.0875;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=500000){
                i=0.088;
            }else{
                return NaN;
            }
            break;
        case 2:
            if (vi>=500000){
                i=0.0885;
            }else{
                return NaN;
            }
            break;
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}
//Bancolombia
async function colombia(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=1000000){
                i=0.0725;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=1000000){
                i=0.079;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=1000000){
                i=0.078;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=1000000){
                i=0.0765;
            }else{
                return NaN;
            }
            break;
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}

//Falabella
async function fala(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=500000){
                i=0.0883;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=500000){
                i=0.0888;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=500000){
                i=0.0869;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=500000){
                i=0.0814;
            }else{
                return NaN;
            }
            break;
        case 2:
            if (vi>=500000){
                i=0.0805;
            }else{
                return NaN;
            }
            break;
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}
//BBVA
async function bbva(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=500000){
                i=0.0872;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=500000){
                i=0.0887;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=500000){
                i=0.0862;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=500000){
                i=0.0833;
            }else{
                return NaN;
            }
            break;
        case 2:
            if (vi>=500000){
                i=0.0787;
            }else{
                return NaN;
            }
            break;
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}
//AV Villas
async function av(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=500000){
                i=0.083;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=500000){
                i=0.082;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=500000){
                i=0.0765;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=500000){
                i=0.077;
            }else{
                return NaN;
            }
            break;
        case 2:
            if (vi>=500000){
                i=0.072;
            }else{
                return NaN;
            }
            break;
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}
//Caja Social
async function cs(n,vi) {
    let i;
    switch (n) {
        case 0.25:
            if (vi>=500000){
                i=0.081;
            }else{
                return NaN;
            }
            break;
        case 0.5:
            if (vi>=500000){
                i=0.08;
            }else{
                return NaN;
            }
            break;
        case 1:
            if (vi>=500000){
                i=0.073;
            }else{
                return NaN;
            }
            break;
        case 1.5:
            if (vi>=500000){
                i=0.0715;
            }else{
                return NaN;
            }
            break;
        default:
            return NaN;
    }
    return vi * Math.pow(1 + i, n);
}