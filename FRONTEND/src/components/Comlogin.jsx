import Button from 'react-bootstrap/Button';
import { useState } from "react"

function comLogin(){

const [email, setEmail] = useState("")

const cambiandoelEmail = function(evento){
    setEmail(evento)
}

const [password, setPassword] = useState("")

//FUNSION PARA EL FORMULARIO CUANDO PRESIONEMOS EL BOTON

const handSubmit = (e)=>{
    e.preventDefault()
    
    if(password == "" || email == ""){
        alert("Debes completar todos los campos")
        return
    }

    if(password.length < 6){

        alert("La contraseña tiene que tener al menos 6 caracteres")
        return
    }

    alert("Sesión iniciada correctamente")
    setEmail("")
    setPassword("")

    
    } 


    return(
        <>
            <section className="login-section">
                 <form action="" className="Login" onSubmit={(e)=>{handSubmit(e)}} >
                <h2>Login</h2>
                <label htmlFor="Email">Email</label>
                <br />
                <input type="Email" placeholder="ejemplo@ejemplo.com" value={email} onChange={(evento)=>{cambiandoelEmail(evento.target.value)}} />
                <br />
                <label htmlFor="Contraseña">Password</label>
                <br />
                <input type="password" placeholder="**********" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <br />
                <Button variant="dark" type="submit">Iniciar Sesión</Button>
            </form>
            </section>
           
        </>
    )

}

export default comLogin