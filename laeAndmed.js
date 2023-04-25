const paringuUrl = `https://api.open-meteo.com/v1/forecast?latitude=58.3780&longitude=26.7290&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`

async function loeAndmed() {
    const response = await fetch(paringuUrl)
    const andmed = await response.json()
    console.log(andmed.current_weather)
}

loeAndmed()