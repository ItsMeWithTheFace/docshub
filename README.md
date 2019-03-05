<p align="center"><img src="website/static/img/favicon_big.png" /></p>

# Today I Learned...

[![CircleCI](https://circleci.com/gh/ItsMeWithTheFace/til/tree/master.svg?style=shield)](https://circleci.com/gh/ItsMeWithTheFace/til/tree/master)

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
2. Add your environment variables into a `.env` file
   ```bash
   # the .env.example file contains the necessary variables for the app
   # you'll need to change the dummy values to your own ones
   cp .env.example .env
   ```
3. Go into `website/` and install the dependencies
   ```bash
   cd website/
   yarn install
   ```
4. Run the project
   ```bash
   yarn start
   ```
   This will start the project at `localhost:3000`

If you're using Docker use docker-compose at the root directory of the project:
```bash
docker-compose up
```
Which will start the project at `localhost:3000`
