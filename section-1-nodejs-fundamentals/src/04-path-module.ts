

import path from "node:path"


// const file = projectRoot + "/projects" + fileName

path.join // uses the correct path separator for the operating system (current os)

process.cwd() // current working directory the folder from where the node js process was started


const projectRoot = process.cwd()
console.log("Project Root:", projectRoot)



// /uploads/users/42/profile.photo.png

const userId = 42;
const fileName = "profile.photo.png";


// path.join => creates a path string and it will not create a folder or file
// it does not check whether the path is exist or not
const uploadedFile = path.join(projectRoot, "uploads", "users", userId.toString(), fileName);
console.log("Uploaded File:", uploadedFile);


// final part of the path 
const file = path.basename(uploadedFile)
const fileExtension = path.extname(file)
const parentDirectory = path.dirname(uploadedFile)

console.log("File:", file)
console.log("File Extension:", fileExtension)
console.log("Parent Directory:", parentDirectory)