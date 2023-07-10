import { useEffect, useState } from "react";
import { GetMarket } from "../../domain/usecases/get-market";
import { GetUser } from "../../domain/usecases/get-user";

function useFetch(remote: GetUser | GetMarket): any {
  const [data, setData] = useState()

  useEffect(() => {
    remote.get(d => setData(d))
    return () => remote.disconnect()
  }, [])

  return data
}

export default useFetch