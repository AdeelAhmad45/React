import React, { useState, useEffect } from 'react'

function GitHub() {

    const [data, setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/technologyadeel')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
        setData(data)
      })
      }
    , [])
    
  return (
    <div className='bg-gray-600 text-white p-4 text-center'>GitHub {data.followers}
    <img width={300} src={data.avatar_url} alt="Git Picture" />
    </div>
  )
}

export default GitHub