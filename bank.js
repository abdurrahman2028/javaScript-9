document.getElementById('deposit').addEventListener('click', function() {
    const depositInput = document.getElementById('deposit-input');
    const depositInputValue = depositInput.value;
    const depositInputValueNumber = parseInt(depositInputValue);

    if (depositInput.value === '') {
        document.getElementById('deposit').setAttribute('disabled', true);
    } else {
        document.getElementById('deposit').removeAttribute('disabled');
    }

    const depositParagraph = document.getElementById("depositParagraph");
    const depositParagraphInnerText = depositParagraph.innerText;
    const depositParagraphInnerTextNumber = parseInt(depositParagraphInnerText);
    const result = depositInputValueNumber + depositParagraphInnerTextNumber;
    depositParagraph.innerText = result;

    const totalParagraph = document.getElementById('totalParagraph');
    const totalParagraphInnerText = totalParagraph.innerText;
    const totalParagraphInnerTextNumber = parseInt(totalParagraphInnerText);

    const totalResult = depositInputValueNumber + totalParagraphInnerTextNumber;
    totalParagraph.innerText = totalResult;
    depositInput.value = '';
});

document.getElementById('Withdraw').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = withdrawInput.value;
    const withdrawInputValueNumber = parseInt(withdrawInputValue);

    const totalParagraph = document.getElementById('totalParagraph');
    const totalParagraphInnerText = totalParagraph.innerText;
    const totalParagraphInnerTextNumber = parseInt(totalParagraphInnerText);

    if (withdrawInputValue === '' || withdrawInputValueNumber > totalParagraphInnerTextNumber) {
        alert('Invalid withdraw amount');
        return;
    }

    const newTotal = totalParagraphInnerTextNumber - withdrawInputValueNumber;
    totalParagraph.innerText = newTotal;

    const withdrawParagraph = document.getElementById("withdrawParagraph");
    const withdrawParagraphInnerText = withdrawParagraph.innerText;
    const withdrawParagraphInnerTextNumber = parseInt(withdrawParagraphInnerText);
    const newWithdrawTotal = withdrawInputValueNumber + withdrawParagraphInnerTextNumber;
    withdrawParagraph.innerText = newWithdrawTotal;
    withdrawInput.value = '';
});