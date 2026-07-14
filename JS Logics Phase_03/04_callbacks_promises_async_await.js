/* <--- Synchronous JS vs Asynchronous JS --->
jo code line-by-line chale, wo hota hai sync code!
and jo code jab run hone ke liye ready ho jaaye, wo hota hai async code! (setTimeout, setInterval type me smj lo...)
*/

/*
<--- CallBacks --->
ek function ko agar aap ek function ke parameter me pass kr rhe ho, to wo parameter ab callback kehlata hai!

function asynchronous(fun){
    setTimeout(fun, Math.floor(Math.random()*10)*1000);
}
asynchronous(function(){
    console.log("Hello, World!");
    console.log(Math.floor(Math.random()*10)*1000);
});


//Callback Patterns
function profile(username, cb){
    console.log("Fetching your profile...")
    setTimeout(() => {
        cb({id:167, username, age:19, email: "sensei@ss.com"})
    }, 2000);
}

function post(id, cb){
    console.log("Fetching your posts...");
    setTimeout(() => {
        cb({id: id, posts : ["Like", "Share", "Subscribe", "Follow"]})
    }, 3000);
}

function savedPosts(name, cb){
    console.log("Fetching saved posts...");
    setTimeout(() => {
        cb({n: name, saved: ["CWH", "SCS", "AC", "CNC", "GW"]})
    }, 4000);
}

//Callback Hell
profile("SENSEI_SS", function(data){
    console.log(data);
    post(167, function(data){
        console.log(data.posts);
        savedPosts("YT Channels", function(data){
            console.log(data.n);
            console.log(data.saved);
        });
    });
});
*/
/* <--- Promises --->
ab ek promise banate hai, jo ki do states me se kisi ek state me jaa sakta hai and wo yaa to resolve hoga yaa to reject hoga ab wo kya hoga ye to waqt hi batayega par hume dono ke liye code likhna padega!
const pr = new Promise(function(res, rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if (rn >= 5) res("Resolved with " + rn);
        else rej("Rejected with " + rn);
    }, 1000);
});

pr.then(function(val){ //resolve
console.log(val);
}).catch(function(val){ //reject
console.log(val);
});
*/

/* <--- Async/Await --->
const pr = new Promise(function(res, rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10);
        if (rn >= 5) res("Resolved with " + rn);
        else rej("Rejected with " + rn);
    }, 1000);
});
async function abcd() {
    try{
        let val = await pr;
        console.log(val);
    }catch(err){
        console.log(err);
    }
}
abcd();
*/