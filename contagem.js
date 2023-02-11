function mclick(){
    let init = document.getElementById('init').value
    let end = document.getElementById('end').value
    let step = document.getElementById('step').value
    let res = document.getElementById('res')

    document.getElementById('res').innerHTML = ''
    if (init.length == 0 || end.length == 0 || step.length == 0) {
        window.alert('faltam informações')
    }else if (!step.length <= 0){
        res.innerHTML = ''
        var i = Number(init);
        var e = Number(end);
        var s = Number(step);
        if (e >= i) {
            for(let c = i; c <= e; c+=s) {
                res.innerHTML += `👉${c}, `
            }
        }else{
            for(let c = i; c >= e; c-=s) {
                res.innerHTML += `👉${c}, `
            }
        }
        res.innerHTML += `🚩.`
    }else{window.alert('coloque um número valido')}
}

function menter(){
    document.getElementById('button').style.background = 'gray'

    
}

function mleave(){
    document.getElementById('button').style.background = 'lightgray'

}

function limpar(){ 
    let res = document.getElementById('res');
    res.innerHTML = ''
    document.getElementById('init').value = ''
    document.getElementById('end').value = ''
    document.getElementById('step').value = ''

}

function center(){
    document.getElementById('clear').style.background = 'gray'

    
}

function cleave(){
    document.getElementById('clear').style.background = 'lightgray'

}