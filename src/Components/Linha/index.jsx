import Product from '../Product';
import lista from '../Dados/DBProducts';
import Lines from '../Dados/DBLines';
import styled from 'styled-components'

const Line = styled.div`

`;

export default ({ Adicionar }) => {
    return (
        <Line>
            <div>
                {Lines.map((line, index) => {
                    let linelist = [];

                    for (let i = 0; i < lista.length; i++) {
                        if (lista[i].type === line) {
                            linelist.push(lista[i]);
                        }
                    }

                    return <Product key={index} lista={linelist} Adicionar={Adicionar} />;
                })}
            </div>
        </Line>
    )
}