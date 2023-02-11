function poCalculo(){
    let v1 = Number(document.getElementById('po').value);
    let v2 = Number(document.getElementById('expoente').value);
    let res = document.getElementById('poRes');
    
    res.innerHTML = v1**v2;


}

function poEnter(){
    document.getElementById('poCalculo').style.background = 'gray'

    
}

function poLeave(){
    document.getElementById('poCalculo').style.background = 'lightgray'

}

function poLimpar(){
    document.getElementById('po').value = ''
    document.getElementById('expoente').value = ''
    let res = document.getElementById('poRes');
    
    res.innerHTML = ''
    



}

function poLimparEnter(){
    document.getElementById('poLimpar').style.background = 'gray'

    
}

function poLimparLeave(){
    document.getElementById('poLimpar').style.background = 'lightgray'

}