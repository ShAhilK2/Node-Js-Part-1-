// buffers  - raw binary data storage
// used for handling raw binary data like images, videos, audio files, etc.
// buffers are fixed size arrays that hold data
// they are used to handle binary data directly
// they are similar to arrays but they are fixed size and they are always 8-bit unsigned integers
// data stored in bytes (0-255)
// reading files, network operations, and other binary data operations use buffers
// receiving files http bodies
// working with streams
// handling pdf ,images,videos ,files
// encrytping and hashing

// string - human readable data
// buffers - raw binary data raw bytes

const textVBuffer = Buffer.from("Hello World");
console.log(textVBuffer);

// Convert buffer to string
console.log(textVBuffer.toString());

const engBuffer = Buffer.from("Hello");
console.log(engBuffer.length);

// Buffer.alloc()
const fixedBuffer = Buffer.alloc(10);

fixedBuffer.write("Hello worlddd ddd");
console.log("After writing:", fixedBuffer.toString("utf-8"));
console.log(fixedBuffer);

// chunks 


const chunks = [
    Buffer.from("Hello"),
    Buffer.from(" "),
    Buffer.from("World")
];

const combineBuffer: Buffer = Buffer.concat(chunks);
console.log(combineBuffer.toString("utf-8"));



