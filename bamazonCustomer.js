var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Moebrown2633",
    database: "bamsondb"
});
connection.connect(function(err, ress) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  storeItums();
  
});

function storeItums() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + " | " + res[i].product_name  + " | " + res[i].department_name + " | " + res[i].price);
    }
     
  });

  inquirer.prompt({
      name: "products",
      type: "input",
      message: "what item number do you want?"
      
    },
    {
      name: "quantity",
      type: "input",
      message: "how many do whant?"

    }).then(function(answer){ 
      for (var i = 0; i < res.length; i++) {
         if(answer.products === res[i].item_id){
          console.log( "hi");
          
        }
        
      }  
     
      })
    } 
    
