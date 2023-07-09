import React from "react"
import { RemoteGetClient } from "../../../../data/usecases/remote-get-client"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import User from "../../../../presentation/pages/user"
import useFetch from "../../../../presentation/hooks/useFetch"

export const UserFactory = () => {
  const socketIOClient = new SocketIOClient()
  const remoteGetClient = new RemoteGetClient(socketIOClient)
  const data = useFetch(remoteGetClient)
  
  return <User data={data}/>
}