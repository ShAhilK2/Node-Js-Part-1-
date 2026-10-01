## libuv native library used by node js

help node js to handle async operations across different os systems

event loop
worker thread pool
timers
async i/o operations

v8 doesnot support fs (file system) operations
network socket handling
timers
general event loop for node js apis

nodejs need something else
noddejs want to add another layer to cordinate the
runtime features

event loop ->
complete i/0 operations
timers => if some timers are in ready state
pending callbacks
socket activity

thread pool
libuv provides/shared a worker thread pool

this pool only use for task operation that can not be handled
efficiently
for example, file system operations, dns lookups, crypto operations
compression related work

timers =>
libuv helps node js track timers and schedules them to run at specific times
eligible to execute when their time comes

timer => 5 sec delay -> dioesnot mean js sleep on main thread

runtime record the timer and continue processing other tasks
when timer expires, it gets executed
