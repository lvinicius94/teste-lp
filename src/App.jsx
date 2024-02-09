import { useState, useEffect } from 'react'
import './App.css'
import PromoCode from './PromoCode'

function App() {
    
    const [showButton, setShowButton] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Set showButton to true if scroll position is greater than or equal to a certain value
        setShowButton(scrollPosition >= 500); // Change 500 to your desired scroll position
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect only runs once

    // Function to handle button click
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scrolls to the top of the page smoothly
    };

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
                    <h3>1 - Deposite 5,00 e ganhe 20,00 usando o promocode na tela.</h3>
                    <p>Clique no botão para garantir seu bônus.</p>

                    <h3>2 - Deposite 5 e ganhe 20 usando o promocode que está na tela.</h3>
                    <p>Clique no botão e aproveite. </p>    

                    <h3>3 - Deposite 5 e ganhe 4x o valor digite o promocode na página de depósito.</h3>
                    <p>Clique no botão para garantir seu bônus.</p>  

                    <h3>4 - Ganhe 20 reais de bônus depositando 5,00 usando o promocode que está na tela.</h3>
                    <p>Clique no botão para aproveitar.</p>

                    <h3>5 - Use o código para ganhar 20,00 de bônus!</h3>
                    <p>Clique no botão e aproveite.</p>   
                </div>
            </div>

            {/* Render the button only if showButton is true */}
            {showButton && (
              <button onClick={scrollToTop} className='botao-fixo-segunda-dobra'><a href="https://upbet.com/ptb/bet/main?affid=0209103">GANHAR BÔNUS</a></button>  
            )}
        </div>

  )
}

export default App
