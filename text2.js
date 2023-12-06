let turn = 'x'
let title = document.querySelector('.title')
let squares = []
let lowwiner=[]
let vraw 
let braw = document.getElementById("braw")
let raw1 = document.getElementById("raw")
let val =document.getElementById('val')
let valx =document.getElementById('valx')
let valo = document.getElementById('valo')
function end(num1,num2,num3){
    document.getElementById('item'+num1).style.background = '#00ff55'
    document.getElementById('item'+num2).style.background = '#00ff55'
    document.getElementById('item'+num3).style.background = '#00ff55'
    let z = document.createElement("div")
    document.body.appendChild(z)
    z.classList.add("z1")
    let x = document.createElement("h2")
    x.classList.add("x1")
    z.appendChild(x)
    x.textContent =`${squares[num1]}  هو الفائز`
    let c = document.createElement("button")
    z.appendChild(c)
    c.classList.add("c1")
    c.textContent ="العب مره اخري"
    c.onclick = function(){
        for(o = 1 ; o < 10 ; o++){
           let ao = document.getElementById('item'+o)
           ao.innerHTML=''
           z.remove()
        }
        document.getElementById('item'+num1).style.background = '#000a277e'
        document.getElementById('item'+num2).style.background = '#000a277e'
        document.getElementById('item'+num3).style.background = '#000a277e'
        
    }
    lowwiner.push(squares[num1])
    //console.log(lowwiner.filter(q=> q=='x').length)
    //console.log(lowwiner)
    if(lowwiner.filter(q=> q=='x').length == vraw){
        c.onclick = function(){location.reload()}
        x.textContent =`${squares[num1]}  هو الي فاز بالجوله`
        c.textContent ="العب جوله تانيه"
    }
    if(lowwiner.filter(q=> q=='o').length == vraw){
        c.onclick = function(){location.reload()}
        x.textContent =`${squares[num1]}  هو الي فاز بالجوله`
        c.textContent ="العب جوله تانيه"
    }
       let vallx = lowwiner.filter(q=> q=='x').length
       let vallo = lowwiner.filter(q=> q=='o').length
       valx.innerHTML =vallx
       valo.innerHTML =vallo
}
function end2(){
    for(let u = 1 ; u<10 ; u++ ){
        document.getElementById('item' + u).style.background = '#ff0000'
    }
    let z = document.createElement("div")
    document.body.appendChild(z)
    z.classList.add("z1")
    let x = document.createElement("h2")
    x.classList.add("x1")
    z.appendChild(x)
    x.textContent ="محدش فاز يا باشا"
    let c = document.createElement("button")
    z.appendChild(c)
    c.classList.add("c1")
    c.textContent ="العب مره اخري"
    c.onclick = function(){
        for(o = 1 ; o < 10 ; o++){
            let ao = document.getElementById('item'+o)
            ao.innerHTML=''
            z.remove()
            document.getElementById('item'+o).style.background = '#000a277e'
        }
    }
}

function winner(){
    for(let i = 1 ; i<10 ; i++ ){
      squares[i] = document.getElementById('item' + i).innerHTML
    }
    if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=''){
        end(1,2,3)
    }
    else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=''){
        end(4,5,6)
    }
    else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!=''){
        end(7,8,9)
    }
    else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!=''){
        end(1,4,7)
    }
    else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!=''){
        end(2,5,8)
    }
    else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!=''){
        end(3,6,9)
    }
    else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=''){
        end(1,5,9)
    }
    else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!=''){
        end(3,5,7)
    }
    else if(squares[1]!='' && squares[2]!='' && squares[3]!='' && squares[4]!='' && squares[5]!='' && squares[6]!='' && squares[7]!='' && squares[8]!='' && squares[9]!='')
    {end2()}
}

function game(id){
    let element = document.getElementById(id)
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML ='x'
        turn = 'o'
        title.innerHTML = 'o'
    }
    else if(turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML ='o'
        turn = 'x'
        title.innerHTML = 'x'
    }
    winner()
}
function or(value1){
    let divor = document.getElementById("or")
    divor.remove()
    turn = String(value1)
}
val.style.display="none"

function raw(){
    vraw = braw.value
    raw1.remove()
    val.style.display="block"
}