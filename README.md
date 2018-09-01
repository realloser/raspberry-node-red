# raspberry-node-red

Node-Red setup for Raspberry-Pi running [HypriotOS](https://blog.hypriot.com/post/releasing-HypriotOS-1-0/)

find detailed description for the docker container: https://hub.docker.com/r/nodered/node-red-docker/

## Prepare

## Get The Docker Container

### Raspberry PI Specific Version

https://nodered.org/docs/platforms/docker
http://jamesthom.as/blog/2016/07/27/node-red-docker-images/

```
docker run -it -p 1880:1880 -v ~/.node-red:/data --name node-red nodered/node-red-docker:rpi-v8
```

## Pull

Get the docker container

```
Docker pull nodered/node-red-docker:rpi-v8
```





## Run
From the root folder run

prepare:
Create the data persistence folder
```
mkdir -p ~/.node-red
```

Create the container
```
docker run -it -p 1880:1880 -v ~/.node-red:/data --name node-red nodered/node-red-docker:rpi-v8
```

## Using volumes (not testd)

```
docker volume create --name node_red_user_data
```

```
docker run -it -p 1880:1880 -v node_red_user_data:/data --name node-red nodered/node-red-docker:rpi-v8
```

## with mosquitto linked
docker run -it -p 1880:1880 --name node-red --link mosquitto-arm:broker nodered/node-red-docker:rpi-v8

## all together

```
docker run -it -d --hostname node-red \
    --name node-red \
    --restart always \
    -p 1880:1880 \
    -v $PWD/node-red-data/:/data \
    --link mosquitto-arm:broker \
    nodered/node-red-docker:rpi-v8
```

Check logs for errors:

```
docker container logs node-red
```

Connect to:
http://{host-ip}:1880
