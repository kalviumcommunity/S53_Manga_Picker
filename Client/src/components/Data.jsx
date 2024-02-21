import Card from './Card'
import { useState, useEffect } from 'react';
import axios from 'axios'

function Data() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetchData();

  // const intervalId = setInterval(fetchData, 1000);
  // return () => clearInterval(intervalId);
  }
  , []);

  const fetchData = async() => {
    axios.get("https://manga-picker.onrender.com/api")
      .then((res) => {
        console.log(res)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleDelete = (_id) => {
    axios
      .delete(`https://manga-picker.onrender.com/api/delete/${_id}`)
      .then(res => console.log(res))
      .catch(err => console.error(err));
    console.log("successful", _id)
    fetchData()
  }
  

  return (
    <div className='pt-20 pb-10' >
      <h1 className='text-center text-7xl p-10'>Explore the wide range of manga</h1>
      <div className="grid grid-cols-4 gap-4 justify-center justify-items-center ">
        {data.map(item => (
          <Card key={item._id} title={item.Title} author={item.Author} image={item.Image} onDelete={() => handleDelete(item._id) } 
          oldData={item} />
        ))}
      </div>
    </div>
  )
}

export default Data
