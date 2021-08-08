let bill = null
let tip = null
let ppl = null
let tip_total = null
let total = null
let active_tip = null


window.onload = () =>{
    const numInputs = document.querySelectorAll('input[type="number"]')
    numInputs.forEach( (i) =>{
        i.addEventListener('keypress', (evt) => {
            //ignore input if char is decimal point and input allows decimals
            if(evt.charCode === 46 && i.dataset.type === 'decimal'){
                return
            }
            if(evt.charCode < 48 || evt.charCode > 57) evt.preventDefault();
        })
    })
}

function calc(){
    if(!bill || !ppl || !tip || (bill < 0 || ppl < 0 || tip < 0)){
        tip_total = 0
        total = 0
    }
    else{
        const calc_total_tip = bill * (tip / 100)
        tip_total = Math.round((calc_total_tip / ppl +Number.EPSILON) *100) /100
        total = (Number(bill) + Number(calc_total_tip)) / ppl
        total = Math.round((total + Number.EPSILON) * 100) / 100
    }
    document.querySelector('#output-tip-per-person').innerHTML = `$ ${tip_total}`
    document.querySelector('#output-total-per-person').innerHTML = `$ ${total}`
}

const setBillTotal = (val) =>{
    // check the input if it is a valid number or valid decimal
    const input = document.querySelector('input[name="bill-total"]')
    if(val === '' || val < 0){
        bill = null
        input.classList.add('invalid-input')
        document.querySelector('#bill-err').innerHTML = "Invalid number"
    }else{
        input.classList.remove('invalid-input')
        document.querySelector('#bill-err').innerHTML = ""
    }
    //assign value and call the calculate
    bill = val
    calc()
}

const setTip = (val) =>{
    //assign the active class to chosen button and remove from the previous
    const button = document.querySelector(`button[data-button="${val}"]`)
    button.classList.add('button-active')
    
    //add check for active tip
    if(active_tip && active_tip !== val){
        document.querySelector(`button[data-button="${active_tip}"]`).classList.remove('button-active')
    }else{
        const input = document.querySelector('input[name="custom-tip"]')
        input.classList.remove('tip-input-active')
        input.value = ''
    }
    active_tip = val
    tip = val
    calc()
}

const setCustomTip = (val) =>{
    if(active_tip){
        //active tip is not null
        document.querySelector(`button[data-button="${active_tip}"]`).classList.remove('button-active')
        active_tip = null
    }
    document.querySelector('input[name="custom-tip"]').classList.add('tip-input-active')
    tip = val
    if(tip === '') tip = null
    calc()
}

const setPeople = (val) =>{
    //check if ppl is 0
    if(val <= 0){
        document.querySelector('input[name="number_of_ppl"]').classList.add('invalid-input')
        document.querySelector('#ppl-err').innerHTML = "Invalid number"
    }else{
        document.querySelector('input[name="number_of_ppl"]').classList.remove('invalid-input')
        document.querySelector('#ppl-err').innerHTML = ""
    }
    ppl = val
    if(ppl === -1) ppl = null
    calc()
}
