function AsukohtDetailid({asukoht}) {
    if (asukoht.andmed == null) {
        return <h3>Laen andmeid ... </h3>
    }
    return (
        <>
            <h2>
                Tänane ilm linnas {asukoht.nimi}
            </h2>
            <div>
                <p>Aeg: {asukoht.andmed.aeg}</p>
                <p>Temperatuur: {asukoht.andmed.temperatuur}</p>
                <p>Tuule kiirus: {asukoht.andmed.tuuleKiirus}</p>
            </div>

        </>
    )
}

export default AsukohtDetailid