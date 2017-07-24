var callApi = require(__dirname + '/app/services/api-caller');
var dummyData = require(__dirname + '/app/temp/dummy-data');

module.exports = function(app) {

// index routes
app.get('/', function(req, res) {
    res.render('index');
});

// TODO switch out for callAPI
app.post('/request-data', [callApi.retreiveData, function(req, res, next) {
    console.log(res.locals.response);
    res.render('nunjucks/partials/data-table');
}]);

};
