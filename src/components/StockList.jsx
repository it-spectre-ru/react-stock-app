import {useState, useEffect} from 'react'
import finnHub from "../api/finnHub"


export const StockList = () => {
  const [watchList, setWatchList] = useState(['GOOGL', 'MSFT', 'AMZN'])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get('/quote?symbol=MSFT&token=cflp5m1r01qjfr8f2u70cflp5m1r01qjfr8f2u7g')
        console.log(response)
      } catch (err) {
        
      }
    }
    fetchData()
  }, [])
  
  return <div>StockList</div>
}