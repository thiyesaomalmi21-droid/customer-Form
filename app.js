//console.log("hii");
//const txtxAge
const customerArray = [];
function print(){
    //console.log("hii");
    let txtname = document.getElementById("txtName").value;
    let txtage =document.getElementById("txtAge").value;
    let txtaddress = document.getElementById("txtAddress").value;
    let txtsalary = document.getElementById("txtSalary").value;
    console.log(txtname);
    console.log(txtage);
    console.log(txtaddress);
    console.log(txtsalary);

    document.getElementById("lblName").innerHTML=txtname;
    
    let customer = {
        name : txtname,
        age :txtage,
        address : txtaddress,
        salary : txtsalary
    }
    customerArray.push(customer);
    
    console.log(customerArray);

    displayData();
    
}

function displayData(){
    document.getElementById("customertbl").innerHTML=``
    let body = `
        <tr>
                <th>Customer Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Salary</th>
            </tr>
    
    `;

    
    for(let customer of customerArray){
        body +=`
            <tr>
                <td>${customer.name}</td>
                <td>${customer.age}</td>
                <td>${customer.address}</td>
                <td>${customer.salary}</td>
            </tr>
        `;
    }
    document.getElementById("customertbl").innerHTML += body;

}


