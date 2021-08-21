import axios from "axios"

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
try {
    const { data: {confirmed, recovered, deaths, lastUpdate} } = await axios.get(url);

    const modifiedData = {
        confirmed,
        recovered,
        deaths,
        lastUpdate,
    }

    return modifiedData;
    // you can use return {confirmed, recovered, deaths, lastUpdate} ==> without storing them in a variable then returning it

} catch (error) {

}
}


export const fetchDailyData = async () => {
    try {
        const { data} = await axios.get(`${url}/daily`);
        console.log(data)

        const modifiedData = data.map( dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
    
        return modifiedData
        
    } catch (error) {
    
    }
    }