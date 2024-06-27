const olho = document.getElementById('olho');

const tooltipTriggerList = document.querySelectorAll('[data-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
function alteraolho(){
    if (olho.src.includes('img/olhoaberto.svg')){
        olho.src = "img/olhofechado.svg";
    }else{
        olho.src = 'img/olhoaberto.svg'
    }
}

