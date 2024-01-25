import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/resident.png'
import star_wars from '../../assets/star_wars.png'
import zelda from '../../assets/zelda.png'
import diablo from '../../assets/diablo.png'
import fifa from '../../assets/fifa.png'
import street from '../../assets/street.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror.',
    title: 'Resident Evil 4',
    image: resident,
    system: 'PS5, Windows, XBOX',
    infos: ['10%', 'R$ 250,00']
  },
  {
    id: 2,
    category: 'Aventura',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    title: 'Zelda',
    image: zelda,
    system: 'Windows, MacOS, PS5',
    infos: ['5%', 'R$ 290,00']
  },
  {
    id: 3,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    title: 'Diablo 4',
    image: diablo,
    system: 'Windows, PS5',
    infos: ['10%', 'R$ 190,00']
  },
  {
    id: 4,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    title: 'Star Wars',
    image: star_wars,
    system: 'XBOX',
    infos: ['20%', 'R$ 290,00']
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    title: 'FIFA',
    image: fifa,
    system: 'PS5, XBOX',
    infos: ['25%', 'R$ 220,00']
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    title: 'Street Fighter 6',
    image: street,
    system: 'PS5, XBOX',
    infos: ['30%', 'R$ 200,00']
  },
  {
    id: 7,
    category: 'Esporte',
    description:
      'FIFA é um jogo de futebol que não possui times do Brasil, jóinha.',
    title: 'FIFA',
    image: fifa,
    system: 'PS5, XBOX',
    infos: ['25%', 'R$ 220,00']
  },
  {
    id: 8,
    category: 'Esporte',
    description:
      'FIFA é um jogo de futebol que não possui times do Brasil, jóinha.',
    title: 'FIFA',
    image: fifa,
    system: 'PS5, XBOX',
    infos: ['25%', 'R$ 220,00']
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="Ação" background="gray" />
    <ProductsList games={emBreve} title="RPG" background="black" />
    <ProductsList games={promocoes} title="FPS" background="gray" />
    <ProductsList games={emBreve} title="Aventura" background="black" />
  </>
)

export default Categories
