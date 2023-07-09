import { useEffect, useState } from "react";
import { GetMarket } from "../../domain/usecases/get-market";
import { GetClient } from "../../domain/usecases/get-client";

function useFetch(remote: GetClient | GetMarket): any {
  const [data, setData] = useState()

  useEffect(() => {
    remote.get(d => setData(d))
    return () => remote.disconnect()
  }, [])

  return data
}

export default useFetch