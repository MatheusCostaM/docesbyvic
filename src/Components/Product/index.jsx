import React, { useState } from 'react'
import styled from 'styled-components'

const Product = styled.div`

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
            <div>
                <button onClick={() => { Option('menos', 'sabor') }}>-</button>
                <h1>{lista[sabor - 1].name}</h1>
                <button onClick={() => { Option('mais', 'sabor') }}>-</button>
            </div>
            <h1>R${lista[sabor - 1].price},00</h1>
            <div>
                <div className="quantidade">
                    <button onClick={() => { Option('menos', 'quantidade') }}>-</button>
                    <h1>{quantidade}</h1>
                    <button onClick={() => { Option('mais', 'quantidade') }}>+</button>
                </div>
                <button onClick={() => { Adicionar(obj) }}>Adicionar</button>
            </div>
        </Product>
    )
}