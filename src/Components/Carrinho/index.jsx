import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Clickavel, Texto } from '../Components';

const Carrinho = styled.div`

width: 70vw;
height: 80vh;
background-color: white;
top: 55%;
left: 50%;
transform: translate(-50%, -50%);
position: fixed;
z-index: 1;
display: ${({ $openCarrinho }) => ($openCarrinho ? "none" : "flex")};
flex-direction: column;
justify-content: space-around;
align-items: center;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

.titulotable{
    display: flex;
    width: 90%;
    height: 13%;
    align-items: center;
    justify-content: space-between;
    color: coral;
}

div{
    margin: 1vh;
}



.divtable{
    color: white;
    width: 80%;
    height: 80%;
    overflow-y: auto;
    
    
    table {


        width: 100%;

        .divlixo{
            display: flex;
            max-height: 6.5vh;
            align-items: center;
            justify-content: center;

            margin: 0;
                padding: 0;
            
        }

        th {

            img {
                filter: invert(10%) sepia(60%) saturate(500%) hue-rotate(10deg);
            }
        }

        img {
            max-height: 4vh;
            filter: invert(100%)
        }
    }
}

th {
    color: #8b3e00;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background-color: #fff7f7;
}

td {
    
    border-radius: 10px;
    background-color: #8b3e00;
    text-align: center;
    
}

tr {
    max-height: 3vh;
}

img{
    max-height: 10vh;
}

section{
    display: flex;
    width: 80%;
    height: 15%;
    justify-content: space-around;
    align-items: center;
}


a {
    text-decoration: none;
    color: inherit;
  
  }

  ::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #fff7f7;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #8b3e00;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #b55e1e;
}

@media only screen and (max-width: 600px) {
        
    width: 100vw;
    height: 85vh;

    table{

        h1{
            font-size: 0.6rem !important;
        }
        img{
            width: 2vh;
        }
    }
    
}

`;

export default ({ carrinho, openCarrinho, Abrir, Deletar, total, LinkarPedido, mensagem }) => {

    return (
        <Carrinho $openCarrinho={openCarrinho}>
            <div className='titulotable'>
                <Clickavel Funcao={Abrir}><img src='/cart.svg' /></Clickavel>
                <Clickavel Funcao={Abrir}><Texto tamanho='2'>X</Texto></Clickavel>
            </div>
            <div className='divtable'>
                <table>
                    <colgroup>
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "50%" }} />
                        <col style={{ width: "15%" }} />
                        <col style={{ width: "10%" }} />
                    </colgroup>
                    <thead>
                        <tr>
                            <th><Texto tamanho='1'>Quantidade</Texto></th>
                            <th><Texto tamanho='1'>Nome</Texto></th>
                            <th><Texto tamanho='1'>Preço</Texto></th>
                            <th><Clickavel Funcao={() => { Deletar("tudo") }}><div className='divlixo'><img src="/lixo.png" /></div></Clickavel></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrinho.map((item, index) => (
                            <tr key={index}>
                                <td><Texto>{item.quantity}</Texto></td>
                                <td><Texto>{item.name}</Texto></td>
                                <td><Texto>R${item.price},00</Texto></td>
                                <td><div className='divlixo'><Clickavel Funcao={() => { Deletar(item.name, item.quantity) }}><Texto><img src="/lixo.png" /></Texto></Clickavel></div></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <section>
                <button><Texto>R${total},00</Texto></button>
                <Clickavel Funcao={LinkarPedido}><button><a href={`https://wa.me/5511987313427?text=${mensagem}`} target='_blank'><Texto>Finalizar Pedido</Texto></a></button></Clickavel>
            </section>

        </Carrinho >

    )
}