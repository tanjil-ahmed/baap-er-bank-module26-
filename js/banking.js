// get deposit input value function
function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const currentDepositeAmount = parseFloat(depositAmountText);
    depositInput.value = ''; 
    return currentDepositeAmount;
}

document.getElementById('deposit-btn').addEventListener('click',function(){
    // get the deposit input
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const currentDepositeAmount = parseFloat(depositAmountText);
    const currentDepositeAmount = getInputValue();

    // showing the value deposit box
    const currentDepositedDisplay = document.getElementById('deposited-input-amount');
    const currentDepositedAmountText = currentDepositedDisplay.innerText;
    const previousDepositedAmount = parseFloat(currentDepositedAmountText);
    console.log(previousDepositedAmount); 
    //const totalDepositedAmount = previousDepositedAmount + currentDepositeAmount;
    currentDepositedDisplay.innerText = previousDepositedAmount + currentDepositeAmount;
    
    // Balnace Update
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat(totalBalanceText);
    console.log(previousTotalBalanceAmount); 
    //const newTotalBalance = previousTotalBalanceAmount + currentDepositeAmount;
    totalBalance.innerText = previousTotalBalanceAmount + currentDepositeAmount;

    // input field reset
   // depositInput.value = ''; 
});
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // geting the withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const currentWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(currentWithdrawAmount);

    // display in withdraw box
    const currentWithdrawDisplay = document.getElementById('withdraw-input-amount');
    const currentWithdrawAmountText = currentWithdrawDisplay.innerText;
    const previousWithdrawAmount = parseFloat(currentWithdrawAmountText);

    // const newWithdrawTotal = previousWithdrawAmount + withdrawAmount;
    currentWithdrawDisplay.innerText = previousWithdrawAmount + currentWithdrawAmount;

    //Update Balance Display
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalanceAmount = parseFloat(totalBalanceText);
    const newTotalBalance = previousTotalBalanceAmount - currentWithdrawAmount;
    totalBalance.innerText = newTotalBalance

    withdrawInput.value = "";
    

 });