import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Carrinho = styled.div`

`;

export default ({ carrinho }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {

        let newTotal = 0

        for (let i = 0; i < carrinho.length; i++) {
            newTotal = carrinho[i].price
        }

        setTotal(newTotal)

        console.log(total)

    }, carrinho)

    return (
        <Carrinho>
            <table>
                <thead>
                    <tr>
                        <th>Quantidade</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {carrinho.map((item, index) => (
                        <tr key={index}>
                            <td>{item.quantity}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>{total}</div>
        </Carrinho>

    )
}