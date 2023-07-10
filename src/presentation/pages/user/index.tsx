import React, { useState } from "react"
import useFetch from "../../hooks/useFetch"
import { GetUser } from "../../../domain/usecases/get-user"
import { User } from "../../../domain/models/user"

type Props = {
  remote: GetUser
}

const UserPage: React.FC<Props> = ({ remote }) => {
  const [user, setUser] = useState<User | null>(null)

  useFetch(remote, data => {
    const { client_id, first_name, job, job_descriptor } = data
    const user: User = {
      id: client_id,
      firstName: first_name,
      job: job,
      jobDescriptor: job_descriptor
    }

    setUser(user)
  }) 

  return <div>User</div>
}
export default UserPage