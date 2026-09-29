//  env variables 
//  command line arguments
//  exit code
//  process lifecycle events

//  read backend port from env file 
//  read secret ; eg db_url,secret,google_secret,google_key,password,api keys ,etc
//  read command line arguments


import process from "node:process"

const nodeEnv = process.env["NODE_ENV"] ?? "development"

console.log(nodeEnv)

// process.env values are always  string or undefined 

const port = Number(process.env["PORT"] ?? 8000)

console.log(port)


// In Node.js, process.argv (note the v, short for "argument vector") 
// is an array that contains all the command-line arguments passed when you launched the Node.js process.


// 📦 1. process.argv (The Whole Array)
// This returns an array containing everything typed into the terminal to run the script. By default, Node.js always populates the first two elements of this array:
// • process.argv[0]: The absolute path to the Node.js executable file.
// • process.argv[1]: The absolute path to the JavaScript file being executed.
// 🎯 2. process.argv[2] (The First Custom Argument)
// Because the first two slots (0 and 1) are occupied by system paths, index 2 is the very first slot available for your own custom inputs.

console.log(process.argv)

const command = process.argv[2] ?? "start"
console.log(command)

// fail flag 
// crash flag 


const shouldFail = process.argv.includes("--fail")
const shouldCrash = process.argv.includes("--crash")

//  do not start async here 
//  node is already shutting down 
//  final log,final cleanup

process.on("exit", (code) => {
    console.log("Process finished with exit code", code)
    
})



function runApp():void { 

    console.log({
        command
    })
    if(shouldFail) {
       console.error("Manual fail flag detected")
       process.exit(1)
    }
    
    if(shouldCrash) {   
        console.error("Manual crash flag detected")
        process.exit(1)

    }
}


runApp()


