const seneca=require('seneca');


const service=seneca({log:'silent'});

let stack=[];
let stackPush=(args,done)=>{
    stack.push(args.value);
    done(null,stack);
}
let stackPop=(args,done)=>{
    stack.pop(args.value);
    done(null,stack);
}
let stackGet=(args,done)=>{
    
    done(null,stack);
}
service.add("stack:push,value:*",stackPush);
service.add("stack:pop",stackPop);
service.add("stack:get",stackGet);


service.listen('3000');