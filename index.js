function receivesAFunction(spy) {
    const result = spy()
    return result
}
const returnsANamedFunction = () => {return function theNamedFunction() {
    console.log('I am the named function!')
 }
}
const returnsAnAnonymousFunction = () => {return function () {
    console.log('I am the anonymous function!')
}}