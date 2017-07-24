var request = require("request");

// TODO form query params as necessaary

module.exports = {
    retreiveData: function(req, res, next) {
    return new Promise(function(resolve, reject) {
        request({
            method: 'GET',
            url: process.env.API_GET_URL,
            json: true,
            body: ""
      },function(error, response, body) {
        if (error) {
            reject(error);
        } else {
            resolve(response.body);
        }
      });
    }).catch(function(error) {
        res.locals.error = {
            statusCode: error.statusCode,
            message: error.message
      };
      next();
    }).then(function(response) {
        res.locals.response = response;
        next();
    });
},
    makePayment: function(req, res, next) {
    return new Promise(function(resolve, reject) {
        request({
            method: 'POST',
            url: process.env.API_POST_URL,
            json: true,
            body: ""
      },function(error, response, body) {
        if (error) {
            reject(error);
        } else {
            resolve(response.body);
        }
      });
    }).catch(function(error) {
        res.locals.error = {
            statusCode: error.statusCode,
            message: error.message
      };
      next();
    }).then(function(response) {
        res.locals.response = response;
        next();
    });
    }

};
