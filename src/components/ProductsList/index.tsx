import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          title="Nome do Jogo"
          description="Descrição do jogo"
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.it/222x250"
          system="Windows"
        />
        <Product
          category="Ação"
          title="Nome do Jogo"
          description="Descrição do jogo"
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.it/222x250"
          system="Windows"
        />
        <Product
          category="Ação"
          title="Nome do Jogo"
          description="Descrição do jogo"
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.it/222x250"
          system="Windows"
        />
        <Product
          category="Ação"
          title="Nome do Jogo"
          description="Descrição do jogo"
          infos={['-10%', 'R$ 150,00']}
          image="//placehold.it/222x250"
          system="Windows"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
