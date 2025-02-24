import Product from '../Product';
import lista from '../Dados/DBProducts';
import Lines from '../Dados/DBLines';
import styled from 'styled-components';
import Imagens, { auto } from '../Dados/DBImages';

const Line = styled.div`


display: flex;
flex-direction: column;
align-items: center;
width: 100vw;

img {
    height: 30%;
}

`;

const Tela = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    height: 100vh;
    flex-wrap; wrap;
`

export default ({ Adicionar }) => {
    return (
        <Line>
            {Lines.map((line, index) => {
                let linelist = [];

                for (let i = 0; i < lista.length; i++) {
                    if (lista[i].type === line) {
                        linelist.push(lista[i]);
                    }
                }

                let imagem = auto;

                for (let i = 0; i < Imagens.length; i++) {
                    if (Imagens[i].type = line) {
                        imagem = Imagens[i].img
                    }
                }

                return (

                    <Tela key={index}>
                        <img src={imagem} />
                        <Product lista={linelist} Adicionar={Adicionar} />

                    </Tela>

                );
            })}
        </Line>
    )
}