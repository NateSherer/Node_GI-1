// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// const names = ['Andrew', 'Jen', 'Jess']
// const shortNames = names.filter((name) => {
//     return name.length
// })

// const geocode = (address, callback) => {
//     setTimeout(() => {
//     const data = {
//         latitude: 0,
//         longitude: 0
//     }

//     callback(data)
// }, 2000)
// }

// geocode('Philadelphia', () => {
// console.log(data)
// })

const add = (a, b, callback) => {
    setTimeou(() => {
        callback(a + b)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should pring 5
})