btn.onclick = function (event) {
    event.preventDefault();
    let digito = Number(dia.value.substr(-1));

    if(digito > 0 && digito < 3){
        nome.innerHTML = "Desenvolvedor(a) ";
    } else if(digito > 2 && digito < 6){
        nome.innerHTML = "Programador(a) ";
    } else if(digito > 5 && digito < 9){
        nome.innerHTML = "Estagiário(a) ";
    } else{
        nome.innerHTML = "Senior(a) ";
    }

    switch (Number(mes.value)) {

        case 1:
            nome.innerHTML += "bugado(a)";
            break;
        case 2:
            nome.innerHTML += "do CTRL C, CTRL V";
            break;
        case 3:
            nome.innerHTML += "das gambiarras";
            break;
        case 4:
            nome.innerHTML += "que culpa o cache";
            break;
        case 5:
            nome.innerHTML += "que esquece o que faz";
            break;
        case 6:
            nome.innerHTML += "do git vazio";
            break;
        case 7:
            nome.innerHTML += "das try/catch vazia";
            break;
        case 8:
            nome.innerHTML += "famosinho do linkedin";
            break;
        case 9:
            nome.innerHTML += "caçador de bugs";
            break;
        case 10:
            nome.innerHTML += "do windows pirata";
            break;
        case 11:
            nome.innerHTML += "do update sem where";
            break;
        case 12:
            nome.innerHTML += "do commit bugado";
            break;
    }
}


