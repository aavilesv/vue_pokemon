import pokemonApi from '@/api/pokemonApi'
const getPokemoms =() =>{
    const pokemomsArr=Array.from(Array(650))
    return pokemomsArr.map((_,index)=> index+1)
}

const getPokemonOptions= async()=>{
    const mixedpokemos = getPokemoms().sort(()=>Math.random() -0.5)// sort mayor a algo
    const pokemos = await getpokemonname(mixedpokemos.splice(0,4))
//    console.table(pokemos)
    return pokemos
}
const getpokemonname= async([a,b,c,d] =[]) =>{
    //const resp =await pokemonApi.get(`/1`)
    //console.log(resp.data.name)
    ///console.log(a,b,c,d)
    const promiseArr=[
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    const [p1,p2,p3,p4] = await Promise.all(promiseArr)
    return [{name:p1.data.name, id:p1.data.id},
        {name:p2.data.name, id:p2.data.id},
        {name:p3.data.name, id:p3.data.id},
        {name:p4.data.name, id:p4.data.id}]
}

export default getPokemonOptions

