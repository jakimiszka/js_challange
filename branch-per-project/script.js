const { resolve } = require("path");

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const bulbasaur = 'https://pokeapi.co/api/v2/pokemon/1';
const charmander = 'https://pokeapi.co/api/v2/pokemon/4';
const squirtle = 'https://pokeapi.co/api/v2/pokemon/7'

// const promise = new Promise((resolve, reject) => {
//     const response = fetch(endpoint);
//     response.then(data => {
//         console.log('data 1: ',data);
//         return data;
//     }).then(data => {
//         console.log('data 2: ', data)
//         if(data.status == 200){
//             resolve(data.json());
//         }else{
//             reject('ERROR');
//         }
//     }); 
// });

const bulbaReponse = fetch(bulbasaur);
const charmReponse = fetch(charmander)
const squirtResponse = fetch(squirtle);

Promise.all([fetch(bulbasaur), fetch(charmander), fetch(squirtle)])
    .then(async ([aa, bb, cc]) => {
        const bulba = await aa.json();
        const charm = await bb.json();
        const squritle = await cc.json();

        return [bulba, charm, squritle];
    }).then(jsonData => {
        console.log(jsonData)
    });

const cancelPromise = () => {
    return new Promise((resolve, reject) => {
        
    });
}
