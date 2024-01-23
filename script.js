

//Get the input values ffrom HTML forms
function calculateAndDisplay(){
    let bill = parseFloat(document.getElementById('totalBill').value)
    let NumOfPpl =parseInt(document.getElementById('NumOfPpl').value)
    let serviceQuality = document.getElementById('ServiceQuality').value

    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill (bill,tip)
    let amtPerPers = calculateAmtPerPers(totalBill,NumOfPpl)

    //display the results in HTML document
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' +amtPerPers.toFixed(2)
}

//Helper function to calculate tip based on the bill and the Service Quality. We need to assign a value to "calculateTip","calculateTotalBill, and calculateAmtPerPers" which are helper functions for tip,totalBill, and amtPerPers
function calculateTip(bill,quality){
    if(quality === 'Great'){
        return bill * .2
    }else if (quality === 'Good'){
        return bill *.15
    }else if(quality === 'Poor'){
        return bill * .1
    }else {
        return 0
    }
}
function calculateTotalBill(bill,tip){
    return bill + tip 
}

function calculateAmtPerPers(totalBill,NumOfPpl){
    return totalBill / NumOfPpl
}
















































































/* let bill = 120
let numOfppl = 5
let serviceQuality = 'Great'


//the function "CalculateTip" calculates the tip based on the parameter "quality"
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
console.log('Amount per person $' + AmtPerPerson) */