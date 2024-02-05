import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button'
import Card from '../../components/Card'
import boleto from '../../assets/barcode.png'
import card from '../../assets/credit-card.png'
import { usePurchaseMutation } from '../../services/api'
import { Group, Row, TabButton } from './styles'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const [purchase, { data, isSuccess }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Mínimo de 5 caracteres')
        .required('Este campo é obrigatório!'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('Este campo é obrigatório!'),
      cpf: Yup.string()
        .min(14, 'Mínimo de 14 caracteres')
        .max(14, 'Máximo de 14 caracteres')
        .required('Este campo é obrigatório!'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('Este campo é obrigatório!'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'E-mails diferentes')
        .required('Este campo é obrigatório!'),
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Este campo é obrigatório!') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Este campo é obrigatório!') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Este campo é obrigatório!') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Este campo é obrigatório!') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Este campo é obrigatório!') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Este campo é obrigatório!') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Este campo é obrigatório!') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('Este campo é obrigatório!') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado!">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido: {data.orderId} <br />
              Forma de pagamento:{' '}
              {payWithCard ? 'Cartão de crédito' : 'Boleto bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. Após a aprovação do
              pagamento, enviaremos um e-mail contendo o código de ativação do
              jogo.
            </p>
            <p className="margin-top">
              Se você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. Caso tenha alguma dúvida ou
              necessite de mais informações, por favor, entre em contato conosco
              através dos nossos canais de atendimento ao cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <Row>
                <Group>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                  />
                  <small>
                    {getErrorMessage('fullName', form.errors.fullName)}
                  </small>
                </Group>
                <Group>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    id="email"
                    name="email"
                    value={form.values.email}
                  />
                  <small>{getErrorMessage('email', form.errors.email)}</small>
                </Group>
                <Group>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    id="cpf"
                    name="cpf"
                    value={form.values.cpf}
                  />
                  <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
                </Group>
              </Row>
              <h3 className="margin-top">
                Dados de entrega - Conteúdo digital
              </h3>
              <Row>
                <Group>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    onChange={form.handleChange}
                    value={form.values.deliveryEmail}
                  />
                  <small>
                    {getErrorMessage(
                      'deliveryEmail',
                      form.errors.deliveryEmail
                    )}
                  </small>
                </Group>
                <Group>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    onChange={form.handleChange}
                    value={form.values.confirmDeliveryEmail}
                  />
                  <small>
                    {getErrorMessage(
                      'confirmDeliveryEmail',
                      form.errors.confirmDeliveryEmail
                    )}
                  </small>
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
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                        />
                        <small>
                          {getErrorMessage('cardOwner', form.errors.cardOwner)}
                        </small>
                      </Group>
                      <Group>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do cartão
                        </label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                        />
                        <small>
                          {getErrorMessage(
                            'cpfCardOwner',
                            form.errors.cpfCardOwner
                          )}
                        </small>
                      </Group>
                    </Row>
                    <Row marginTop="24px">
                      <Group>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                        />
                        <small>
                          {getErrorMessage(
                            'cardDisplayName',
                            form.errors.cardDisplayName
                          )}
                        </small>
                      </Group>
                      <Group>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                        />
                        <small>
                          {getErrorMessage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </Group>
                      <Group maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                        />
                        <small>
                          {getErrorMessage(
                            'expiresMonth',
                            form.errors.expiresMonth
                          )}
                        </small>
                      </Group>
                      <Group maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                        />
                        <small>
                          {getErrorMessage(
                            'expiresYear',
                            form.errors.expiresYear
                          )}
                        </small>
                      </Group>
                      <Group maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                        />
                        <small>
                          {getErrorMessage('cardCode', form.errors.cardCode)}
                        </small>
                      </Group>
                    </Row>
                    <Row marginTop="24px">
                      <Group maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          onChange={form.handleChange}
                          value={form.values.installments}
                        >
                          <option value="">1x R$ 200,00</option>
                          <option value="">2x R$ 105,00</option>
                          <option value="">3x R$ 78,00</option>
                        </select>
                        <small>
                          {getErrorMessage(
                            'installments',
                            form.errors.installments
                          )}
                        </small>
                      </Group>
                    </Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto.
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="button"
            title="Clique aqui para finalizar a compra"
            onClick={form.handleSubmit}
          >
            Finalizar compra
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
