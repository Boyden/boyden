var insertData = function(db, data, callback) {
    //连接到表 site
    var collection = db.collection('path');
    //插入数据
    collection.insert(data, function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
};
var selectFirstData = function(db, response, callback) {
    //连接到表  
    var collection = db.collection('path');
    collection.findOne({}, { limit: 1 }, function(err, result) {
        if (result !== null && result['path'] !== undefined) {
            response.writeHead(200, { 'Content-Type': "text/plain" });
            response.write(result['path']);
            response.end();
            console.log(result['path'].substring(0, 100) + "...");
        } else {
            response.writeHead(200, { 'Content-Type': "text/plain" });
            response.write("None");
            response.end();
            console.log("None");
        }
        collection.remove(result, function(err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
        });
    });

};
var delData = function(db, callback) {
    //连接到表  
    var collection = db.collection('path');
    //删除第一个数据
    var whereStr = collection.findOne();
    collection.remove(whereStr, function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
};
module.exports = {
    "insertData": insertData,
    "selectFirstData": selectFirstData,
    "delData": delData
};