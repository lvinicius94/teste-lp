import { useState } from 'react'
import './App.css'
import PromoCode from './PromoCode'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='div-principal-lp'>
        <div className='menu-principal'><img src="/logo-principal-upbet.png" alt="" /><button className='botao-cadastrar-menu'><a href="https://upbet.com/ptb/bet/main?affid=0209103">CADASTRE-SE</a></button></div>
        <div className='banner-imagem-texto'>
              <div className='conteudo-banner'>
                  <div className='conteudo-topo'>
                  <p>É isso mesmo galera, voce deposita apenas 5 reais e vai ganhar 20 reais!!! </p>
                  <h1><b>GANHE R$ 20,00</b>, depositando APENAS R$ 5,00!!!</h1>
                 
                  </div>
                  <div className='config-botao-banner'>
                    
                      <button className='botao-cadastrar-banner'><a href="https://upbet.com/ptb/bet/main?affid=0209103">GANHAR BÔNUS</a></button>
                      
                     <p>Deposite agora com o "promocoudi" UPC24</p>
                     <PromoCode />
                  </div>
              </div>
              <div className='imagem-banner-direita'>
                  <img src="/fundo-trio-fortune-dragon-fortune-rabbit-fortune-ox.png" alt="" />
              </div>
        </div>


        <div className='div-segunda-dobra'>
                <div className='texto-final'>
                    <h2>Como Receber</h2>
                    <h3>1 - Deposite 5,00 e ganhe 15,00 usando o promocode na tela.</h3>
                    <p>Clique no botão para garantir seu bônus.</p>

                    <h3>2 - Deposite 5 e ganhe 15 usando o promocode que está na tela.</h3>
                    <p>Clique no botão e aproveite. </p>    

                    <h3>3 - Deposite 5 e ganhe 3x o valor digite o promocode na página de depósito.</h3>
                    <p>Clique no botão para garantir seu bônus.</p>  

                    <h3>4 - Ganhe 15 reais de bônus depositando 5,00 usando o promocode que está na tela.</h3>
                    <p>Clique no botão para aproveitar.</p>

                    <h3>5 - Use o código para ganhar 15,00 de bônus!</h3>
                    <p>Clique no botão e aproveite.</p>   
                </div>
            </div>
        </div>

  )
}

export default App
