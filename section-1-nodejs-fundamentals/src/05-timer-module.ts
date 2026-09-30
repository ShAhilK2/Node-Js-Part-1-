

// after some delay 
// repeatedly after some interval  - 2seconds

// setTimeout
// setInterval
// clearInterval
// clearTimeout
// setImmediate
import {setTimeout as sleep} from "node:timers/promises"



function runSetTimeOutExample():void{
    console.log("1.SetTimeout Started");
    
    setTimeout(() => {
        console.log("2.SetTimeout Executed");
    }, 2000);

    console.log("3.This run immediately and Node does not wait for setTimeout");
}

function runClearTimeoutExample():void{
    console.log("4.ClearTimeout Started");
    
    const timeoutId = setTimeout(() => {
        console.log("2.This never executes");
    }, 2000);


    clearTimeout(timeoutId);
    console.log("5.it cancelled the timer before it could execute");
}


function runSetIntervalExample():void {
     console.log("7.SetInterval Started");
    let count = 0 ;
    const timerId = setInterval(() => {
        count++;

        if(count==3){
            // clear the interval
            clearInterval(timerId);
            console.log("8.SetInterval Stopped");
        }
        console.log(`9.SetInterval COUNT: ${count} `);
    }, 2000);
}

function runSetImmediateExample():void{
    console.log("10.SetImmediate Started");
    
    setImmediate(() => {
        console.log("11.SetImmediate Executed");
    });
    
    console.log("12.Synchronous code runs immediately after SetImmediate is scheduled");
}

async function runPromiseTimerExample():Promise<void>{
    console.log("13.waiting for promise based timers")
    await sleep(2000)
    console.log("14.promise based timer executed/finished in 2 seconds")
}
function runTimerModuleExample():void{
    runSetTimeOutExample();
    runClearTimeoutExample();
    runSetIntervalExample();
    runSetImmediateExample();
}

runTimerModuleExample();


runPromiseTimerExample().catch((error)=> {
    console.log("14.Timer based promise failed")
    console.error(error)
});

//promise based timers are better for async operations
//  setImmediate is better for sync operations
// setImmediate executes its callback immediately after the current I/O polling phase completes, 
// whereas setTimeout(fn, 0) executes its callback only after a minimum time threshold (1ms) has elapsed.