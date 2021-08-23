import React from 'react'
import { Bar } from 'react-chartjs-2'

export const BarChart = ({ countryData: { confirmed, recovered, deaths }, country }) => {
    const barChart = (
        confirmed 
        ? (<Bar 
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['#2563EB', '#10B981', '#DC2626',],
                    data:[confirmed.value, recovered.value, deaths.value]
                    
                }]

            }}
            options={{
                legend:{ display: false},
                title: {display: true, text:`Current state in ${country}`},
            }}
        />) : null
    );
    return (
        <div className="">
            {barChart}
        </div>
    )
}
