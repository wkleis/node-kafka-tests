"use strict"
const express=require('express');
const {consume}=require('./consumer');
const port=process.env.PORT||3001;
const events=[];


(async ()=>{

  const app = express();
  
  app.get('/events',(req,res)=>{
    res.json(events);
  });
  

  app.listen(port,()=>{
    console.log(`server running at port ${port}`)
  })

  await consume(consumeKafkaEvent);


})();

async function consumeKafkaEvent (inEvent){
  const event={
    topic: inEvent.topic,
    partiton: inEvent.partition, 
    headers: inEvent.headers,
    offset: inEvent.message.offset,
    data: inEvent.message.value.toString() 
  }
  console.log(JSON.stringify(event,null,2));
  events.push(event);
}

