/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. 
*/

const zucchine = [
    {
        varietà: 'A',
        peso: 1.5,
        lunghezza: 8,
    },
    {
        varietà: 'B',
        peso: 2,
        lunghezza: 12,
    },
    {
        varietà: 'A',
        peso: 1.7,
        lunghezza: 18,
    },
    {
        varietà: 'C',
        peso: 1.2,
        lunghezza: 6,
    },
    {
        varietà: 'D',
        peso: 2.2,
        lunghezza: 12,
    },
    {
        varietà: 'A',
        peso: 1.5,
        lunghezza: 8,
    },
    {
        varietà: 'B',
        peso: 2,
        lunghezza: 12,
    },
    {
        varietà: 'A',
        peso: 1.7,
        lunghezza: 18,
    },
    {
        varietà: 'C',
        peso: 1.2,
        lunghezza: 6,
    },
    {
        varietà: 'D',
        peso: 2.2,
        lunghezza: 12,
    },
]
//console.log(zucchine);

let pesoZucchine = 0;
zucchine.forEach(zucchina => {
    pesoZucchine += zucchina.peso;
});

console.log(pesoZucchine);