var express = require('express');
var http = require('http');
var https = require('https');
var request = require('request');
var Promise = require('promise');

function getToken() {    
    var post_data = "grant_type=client_credentials";
    var post_options = {
        host: 'merlin.mobius.umsystem.edu',
        port: '443',
        path: '/iii/sierra-api/v4/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic MDBldUpjVHVQUDg1d0ZaaFp5SlVRQXRya25LQTpsZXhtaXp6b3U='
        }
    };
    return new Promise(function(resolve, reject) {
        // https.request('post_options', function (response, error) {
        //     console.log(response);

        //     // if (!error && response.statusCode == 200) {
        //     //     resolve(response.body);
        //     // } else {
        //     //     reject(response);
        //     // }
        // });
        var req = https.request(post_options, function(response) {
            var responseData = "";
            response.on('data', function (chunk) {
              responseData += chunk;
            });
            response.on('end', function () {
                // console.log('responseData? ' + responseData);
                resolve(responseData);
            });


            // console.log('STATUS: ' + response.statusCode);
            // console.log('HEADERS: ' + JSON.stringify(response.headers));
        })
        //   req.write(post_data);
        req.end();
    })
}
module.exports.getToken = getToken;

function getBook() {
    return new Promise(function (resolve, reject) {
        request('https://merlin.mobius.umsystem.edu/iii/sierra-api/v4/bibs/search?limit=10&offset=0&fields=author,title,publishYear,locations,&locations=cmiib&index=Rightresultfull&text=the desert of the real'), function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(response);
            }
        }
    })
}