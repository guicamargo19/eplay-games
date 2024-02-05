import { useGetFeaturedGameQuery } from '../../services/api'
import { ParseToBrl } from '../../utils'
import * as S from './styles'
import Tag from '../Tag'
import Button from '../Button'
import Loader from '../Loader'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <Loader />
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            <span>De {ParseToBrl(game.prices.old)}</span>
            <br />
            por apenas {ParseToBrl(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          title="clique aqui para aproveitar esta oferta"
          to={`/product/${game.id}`}
        >
          Aproveitar
        </Button>
      </div>
    </S.Image>
  )
}

export default Banner
