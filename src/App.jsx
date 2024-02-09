import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='div-principal-lp'>
        <div className='menu-principal'><img src="/logo-principal-upbet.png" alt="" /><button className='botao-cadastrar-menu'>CADASTRE-SE</button></div>
        <div className='banner-imagem-texto'>
              <div className='conteudo-banner'>
                  <div className='conteudo-topo'>
                  <p>Exclusiva para novos clientes!</p>
                  <h1>200 RODADAS GRÁTIS</h1>
                  </div>
                  <div className='config-botao-banner'>
                  <h2>PARA JOGAR!</h2>
                      <img className='icone-botao-menu' src="/icone-png.png" alt="" />
                      <button className='botao-cadastrar-banner'>GANHAR BÔNUS</button>
                     <img className='icone-botao-menu' src="/icone-png.png" alt="" /> 
                     <p>Termos e Condições se aplicam a essa promoção</p>
                  </div>
              </div>
              <div className='imagem-banner-direita'>
                  <img src="/fundo-gates-2.png" alt="" />
              </div>
        </div>


        <div className='div-segunda-dobra'>
            <h2>Promoções</h2>
            <h3>BÔnus de 1° Primeiro Depósito</h3>
            <div className='card-list'>
                <div className='card-one'>
                    <h4>5 RODADAS GRÁTIS</h4>
                    <p>DEPOSITE R$ 5,00</p>
                </div>            
                <img className='icone-botao-menu-2' src="/icone-png.png" alt="" /> 
                <div className='card-one'>
                    <h4>5 RODADAS GRÁTIS</h4>
                    <p>DEPOSITE R$ 5,00</p>
                </div>            
                <img className='icone-botao-menu-2' src="/icone-png.png" alt="" /> 
                <div className='card-one'>
                    <h4>5 RODADAS GRÁTIS</h4>
                    <p>DEPOSITE R$ 5,00</p>
                </div>            
                <img className='icone-botao-menu-2' src="/icone-png.png" alt="" /> 
                <div className='card-one'>
                    <h4>5 RODADAS GRÁTIS</h4>
                    <p>DEPOSITE R$ 5,00</p>
                </div>            
                <img className='icone-botao-menu-2' src="/icone-png.png" alt="" /> 
                <div className='card-one'>
                    <h4>5 RODADAS GRÁTIS</h4>
                    <p>DEPOSITE R$ 5,00</p>
                </div>
                <div className='texto-final'>
                    <h2>Como Receber</h2>
                    <h3>1 - Crie a sua conta</h3>
                    <p>O cadastro é rápido, leva apenas 2 minutos!</p>

                    <h3>2 - faça um depósito via Pix</h3>
                    <p>Valor mínimo de R$ 5,00 reais.</p>    

                    <h3>3 - Receba o seu bônus</h3>
                    <p>Receba rodadas grátis de acordo com o valor do primeiro depósito</p>  

                    <h3>4 - Complete os requisitos de aposta</h3>
                    <span>Ganhe 5 rodadas grátis depositando 5 reais</span>
                    <span>Ganhe 20 rodadas grátis depositando 20 reais</span>
                    <span>ganhe 50 rodadas grátis depositando 50 reais</span>
                    <span>ganhe 100 rodadas grátis depositando 100 reais</span>
                    <span>ganhe 200 rodadas grátis depositando 500 reais</span>      
                </div>
            </div>
        </div>

      </div>

  )
}

export default App
