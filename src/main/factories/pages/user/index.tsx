import React, { useRef } from "react"
import { RemoteGetUser } from "../../../../data/usecases/remote-get-user"
import { SocketIOClient } from "../../../../infra/socket/socket-io-client"
import User from "../../../../presentation/pages/user"
import useFetch from "../../../../presentation/hooks/useFetch"

export const UserFactory = () => {
  const socketIOClient = useRef(new SocketIOClient())
  const remoteGetClient = new RemoteGetUser(socketIOClient.current)
  const data = useFetch(remoteGetClient)
  
  return <User data={data}/>
}