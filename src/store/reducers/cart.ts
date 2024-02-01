import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  itens: Game[]
}

const initialState: CartState = {
  itens: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { add } = CartSlice.actions
export default CartSlice.reducer
