import { useState } from 'react'
import Button from '../Button'
import Card from '../Card'
import { Group, Row, TabButton } from './styles'
import boleto from '../../assets/barcode.png'
import card from '../../assets/credit-card.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <Group>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" id="fullName" />
            </Group>
            <Group>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" />
            </Group>
            <Group>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </Group>
          </Row>
          <h3 className="margin-top">Dados de entrega - Conteúdo digital</h3>
          <Row>
            <Group>
              <label htmlFor="deliveryEmail">E-mail</label>
              <input type="email" id="deliveryEmail" />
            </Group>
            <Group>
              <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
              <input type="email" id="confirmDeliveryEmail" />
            </Group>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPayWithCard(false)}
          >
            <img src={boleto} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPayWithCard(true)}
          >
            <img src={card} alt="Cartão de crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <Group>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input type="text" id="cardOwner" />
                  </Group>
                  <Group>
                    <label htmlFor="cpfCardOwner">
                      CPF do titular do cartão
                    </label>
                    <input type="text" id="cpfCardOwner" />
                  </Group>
                </Row>
                <Row marginTop="24px">
                  <Group>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input type="text" id="cardDisplayName" />
                  </Group>
                  <Group>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="text" id="cardNumber" />
                  </Group>
                  <Group maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input type="text" id="expiresMonth" />
                  </Group>
                  <Group maxWidth="123px">
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" id="expiresYear" />
                  </Group>
                  <Group maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input type="text" id="cardCode" />
                  </Group>
                </Row>
                <Row marginTop="24px">
                  <Group maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select id="installments">
                      <option value="">1x R$ 200,00</option>
                      <option value="">2x R$ 105,00</option>
                      <option value="">3x R$ 78,00</option>
                    </select>
                  </Group>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

export default Checkout
