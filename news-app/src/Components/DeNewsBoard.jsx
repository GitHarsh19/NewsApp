import React, { useEffect } from 'react'

const DeNewsBoard = () => {
  const [headlines,setHeadlines] = useState([]);
  useEffect(()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.NEWS_API_KEY}`;
  })
  return (
    <h2 className='text-center'>
        Headlines <span className=''> and News </span>
    </h2>
  )
}

export default DeNewsBoard