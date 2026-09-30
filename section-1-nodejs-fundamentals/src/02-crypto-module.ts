
import crypto from "node:crypto"
import Hash = require("node:crypto");

// built in node module

// security related task 
// creating hash, encrypting data,decrypting data, generating random data
// creating random UUIDs,ids
// to verify of the data was not changed /Integrity


// Universally unique identifier
// used for order id ,userid ,session id
const userId = crypto.randomUUID();
console.log(userId);


// crypto.randomBytes
// used for generating random bytes
// password reset token 
// session secret
// email verification token
const resetToken = crypto.randomBytes(16).toString("hex"); // 16 bytes = 32 characters long
console.log(resetToken);



// crypto.createHash
// hashing has one way cryptographic function
// used for creating hash
// password hashing
// file integrity checking
// digital signatures
// message authentication codes (MACs)
// key derivation functions
// password hashing
// file integrity checking
// digital signatures
// message authentication codes (MACs)
// key derivation functions



const text = "Hello World";
const hash = crypto.createHash("sha256").update(text).digest("hex");
console.log(hash);



// crypto.createHmac
// used for creating hash-based message authentication codes
// webhooks
// signed tokens
// password hashing
// file integrity checking
// digital signatures
// message authentication codes (MACs)
// key derivation functions

// normal hash = > one way function
// data => Hash
// hmac = > hash-based message authentication code (secure way to verify data integrity and authenticity)
// data + secret => Hash

const secretKey = "abc123";
const message ="Hello World";
const messageSignature = crypto.createHmac("sha256", secretKey).update(message).digest("hex");
console.log(messageSignature);

// verify message signature
const verifySignature = crypto.createHmac("sha256", secretKey).update(message).digest("hex");
console.log("Signature verified:", verifySignature === messageSignature);



