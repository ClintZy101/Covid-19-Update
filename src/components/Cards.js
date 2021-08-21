import React from 'react'
import CountUp from 'react-countup'

export const Cards = ({ data: {confirmed, recovered, deaths, lastUpdate }}) => {
   if(!confirmed) {
       return <h1 className="mt-16 font-bold">Loading...</h1>
   } 
    return (
        <div className=" flex space-x-4 m-auto">
            <div className="m-3 w-40 border shadow-md rounded-sm text-center ">
                <h1 className="p-3">Confirmed Cases</h1>
                <CountUp 
                    start={0}
                    end={confirmed.value}
                    duration={3}
                    separator=","
                />
                <p>{new Date(lastUpdate).toDateString()}</p>
                <div className="bg-blue-600 h-3 mt-2"></div>
            </div>
            <div className="m-3  w-40 border shadow-md rounded-sm text-center">
                <h1 className="p-3">Recovered</h1>
                <CountUp 
                    start={0}
                    end={recovered.value}
                    duration={3}
                    separator=","
                />
                <p>{new Date(lastUpdate).toDateString()}</p>
                <div className="bg-green-600 h-3 mt-2"></div>
            </div>
            <div className="m-3  w-40 border shadow-md rounded-sm text-center">
                <h1 className="p-3">Deaths</h1>
                <CountUp 
                    start={0}
                    end={deaths.value}
                    duration={3}
                    separator=","
                />
                <p>{new Date(lastUpdate).toDateString()}</p>
                <div className="bg-red-600 h-3 mt-2"></div>
            </div>
        </div>
    )
}
