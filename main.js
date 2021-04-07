function createPara1(){
    inputs = [];
    for(var i = 1; i<=6;i++){
        inputs.push(document.getElementById("para_1_input_"+i).value);
    }
    document.getElementById("para_1_display").innerHTML = inputs.join(". ");
}

function createPara2(){
    inputs2 = [];
    for(var i = 1; i<=6;i++){
        inputs2.push(document.getElementById("para_2_input_"+i).value);
    }
    document.getElementById("para_2_display").innerHTML = inputs2.join(". ");
}