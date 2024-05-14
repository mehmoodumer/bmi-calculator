let form = document.querySelector("form");

form.addEventListener("submit", (e)=> {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector("#results");
  let alertError = document.querySelector(".alert");

  console.log(height,weight);

  if(height === "" || height < 1 || isNaN(height)){
    alertError.style.display = "block";
    alertError.innerHTML = "Please enter valid <strong>Height</strong>";
  }else if(weight === "" || weight < 1 || isNaN(weight)){
    alertError.style.display = "block";
    alertError.innerHTML = "Please enter valid <strong>Weight</strong>";
  }else {
    alertError.style.display = "none";
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // result.innerHTML = `<span>Result: ${bmi}</span>`;

    if(bmi < 18.6){
      result.innerHTML = `<span>Under Weight: ${bmi}</span>`;
    }else if(bmi > 18.6 && bmi < 24.9){
      result.innerHTML = `<span>Normal Range: ${bmi}</span>`;
    }else if(bmi > 24.9){
      result.innerHTML = `<span>Overweight : ${bmi}</span>`;
    }
  }

})