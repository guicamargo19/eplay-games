import Game from '../../models/Game'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            title={game.title}
            description={game.description}
            infos={game.infos}
            image={game.image}
            system={game.system}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
