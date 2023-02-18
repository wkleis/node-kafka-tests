process.env.KAFKAJS_NO_PARTITIONER_WARNING='1';
const { Kafka } = require('kafkajs');
const bootstrapServer= `localhost:29092`
const kafka = new Kafka({
  clientId: 'wk-test-app',
  brokers: [bootstrapServer],
})
const topic='wk-test-1';



(async ()=>{
  const producer = kafka.producer()

  await producer.connect()
  await producer.send({
    topic,
    messages: [
      { value: `Hello: ${(new Date()).toISOString()}` },
    ],
  })
  
  await producer.disconnect()

})();






//const util = require('util');



// const client = new KafkaClient({ kafkaHost: 'localhost:29092' });
// const producer = new Producer(client);
// const send = util.promisify(producer.send.bind(producer));

// producer.on('ready', async function () {
//   const id = setInterval(() => produceHello(), 1000);
//   setTimeout(() => { clearInterval(id); produceBye()}, 10000);
// });

// async function produceHello(){
//   return produce()
// }

// async function produceBye(){
//   return produce(`Bye Bye: ${(new Date()).toISOString()}`)
// }

// async function produce(messages){
//   try {
//     const data = await send([{
//       topic: 'wk-test-1',
//       messages,
//       partition: 0
//     }]
//     );
//     console.log(`sent: ${JSON.stringify(data)}`);
//   } catch (err) {
//     console.error(err)
//   }
// }


// producer.on('error', function (err) {
//   console.log(`producer error: ${err}`);
// })