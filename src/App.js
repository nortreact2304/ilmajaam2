import { useState } from 'react';
import './App.css';
import Asukohad from './Asukohad';
import AsukohtDetailid from './AsukohtDetailid';
import {loeAndmed} from './kontrollerid/andmed.js'

function App() {
  const [aktiivne, setAktiivne] = useState(0)
  const [asukohad, setAsukohad] = useState([
    {
      nimi: 'Tallinn',
      lat: 59.437,
      long: 24.7536,
      andmed: null
    },
    {
      nimi: 'Tartu',
      lat: 59.378,
      long: 26.729,
      andmed: null
    },
    {
      nimi: 'Pärnu',
      lat: 58.23,
      long: 24.30,
      andmed: null
    },
  ])

  const asendaIlmaAndmed = (asukohaIndex, ilmaAndmed) => {
      const uuedAndmed = asukohad.map((asukoht, index) => {
        if (index !== asukohaIndex) {
          return asukoht
        }

        const ilm = {
          temperatuur: ilmaAndmed.temperature,
          aeg: ilmaAndmed.time,
          ilmakood: ilmaAndmed.weathercode,
          tuuleKiirus: ilmaAndmed.windspeed
        }

        return {...asukoht, andmed: ilm}
      })

      setAsukohad(uuedAndmed)
  }

  const muudaAktiivset = async (uusAktiivneIndeks) => {
    setAktiivne(uusAktiivneIndeks)
    const ilmaAndmed = await loeAndmed(
      asukohad[uusAktiivneIndeks].lat,
      asukohad[uusAktiivneIndeks].long,
    )
    asendaIlmaAndmed(uusAktiivneIndeks, ilmaAndmed)
  }

  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>
          Ilmajaam
        </h1>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-sm-5'>
            <Asukohad 
              asukohad={asukohad}
              muudaAktiivset={muudaAktiivset}
            />
          </div>
          <div className='col-12 col-sm-7'>
            <AsukohtDetailid asukoht={asukohad[aktiivne]} />
          </div>

        </div>

      </div>
    </>

  );
}

export default App;
