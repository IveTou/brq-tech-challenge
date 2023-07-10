import React, { useState } from "react"
import { GetMarket } from "../../../domain/usecases/get-market"
import useFetch from "../../hooks/useFetch"

type Props = {
  remote: GetMarket
}

const Table: React.FC<Props> = ({ remote }) => {
  const [markets, setMarkets] = useState([])
  useFetch(remote, data => console.log(data)) 

  return <div>Table</div>
}
export default Table