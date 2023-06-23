import React from 'react'
import { LineChart, Line } from 'recharts';
import { CartesianGrid, XAxis, Tooltip, Legend, YAxis } from "recharts"


const data = [
    { name: "", Guest: 200, User: 100 },
    { name: "Week1", Guest: 400, User: 410 },
    { name: "Week2", Guest: 200, User: 150 },
    { name: "Week3", Guest: 300, User: 420 },
    { name: "Week4", Guest: 200, User: 190 },
    // Add more data points as needed
];

const Chart = () => {
    return (
        <div className='h-[300px] bg-[#FFF] rounded-lg mb-4 px-3 md:px-0'>

            <div className="flex flex-row justify-between p-3 items-center">
                <div>
                    <p className='font-bold text-lg'>Activities</p>
                    <p>May - June 2021</p>
                </div>


                <ul className='flex flex-row justify-end'>
                    <li className='flex flex-row mr-2'>
                        <div className='w-3 h-3 rounded-full bg-[#E9A0A0] m-[6px]'></div>
                        <p>Guest</p>
                    </li>
                    <li className='flex flex-row mr-2'>
                        <div className='w-3 h-3 rounded-full bg-[#98D89E] m-[6px]'></div>
                        <p>User</p>
                    </li>
                </ul>
            </div>

            <div className='desktop'>
                <LineChart width={1000} height={220} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
                    <Line type="monotone" dataKey="User" stroke="#82ca9d" />
                </LineChart>
            </div>
            
            <div className='mobile overflow-x-scroll'>
                <LineChart width={400} height={220} data={data}
                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
                    <Line type="monotone" dataKey="User" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    )
}

export default Chart
