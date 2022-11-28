import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
// import {product} '../../../assets/BannerImg/addProduct.png';
import logo from '../../../assets/BannerImg/addProduct.png'


const AddProduct = () => {
    const product={};
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey = process.env.REACT_APP_imgbb_key;
     const {user,isLoading}=useContext(AuthContext);
    const navigate = useNavigate();
    
    // const { data: specialties, isLoading } = useQuery({
    //     queryKey: ['specialty'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:4500/appointmentSpecialty');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url); 
                Object.assign(product, {
                    category:data.title,
                    name: data.name, 
                    email: user.email,
                    price:parseInt(data.price),
                    originalPrice:parseInt(data.Oprice),
                    location: data.location,
                    used:data.years,
                    mobile:data.mobile,
                    condition:data.condition,
                    description:data.description,
                    image: imgData.data.url,
                    status:"available",
                })

                // save doctor information to the database
                fetch(`https://usedproduct-market-serversite.vercel.app/products`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(product)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/myproduct')
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className="card lg:card-side bg-slate-800 mr-5 ml-5 pl-5 pr-5 mt-8 shadow-xl">
          <figure><img src={logo} alt="Album"/></figure>
          <div className="card-body">
          <div className='w-96 h-1/3 '>
            <h2 className="text-4xl">Add A Doctor</h2>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
            <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Title</span></label>
                    <select 
                    {...register('title')}
                    className="select input-bordered w-full max-w-xs">
                        <option value="Apple">Apple
                            </option>
                            <option value="OnePlus">OnePlus</option>
                            <option value="Samsung">Samsung</option>

                        
                    </select>
                    {/* <select disabled value=""name="Type" className="select select-bordered w-full max-w-xs">Condition
                            <option value="Excellent">Excellent
                            </option>
                            <option value="Good">good</option>
                            <option value="Fair">Fair</option>
                            </select> */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Price</span></label>
                    <input type="text" {...register("price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Original Price</span></label>
                    <input type="text" {...register("Oprice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.price.message}</p>}
                </div>
                
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Description</span></label>
                    <input type="text" {...register("description", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.description.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Condition</span></label>
                    <select 
                    {...register('condition')}
                    className="select input-bordered w-full max-w-xs">
                        <option value="Excellent">Excellent
                            </option>
                            <option value="Good">good</option>
                            <option value="Fair">Fair</option>

                        
                    </select>
                    {/* <select disabled value=""name="Type" className="select select-bordered w-full max-w-xs">Condition
                            <option value="Excellent">Excellent
                            </option>
                            <option value="Good">good</option>
                            <option value="Fair">Fair</option>
                            </select> */}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.location.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Year of purchase</span></label>
                    <input type="text" {...register("years", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.years.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-white">Mobile N0. :</span></label>
                    <input type="text" {...register("mobile", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.mobile.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div> 
  </div>
</div>
       
    );
};


/**
 * Three places to store images
 * 1. Third party image hosting server 
 * 2. File system of your server
 * 3. mongodb (database)
*/

export default AddProduct;