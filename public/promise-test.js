// Create an application to bake a pie.

// let type = 'apple'
// let ingredients = []

// const prepareIngredients = () => {
//     setTimeout(() => {
//       ingredients = [type, 'flour', 'sugar', 'eggs', 'baking powder']
//       console.log(`Ingredients prepared for the ${type} pie: ${ingredients}`)
//     }, 2000);    
// }

// const bakePie = () => {
    
//     if (ingredients.length != 0) {
//         console.log('Putting the pie in the oven!')
//         setTimeout(() => {
//             console.log(`It's finally ready! Enjoy your ${type} pie`)
//     }, 3000)   
//     } else {
//         console.log(`Can't bake the pie. No ingredients have been prepared.`)
//     }
// }

// console.log('Starting the pie..')
// prepareIngredients()
// bakePie()

let type = 'apple'

const prepareIngredients = (type) => {
    // A promise represents the eventual completion of an asynchronous function and the value returned by that function.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ingredients = [type, 'flour', 'sugar', 'eggs', 'baking soda']
            console.log(`Ingredients prepared. ${ingredients}`)
            resolve(ingredients)
            // When the promise is fulfilled, it will pass ingredients down the chain.
        }, 2000)
    })
}

const bakePie = (ingredients) => {
    return new Promise((resolve, reject) => {
        if (ingredients.length != 0) {
            console.log('Putting the pie in the oven!')
            setTimeout(() => {
                resolve(`${type} pie`)
            }, 3000)   
        } else {
            reject(new Error(`Can't bake the pie. No ingredients have been prepared.`))
        }  
    })
}

prepareIngredients(type)    // This function "resolves" with ingredients.
.then(ingredients => bakePie(ingredients))  // Promise resolves with pie.
.then(pie => {console.log(`The ${pie} is delicious!`)})
.catch(error => {console.log(error)})