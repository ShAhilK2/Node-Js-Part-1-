// fs file system 

import path = require("path")
import fs from "fs"
import fsPromises from "fs/promises"
const DEMO_FOLDER_PATH = path.join(process.cwd(), 'file-system','fs-demo');
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'sync-note.txt');
const CALLBACK_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'callback-note.txt');
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, 'promise-note.txt');



function ensureDemoFolderExist():void{
    if(!fs.existsSync(DEMO_FOLDER_PATH)){
        fs.mkdirSync(DEMO_FOLDER_PATH, {recursive: true});
    }
}
type FileResult = {
    style : string;
    fileName : string;
    content: string;
    sizeInBytes: number;
}


// create folders 
// write files 
// read files
// check file information
// delete files


// Three ways 

// 1. Synchronous (Blocking)
// 2. Asynchronous (Non-blocking)
// 3. Promises


// 1. Synchronous (Blocking)
// - Blocks the execution of the program until the operation is complete
// - Simple and easy to understand
// - Not suitable for I/O operations

// fs.readdirSync('./');

// 2. Asynchronous (Non-blocking)
// - Does not block the execution of the program
// - Suitable for I/O operations
// - Uses callbacks


// 3. Promises
// - Modern way of handling asynchronous operations
// - More readable and easier to debug
// - Uses .then() and .catch() methods


// 1 sync example 
// small startup scripts
// local demos
// build scripts 
// not used in http req handles,high traffic apis,background jobs
function runSyncExample(): FileResult{
    // Write content in a file 
    fs.writeFileSync(SYNC_FILE_PATH, 'created using sync fs method',"utf-8");

    fs.appendFileSync(SYNC_FILE_PATH, '\nAppended content using sync fs method',"utf-8");

    // Read content from a file 
    const content = fs.readFileSync(SYNC_FILE_PATH, "utf-8");

    // Get file information 
    const stats = fs.statSync(SYNC_FILE_PATH);

    return {
        style: "sync",
        fileName: path.basename(SYNC_FILE_PATH),
        content: content,
        sizeInBytes: stats.size
    };
}



// 2. Callback Example

function runCallBackExample(): Promise<FileResult> {
    return new Promise((resolve, reject) => {
        
        fs.writeFile(CALLBACK_FILE_PATH, 'created using callback fs method', "utf-8", (writeError) => {
            if (writeError) {
                reject(writeError);
                return;
            }

            fs.appendFile(CALLBACK_FILE_PATH, '\nAppended content using callback fs method', "utf-8", (appendError) => {
                if (appendError) {
                    reject(appendError);
                    return;
                }

                // 2. Use fs.readFile (async), NOT fs.readFileSync
                // 3. Extract 'content' from the callback parameter
                fs.readFile(CALLBACK_FILE_PATH, "utf-8", (readError, content) => {
                    if (readError) {
                        reject(readError);
                        return;
                    }
            
                    // 4. fs.stat must be INSIDE the readFile callback to ensure order
                    fs.stat(CALLBACK_FILE_PATH, (statError, stats) => {
                        if (statError) {
                            reject(statError);
                            return;
                        }
                        
                        resolve({
                            style: "callback",
                            fileName: path.basename(CALLBACK_FILE_PATH),
                            content: content,
                            sizeInBytes: stats.size
                        });
                        
                    }); // Close fs.stat
                }); // Close fs.readFile
            }); // Close fs.appendFile
        }); // Close fs.writeFile
    }); // Close Promise
} // Close Function




async function runPromiseExample() : Promise<FileResult>{
    await fsPromises.writeFile(PROMISE_FILE_PATH, "Content from promises", "utf-8");


    await fsPromises.appendFile(PROMISE_FILE_PATH, "\nAppended content using promises", "utf-8");
    const content = await fsPromises.readFile(PROMISE_FILE_PATH, "utf-8");
    
    const stats = await fsPromises.stat(PROMISE_FILE_PATH);
    return {
        style: "promise",
        fileName: path.basename(PROMISE_FILE_PATH),
        content: content,
        sizeInBytes: stats.size
    };
}


async function main(){
    try {
        ensureDemoFolderExist();
        const syncResult = runSyncExample();
        const callbackResult = await runCallBackExample();
        const promiseResult = await runPromiseExample();
        
        console.log([syncResult, callbackResult, promiseResult]);
        
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error in main function:', message);  
    }
}

main()
