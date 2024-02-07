import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='div-principal-lp'>
        <div className='menu-principal'><img src="src/assets/logo-upbet.png" alt="" /><button className='botao-cadastrar-menu'>CADASTRE-SE</button></div>
        <div className='banner-imagem-texto'>
              <div className='conteudo-banner'>
                  <p>Exclusiva para novos clientes!</p>
                  <h1>200 RODADAS GRÁTIS em bônus para jogar!</h1>
                  <p>Termos e    Condições se aplicam a essa promoção</p>
                  <div className='config-botao-banner'>
                      <img className='icone-botao-menu' src="src/assets/icone-png.png" alt="" />
                      <button className='botao-cadastrar-banner'>Cadastre-se</button>
                      <img className='icone-botao-menu' src="src/assets/icone-png.png" alt="" />
                  </div>
              </div>
              <div className='imagem-banner-direita'>
                  <img src="src/assets/imagem-banner-jogo.png" alt="" />
              </div>
        </div>
      </div>

  )
}

export default App
