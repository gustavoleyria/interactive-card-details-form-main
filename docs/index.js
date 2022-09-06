/*function onChangeNumber(){
    let cardNumber = document.getElementById('cardNumber').value
    document.getElementById('frontNumber').innerHTML = cardNumber
    console.log(cardNumber)
    console.log(frontNumber)
}*/
function onChangeNumber(){
    let cardNumber = document.getElementById('cardNumber')
    let frontNumber = document.getElementById('frontNumber') 
    cardNumber.addEventListener('input', changeNumber)
    function changeNumber (e){
        e.preventDefault();
        frontNumber.textContent = e.target.value
    }
    console.log(cardNumber)
    console.log(frontNumber)
}
function onChangeName(){
    let cardName = document.getElementById('cardName')
    let frontName = document.getElementById('frontName')
    cardName.addEventListener('input', changeName)
    function changeName (e){
        e.preventDefault();
        frontName.textContent = (e.target.value).toUpperCase()

    }   
    console.log(cardName)
    console.log(frontName)
}
function onChangeCVC(){
    let cardCVC = document.getElementById('cardCvc')
    let frontCVC = document.getElementById('cvcFront')
    cardCVC.addEventListener('input', changeCVC)
    function changeCVC(e){
        e.preventDefault();
        frontCVC.textContent = e.target.value
    }   
    console.log(cardCVC)
    console.log(frontCVC)
}
function onChangeMonth(){
    let cardDateM = document.getElementById('cardDateM')
    let frontMonth = document.getElementById('frontMonth')
    cardDateM.addEventListener('input', changeDateM)
    function changeDateM(e){
        e.preventDefault();
        frontMonth.textContent = e.target.value
    }   
    console.log(cardDateM)
    console.log(frontMonth)
}
function onChangeYear(){
    let cardDateY = document.getElementById('cardDateY')
    let frontYear = document.getElementById('frontYear')
    cardDateY.addEventListener('input', changeDateY)
    function changeDateY(e){
        e.preventDefault();
        frontYear.textContent = e.target.value
    }   
    console.log(cardDateM)
    console.log(frontMonth)
}

function Accept(e){
    let front = document.getElementById('forms')
    let end = document.getElementById('end')
    let reset = document.getElementById('buttonAccept')
    console.log(front)
    console.log(end)
    reset.addEventListener('click', showReset)
    function showReset(e){
        front.style.display = "none"
        end.style.display= "grid"
    }
}

function Reset(e){
    let front = document.getElementById('forms')
    let reset = document.getElementById('buttonReset')
    let end = document.getElementById('end')
    console.log(front)
    console.log(end)
    reset.addEventListener('click', showForm)
    function showForm(e){
        front.style.display = "grid"
        end.style.display= "none"
    }

}

