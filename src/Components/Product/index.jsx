import React, { useState } from 'react'
import styled from 'styled-components'
import { Texto, ContainerColorido, ContainerNormal } from '../Components'

const Product = styled.div`

width: 30vw;
height: 60vh;
background: white;
display: flex;
color: #8b3e00;
flex-direction: column;
text-align: center;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;

export default ({ lista, Adicionar }) => {

    const [quantidade, setQuantidade] = useState(1)
    const [sabor, setSabor] = useState(1)

    function Option(tipo, contador) {

        let newValue
        let func
        let limite = 100

        switch (contador) {
            case 'sabor':
                newValue = sabor
                func = setSabor
                limite = lista.length
                break
            case 'quantidade':
                newValue = quantidade
                func = setQuantidade
                break
            default:
                console.log('erro no tipo de dado')
                break
        }

        switch (tipo) {
            case 'menos':
                if (newValue > 1) {
                    newValue -= 1
                }
                break
            case 'mais':
                if (newValue < limite) {
                    newValue += 1
                }

                break
            default:
                console.log('erro no tipo de alteração da quantidade')
                break
        }

        func(newValue)

    }

    let obj = {
        name: lista[sabor - 1].name,
        price: lista[sabor - 1].price,
        quantity: quantidade
    }


    return (
        <Product>
            <ContainerNormal>
                <ContainerColorido>
                    <button onClick={() => { Option('menos', 'sabor') }}>&larr;</button>
                    <Texto tamanho="1">{lista[sabor - 1].name}</Texto>
                    <button onClick={() => { Option('mais', 'sabor') }}>&rarr;</button>
                </ContainerColorido>
            </ContainerNormal>
            <ContainerNormal>
                <Texto tamanho="2">R${lista[sabor - 1].price},00</Texto>
            </ContainerNormal>
            <ContainerNormal>
                <ContainerColorido>
                    <button onClick={() => { Option('menos', 'quantidade') }}>-</button>
                    <Texto>{quantidade}</Texto>
                    <button onClick={() => { Option('mais', 'quantidade') }}>+</button>
                </ContainerColorido>
                <button onClick={() => { Adicionar(obj) }}>Adicionar</button>
            </ContainerNormal>
        </Product>
    )
}