const resultBtn = document.getElementById('resultBtnMain');
resultBtn.addEventListener('click', function(){
    const inputRegistration = document.getElementById('inputRegistration');
    let registrationNumber = inputRegistration.value;
    const inputRegistrationYear = document.getElementById('inputRegistrationYear');
    let year = inputRegistrationYear.value;
    const resultDisplay = document.querySelector("#displayResult");
    const resultInfo = `
    <table class="table">
                    <h1>Result sheet</h1>
                    <thead>
                      <tr>
                        <th scope="col">1</th>
                        <th scope="col">Name</th>
                        <th scope="col">Name of candidate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">2</th>
                        <td>Registration Number</td>
                        <td>${registrationNumber}</td>
                      </tr>
                      <tr>
                      <th scope="row">3</th>
                        <td>Passing year</td>
                        <td>${year}</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>GPA</td>
                        <td>3.75</td>
                      </tr>
                    </tbody>
                  </table>
                  <br>
                  <br>
                  <button class="btn btn-primary">Print</button>
    `;
    resultDisplay.innerHTML = resultInfo;

})

    


    
