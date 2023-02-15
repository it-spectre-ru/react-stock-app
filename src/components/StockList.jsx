import { useState, useEffect } from 'react'
import finnHub from "../api/finnHub"


export const StockList = () => {
  const [stock, setStock] = useState()
  const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN'])

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      const responses = []
      try {
        const response1 = await finnHub.get('/quote', {
          params: {
            symbol: 'GOOGL'
          }
        })
        responses.push(response1)
        const response2 = await finnHub.get('/quote', {
          params: {
            symbol: 'MSFT'
          }
        })
        responses.push(response2)
        const response3 = await finnHub.get('/quote', {
          params: {
            symbol: 'AMZN'
          }
        })
        responses.push(response3)

        console.log(responses)
        if (isMounted) {
          setStock(responses)
        }

      } catch (err) {

      }
    }
    fetchData()

    return () => (isMounted = false)
  }, [])

  return <div>StockList</div>
}