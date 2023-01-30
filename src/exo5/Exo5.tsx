import { useEffect, useState } from "react";

export const Exo5 = () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    const [loading, setLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>()
    const [error, setError] = useState()

    useEffect(() => {
      setLoading(true)
      fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
        .catch((e) => setError(e))
        .finally(() => setLoading(true))
    }, [url])

    return <pre>{JSON.stringify({loading, ...data, error}, null, 4)}</pre>
  }