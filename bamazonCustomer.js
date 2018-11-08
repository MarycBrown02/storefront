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
    start();
  });

  function start() {
    inquirer
      .prompt({
        name: "idNumber",
        type: "rawlist",
        message: "what id number do you want?",
        choices: ["1", "2","3","4","5","6","7","8","9","10"]
      })
      .then(function(answer) {
        
        if (answer.idNumber.toUpperCase() === "how many do you want?") {
          chosenProducts();
         
        }
        else {
          bidAuction();
          // need to change
        }
      });
  }


function chosenProducts() {
 
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    
    inquirer
    //   .prompt([
    //     {
    //       name: "choice",
    //       type: "rawlist",
    //       choices: function() {
    //         var choiceArray = [];
    //         for (var i = 0; i < results.length; i++) {
    //           choiceArray.push(results[i].item_name);
    //         }
    //         return choiceArray;
    //       },
    //       message: "What auction would you like to place a bid in?"
    //     },
    //     {
    //       name: "",
    //       type: "input",
    //       message: "How much would you like to bid?"
    //     }
    //   ])
      .then(function(answer) {
        
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = results[i];
          }
        }

        
        if (chosenItem.highest_bid < parseInt(answer.bid)) {
          
          connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                highest_bid: answer.bid
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("order placed successfully!");
              start();
            }
          );
        }
        // else {
        
        //   console.log("Your bid was too low. Try again...");
        //   start();
        // }
      });
  });
}
