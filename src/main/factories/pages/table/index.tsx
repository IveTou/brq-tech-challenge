import React, { useEffect } from "react"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import { RemoteGetMarket } from "../../../../data/usecases/remote-get-market"
import Table from "../../../../presentation/pages/table"

export const MarketFactory = () => {
  const socketIOClient = new SocketIOClient()
  const remoteGetMarket = new RemoteGetMarket(socketIOClient)

  useEffect(() => {
    remoteGetMarket.get(data => console.log(data))
    return () => remoteGetMarket.disconnect()
  }, [])


  return <Table />
}
