import { useState } from "react"

function LisaAsukoht({lisaKoht}) {
    const [nimetus, setNimetus] = useState('')
    const [lat, setLat] = useState(0.0)
    const [long, setLong] = useState(0.0)

    const andmeteLisamine = (event) => {
        event.preventDefault()
        console.log('Lisa linn ' + nimetus)
        lisaKoht(nimetus, lat, long)
        setNimetus("")
        setLat(0)
        setLong(0)
    }

    return (
        <form onSubmit={andmeteLisamine}>
            <div className="row">
                <div className="col-6">
                <label>Nimi</label>
                <input 
                    type="text" 
                    value={nimetus} 
                    onChange={({target}) => setNimetus(target.value)}
                />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <input 
                        className="kraad-sisend" 
                        type="text" 
                        placeholder="laius" 
                        value={lat} 
                        onChange={({target}) => setLat(target.value)}
                    />
                </div>
                <div className="col-sm-3 kraad-sisend">
                    <input 
                        className="kraad-sisend" 
                        type="text" 
                        placeholder="pikkus" 
                        value={long} 
                        onChange={({target}) => setLong(target.value)}
                    />
                </div>
            </div>
            <input className="btn btn-primary" type="submit" value="Lisa" />
        </form>
    )
}

export default LisaAsukoht