/* Create by FAbiano de Souza Pereira for Rezolve 
 * This .js bring all information about connetions. 
 * Exemplo: servidor and port.
 * 
 */
'use strict';

var http = require('http');
var https = require('https');
var url = require('url');
var util = require('util');
var stream = require('stream');



var Requisicao = function(request, response) {
response.writeHead(200, {"Content-Type": "text/html"});
response.write("<div><h1>Informações atualizadas dos Deputados</h1><div>");
response.write("");
response.write("");
response.write("");
response.end("");
};
var server = http.createServer(Requisicao);
var servidorLigou = function() {
console.log('Servidor rodando!');
};
server.listen(3000, servidorLigou);