/**
 * Created by ruslan on 08.10.16.
 */
const http = require('http'),
    fs = require('fs'),
    express = require('express'),
    app = express();

app.set('port',process.env.PORT || 3000);
app.use('/', express.static(__dirname));
app.listen(app.get('port'), function(){
    console.log('Сервер запущен на localhost:'+app.get('port')+' ; нажмите CTRL+C для завершения');
});