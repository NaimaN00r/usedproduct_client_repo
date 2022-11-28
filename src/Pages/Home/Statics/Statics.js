// import React, { PureComponent } from 'react';
// import {
//   ComposedChart,
//   Line,
//   Area,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';



// const Statics = () => {  
// const data = [
//     {
//       month: 'Jan',
//       target: 500,
//       revenue: 600,
//       amt: 1400,
//     },
//     {
//       month: 'Feb',
//       target: 600,
//       revenue: 700,
//       amt: 1506,
//     },
//     {
//       month: 'Mar',
//       target: 650,
//       revenue: 800,
//       amt: 989,
//     },
//     {
//       month: 'Apr',
//       target: 750,
//       revenue: 850,
//       amt: 1228,
//     },
//     {
//       month: 'May',
//       target: 900,
//       revenue: 1008,
//       amt: 1100,
//     },
//     {
//       month: 'June',
//       target: 950,
//       revenue: 1100,
//       amt: 1700,
//     },
//     {
//       month: 'July',
//       target: 1000,
//       revenue: 1250,
//       amt: 1700,
//     },
//     {
//       month: 'Aug',
//       target: 1100,
//       revenue: 1300,
//       amt: 1700,
//     },
//     {
//       month: 'Sept',
//       target: 1200,
//       revenue: 1380,
//       amt: 1700,
//     },
//     {
//       month: 'Oct',
//       target: 1250,
//       revenue: 1450,
//       amt: 1700,
//     },
//     {
//       month: 'Nov',
//       target: 1400,
//       revenue: 1580,
//       amt: 1700,
//     },
//     {
//       month: 'Dec',
//       target: 1450,
//       revenue: 1620,
//       amt: 1700,
//     },
//   ];
//   return (
//     <ComposedChart
//       width={500}
//       height={400}
//       data={data}
//       margin={{
//         top: 20,
//         right: 20,
//         bottom: 20,
//         left: 20
//       }}
//     >
//       <CartesianGrid stroke="#f5f5f5" />
//       <XAxis dataKey="month" scale="band" />
//       <YAxis />
//       <Tooltip />
//       <Legend />
//       <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
//       <Line type="monotone" dataKey="target" stroke="#ff7300" />
//     </ComposedChart>
//   );
// };

// export default Statics;