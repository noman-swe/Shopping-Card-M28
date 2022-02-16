function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    const caseNumberText = caseInput.value;
    let caseNumber = parseInt(caseNumberText);
    if(isIncreasing == true){
        caseNumber = caseNumber + 1;
    }
    else if(caseNumber > 0) {
        caseNumber = caseNumber - 1;
    }
    caseInput.value = caseNumber;
    // update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
}
// case plus
document.getElementById('case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
});

// case minus
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
})