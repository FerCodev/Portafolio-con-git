let anchura = screen.width
let ancho = window.innerWidth

const cuadrado = document.querySelector('.cuadrado')

let evaluar = () =>{
    if(ancho < 1024){
            console.log(cuadrado)
        cuadrado.classList.add("blue")
    }if(ancho === 1000 ){
        cuadrado.classList.remove("blue")
        cuadrado.classList.add('negro')
    }
    else{
        console.log(anchura)
    }
}
evaluar()
