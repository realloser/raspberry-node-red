# raspberry-mosquitto
Mosquitto setup for Raspberry-Pi running [HypriotOS](https://blog.hypriot.com/post/releasing-HypriotOS-1-0/)

## Prepare

Get the configruation file for mosquitto
```
git clone https://github.com/realloser/raspberry-mosquitto.git
```

Get the docker container
```
Docker pull panuwitp/mosquitto-arm
```


## Run
From the root folder run
```
docker run -it -d --hostname mosquitto-arm --name mosquitto-arm --restart always -p 1883:1883 -p 9001:9001 -v ~/mosquitto/config:/mosquitto/config -v /mosquitto/data -v /mosquitto/log panuwitp/mosquitto-arm
```
