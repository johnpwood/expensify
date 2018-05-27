/* const person = {
    name: 'joe',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 91
    }
}

const { age, name: firstname = 'Anonymous' } = person
const { city, temp: temperature } = person.location

console.log(`${firstname} is ${age}`)

console.log(`it's ${temperature} in ${city}`) */
/* 
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
}

const { name : publisherName = 'self-published' } = book.publisher

console.log(publisherName)

 */

const address = ['444 south juniper', 'Philadelphia', 'Pennsylvania', '19484']

const [ , city, state = 'New York' ] = address

console.log(`You are in ${city}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '2.75']

const [ i, , p ] = item

console.log(`A medium ${i} costs ${p}`)