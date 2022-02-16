document.getElementById('case-plus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseAmountText = caseInput.value;
    const caseAmount = parseInt(caseAmountText);
    caseInput.value = caseAmount+1;
});