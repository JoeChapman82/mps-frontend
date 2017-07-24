/*jshint esversion: 6 */


var dummyData = [];

for(k = 0; k <= 100; k++) {
    var loopObject = {};
    loopObject.accountName = genRandomName();
    loopObject.sortcode = genRandomSortCode();
    loopObject.accountNumber = genRandomActNumber();
    loopObject.paymentReference = genRandomReference();
    loopObject.amountInPence = 1;
    loopObject.transactionId = genRandomId();
    dummyData.push(loopObject);
}

module.exports = dummyData;


    function genRandomString(length) {
        return Math.random().toString(36).substring(2, (length + 2));
    }

    function genRandomSortCode() {
        var sc = "";
        for(i = 0; i <= 2; i++) {
            sc += Math.floor(Math.random() * 89) + 10;
            sc += i != 2 ? "-" : "";
        }
        return sc;
    }

    function genRandomActNumber() {
        return Math.floor(Math.random() * 89999999) + 10000000;
    }

    function genRandomReference() {
        var ref = "UC";
        ref += Math.floor(Math.random() * 8999999) + 1000000;
        return ref;
    }

    function genRandomId() {
        var transId = "";
        transId += genRandomString(4) + "-";
        transId += (Math.floor(Math.random() * 899999) + 100000) + "-";
        transId += genRandomString(7) + "-";
        transId += Math.floor(Math.random() * 89999) + 10000;
        return transId;
    }

    function genRandomName() {
        var namesArray = ["Amanda Carter", "Bobby Davro", "Charlie Chaplin", "David Lynch", "Eric Pickering,", "Felicity Kendall",
                            "George Michael", "Henry Ford", "Indiana Jones", "Karen Emmett", "Lauren Maller", "Mel Griffiths",
                            "Niomi Watts", "Oliver Stone", "Patricia Keats", "Quinten Crisp", "Robert Devereux", "Sam Jones", "Tony Stark",
                            "Veronica Lake", "Wyatt Earp", "Yo Sushi", "Zebra Zebra"];
        var randNum = Math.floor(Math.random() * namesArray.length);
        var name = namesArray[randNum];
        return name;
    }
