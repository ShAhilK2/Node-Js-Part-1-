

type User ={
    id : number,
    name : string,
    role : "user" | "super-admin"
}



const users :User[]=  [
    {
    id : 1,
    name : "Shahil",
    role : "super-admin"
},
    {
    id : 2,
    name : "Hetvi",
    role : "user"
},
   {
    id : 3,
    name : "Sakshi",
    role : "super-admin"
}

]


// Callback is a function and that functon is  passing as an parameter 
// callback(error,result) => imp concept  classic node js callback pattern


function findUserWithCallback(userId: number,callback: (error :Error | null, user?: User) => void ):void{

    setTimeout(()=>{
        const user = users.find(currentuser => currentuser.id == userId);
        if(!user){
        callback(new Error(`User with this ${userId} id not found`))
        return
    }

     callback(null,user)

    },500)

}
findUserWithCallback(30,(error,user)=>{
    if(error){
        console.log(`callback error`,error.message)
        return
    }
    console.log(`callback result`,user?.id,user?.name,user?.role)


})


function findUserWithPromise(userId: number) :Promise<User> {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const user = users.find(currentuser => currentuser.id == userId);
            if(!user){
                reject(new Error(`User with this ${userId} id not found`))
                return
            }

            resolve(user)

        },500)
    })
}


findUserWithPromise(100).then((user)=>{
    console.log(`promise result`,user.id,user.name,user.role)
}).catch((error : Error)=>{
    console.log(`promise error`,error.message)
})


async function findUserAsyncAwait(userId: number): Promise<User> {
    try{
        const user = await findUserWithPromise(userId);
        console.log(`async await result`,user.id,user.name,user.role)
        return user;
    } catch (error) {

        const message = error instanceof Error ? error.message : "Unknown error";
        throw new Error(message);
    }
}


findUserAsyncAwait(2).then(result => {
    console.log("Final returned result:", result);
});

(async () => {
    const result = await findUserAsyncAwait(2);
    console.log("Final returned result:", result);
})();