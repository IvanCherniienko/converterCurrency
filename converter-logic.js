const VAL = {
    usd: 0.027,
    eur: 0.026,
    pln: 0.12
}

function calculate({uah, currency}) {
    if (!VAL[currency]) {
        return null
    }

    return uah * VAL[currency]
}