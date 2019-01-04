# Today I Learned... <br/><br/> ![Logo](website/static/img/favicon_big.png)
# [![CircleCI](https://circleci.com/gh/ItsMeWithTheFace/til/tree/master.svg?style=svg)](https://circleci.com/gh/ItsMeWithTheFace/til/tree/master)
Tutorial document store for students

## Development
Please ensure you have the following dependencies:
- Node 8.14.0 or 10.14.2
- yarn 1.12.3
- Docker version 18.09.0 (if you want to work with the Docker container)

To build the project locally perform the following steps:
1. Clone the repo
   ```bash
   git clone https://github.com/ItsMeWithTheFace/til.git
   ```
2. Go into `website/` and install the dependencies
   ```bash
   cd website/
   yarn install
   ```
3. Run the project
   ```bash
   yarn start
   ```
   This will start the project at `localhost:3000`

If you're using Docker use docker-compose at the root directory of the project:
```bash
docker-compose up
```
Which will start the project at `localhost:3000`
