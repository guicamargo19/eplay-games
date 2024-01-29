import { Action, Item, Items, ModalContent } from './styles'
import Section from '../Section'
import play from '../../assets/botao-play.png'
import zoom from '../../assets/mais-zoom.png'
import fechar from '../../assets/close.png'
import { Modal } from './styles'
import { useState } from 'react'
import { GalleryItem } from '../../pages/Home'

type Props = {
  defaultCover: string
  name: string
  items: GalleryItem[]
}

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({ defaultCover, name, items }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({
      isVisible: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {items.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModal({
                  isVisible: true,
                  type: media.type,
                  url: media.url
                })
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} do ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique aqui para maximizar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} alt="Trailer Oficial" />
          ) : (
            <iframe src={modal.url} frameBorder={0} />
          )}
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
