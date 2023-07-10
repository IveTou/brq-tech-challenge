import React, { useState } from "react"
import useFetch from "../../hooks/useFetch"
import { GetUser } from "../../../domain/usecases/get-user"

type Props = {
  remote: GetUser
}

const User: React.FC<Props> = ({ remote }) => {
  const [user, setUser] = useState()
  useFetch(remote, data => console.log(data)) 

  return <div>User</div>
}
export default User