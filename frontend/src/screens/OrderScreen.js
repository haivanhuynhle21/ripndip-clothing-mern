import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  getOrderDetails,
  cancelOrder,
  payOrder,
  deliverOrder,
} from '../actions/orderActions'
import {
  ORDER_CANCEL_RESET,
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants'

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderCancel = useSelector((state) => state.orderCancel)
  const { loading: loadingCancel, success: successCancel } = orderCancel

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (
      !order ||
      successPay ||
      successDeliver ||
      successCancel ||
      order._id !== orderId
    ) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })
      dispatch({ type: ORDER_CANCEL_RESET })
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [
    dispatch,
    orderId,
    successCancel,
    successPay,
    successDeliver,
    order,
    history,
    userInfo,
  ])

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  const cancelHandler = () => {
    dispatch(cancelOrder(order))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <>
      <h1>Th??ng tin ????n h??ng {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Th??ng tin giao h??ng</h2>
              <p>
                <strong>T??n: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong>{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>?????a ch???:</strong>
                {order.shippingAddress.shippingName},{'  '}
                {order.shippingAddress.phoneNumber},{'  '}
                {order.shippingAddress.address},{'  '}
                {order.shippingAddress.city},{'  '}
                {order.shippingAddress.postalCode},{'  '}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered && !order.isCanceled ? (
                <Message variant='success'>
                  ???? giao ng??y {order.deliveredAt}
                </Message>
              ) : (
                <Message variant='danger'>Ch??a giao h??ng</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Ph????ng th???c thanh to??n</h2>
              <p>
                <strong>Ph????ng th???c: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid && !order.isCanceled ? (
                <Message variant='success'>
                  ???? thanh to??n ng??y {order.paidAt}
                </Message>
              ) : (
                <Message variant='danger'>Ch??a thanh to??n</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>S???n ph???m</h2>
              {order.orderItems.length === 0 ? (
                <Message>????n h??ng tr???ng</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>????n h??ng</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>S???n ph???m</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Ph?? giao h??ng</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Thu???</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>T???ng ti???n</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid ||
                (!order.isCanceled && (
                  <ListGroup.Item>
                    {loadingPay && <Loader />}
                    {!sdkReady ? (
                      <Loader />
                    ) : (
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      />
                    )}
                  </ListGroup.Item>
                ))}

              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDelivered && (
                  <ListGroup.Item>
                    <Button
                      type='button'
                      className='btn btn-block'
                      onClick={deliverHandler}
                    >
                      ????nh d???u ???? giao h??ng
                    </Button>
                  </ListGroup.Item>
                )}
            </ListGroup>
          </Card>
          {loadingCancel && <Loader />}
          {!order.isCanceled ? (
            <ListGroup.Item>
              <Button
                type='button'
                className='btn btn-block'
                onClick={cancelHandler}
              >
                Hu??? ????n
              </Button>
            </ListGroup.Item>
          ) : (
            <Message variant='danger'>????n ???? hu???</Message>
          )}
        </Col>
      </Row>
    </>
  )
}

export default OrderScreen
