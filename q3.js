const dog = {
    petName:"Bobby",
    breed: "Poodle"
};
// Task 2: Add code here
let txt = "";
for (let x in dog) {
  txt += dog[x]+" ";
};
