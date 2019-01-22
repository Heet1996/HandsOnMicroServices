const seneca =require("seneca");
const service=seneca();

let sum=(args,done)=>{
    let numbers=args.numbers;
    let result=numbers.reduce((a,b)=>a+b,0);
    done(null,{result});
}
service.add({role:'process',cmd:'sum'},sum);

service.act({role:'process',cmd:'sum',numbers:[0,12,1]},(err,result)=>{console.log(result);});