// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../../../contexts/AuthProvider';
// import Loading from '../../../Shared/Loading/Loading';
// import Category from './Category';



// const Categories = () => {
//     const [categories, setCategory] = useState([]);
//     const {isLoading}=useContext(AuthContext);
//     useEffect( () =>{
//         fetch('https://usedproduct-market-serversite.vercel.app/Category')
//         .then(res =>res.json())
//         .then(data => setCategory(data));
//     }, []);
//     if(isLoading){
//         <Loading></Loading>
//     }

//     return (
//         <div>
//             <div className='text-center mb-4'>
               
//                 <h2 className="text-5xl font-semibold pt-12">Available Product Category</h2>
                
//             </div>
//             <div className='pl-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//                 {
//                     categories.map(category =>
//                          <Category
//                         key={category._id}
//                         category={category}
//                     ></Category>
//                     )
//                 }
//             </div>

//         </div>
//     );
// };

// export default Categories;