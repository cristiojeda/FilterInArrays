//El método Filter usado en un Array
            //Elementos del Array de datos tiendaTech
const tiendaTech = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500, cod:'jad434' },//Arreglo de Objetos
    { nombre: 'Televisión', precio: 100, cod:'jf485' },
    { nombre: 'Tablet', precio: 200, cod:'ndd74' },
    { nombre: 'Audifonos', precio: 300, cod:'jdf034' },
    { nombre: 'Teclado', precio: 400, cod:'jay565' },
    { nombre: 'Celular', precio: 700, cod:'had587' },
    { nombre: 'Auricular Inalambrico', precio: 200,cod:'trd354' },
    { nombre: 'Mouse', precio: 150 ,cod:'tre134'},
    { nombre: 'JBL Blip2', precio: 670, cod:'asd643' },
    { nombre: 'JBL Blip2', precio: 670, cod:'hgf876' },
];

let resultado;
// Filter filtra un resultado a tráves de una condición
// resultado = tiendaTech.filter( producto => producto.precio > 400); //Filtrar los elementos mayores a la cantidad de 400 del elemento precio

// resultado = tiendaTech.filter( producto => producto.precio < 600); //Filtrar los elementos menores a la cantidad de 600 del elemento precio

resultado = tiendaTech.filter( producto => producto.cod === 'asd643'); //Filtrar elemento que posea el código asd643

console.log(resultado);

//Dato General: Para visualizar las pruebas descomentar CTRL + K + U (Visual Studio Code)