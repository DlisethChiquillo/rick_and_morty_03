const url = '/rickandmorty/character/3'

const splitear = url.split('/')

console.log(splitear);

const id = splitear.at(-1)
console.log(id);