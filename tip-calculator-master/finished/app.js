document.querySelector('#tip-form').onchange = function(){
  // Selecting element
  const bill =Number(document.querySelector('#totalBill').value);
  const tip = document.querySelector('#tipInput').value;
  const tipOutput = document.querySelector('#tipOutput');
  const tipAmount = document.querySelector('#tipAmount');
  const totalBillWithTip = document.querySelector('#totalBillWithTip');
  const result = document.querySelector('#results');
  //Calculation
  const tipvalue = bill * (tip / 100);
  const finalBill = bill + tipvalue;
  tipAmount.value = tipvalue.toFixed(2);
  totalBillWithTip.value = finalBill.toFixed(2);
  
 //  Showing result
  tipOutput.innerHTML = `${tip}%`;
  result.style.display =' block';
}