import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import cartIcon from '../../assets/carrinho.svg'
import { open } from '../../store/reducers/cart'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items: itens } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link to={'/'}>
            <h1>
              eplay <p>games</p>
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          {itens.length} -<span>Produto(s)</span>
          <img src={cartIcon} alt="Carrinho de compras" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <S.Links>
          <S.LinkItem>
            <Link
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
            >
              Categoria
            </Link>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </S.LinkItem>
          <S.LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </S.LinkItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  )
}

export default Header
