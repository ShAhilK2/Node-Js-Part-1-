// peice by piece
// not loading the data at once 
// uploading files 
// downloading files 
// read large files
// video/audio processing
// compression

// CHUNKS

// here is the full 500mb file 

// here is chunk 1
// here is chunk 2
// here is chunk 3
// here is chunk 4
// here is chunk 5


// memory efficent
// streas types :
// readable stream => source of data
// writable stream => destination where the data is written 
// transform stream => read the data ,modifies data,and forward it 
// duplex stream => both readable and writable


import { Readable, Transform, Writable } from "node:stream"
import {pipeline} from "node:stream/promises"

const readableStream = Readable.from(["hello","from","nodejs","streams"])



// callback(error,result)
const uppercaseTransform = new Transform({
    transform(chunk: Buffer, encoding: string, callback: (error: Error | null, data: any) => void) {

        const text = chunk.toString();
        callback(null, text.toUpperCase());
    }
})


const writableStream = new Writable({
    write(chunk: Buffer, encoding: string, callback: (error?: Error | null) => void) {
        console.log("received chunk", chunk.toString());
        callback();
    }
})


async function main() {
    try{

        await pipeline(readableStream, uppercaseTransform, writableStream);

        console.log("Stream Completed")
    }catch(error){
        const message = error instanceof Error ? error.message : "Unknown error";
        console.error(message);
    }
  
}

main();


