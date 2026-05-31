// 1. Import express
// This authentication is based on the 1 Security guard = 1 Dairy(Tokens)

const express = require('express');

const app = express();
const PORT = 8000;
// this app.use is a middleware to parse the incoming reques t body as JSON,
// allowing us to access the data sent by the client in a structured format.
app.use(express.json());

//DB
const DIARY ={}
const EMAILS = new Set();// new set to store password


//hey here is my car pls park it and give me a token 
//Email for password
app.post('/signup',(req,res)=> {
    const {name,email,password} = req.body;

    if(EMAILS.has(email)){ // if(email in DIARY)
        return res.status(400).json({error: 'Email already signup/taken'
        });
    }

    //else create a token  if the email is not in the diary
    const token  = `${Date.now()}`;
    // do a dairy entry for the token
    DIARY[token] = {name, email,password};
    // add the email to the set
    EMAILS.add(email);
    // send the token back to the client
    res.json({status :`success`, token});
});
// 1780137515279
// now me route bring ur token and i will give u the car back

app.post('/me',(req,res)=>{
    const {token}= req.body;
    if(!token){
        return res.status(400).json({error: 'missing token'});
    }

    //else search the diary for the token
    if(!(token in DIARY)){
        return res.status(400).json({error: 'invalid token'});
    }

    // if i have entry for the token return the car
    const entry = DIARY[token];
    return res.json ({status: 'success', data :entry});
});
 

// acces the private car ->who are locked in the diary with the token and only they can access the car

app.post('/private-car',(req,res)=>{
      const {token}= req.body;
      if(!token){
        return res.status(400).json({error: 'missing token'});
    }

    //else search the diary for the token
    if(!(token in DIARY)){
        return res.status(400).json({error: 'invalid token'});
    }

    // if i have entry for the token return the car
    const entry = DIARY[token];
    return res.json ({status: 'private data access', data :entry});
});

app.listen(PORT,()=>console.log(`server started on PORT ${PORT}`));
 