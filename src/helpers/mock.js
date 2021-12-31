const productos = [
    { id: '1', nombre: 'Anaia', img: '../assets/Anaia.jpeg', precio: 1200, descripcion: 'Suavignion Blank', stock: 2},
    { id: '2', nombre: 'Despeinado', img: '../assets/Despeinado.jpeg', precio: 1000, descripcion: 'Blend de blancos', stock: 5},
    { id: '3', nombre: 'Jean Rivier', img: '../assets/JeanRivier.jpeg', precio: 1100, descripcion: 'Tocai', stock: 5},
    { id: '4', nombre: 'Quebrada', img: '../assets/Quebrada.jpeg', precio: 1300, descripcion: 'Torrontes Dulce', stock: 5},
    { id: '5', nombre: 'Tordos', img: '../assets/Tordos.jpeg', precio: 1500, descripcion: 'Vino Espumante', stock: 5},

]

export const getFetch = new Promise((resolve, reject) => {
    
    if(true){
        setTimeout(() => {
            resolve(productos)
        }, 1500)
    }else{
        reject('err')
    }
})