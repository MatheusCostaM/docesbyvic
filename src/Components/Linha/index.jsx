import Product from '../Product';
import lista from '../Dados/DBProducts';
import Lines from '../Dados/DBLines';
import styled from 'styled-components';
import Imagens, { auto } from '../Dados/DBImages';
import { Titulo } from '../Components'

const Line = styled.div`


display: flex;
flex-direction: column;
align-items: center;
width: 100vw;


@keyframes appear {
    from{
        opacity: 0;
        transform: translateY(600px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }

`;

const ContainersProject = styled.div`
    width: 30vw;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #8b3e00;

    img {
        width: 80%;

    }

`

const Tela = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    height: 100vh;
    flex-wrap; wrap;


    animation: appear linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
    
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
                let nome = 'auto';

                for (let i = 0; i < Imagens.length; i++) {

                    if (Imagens[i].type == line) {
                        imagem = Imagens[i].img;
                        nome = Imagens[i].type;
                    }
                }

                return (

                    <Tela key={index}>

                        <ContainersProject >
                            <Titulo tamanho="2">{nome}</Titulo>
                            <img src={imagem} />
                        </ContainersProject >
                        <Product lista={linelist} Adicionar={Adicionar} />

                    </Tela>

                );
            })}
        </Line>
    )
}