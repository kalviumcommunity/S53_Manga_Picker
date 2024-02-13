
function Card({title, author, image, _id} ) {
    return (
      <div className="p-4" >
        <div key={_id} className="card w-72 h-[625px]  glass ">
                <figure ><img src={image} alt={title}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Author: {author}</p>
                </div>
                <div className="card-actions justify-end p-3">
                  <button className="btn btn-outline btn-accent">Update</button>
                  <button className="btn btn-outline btn-error ">Delete</button>
                </div>
         </div>
      </div>
    )
}
  
export default Card;
