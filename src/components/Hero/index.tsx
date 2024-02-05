import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { ParseToBrl } from '../../utils'
import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <S.Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <S.Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && <span>{ParseToBrl(game.prices.old)}</span>}
            {game.prices.current && <>Por {ParseToBrl(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <>
              <Button
                title="Clique aqui para adicionar ao carrinho"
                type="button"
                variant="primary"
                onClick={addToCart}
              >
                Adicionar ao carrinho
              </Button>
            </>
          )}
        </S.Infos>
      </div>
    </S.Banner>
  )
}

export default Hero
