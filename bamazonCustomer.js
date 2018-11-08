var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Moebrown2633",
    database: "bamsondb"
});



connection.connect(function(err) {
    if (err) throw err;
    store();
  });
  


  function store() {
    
    inquirer
      .prompt({
        name: "idNumber",
        type: "rawlist",
        message: "what id number do you want?",
        choices: ["1", "2","3","4","5","6","7","8","9","10"]
      }) 
      .then(function(answer){
        if (answer.item_id === true){
         console.log("how many do you want?")

         }else {
           console.log("come back again.")
         }


      });
 }

      
  
    

