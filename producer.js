"use strict"
process.env.KAFKAJS_NO_PARTITIONER_WARNING='1';
const { Kafka } = require('kafkajs');
require('dotenv').config();
const clientId = process.env.KAFKA_PRODUCER_CLIENT_ID || 'kafka-test-producer';
const topic=process.env.KAFKA_TOPIC
const broker=process.env.KAFKA_SERVER;

if(!topic){
 console.error(`ERROR: environment variable KAFKA_TOPIC must contain the topic to consume from. KAFKA_TOPIC: ${topic}`);
 process.exit(-1);
}
if(!broker){
 console.error(`ERROR: environment variable KAFKA_SERVER must contain the kafka server as " host:port". KAFKA_SERVER: ${broker}`);
process.exit(-1);
}

const kafka = new Kafka({
  clientId: clientId,
  brokers: [broker],
});

(async ()=>{
  const producer = kafka.producer()

  await producer.connect();
  console.log(`Producer connected to Kafka at: ${broker}`);
  const message={ value: `Hello: ${(new Date()).toISOString()}` };
  await producer.send({
    topic,
    messages: [message],
  })
  console.log(`Sent message: ${JSON.stringify(message)}`);
  await producer.disconnect()
  console.log(' Producer diosconnected' );
})();
