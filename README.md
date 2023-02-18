# node-kafka-tests

playing around and first steps with accessing Kafka from node.js apps with kafkajs

kafkajs: https://kafka.js.org/docs/getting-started

initially, this is basically the code from kafkajs documentation!

## Running a local Kafka

### Kafka in Docker

Kafka in docker: see https://www.baeldung.com/ops/kafka-docker-setup

- `docker compose up -d`
- `docker compose stop`
- `docker compose start`
- `docker compose ps`
- `docker-compose down`

### Useful commands

- `kafka-topics.sh  --bootstrap-server localhost:29092 --list`
- `kafka-topics.sh  --bootstrap-server localhost:29092 --create --topic wk-test-1`
- `kafka-console-consumer.sh --topic wk-test-1 --from-beginning --bootstrap-server localhost:29092`
- `kafka-topics.sh --describe --topic wk-test-1 --bootstrap-server localhost:29092`
- `kafka-console-producer.sh --topic wk-test-1 --bootstrap-server localhost:29092`
- `kafka-consumer-groups.sh --bootstrap-server localhost:29092 --list`
- `kafka-consumer-groups.sh --bootstrap-server localhost:29092 --group test-group --delete`

## Produce and Consume

- `node producer.js`
- `node cosnumer.js`
