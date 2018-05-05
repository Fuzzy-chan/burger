var orm = require('../config/orm.js');


var burger = {

  selectAll: function(callback){
    orm.selectAll(function(res){
      callback(res);
    });
  },

  insertOne: function(newBurger, callback){
    orm.insertOne(newBurger, function(res){
      callback(res);
    });
  },

  updateOne: function(burger_id, callback){
    orm.updateOne(burger_id, function(res){
      callback(res);
    });
  }

};
module.exports = burger;