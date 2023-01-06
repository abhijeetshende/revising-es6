function fn (msg){
    if(msg){
        console.log(this, msg)
    }
    else{

        console.log(this)
    }
}
// if fn will be called, fn will be called with window's this as context
fn();


let obj = {
    name:'abhijeet',
    age:32,
    helloFn:fn
}

// if called via the object, obj will be passed as this context
obj.helloFn();
// if we want helloFn to have the global context then pass windows this
obj.helloFn.bind(this)();

let obj2 = {
    name:'object2 as context'
}
//setting obj2 as the this context
obj.helloFn.bind(obj2)();


//call directly call, unlike bind which require ()
obj.helloFn.call(obj2);


// if argument to be passed to function with the THIS context use apply
obj.helloFn.apply(obj2,['ab','c'])






