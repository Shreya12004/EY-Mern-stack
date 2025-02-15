function bmifunction(){
    var weight=parseInt(document.getElementById("weight"));
    var height=parseInt(document.getElementById("height"));
    var bmi = weight / (height * height);
    console.log("BMI:" + bmi)

    if (bmi < 18.5) {
    console.log("Underweight")
    } 
    else if (bmi > 18.5 && bmi < 24.9) {
    console.log("Normal Weight")
    }
     else if (bmi > 25 && bmi < 29.9) {
    console.log("Overweight")
    }
    else {
    console.log("Obese")
    }   
    document.getElementById('restext').innerText="value is :" +bmi;

}

