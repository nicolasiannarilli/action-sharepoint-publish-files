var spsave = require("spsave").spsave;
var fs = require('fs');

function trimSlashes(string) {
    return string.replace(new RegExp('/', 'g'), '_');
}

var coreOptions = {
    siteUrl: process.env.SITE_URL,
};
var creds = {
    username: process.env.USER,
    password: process.env.PASSWD
};

var fileOptions = {
    base: process.env.FILE_BASE,
    glob: process.env.FILE_GLOB,
    folder: process.env.LIB_FOLDER
};

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    console.error('Failure');
    process.exit(1);
});
