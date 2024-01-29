import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsporte, setGamesEsporte] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLutas, setGamesLutas] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((resp) => resp.json())
      .then((resp) => setGamesAcao(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((resp) => resp.json())
      .then((resp) => setGamesEsporte(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((resp) => resp.json())
      .then((resp) => setGamesSimulacao(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((resp) => resp.json())
      .then((resp) => setGamesLutas(resp))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((resp) => resp.json())
      .then((resp) => setGamesRpg(resp))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsporte} title="Esporte" background="gray" />
      <ProductsList games={gamesLutas} title="Luta" background="black" />
      <ProductsList games={gamesRpg} title="RPG" background="gray" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
