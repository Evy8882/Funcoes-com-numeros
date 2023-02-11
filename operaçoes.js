function opCalculo(){
    let n = document.getElementById('operacao').selectedIndex;
    let v1 = Number(document.getElementById('v1').value);
    let v2 = Number(document.getElementById('v2').value);
    let res = document.getElementById('opRes');

    switch(n){
        case 0:
            res.innerHTML = v1+v2
        break;
        case 1:
            res.innerHTML = v1-v2
        break;
        case 2:
            res.innerHTML = v1*v2
        break;
        case 3:
            res.innerHTML = v1/v2
        break;
    }

}

function opEnter(){
    document.getElementById('opCalculo').style.background = 'gray'

    
}

function opLeave(){
    document.getElementById('opCalculo').style.background = 'lightgray'

}
function opLimpar(){
    let n = document.getElementById('operacao').selectedIndex;
    document.getElementById('v1').value = ''
    document.getElementById('v2').value = ''
    let res = document.getElementById('opRes');

    res.innerHTML = ''


}

function opLimparEnter(){
    document.getElementById('opLimpar').style.background = 'gray'

    
}

function opLimparLeave(){
    document.getElementById('opLimpar').style.background = 'lightgray'

}