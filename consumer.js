require('dotenv').config();
const { Kafka } = require('kafkajs');
const clientId = process.env.KAFKA_CONSUMER_CLIENT_ID || 'kafka-test-consumer';
const topic=process.env.KAFKA_TOPIC
const broker=process.env.KAFKA_SERVER;
const consumerGroupId=process.env.KAFKA_CONSUMER_GROUP_ID

if(!topic){
 console.error(`ERROR: environment variable KAFKA_TOPIC must contain the topic to consume from. KAFKA_TOPIC: ${topic}`);
 process.exit(-1);
}
if(!broker){
 console.error(`ERROR: environment variable KAFKA_SERVER must contain the kafka server as " host:port". KAFKA_SERVER: ${broker}`);
process.exit(-1);
}

if(!consumerGroupId){
  console.error(`ERROR: environment variable KAFKA_CONSUMER_GROUP_ID must contain the consumer group. KAFKA_SERVER: ${consumerGroupId}`);
 process.exit(-1);
 }

const kafka = new Kafka({
  clientId: clientId,
  brokers: [broker],
});

const consumer = kafka.consumer({ groupId: consumerGroupId});

async function consume(messageHandler){
  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: false })

  await consumer.run({
    eachMessage: messageHandler
  })
}

module.exports={consume}

// await consumer.run({
//   eachMessage: async ({ topic, partition, message }) => {
//     console.log('--- nessage received ---');
//     console.log({
//       value: message.value.toString(),
//       topic,
//       partition
//     })
//   },
// })