import { HeaderBar, CartButton, LinkItem, Links } from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import carrinho from '../../assets/carrinho.svg'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items: itens } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar>
      <div>
        <Link to={'/'}>
          <img src={logo} alt="Logo EPlay" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categories">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a href="">Novidades</a>
            </LinkItem>
            <LinkItem>
              <a href="">Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        {itens.length} - Produto(s)
        <img src={carrinho} alt="Carrinho de compras" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
