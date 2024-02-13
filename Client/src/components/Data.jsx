import Card from './card'
import { useState, useEffect } from 'react';
import axios from 'axios'
function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api")
      .then((res) => {
        console.log(res.data.data)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className='pt-20 pb-10' >
      <h1 className='text-center text-7xl p-10'>Explore the wide range of manga</h1>
        <div className="grid grid-cols-4 gap-4 justify-center justify-items-center ">
          {/* {data.map(item => (
            <Card key={item._id} title={item.Title} author={item.Author} image={item.Image} />
          ))} */}
          <Card 
      key={data[0]._id} 
      title={data[0].Title} 
      author={data[0].Author} 
      image={data[0].Image} 
    />
        </div>
        
    </div>
  )
}

export default Data