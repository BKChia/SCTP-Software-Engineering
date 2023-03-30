/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.
    Task 2: 
    - Add code to add patient's name into the array declared in task 1.
    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/



const listpatient = new Array (3);
let patientname;
var x=0
function addPatient(patientName){
    listpatient[x]=patientName;
    x=x+1
}
function listPatient(){
    println (listpatient);
}

addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]
