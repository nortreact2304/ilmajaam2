function AsukohtDetailid({asukoht}) {
    if (asukoht.andmed == null) {
        return <h3>Laen andmeid ... </h3>
    }

    let paev = "päev"
    if (asukoht.andmed.kasPaev !== 1) {
        paev = "öö";
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
                <p>{paev}</p>
                <p>{asukoht.andmed.tuuleSuund}</p>
                
            </div>

        </>
    )
}

export default AsukohtDetailid