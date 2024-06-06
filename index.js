let spsave = require("spsave").spsave;

let coreOptions = {
    siteUrl: process.env.SITE_URL,
};

let creds;
if (process.env.SPO_AUTH == 'true') {
    creds = {
        clientId: process.env.USER,
        clientSecret: process.env.PASSWD
    }; 
} else {
    creds = {
        username: process.env.USER,
        password: process.env.PASSWD
    };
}

let fileOptions = {
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
