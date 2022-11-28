import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    console.log(category);
    const { _id,title,img, description} = category;
    console.log(_id);
    return (
        <div className="card card-compact w-96 bg-white shadow-xl">
            <div>
            <figure><img className='w-1/2 h-1/2 rounded-xl' src={img} alt="Shoes" /></figure>
            </div>
       <div className="card-body">
        <h1 className='text-center font-semibold text-xl'>{title}</h1>
       <p className='text-center'>{description}</p>
       <div className='flex justify-center items-center'>
       <Link to={`products/${title}`}><button className="btn btn-outline btn-warning bg-orange-500  text-black">View Details</button>
         </Link> 
       </div>
         </div>
</div>
    );
};

export default Category;