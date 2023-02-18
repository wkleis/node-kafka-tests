const { Kafka } = require('kafkajs');
const bootstrapServer = `localhost:29092`
const kafka = new Kafka({
  clientId: 'wk-test-app-1',
  brokers: [bootstrapServer],
});
const topic = 'wk-test-1';
const consumer = kafka.consumer({ groupId: 'wk-test-app'});

(async () => {
  await consumer.connect()
  await consumer.subscribe({ topic, fromBeginning: false })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log('--- nessage received ---');
      console.log({
        value: message.value.toString(),
        topic,
        partition
      })
    },
  })
})();