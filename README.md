# node-kafka-tests

my very first steps with accessing Kafka from node.js apps with kafkajs

initially, this is basically the sample code from kafkajs documentation!

## Setup


### Kafka in Docker

Kafka in docker: see https://www.baeldung.com/ops/kafka-docker-setup

- `docker compose up -d`
- `docker compose stop`
- `docker compose start`
- `docker compose ps`
- `docker-compose down`

### Kafka command line tools


- https://kafka.apache.org/quickstart 
- add Kafka bin folder to path

Useful Commands

- `kafka-topics.sh  --bootstrap-server localhost:29092 --list`
- `kafka-topics.sh  --bootstrap-server localhost:29092 --create --topic wk-test-1`
- `kafka-console-consumer.sh --topic wk-test-1 --from-beginning --bootstrap-server localhost:29092`
- `kafka-topics.sh --describe --topic wk-test-1 --bootstrap-server localhost:29092`
- `kafka-console-producer.sh --topic wk-test-1 --bootstrap-server localhost:29092`
- `kafka-consumer-groups.sh --bootstrap-server localhost:29092 --list`
- `kafka-consumer-groups.sh --bootstrap-server localhost:29092 --group test-group --delete`

## kafkajs

see  https://kafka.js.org/docs/getting-started

## Produce and Consume Events

configuration: create a `.env` file like this:

```properties
KAFKA_TOPIC="my-test-topic"
KAFKA_PRODUCER_CLIENT_ID="my-test-producer"
KAFKA_CONSUMER_CLIENT_ID="my-test-consumer"
KAFKA_CONSUMER_GROUP_ID="my-test-consumer"
KAFKA_SERVER="localhost:29092"
PORT=3001
```

commands

- `npm start` start small server which listens to kafa messages, stores them in an in-memmory array and returns it at http://localhost:3001/events
- `npm run produce` produce a Kafka event with the configured topic
