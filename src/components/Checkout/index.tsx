import Button from '../Button'
import Card from '../Card'
import { Group, Row } from './styles'

const Checkout = () => (
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
      <div>
        <p>
          Ao optar por essa forma de pagamento, é importante lembrar que a
          confirmação pode levar até 3 dias úteis, devido aos prazos
          estabelecidos pelas instituições financeiras. Portanto, a liberação do
          código de ativação do jogo adquirido ocorrerá somente após a aprovação
          do pagamento do boleto.
        </p>
      </div>
    </Card>
    <Button type="button" title="Clique aqui para finalizar a compra">
      Finalizar compra
    </Button>
  </div>
)

export default Checkout
