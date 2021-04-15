// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector("#addForm");
let empTable =document.querySelector("#employees");



// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let count=0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let digit = document.getElementById("id").value;
    let name =document.getElementById('name').value;
    let extt =document.getElementById('extension').value;
    let ema =document.getElementById('email').value;
    let dept =document.getElementById('department').value;
   


    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    	let row = empTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    	let cell1 = row.insertCell();
        let cell2 =row.insertCell();
        let cell3 =row.insertCell();
        let cell4 =row.insertCell();
        let cell5 =row.insertCell();
        
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    // cellID.className= 'form-control';
    cell1.appendChild(document.createTextNode(`${digit}`));
    cell2.appendChild(document.createTextNode(`${name}`));
    cell3.appendChild(document.createTextNode(`${extt}`));
    cell4.appendChild(document.createTextNode(`${ema}`));
    cell5.appendChild(document.createTextNode(`${dept}`));

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-dark btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('delete'));
    cell5.appendChild(deleteBtn);


    deleteBtn.addEventListener('click', EmpDelete);
   

    // RESET THE FORM
   resetForm();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById("id").focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
     count += 1;
     let empcount = document.getElementById("empCount");
     empcount.value =count;

});

// DELETE EMPLOYEE
function EmpDelete (e) {
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    let countUpdate =document.getElementById("count");
    countUpdate.value = countUpdate.value - 1;
};



function resetForm () {
    document.getElementById("addForm").reset();
};