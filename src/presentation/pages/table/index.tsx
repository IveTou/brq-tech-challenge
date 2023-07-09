import React from "react"

type Props = {
  data: any
}

const Table: React.FC<Props> = ({ data }) => {
  console.log(data)

  return <div>Table</div>
}
export default Table