import Card from './Card'
import { useState, useEffect } from 'react';
import axios from 'axios'

function Extract() {
    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [selectedUser, setSelectedUser] = useState('All'); // Initialize selectedUser as 'All'
    const [filteredData, setFilteredData] = useState(data); // Initialize filteredData as data

    useEffect(() => {
        fetchData();
        fetchUser();
      }
      , []);
    
      const fetchData = async() => {
        axios.get("https://manga-picker.onrender.com/api")
          .then((res) => {
            console.log(res)
            setData(res.data.data);
            setFilteredData(res.data.data); // Set filteredData as data when data is fetched
          })
          .catch((err) => {
            console.log(err);
          });
        }

        const fetchUser = async() => {
            axios.get("https://manga-picker.onrender.com/auth")
              .then((res) => {
                console.log(res.data.data)
                setUser(res.data.data);
              })
              .catch((err) => {
                console.log(err);
              });
            }

        const handleSearchClick = () => {
            if (selectedUser === 'All') {
                setFilteredData(data);
            } else {
                setFilteredData(data.filter(item => item.User === selectedUser));
            }
        }
    

    
  return (
    <div>
        <div className="join flex justify-center border-none">
        <select className="select border-none join-item w-60" onChange={e => setSelectedUser(e.target.value)}>
            <option value="All">All</option> {/* Add 'All' option */}
            {user.map((item, index) => (
                <option key={index}>{item.username}</option>
            ))}
        </select>


            <div className="indicator">
                <button className="btn join-item" onClick={handleSearchClick}>Search</button>
            </div>
            </div>

            <div className='pt-20 pb-10' >
                <h1 className='text-center text-7xl p-10'>Manga</h1>
                <div className="grid grid-cols-4 gap-4 justify-center justify-items-center ">
                    {filteredData.map(item => (
                    <Card key={item._id} title={item.Title} author={item.Author} image={item.Image} onDelete={() => handleDelete(item._id) } 
                    oldData={item} />
                    ))}
            </div>
    </div>
    </div>
  )
}

export default Extract
