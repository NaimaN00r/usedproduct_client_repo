// import { useQuery } from '@tanstack/react-query';
// import React, { useContext, useState }  from 'react';
// import toast from 'react-hot-toast';
// import { MdDelete } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider';
// import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
// import Loading from '../../Shared/Loading/Loading';



// const MyProduct = () => {
//     const [deletingProduct, setdeletingProduct] = useState(null);

//     const closeModal = () => {
//         setdeletingProduct(null);
//     }
//     const { user,isLoading } = useContext(AuthContext);

//     const url = `https://usedproduct-market-serversite.vercel.app/products?email=${user?.email}`;

//     const { data: products = [],refetch } = useQuery({
//         queryKey: ['products', user?.email],
//         queryFn: async () => {
//             const res = await fetch(url,
//                  {
//                 headers: {
//                    authorization: `bearer ${localStorage.getItem('accessToken')}` 
//                 }
//             }
//             );
//             const data = await res.json();
//             return data;
//         }
//     })
//     const handleDeleteDoctor = product => {
//         fetch(`https://usedproduct-market-serversite.vercel.app/products/${product._id}`, {
//             method: 'DELETE', 
//             headers: {
//                 authorization: `bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.deletedCount > 0){
//                 refetch();
//                 toast.success(`${product.name} deleted successfully`)
//             }
//         })
//     }
//     const handleMakeAdvertise = id => {
//         fetch(`https://usedproduct-market-serversite.vercel.app/products/${id}`, {
//             method: 'PUT', 
//             headers: {
//                 authorization: `bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             if(data.modifiedCount > 0){
//                 toast.success('Product is Advertised.')
//             }
//             console.log(data)
//         })
//     }
//     if(isLoading){
//         <Loading></Loading>
//     }

//     return (
//         <div>
//             <h3 className="text-3xl mb-5">My product</h3>
//             <div className="overflow-x-auto">
//                 <table className="table w-full">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Name</th>
//                             <th>Email</th>

//                             <th>Price</th>
//                             <th>Used Period</th>
//                             <th>Status</th>
//                             <th>Advertise</th>
//                             <th></th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {   
//                             products &&
//                             products?.map((product, i) => <tr key={product._id}>
//                                 <th>{i+1}</th>
//                                 <td>{product.name}</td>
//                                 <td>{product.email}</td>
//                                 <td>{product.price}</td>
//                                 <td>{product.paid}</td>
//                                 <td>{!product.paid && <h3>Available</h3>
//                                      }
//                                      {
//                                        product.paid && <span className='text-primary'>Booked</span>
//                                      }</td>
//                                 <td>
//                                     {/* {booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button
//                                     className='btn btn-primary btn-sm'>Pay
//                                     </button></Link>
//                                     } */}
//                                     { 
//                                       product.isAdvertise !== 'Advertised' && !product.paid &&
//                                       <button onClick={() => handleMakeAdvertise(product._id)} className='btn btn-xs btn-primary'>Advertise</button>
//                                      }
//                                     </td>
//                                     <td>
//                                     <label onClick={() => setdeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error"><MdDelete></MdDelete></label>
//                                     </td>

//                             </tr>)
//                         }
//                     </tbody>
//                 </table>
//             </div> 
//             {
//                 deletingProduct && <ConfirmationModal
//                     title={`Are you sure you want to delete?`}
//                     message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
//                     successAction = {handleDeleteDoctor}
//                     successButtonName="Delete"
//                     modalData = {deletingProduct}
//                     closeModal = {closeModal}
//                 >
//                 </ConfirmationModal>
//             }
//         </div>
//     );
// };

// export default MyProduct;