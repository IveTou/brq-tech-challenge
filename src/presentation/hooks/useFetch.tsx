import { useEffect, useRef, useState } from "react";
import { GetMarket } from "../../domain/usecases/get-market";
import { GetClient } from "../../domain/usecases/get-client";

function useFetch(remote: GetClient | GetMarket): any {
  const client = useRef(remote)
  const [data, setData] = useState()

  useEffect(() => {
    client.current.get(d => setData(d))
    return () => client.current.disconnect()
  }, [])

  return data
}

export default useFetch