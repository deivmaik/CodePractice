import data from 'database/data'
import React,{ useState, useEffect} from 'react'

const HomePage = () => {
  
  const [ productList, setProductList] = useState<TProduct[]>([])

  useEffect(()=>{
    window.
    fetch('/api/avo')
    .then(response=> response.json())
    .then(({data, length}) => {
      setProductList(data)
    })
  },[])

  return (
    <div>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
