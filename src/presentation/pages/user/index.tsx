import React from "react"

type Props = {
  data: any
}

const User: React.FC<Props> = ({ data }) => {
  console.log(data)

  return <div>User</div>
}
export default User