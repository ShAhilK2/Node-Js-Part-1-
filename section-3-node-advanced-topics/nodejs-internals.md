# v8 engine => executes js

# nodejs module => process,fs,timers,etc

# more than v8 engine

# main js thread => single thread

normal app js executes on one main js thread

## v8 engine that is used by nodejs

parsing js
'execute js
manage callstack
heap memory
performing garbage collection

## node js core api module

fs
http
path
url
stream
buffer
process
timers
crypto
os

core apis =>some of them written in js

##c++ bindings
connect js facing to native functionalities
some of them written in c++
js code to communicate with
libuv
os apis
native libraries

##libuv
native libraries used by node js
event pool
worker thread pool
timers
async 1/0 handling

## os

low level work
reading files
writing files
time tracking

Overall flow
js code => v8 engine => node js core api module => c++ bindings => libuv => os

explain each component => what it does, how it works, why it's needed
Answers : From Js to OS,
