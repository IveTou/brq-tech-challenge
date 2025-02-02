import React, { useState } from "react"
import useFetch from "../../hooks/useFetch"
import { GetUser } from "../../../domain/usecases/get-user"
import { User } from "../../../domain/models/user"
import UserCard from "./UserCard"

type Props = {
  remote: GetUser
}

const UserPage: React.FC<Props> = ({ remote }) => {
  const [user, setUser] = useState<User | null>(null)

  useFetch(remote, data => {
    // TODO: decouple this logic
    const { client_id, first_name, job, job_descriptor } = data
    const user: User = {
      id: client_id,
      firstName: first_name,
      job: job,
      jobDescriptor: job_descriptor
    }

    setUser(user)
  })

  if (!user) {
    return <h1>Loading...</h1>
  }
  
  return <UserCard user={user} />
}

export default UserPage