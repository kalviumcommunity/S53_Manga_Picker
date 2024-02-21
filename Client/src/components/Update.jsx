import React, { useState } from 'react';


function Update({open, oldData, setopen}) {
    const [newData, setNewData] = useState({
		_id: oldData._id,
		Title: oldData.Title,
		Image: oldData.Image, 
		Author: oldData.Author, 
	})
	const [response, setResponse] = useState(null)

	const handleChange = (e) => {
		const { name, value } = e.target
		setNewData({
			...newData,
			[name]: value
		})
	}
      


	const handleSubmit = async () => {
        console.log(newData)
		try {
			const res = await fetch(
				`https://manga-picker.onrender.com/api/update/${oldData._id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(newData)
                    
				}
                )
            
			const data = await res.json()
			setResponse(data)
            window.location.reload()
            
		} catch (error) {
			console.error('Error:', error)
			setResponse({ error: 'An error occurred while updating the item.' })
		}
	}

    return (
        <div className={`${open ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50  bg-opacity-25 backdrop-blur-md` }>
            <div className="modal-box h-screen w-full" onClick={(e) => e.stopPropagation()}>
            <form>
                <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3" onClick={()=>setopen(false)}>✕</button>
            </form>
                {response && response.error ? (
                    <p>Error: {response.error}</p>
                ) : oldData ? (
                    <div >
                        <h1 className='text-3xl text-white text-center'>Update Data</h1>
                        
                        <div className='flex flex-col justify-center items-center mt-12 '>
                        <h1 className='text-2xl  '>Enter New Data</h1>
                        <label  className="input input-bordered flex items-center gap-2 mt-10 text-white">Title:
                        <input
                            className="grow bg-transparent"
                            type="text"
                            id="newName"
                            name="Title"
                            value={newData.Title}
                            onChange={handleChange}
                        />
                        </label>
                        <label  className="input input-bordered flex items-center gap-2 mt-10 text-white">Image:
                        <input
                            className="grow bg-transparent"
                            type="text"
                            id="newImage"
                            name="Image"
                            value={newData.Image} 
                            onChange={handleChange}
                        />
                        </label>
                        <label  className="input input-bordered flex items-center gap-2 mt-10 text-white">Author:
                        <input
                            className="grow bg-transparent"
                            type="text"
                            id="newAuthor"
                            name="Author"
                            value={newData.Author} 
                            onChange={handleChange}
                        />
                        </label>
                        </div>

                        
                        {response && !response.error && (
                            <p className='text-2xl mt-10 text-green-600'>Updated Successfully!</p>
                        )}
                    </div>
                 ) : (
                    <p>Loading...</p>
                )} 
                <button className="btn btn-outline btn-primary absolute right-5 bottom-5" onClick={() => { handleSubmit(); }}>Update Data</button>
            </div>
        </div>
    )
}

export default Update;
