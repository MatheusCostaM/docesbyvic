import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Clickavel, Texto } from '../Components';

const Carrinho = styled.div`

width: 70vw;
height: 70vh;
background-color: white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
position: fixed;
z-index: 1;
display: ${({ $openCarrinho }) => ($openCarrinho ? "none" : "flex")};
flex-direction: column;
justify-content: space-around;
align-items: center;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

div{
    margin: 1vh;
}

.divtable{
    color: white;
    width: 80%;
    height: 80%;
    
    table {
        width: 100%;

        th {
            img {
                filter: invert(0%)
            }
        }

        img {
            max-height: 3vh;
            filter: invert(100%)
        }
    }
}

th {
    color: #8b3e00;
}

td {
    
    border-radius: 20px;
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
    justify-content: space-around;
}


a {
    text-decoration: none;
    color: inherit;
  
  }

`;

export default ({ carrinho, openCarrinho, Abrir, Deletar, total, LinkarPedido, mensagem }) => {

    return (
        <Carrinho $openCarrinho={openCarrinho}>
            <Clickavel Funcao={Abrir}><img src='/cart.svg' /></Clickavel>
            <div className='divtable'>
                <table>
                    <colgroup>
                        <col />
                        <col style={{ width: "60%" }} />
                        <col />
                    </colgroup>
                    <thead>
                        <tr>
                            <th><Texto>Quantidade</Texto></th>
                            <th><Texto>Nome</Texto></th>
                            <th><Texto>Preço</Texto></th>
                            <th><Texto><img src="/lixo.png" /></Texto></th>
                        </tr>
                    </thead>
                    <tbody>
                        {carrinho.map((item, index) => (
                            <tr key={index}>
                                <td><Texto>{item.quantity}</Texto></td>
                                <td><Texto>{item.name}</Texto></td>
                                <td><Texto>R${item.price},00</Texto></td>
                                <td><Clickavel Funcao={() => { Deletar(item.name, item.quantity) }}><Texto><img src="/lixo.png" /></Texto></Clickavel></td>
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