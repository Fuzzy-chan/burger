var connection = require("./connection.js");

var orm ={

    selectAll = function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    insertOne = function(tableInput, newBurger, cb){
        var queryString = ("Insert INTO " + tableInput + "(burger_name) VALUES('"+ newBurger+"');");
        connection.query(queryString, function(err,result){
            if(err){
                throw err;
            }
            location.reload();
        }) 
    },

    updateOne = function(tableInput, state, condition, cb) {
        var queryString = "UPDATE " + tableInput;
    
        queryString += " SET ";
        queryString += state;
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}

module.exports = orm;