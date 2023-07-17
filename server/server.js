if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const express = require('express')
  const app = express()
  const bcrypt = require('bcrypt')
  const axios = require('axios')
  const flash = require('express-flash')
  
  
  const mongoose = require('mongoose')
  const User = require('./model/User')
  const Feedback = require('./model/FeedbackModel')
  const cors = require('cors')
  const bodyParser = require('body-parser')
  const jwt = require('jsonwebtoken')

  
  
      
      mongoose.connect("mongodb+srv://deveshlokare1968:devesh1968cluster@cluster0.14mdvhr.mongodb.net/Info_database?retryWrites=true&w=majority")
      .then(()=>{
        console.log("Database connected")
      })
 
  app.use(cors());
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  // app.use(bodyParser.urlencoded({ extended: false}))
  // app.use(bodyParser.json());
  app.use(flash())

  
  
  app.get('/',  (req, res) => {
   
  })
  
  app.get('/login', (req, res) => {
    
  })

  // const verifyToken = (req, res, next) => {
  //   const token = req.headers.authorization; // Get the JWT from the request header
  
  //   // Check if the token exists
  //   if (!token) {
  //     return res.status(401).json({ message: "Token not found" });
  //   }
  
  //   try {
  //     // Verify and decode the token using the secret key
  //     const decoded = jwt.verify(token, "secret123");
  
  //     // Add the decoded user data to the request object for further use
  //     req.user = decoded;
  
  //     // Proceed to the next middleware or route
  //     next();
  //   } catch (error) {
  //     return res.status(401).json({ message: "Invalid token" });
  //   }
  // };

  app.get('/home', (req,res) =>{

  })

  
  // app.get('/register', checkNotAuthenticated, (req, res) => {
  //   res.render('register.ejs')
  // })
  app.get('/problem' , async (req, res) => {
    try {
      const response = await axios.get('https://codeforces.com/api/problemset.problems?div2=true');
      const problems = response.data.result.problems;
      res.json(problems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.get('/contests',  async (req, res) => {
    try {
      const response = await axios.get('https://codeforces.com/api/contest.list');
      const contests = response.data.result;
  
      // Filter contests to get only upcoming ones
      const upcomingContests = contests.filter((contest) => contest.phase === 'BEFORE');
      const pastContests = contests.filter((contest) => contest.phase === 'FINISHED');

      const contestsWithLinks = contests.map((contest) => ({
        name: contest.name,
        link: `https://codeforces.com/contest/${contest.id}`,
      }));
  
      const contestData = {
        links: contestsWithLinks,
        upcoming: upcomingContests,
        past: pastContests,
      };
  
      res.json(contestData);
    } catch (error) {
      console.error('Error fetching upcoming contests:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });



  app.post('/login', async(req,res)=>{
    const user = await User.findOne({
      email:req.body.email,
      // password:req.body.password
    })
    if(user){
      const passCheck = await bcrypt.compare(req.body.password,user.password);
      if(passCheck===true)
      {
        const token = jwt.sign({
          username : user.username ,
          email: user.email
        },"secret123")
        console.log(token)
  
        res.json({ token });
      }
      else {
        res.status(401).json({ message: 'Incorrect password' });
      }
    }
    else{
      res.status(401).json({ message: 'User doesn`t exists' });

    }
    
  })
  
  
  
  app.post('/register', async (req, res) => {
    const em = await User.findOne({email : req.body.email})
    
    if(em===null){
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
          username: req.body.username,
          email: req.body.email,
          password:hashedPassword
        })
        res.json(user);
        
      } catch(error) {
        console.log(error)
        
      }
    }
    else{
      const message = false
      res.json({message});
    }
  })

  app.get("/feedback",(req, res)=>{
	
});

app.post('/feedback', async(req, res) =>{
	try {
    const token = req.body.token
    const decoded = await jwt.verify(token,"secret123")
    const name = decoded.username
    const email = decoded.email
		const feedback = await Feedback.create({
     name: name,
     email : email,
      message: req.body.message

    })
	    console.log("Feedback sent")
      res.json(feedback);
      
      
		
		
	} catch (error) {
	  console.log(error.message)
      
}
})

  app.post('/logout', (req, res) => {
    const { token } = req.body;
     res.redirect('/')
  })

  
  
  
  app.listen(5000)