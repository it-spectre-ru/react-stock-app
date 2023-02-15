import { useState, useEffect } from 'react'
import finnHub from "../api/finnHub"


export const StockList = () => {
  const [stock, setStock] = useState()
  const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN'])

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        const responses = Promise.all(watchList.map((stock) => {
          return finnHub.get('/quote', {
            params: {
              symbol: stock
            }
          })
        }))

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