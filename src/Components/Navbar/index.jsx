import styled from 'styled-components';
import Lines from '../Dados/DBLines';
import { Titulo } from '../Components'

const Navbar = styled.div`

width: 100vw;
height: 10vh;
display: flex;
justify-content: space-around;
background-color: white;
color: #8b3e00;
align-itens: center;

div{
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-itens: center;
}

`

export default () => {


    return (
        <Navbar>
            <img src='/logo.png' />
            <div>
                {Lines.map((line, index) => (
                    <Titulo key={index}>{line}</Titulo>)
                )}
            </div>
            <img src='/cart.svg' />
        </Navbar>
    )
}