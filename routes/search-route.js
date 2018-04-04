/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = function(main){
  const find = main.controllers.search;
  main.get('/search/bring', search.getDeputados);
};