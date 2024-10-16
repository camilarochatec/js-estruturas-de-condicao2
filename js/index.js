const btn = document.getElementById('btn');
const mes = document.getElementById('mes');
const display = document.getElementById('display');  // O elemento onde vamos mostrar o resultado


btn.onclick = function(event){
    event.preventDefault();
    switch(Number(mes.value)){
        
        case 1:
            nomeMes("bugado(a);");
        break;
        case 2:
            nomeMes("do CTRL C, CTRL V;");
        break;
        case 3:
            nomeMes("das gambiarras;");
        break;
        case 4:
            nomeMes("que culpa o cache;");
        break;
        case 5:
            nomeMes("que esquece o que faz;");
        break;
        case 6:
            nomeMes("do git vazio;");
        break;
        case 7:
            nomeMes("das try/catch vazia;");
        break;
        case 8:
            nomeMes("famosinho do linkedin;");
        break;
        case 9:
            nomeMes("caçador de bugs;");
        break;
        case 10:
            nomeMes("do windows pirata;");
        break;
        case 11:
            nomeMes("do update sem where;");
        break;
        case 12:
            nomeMes("do commit bugado;");
        break;
    }

    let nomeMes= " ";

    let nomeDia= " ";

    if (dia === 1 || dia === 2) {
        nomeDia = 'Desenvolvedor(a)';
    } else if (dia === 3 || dia === 4 || dia === 5) {
        nomeDia = 'Programador(a)';
    } else if (dia === 6 || dia === 7 || dia === 8) {
        nomeDia = 'Estagiário(a)';
    } else if (dia === 9 || dia === 10) {
        nomeDia = 'Senior(a)';
    } else if (dia === 11 || dia === 12 || dia === 13) {
        nomeDia = 'Desenvolvedor(a)';
    } else if (dia === 14 || dia === 15 || dia === 16) {
        nomeDia = 'Programador(a)';
    } else if (dia === 17 || dia === 18 || dia === 19) {
        nomeDia = 'Estagiário(a)';
    } else if (dia === 20 || dia === 21) {
        nomeDia = 'Senior(a)';
    } else if (dia === 22 || dia === 23 || dia === 24) {
        nomeDia = 'Desenvolvedor(a)';
    } else if (dia === 25 || dia === 26 || dia === 27) {
        nomeDia = 'Programador(a)';
    } else if (dia === 28 || dia === 29 || dia === 30) {
        nomeDia = 'Estagiário(a)';
    } else if (dia === 31) {
        nomeDia = 'Senior(a)';
    }
    //display.innerHTML =`Seu nome é ${nomeDia}. ${nomeMes}`;
}
function nomeMes(texto) {
    display.innerHTML =`Seu nome é ${nomeDia}. ${nomeMes}`;  // Insere o texto dentro do elemento "display"
}


