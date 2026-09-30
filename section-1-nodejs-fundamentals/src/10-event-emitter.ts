
import  EventEmitter  from "node:events";
// user registration 
// send a welcome email
// write a log
// notify some other service 

// emit one event -> listeners {lister to this event.do something }

// .on() = register one listener
// once() = register one time listener that runs only once
// .emit() = trigger an event and sends to the listeners


type UserRegisteredPayload = {
    userId: number;
    email: string;
}

const appEvents = new EventEmitter();



// Register a listener for the user:registered event
appEvents.on("user:registered", (user: UserRegisteredPayload) => {
    console.log("email listener : welcome email sent to this email", user.email);
});

appEvents.on("user:registered", (user: UserRegisteredPayload) => {
    console.log(`log listener : logging user registration ${user.email} with the id ${user.id}`);
});


appEvents.once("app:started",()=>{
    console.log("Just once when app started")
})
function registerUser():void {

    const user = {
        id :1,
        email : "skdev842@gmail.com"
    }


    // This emits the event and passes the user data to all listeners
    appEvents.emit("user:registered", user);


    console.log("register user : event listeners executed");

}


appEvents.emit("app:started"); // This will trigger the once listener

registerUser();
