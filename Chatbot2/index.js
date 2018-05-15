const Bootbot = require('bootbot')

const bot = new Bootbot({
    accessToken: 'EAAGjvMlecv0BAHyq77ai98pkJQBhQlJXGW4V2F1UZCCkvhSMZAoV6kuQOHFkHGQRxZBYTYNnB5zKfPZBHBb0QF2lystfZCONjYsmuDGuKREAZAhuZCX5T1qkCpPxwVTIG1sdeUjRmadu4CdBBWOzaqkJ3dhW1RjCYb6OPxdQqZAe8QZDZD',
    verifyToken: 'clasechatbot',
    appSecret: 'd5da5171a468ab770578eb27bae0ce31'

});

//recibe dos parametros
//payload= lo  q trae  y chat= lo q va a contestar
/*
bot.on('message', (payload,chat) => {
    console.log(payload)
   // chat.say('Hola soy tu primer bot')
   chat.say(`Echo: ${payload.message.text}`);
});
*/

bot.hear(['hola','hi','que onda','holi'],(payload,chat) => {
    chat.say('Hola soy el bot de Devf de cinta roja en que te puedo ayudar')
});

//Escuchar despedidas
bot.hear(['adios','bye'], (payload,chat) => {
    chat.say('Adios......:(')
});

//Mensaje con quikreplice
bot.hear(['comida','hambre'], (payload,chat) => {
    chat.say({
        text: 'Que deseas comer hoy???????',
        quickReplies: ['Mexican','Italian','American','Argentine']
    });
});

//Enviar mensaje con botones
bot.hear(['ayuda'], (payload,chat) => {
    chat.say({
        text: 'En que te puedo ayudar?',
        buttons: [
            {type: 'postback', title: 'Settings', payload: 'HELP_SETTINGS'},
            {type: 'postback', title: 'FAQ', payload: 'HELP_FAQ'},
            {type: 'postback', title: 'Talk to a human', payload: 'HELP_HUMAN'}
        ]        
    });
});

bot.on('postback:HELP_HUMAN',(payload,chat) => {
    chat.say('Una persona estará contigo en unos momentos.....')
});

bot.start()