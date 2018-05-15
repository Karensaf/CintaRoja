const express = require('express')
const bodyParser = require('body-parser')
const Bot = require('./BotGratis')
const FacebookService = require('./config')
const app = express();
const generic =  [
    {'title': 'La construcción',
    'image_url':'https://urbania.pe/blog/wp-content/uploads/2015/02/edificio-lum1.jpg',
    'subtitle':'Este es el subtitulo :D',
    'buttons':[
     {'type':'postback',
       'title':'Cotizar',
       'payload':'COTIZAR_CONSTRUCCION_POSTBACK'}
   ]},
   {'title': 'Los contenidos',
   'image_url':'http://s3.amazonaws.com/digitaltrends-uploads-prod/2013/08/home-theater-under-3000-k.jpg',
   'subtitle':' ',
   'buttons':[
    {'type':'postback',
      'title':'Cotizar',
      'payload':'COTIZAR_CONTENIDOS_POSTBACK'}
  ]},
  {'title': 'Construcción y contenidos',
  'image_url':'https://www.deinmuebles.com.mx/wp-content/uploads/2016/11/Diseno-de-sala-y-cocina-de-mini-departamento.jpg',
  'subtitle':' ',
  'buttons':[
   {"type":"web_url",
      "title":"Latest News",
      "url":"https://www.messenger.com/",
      "webview_height_ratio":"tall"}
 ]}
]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/',(req,res) => {
    res.send('Bot de cinta roja!!!!!')
});

// Este get es para que facebook valide 


    app.get('/webhook',(req,res) =>{
        console.log(req.query)
        if (req.query['hub.mode'] === 'subscribe' &&
          req.query['hub.verify_token'] === FacebookService.verifyToken) {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
      } else {
        console.error("Failed validation. Make sure the validation tokens match.");
        res.sendStatus(403);          
      } 
    });

   /* app.post('/webhook', (req,res) => {
        //console.log(req.body)
        console.log(req.body.entry[0].messaging[0].sender.id)
        console.log(req.body.entry[0].messaging[0].message.text)*/
//A  partir de aquí es para q conteste el bot
        //let senderId = req.body.entry[0].messaging[0].sender.id

        //const respliceBot = new Bot(FacebookService.accessToken);

        //como lo siguiente es una promesa se puede concaquenar lo comentado con/*
        
       /*respliceBot.sendTextMessage(senderId, 'Hola soy el CintaRojaBot')*/
       
        /*var user = respliceBot.getUserProfile(senderId);
        user.then(response => {
            console.log(response)
        });*/
        //refactorizado
       /* respliceBot.getUserProfile(senderId).then(response =>console.log(response))

        res.sendStatus(200)
    });*/
    
    app.post('/webhook',(req,res)=>{
       // console.log(req.body.entry[0].messaging[0].sender.id)
       // console.log(req.body.entry[0].messaging[0].message.text)
        
       console.log(req.body.entry[0].messaging[0].message.nlp.entities.intent) 

        let senderId = req.body.entry[0].messaging[0].sender.id
        const resplicebot = new Bot(FacebookService.accessToken)
        
     
        resplicebot.getUserProfile(senderId).then(response=>{
            //resplicebot.sendTextMessage(senderId, `Hola ${response.first_name}, soy el CintaRojaBot`)
            resplicebot.sendGenericTemplate(senderId,generic)
            console.log(response)
            
        })  
        res.sendStatus(200)
     })
//la última línea siempre va en estos casos
app.listen(8000,() => {
    console.log('Server on 8000')
});
