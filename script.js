let bill = 120
let numOfppl = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'Great'){
        return bill * .2
    }else if (quality === 'Good'){
        return bill *.15
    }else if(quality === 'Poor'){
        return bill * .1
    }else {
        //altert("Please enter a valid value")
    }
}
let tip = calculateTip(serviceQuality)

function calculateTotalBill (bill,tip){
    return bill + tip
}
let totalBill = calculateTotalBill(bill,tip)

//the parameters in a function can be the same or different from your variables


function calculateAmountPerPerson(TotalBill, numOfppl){
    return TotalBill / numOfppl
}

//the 'AmtPerPerson' is a new variable that is being defined by the calculateAmountPerPerson function

let AmtPerPerson = calculateAmountPerPerson(totalBill,numOfppl)
console.log('Tip: $' + tip)
console.log('Total Bill $' + totalBill)
console.log('Amount per person $' + AmtPerPerson)