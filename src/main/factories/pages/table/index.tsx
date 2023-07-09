import React from "react"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import { RemoteGetMarket } from "../../../../data/usecases/remote-get-market"
import Table from "../../../../presentation/pages/table"
import useFetch from "../../../../presentation/hooks/useFetch"

export const MarketFactory = () => {
  const socketIOClient = new SocketIOClient()
  const remoteGetMarket = new RemoteGetMarket(socketIOClient)
  const data = useFetch(remoteGetMarket)

  return <Table data={data}/>
}
