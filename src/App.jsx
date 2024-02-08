import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='div-principal-lp'>
        <div className='menu-principal'><img src="/logo-upbet.png" alt="" /><button className='botao-cadastrar-menu'>CADASTRE-SE</button></div>
        <div className='banner-imagem-texto'>
              <div className='conteudo-banner'>
                  <p>Exclusiva para novos clientes!</p>
                  <h1>200 RODADAS GRÁTIS</h1>
                  <h2>PARA JOGAR!</h2>
                  <div className='config-botao-banner'>
                      <img className='icone-botao-menu' src="/icone-png.png" alt="" />
                      <button className='botao-cadastrar-banner'>GANHAR BÔNUS</button>
                     <img className='icone-botao-menu' src="/icone-png.png" alt="" /> 
                     <p>Termos e Condições se aplicam a essa promoção</p>
                  </div>
              </div>
              <div className='imagem-banner-direita'>
                  <img src="/gates-of-olympus-mobile-img.png" alt="" />
              </div>
        </div>
      </div>

  )
}

export default App
