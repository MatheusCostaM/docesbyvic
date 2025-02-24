import React, { useState } from 'react'
import Linha from './Components/Linha'
import Carrinho from './Components/Carrinho'
import Navbar from './Components/Navbar'


export default function App() {
  const [carrinho, setCarrinho] = useState([])

  function Adicionar(obj) {
    newCarrinho = carrinho

    newCarrinho.push(obj)

    console.log(carrinho)

    setCarrinho(newCarrinho)

  }

  return (
    <>
      <Navbar />
      <Linha Adicionar={Adicionar} />
    </>


  )
}
