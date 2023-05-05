let delay=3000;//delay in millisecond
function RandomNum(){
    let RandNum=Math.random()*100;
    console.log("Generated Random Number:",RandNum);
}

let t=delay/1000;//Time remaining in Second

console.log("Time remaining until the random number is generated: ",t);
t--;
function message(){
    console.log("Time remaining until the random number is generated: ",t);
    t--;
    if(t==0){
       clearInterval(SI);
       setTimeout(RandomNum,1000);
    }
}

SI=setInterval(message,1000);

