import React, { useRef } from "react"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import { RemoteGetMarket } from "../../../../data/usecases/remote-get-market"
import Table from "../../../../presentation/pages/table"
import useFetch from "../../../../presentation/hooks/useFetch"

export const MarketFactory = () => {
  const socketIOClient = useRef(new SocketIOClient())
  const remoteGetMarket = new RemoteGetMarket(socketIOClient.current)
  const data = useFetch(remoteGetMarket)

  return <Table data={data}/>
}
