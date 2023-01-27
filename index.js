// code your solution here
function saturdayFun(event = "roller-skate"){
    return `This Saturday, I want to ${event}!`
}
saturdayFun()
saturdayFun("bathe my dog")

let mondayWork = function(event= "go to the office"){
    return `This Monday, I will ${event}.`
}
mondayWork("go to the office")

function wrapAdjective(event = "*"){
    return function(inner = "special"){
        return `You are ${event}${inner}${event}!`
    }
}
wrapAdjective("%")("a dedicated programmer");