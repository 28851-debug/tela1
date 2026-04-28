import { useState} from 'react'
import './Usuarios.css'

export default function Usuarios(){
    return(
        <>
        <main>
        <div>
            
        <input type="text" placeholder='Nome'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Senha'/>
        <input type="text" placeholder='Confirme a Senha'/>
        <button id='entrar'>Entrar</button>
        </div>
        </main>
        </>
    )
};