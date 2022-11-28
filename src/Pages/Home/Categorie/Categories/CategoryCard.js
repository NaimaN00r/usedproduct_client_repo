// import userEvent from '@testing-library/user-event';
// import React, { useContext } from 'react';
// import toast from 'react-hot-toast';
// import { MdVerified } from 'react-icons/md';
// import { Link, useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../../../../contexts/AuthProvider';
// import Loading from '../../../Shared/Loading/Loading';

// const CategoryCard = ({product,setProduct}) => {
//    const {user,isLoading}=useContext(AuthContext);
//     const {name,image,location,price,originalPrice,used,isVerified,_id,email} = product;
//     const utcDate = new Date().toUTCString();

//     const handleWishlist = id => {
//         const booking = {
//             id:_id,
//             name,
//             price,
//             image,
//             email:user.email,
//             isWishList: 'Wishedlist'
            
//         }
//         fetch('https://usedproduct-market-serversite.vercel.app/bookings', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(booking)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.acknowledged) {
//                     setProduct(null);
//                     toast.success('Booking confirmed');
//                     // refetch();
//                 }
//                 else{
//                     toast.error(data.message);
//                 }
//             })
//     }
//     if(isLoading){
//         <Loading></Loading>
//     }
//     return (
//         <div className="card card-compact w-96 bg-base-100 shadow-xl">
//        <figure><img src={image} alt="Shoes" /></figure>
//        <div className="card-body">
//         <h1 className='text-center font-semibold text-xl'>{name}</h1>
//         <h1 className='text-center font-semibold text-xl'>{location}</h1>
//         <h1 className='text-center font-semibold text-xl'>Selling Price: {price}</h1>
//         <h1 className='text-center font-semibold text-xl'>Original Price: {originalPrice}</h1>
//         <h1 className='text-center font-semibold text-xl'>Years of use: {used}</h1>
//         {isVerified &&
//         <h1 className='text-center font-semibold text-xl'>Seller is verified: <span className='flex justify-center items-center'><MdVerified></MdVerified></span></h1>
//         }
     
//         <h1 className='text-center font-semibold text-xl'>Posted on : {utcDate}</h1>
//         <span className='flex justify-center items-center'><button onClick={() => handleWishlist(product._id)} className='btn btn-xs btn-primary '>Add to wishlist</button></span>
     
//         <div className="card-actions justify-center">
//                     <label  
//                         htmlFor="booking-modal"
//                         className="btn btn-primary text-white"
//                         onClick={() => setProduct(product)}
//                     >Book Product</label>
//                 </div>
//          </div>
// </div>
//     );
// };

// export default CategoryCard;