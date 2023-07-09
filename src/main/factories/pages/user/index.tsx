import React, { useEffect } from "react"
import { RemoteGetClient } from "../../../../data/usecases/remote-get-client"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import User from "../../../../presentation/pages/user"

export const UserFactory = () => {
  const socketIOClient = new SocketIOClient()
  const remoteGetClient = new RemoteGetClient(socketIOClient)

  useEffect(() => {
    remoteGetClient.get(data => console.log(data))
    return () => remoteGetClient.disconnect()
  }, [])


  return <User />
}