import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'
import { open } from '../../store/reducers/cart'
import {
  HeaderBar,
  CartButton,
  LinkItem,
  Links,
  Hamburguer,
  HeaderRow,
  NavMobile
} from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items: itens } = useSelector((state: RootReducer) => state.cart)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <Link to={'/'}>
            <img src={logo} alt="Logo EPlay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {itens.length}
          <span> - Produto(s)</span>
          <img src={carrinho} alt="Carrinho de compras" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
            >
              Categoria
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de em breve"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
