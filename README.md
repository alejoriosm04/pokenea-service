## Pokenea Service

A simple project in Express.js with a service to manage Pokeneas. Project for the seventh-semester course "Special Software Eng. Topics" (ST0261) taught at EAFIT University by prof Daniel Correa.

### Running the project locally

1. Clone the repository

    ```bash
    git clone git@github.com:alejoriosm04/pokenea-service.git
    ```
2. Create the docker image

    ```bash
    docker build -t pokenea-service .
    ```
3. Create the `.env` file with the following content in the root of the project

    ```bash
    PORT=3000
    BUCKET_NAME=<your-bucket-name-url-provided>
    ```
4. Run the docker container

    ```bash
    docker run -p 3000:3000 --env-file .env pokenea-service
    ```
5. The service will be running at `http://localhost:3000`
6. Enter to `http://localhost:3000/pokeneas/pokenea-image` to see the image of the pokenea or enter `http://localhost:3000/pokeneas/pokenea-json` to see the json of a random pokenea.

### Deploy service on GCP step by step

After creating the group of instances on GCP, we need to create a Docker Service on the instances. To do this, we need to execute the following command:

```bash
sudo docker service create --name pokenea-service --replicas 10 -p 80:3000 alejoriosm04/pokenea-service
```

If you want to update the service from Dockerhub automatically, you can use the following command:

```bash
sudo docker service create --name shepherd \
                            --constraint "node.role==manager" \
                            --env SLEEP_TIME="5m" \
                            --mount type=bind,source=/var/run/docker.sock,target=/var/run/docker.sock,ro \
                            containrrr/shepherd
```