import * as os from "os"


// os
//  cpu info
// memory 
// home /temp


function runOs() {
    console.log("platform:", os.platform());
    console.log("arch:", os.arch());
    console.log("type:", os.type());
    console.log("release:", os.release());
    console.log("home:", os.homedir());
    console.log("tmpdir:", os.tmpdir());


    const cpus = os.cpus()
    console.log("cpus:", cpus.length);

    if(cpus.length > 0) {
        console.log("first cpu model:", cpus[0].model, cpus[0].speed,cpus[0].times);
    }

    console.log("Total Memory:", os.totalmem());
    console.log("Free Memory:", os.freemem());
}

runOs();
