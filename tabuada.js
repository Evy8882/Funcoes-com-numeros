function calcular(){
    let numero = (document.getElementById('numero'));
    let nmr = Number(numero.value);
    for(let i = 1; i <= 20; i+=1){
        let n = document.getElementById('valor'+i)
        n.innerHTML = `${i} x ${nmr} = ${i*nmr} <br>`
        //window.alert(n)
    }
}

function TMenter(){
    document.getElementById('calcular').style.background = 'gray'

    
}

function TMleave(){
    document.getElementById('calcular').style.background = 'lightgray'

}
function Tlimpar(){
    for(let i = 1; i <= 20; i+=1){
        let n = document.getElementById('valor'+i)
        n.innerHTML = ''
    }
    document.getElementById('numero').value = ''
}

function LMenter(){
    document.getElementById('Tclear').style.background = 'gray'

    
}

function LMleave(){
    document.getElementById('Tclear').style.background = 'lightgray'

}