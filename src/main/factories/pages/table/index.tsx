import React, { useRef } from "react"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import { RemoteGetMarket } from "../../../../data/usecases/remote-get-market"
import Table from "../../../../presentation/pages/table"

export const MarketFactory = () => {
  const socketIOClient = useRef(new SocketIOClient())
  const remoteGetMarket = new RemoteGetMarket(socketIOClient.current)

  return <Table remote={remoteGetMarket}/>
}


// const {
//   account_name,
//   amount,
//   credit_card_cvv,
//   credit_card_issuer,
//   credit_card_number,
//   currency_name,
//   transaction_description,
//   transaction_type
// } = data || {}
// const market: Market = {
//   accountName: account_name,
//   amount: amount,
//   creditCardCCV: credit_card_cvv,
//   creditCardIssuer: credit_card_issuer,
//   creditCardNumber: credit_card_number,
//   currencyName: currency_name,
//   transactionDescription: transaction_description,
//   trasactionType: transaction_type
// }