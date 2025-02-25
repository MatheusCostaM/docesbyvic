import styled from 'styled-components';
import Lines from '../Dados/DBLines';
import { Titulo, Clickavel } from '../Components'

const Navbar = styled.div`

width: 100vw;
height: 10vh;
display: flex;
justify-content: space-around;
background-color: white;
color: #8b3e00;
align-items: center;
position: fixed;
z-index: 1;
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

div{
    display: flex;
    justify-content: space-around;
    align-itens: center;
    margin: 2vh;

    img {
        max-height: 8vh;
    }
}

`

export default ({ Abrir, scroll }) => {


    return (
        <Navbar>

            <Clickavel Funcao={() => { scroll("sobre") }}><img src='/logo.png' /></Clickavel>

            <div>
                {Lines.map((line, index) => (
                    <Clickavel Funcao={() => { scroll(index) }} key={index}><Titulo tamanho='1'>{line}</Titulo></Clickavel>)
                )}
            </div>

            <Clickavel Funcao={Abrir}><img src='/cart.svg' /></Clickavel>

        </Navbar>
    )
}