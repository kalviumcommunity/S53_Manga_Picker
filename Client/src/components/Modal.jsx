import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


// post method is used
function Modal({open, setopen}) {
    const [post, setPost] = useState('');
    const [mangaName, setMangaName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [apiResponse, setApiResponse] = useState();
    const [error, setError] = useState(null);

    const handlePostChange = (event) => {
        setPost(event.target.value);
    }

    const handleMangaNameChange = (event) => {
        setMangaName(event.target.value);
    }

    const handleImgUrlChange = (event) => {
        setImgUrl(event.target.value);
    }

    const handleAuthorNameChange = (event) => {
        setAuthorName(event.target.value);
    }
    const userName = Cookies.get('Username');
    console.log(userName)

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://manga-picker.onrender.com/api/create', { postId:post,Title: mangaName ,Image: imgUrl , Author: authorName,User:userName });
            setApiResponse('success');
            setError(null);
            window.location.reload()
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className={`${open ? "block" : "hidden"} fixed inset-0 flex items-center justify-center z-50  bg-opacity-25 backdrop-blur-md` }>
            <div className="modal-box " onClick={(e) => e.stopPropagation()}>
                <form>
                    <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-1 -top-0.5" onClick={()=>setopen(false)}>✕</button>
                </form>
                <h3 className="font-bold text-3xl">Add Data</h3>
                <div className='p-4  justify-center'>
                    <label className="input input-bordered flex items-center gap-2">
                        Post Id :
                        <input type="text" className="grow bg-transparent mx-4" placeholder="" onChange={handlePostChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Manga Name :
                        <input type="text" className="grow bg-transparent" placeholder="" onChange={handleMangaNameChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Image Url :
                        <input type="text" className="grow bg-transparent" placeholder="WWW.image.com" onChange={handleImgUrlChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Author Name :
                        <input type="text" className="grow bg-transparent" placeholder="" onChange={handleAuthorNameChange} />
                    </label>
                    
                    
                    <p className='text-green-600'>API response: {JSON.stringify(apiResponse)}</p>
                    {error && <p className='text-red-600 text-1xl'>Error: {error}</p>}
                </div>
                <button onClick={() => {handleSubmit()}} className="btn btn-outline btn-success absolute right-3 bottom-2">Post</button>
            </div>
        </div>
    )
}

export default Modal;
