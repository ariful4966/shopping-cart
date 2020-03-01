// Frist Item
// 1st Button
const plusIcon = document.getElementById("plusIcon");
plusIcon.addEventListener("click", function(){
    const number = document.getElementById("number").value++;
    // add mobail value
    const incrimentAmount = document.getElementById("incrimentAmount").innerText;
    const incrimentAmountNumber = parseFloat(incrimentAmount);
    const incrimentFirstAmount = incrimentAmountNumber + 1219;

    document.getElementById("incrimentAmount").innerText = incrimentFirstAmount;
    // add Mobail netTotal value
    const netTotal = document.getElementById("netTotal").innerText;
    const netTotalNumber = parseFloat(netTotal);
    const netTotalAmount = netTotalNumber + 1219;

    document.getElementById("netTotal").innerText = netTotalAmount;
    //Add  Mobail value grandTotal
    const grandTotal = document.getElementById("grandTotal").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalAmount = grandTotalNumber + 1219;
    document.getElementById("grandTotal").innerText = grandTotalAmount;


})
// 2nd Button
const minusIcon = document.getElementById("minusIcon");
minusIcon.addEventListener("click", function(){
    const number = document.getElementById("number").value--;
    // munis Mobail value
    const incrimentAmount = document.getElementById("incrimentAmount").innerText;
    const incrimentAmountNumber = parseFloat(incrimentAmount);
    const incrimentFirstAmount = incrimentAmountNumber -1219;

    document.getElementById("incrimentAmount").innerText = incrimentFirstAmount;
    // munis Mobail value NetTotal
    const netTotal = document.getElementById("netTotal").innerText;
    const netTotalNumber = parseFloat(netTotal);
    const netTotalAmount = netTotalNumber - 1219;

    document.getElementById("netTotal").innerText = netTotalAmount;
    //Munis Mobail value grandTotal
    const grandTotal = document.getElementById("grandTotal").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalAmount = grandTotalNumber - 1219;
    document.getElementById("grandTotal").innerText = grandTotalAmount;
})

// Last Item

// 1st Button
const plusIcon2 = document.getElementById("plusIcon2");
plusIcon2.addEventListener("click", function(){
    const number2 = document.getElementById("number2").value++;
    //Add Casin Value
    const incrimentAmount2 = document.getElementById("incrimentAmount2").innerText;
    const incrimentAmount2Number = parseFloat(incrimentAmount2);
    const incrimentLastAmount2 = incrimentAmount2Number +59;
    document.getElementById("incrimentAmount2").innerText = incrimentLastAmount2;
    // add Casin Velue Net total
    const netTotal = document.getElementById("netTotal").innerText;
    const netTotalNumber = parseFloat(netTotal);
    const netTotalAmount = netTotalNumber + 59;

    document.getElementById("netTotal").innerText = netTotalAmount;
    //Add casin Mobail value grandTotal
    const grandTotal = document.getElementById("grandTotal").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalAmount = grandTotalNumber + 59;
    document.getElementById("grandTotal").innerText = grandTotalAmount;
})
//2nd Button
const minusIcon2 = document.getElementById("minusIcon2");
minusIcon2.addEventListener("click", function(){
    const number2 = document.getElementById("number2").value--;
    //Munis Casin value
    const incrimentAmount2 = document.getElementById("incrimentAmount2").innerText;
    const incrimentAmount2Number = parseFloat(incrimentAmount2);
    const incrimentLastAmount2 = incrimentAmount2Number -59;
    document.getElementById("incrimentAmount2").innerText = incrimentLastAmount2;
    //Munis casin Mobail value NetTotal
    const netTotal = document.getElementById("netTotal").innerText;
    const netTotalNumber = parseFloat(netTotal);
    const netTotalAmount = netTotalNumber - 59;

    document.getElementById("netTotal").innerText = netTotalAmount;
    //Munis casin Mobail value grandTotal
    const grandTotal = document.getElementById("grandTotal").innerText;
    const grandTotalNumber = parseFloat(grandTotal);
    const grandTotalAmount = grandTotalNumber -59;
    document.getElementById("grandTotal").innerText = grandTotalAmount;
})