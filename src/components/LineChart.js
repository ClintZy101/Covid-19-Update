import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../api'
import { Line } from 'react-chartjs-2'

export const LineChart = () => {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchApi();
    }, [])

    const lineChart = (
        // if there is daily data
        dailyData.length?
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5',
                        fill: true,
                    }]
                }}
            /> : null
    );


    return (
        <div className="mt-5 mx-3 text-center my-3">
            <h1 className="">Global Chart</h1>
            {dailyData && lineChart}
        </div>
    )
}
