import napolitana from "../assets/pizzaNAP.jpeg"
import española from "../assets/piizaESP.jpeg"
import peperoni from "../assets/pizzaPEP.jpeg"

import Button from 'react-bootstrap/Button';
import { useState } from "react";


function Carrito(){

  const [productos,setProductos] = useState([
    {
      id: 1,
      imagen: napolitana,
      tipo: "Pizza Napolitana",
      ingredientes: "mozarella, tomates, jamón, orégano",
      precio: 5950,
      cantidad:1,
    },
    {
      
      id: 2,
      imagen: española,
      tipo: "Pizza Española",
      ingredientes: "mozarella, gorgonzola, parmesano, provolone",
      precio: 6950,
      cantidad: 1,
    },
    {
      id: 3,
      imagen: peperoni,
      tipo: "Pizza Pepperoni",
      ingredientes: "mozarella, pepperoni, orégano",
      precio: 6950,
      cantidad: 1,
    }
  ]) 

//FUNCION PARA SUMAR O RESTAR LA CANTIDAD DEL PRODUCTO EN EL CARRITO
const modificarCantidad = function(operacion,id){

    console.log("Vamnos hacer una operacion " + operacion + " que tiene el id: " + id)

//BUSCAMOS EL PRODUCTO CON EL ID SELECCIONADO
let productoAmodificar = productos.find(p => p.id === id)
console.log("producto a modificar: ", productoAmodificar)

if(operacion === "suma"){
    productoAmodificar.cantidad = productoAmodificar.cantidad + 1

}
if(operacion === "resta"){
    productoAmodificar.cantidad = productoAmodificar.cantidad - 1
}
console.log(productoAmodificar.cantidad)

let productosActualizados = productos.map((p) =>(p.id === id ? productoAmodificar : p))


setProductos(productosActualizados)
}

//SE RECORRE TODO EL NUEVO ARREGLO Y SE SUMA LOS PRODUCTOS POR LAS CANTIDADES DE CADA PRODUCTO. 

let total = 0;
for (let producto of productos){
    total = total + (producto.precio*producto.cantidad)
}


return(
    <>
    <div className="container">
        <h1>CARRITO DE COMPRAS</h1>
        <div className="row">
            <div className="col">
                <ul>
                    {productos.map((p,i)=>
                    <li key={i} className="border rounded mt-2 p-3" style={{listStyle: "none"}}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img style={{width:"50px"}} src={p.imagen} alt="" /> - {p.tipo} - {p.ingredientes}
                            </div>
                            <div>
                                <button className="btn btn-sm btn-secondary" 
                                onClick={()=>modificarCantidad("suma",p.id)}>+</button> 
                                {p.cantidad}
                                
                                <button className="btn btn-sm btn-secondary ms-1" 
                                onClick={()=>modificarCantidad("resta",p.id)}>-</button>
                                <p>${(p.precio * p.cantidad).toLocaleString()}</p>
                            </div>
                        </div>
                        
                        
                        
                    </li>)}
                </ul>
                <div>
                    <h2>TOTAL:$ {total.toLocaleString()}</h2>
                </div>
                
                <div>
                    <button className="btn btn-sm btn-secondary">Pagar</button>
                </div>
            </div>
        </div>
    </div>
    
    </>
)

}

export default Carrito