// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router';
// import { AuthContext } from '../../../contexts/AuthProvider';
// // import { useNavigation } from 'react-day-picker';
// import Loading from '../../../Pages/Shared/Loading/Loading';
// import CheckoutForm from './CheckoutForm';


// const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);
// console.log(stripePromise);

// const Payment = () => {
//     const {isLoading}=useContext(AuthContext);
//     const booking = useLoaderData();
//     console.log(booking);
//     // const navigation = useNavigation();
//     const { treatment, price, appointmentDate, slot } = booking;
//     // if(navigation.state === "loading"){
//     //     return <Loading></Loading>
//     // }
//     if(isLoading){
//         <Loading></Loading>
//     }
//     return (
//         <div>
//             <h3 className="text-3xl">Payment for {treatment}</h3>
//             <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
//             <div className='w-96 my-12'>
//                 <Elements stripe={stripePromise}>
//                     <CheckoutForm
//                         booking={booking}
//                     />
//                 </Elements>
//             </div>  
//         </div>
//     );
// };

// export default Payment;