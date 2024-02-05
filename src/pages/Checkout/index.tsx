import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../../components/Button'
import { Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { clear } from '../../store/reducers/cart'
import InputMask from 'react-input-mask'
import { usePurchaseMutation } from '../../services/api'
import Card from '../../components/Card'
import barCode from '../../assets/barcode.png'
import creditCard from '../../assets/credit-card.png'
import * as S from './styles'
import { ParseToBrl, getTotalPrice } from '../../utils'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const [installments, setInstallments] = useState<Installment[]>([])
  const totalPrice = getTotalPrice(items)
  const dispatch = useDispatch()

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
      installments: Yup.number().when((values, schema) =>
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
          installments: values.installments,
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
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []
      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: ParseToBrl(totalPrice / i)
        })
      }
      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [dispatch, isSuccess])

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      {isSuccess && data ? (
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
              <S.Row>
                <S.Group>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    className={checkInputHasError('fullName') ? 'error' : ''}
                  />
                </S.Group>
                <S.Group>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="text"
                    onChange={form.handleChange}
                    id="email"
                    name="email"
                    value={form.values.email}
                    className={checkInputHasError('email') ? 'error' : ''}
                  />
                </S.Group>
                <S.Group>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    mask="999.999.999-99"
                    type="text"
                    onChange={form.handleChange}
                    id="cpf"
                    name="cpf"
                    value={form.values.cpf}
                    className={checkInputHasError('cpf') ? 'error' : ''}
                  />
                </S.Group>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - Conteúdo digital
              </h3>
              <S.Row>
                <S.Group>
                  <label htmlFor="deliveryEmail">E-mail</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    onChange={form.handleChange}
                    value={form.values.deliveryEmail}
                    className={
                      checkInputHasError('deliveryEmail') ? 'error' : ''
                    }
                  />
                </S.Group>
                <S.Group>
                  <label htmlFor="confirmDeliveryEmail">
                    Confirme o e-mail
                  </label>
                  <input
                    type="email"
                    id="confirmDeliveryEmail"
                    name="confirmDeliveryEmail"
                    onChange={form.handleChange}
                    value={form.values.confirmDeliveryEmail}
                    className={
                      checkInputHasError('confirmDeliveryEmail') ? 'error' : ''
                    }
                  />
                </S.Group>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <S.TabButton
                isActive={!payWithCard}
                type="button"
                onClick={() => setPayWithCard(false)}
              >
                <img src={barCode} alt="Boleto" />
                Boleto bancário
              </S.TabButton>
              <S.TabButton
                isActive={payWithCard}
                onClick={() => setPayWithCard(true)}
                type="button"
              >
                <img src={creditCard} alt="Cartão de crédito" />
                Cartão de crédito
              </S.TabButton>
              <div className="margin-top">
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.Group>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </S.Group>
                      <S.Group>
                        <label htmlFor="cpfCardOwner">
                          CPF do titular do cartão
                        </label>
                        <InputMask
                          mask="999.999.999-99"
                          type="text"
                          onChange={form.handleChange}
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          className={
                            checkInputHasError('cpfCardOwner') ? 'error' : ''
                          }
                        />
                      </S.Group>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.Group>
                        <label htmlFor="cardDisplayName">Nome no cartão</label>
                        <input
                          type="text"
                          onChange={form.handleChange}
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName.toUpperCase()}
                          className={
                            checkInputHasError('cardDisplayName') ? 'error' : ''
                          }
                        />
                      </S.Group>
                      <S.Group>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          mask="9999 9999 9999 9999"
                          type="text"
                          onChange={form.handleChange}
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          className={
                            checkInputHasError('cardNumber') ? 'error' : ''
                          }
                        />
                      </S.Group>
                      <S.Group maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês de expiração</label>
                        <InputMask
                          mask="99"
                          type="text"
                          onChange={form.handleChange}
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          className={
                            checkInputHasError('expiresMonth') ? 'error' : ''
                          }
                        />
                      </S.Group>
                      <S.Group maxWidth="123px">
                        <label htmlFor="expiresYear">Ano de expiração</label>
                        <InputMask
                          mask="99"
                          type="text"
                          onChange={form.handleChange}
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          className={
                            checkInputHasError('expiresYear') ? 'error' : ''
                          }
                        />
                      </S.Group>
                      <S.Group maxWidth="48px">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          mask="999"
                          type="text"
                          onChange={form.handleChange}
                          id="cardCode"
                          name="cardCode"
                          value={form.values.cardCode}
                          className={
                            checkInputHasError('cardCode') ? 'error' : ''
                          }
                        />
                      </S.Group>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.Group maxWidth="150px">
                        <label htmlFor="installments">Parcelamento</label>
                        <select
                          id="installments"
                          name="installments"
                          onChange={form.handleChange}
                          value={form.values.installments}
                          className={
                            checkInputHasError('installments') ? 'error' : ''
                          }
                        >
                          {installments.map((installment) => (
                            <option
                              value={installment.quantity}
                              key={installment.quantity}
                            >
                              {installment.quantity}x de{' '}
                              {installment.formattedAmount}
                            </option>
                          ))}
                        </select>
                      </S.Group>
                    </S.Row>
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
            type="submit"
            title="Clique aqui para finalizar a compra"
            onClick={form.handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
