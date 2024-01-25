class Game {
  category: string
  title: string
  description: string
  infos: string[]
  image: string
  system: string
  id: number

  constructor(
    id: number,
    category: string,
    image: string,
    system: string,
    title: string,
    infos: string[],
    description: string
  ) {
    this.id = id
    this.category = category
    this.system = system
    this.title = title
    this.infos = infos
    this.description = description
    this.image = image
  }
}

export default Game
