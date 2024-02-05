export const ParseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((acc, currentItem) => {
    if (currentItem.prices.current) {
      return (acc += currentItem.prices.current)
    }
    return 0
  }, 0)
}
