# Docker Node APP
A simple node server app.
## Routes
```curl "http://localhost:3000/"```

Res: ```hello from a lightweight container```

```curl "http://localhost:3000/app1"```

Res: ```this is app1```

```curl "http://localhost:3000/"```

Res: ```admin page```

## Docker Build
This will create a image for nodeapp. You need to create containers for this image to run the app.

```sudo docker build -t nodeapp .```

## Create a containter for nodeapp
```sudo docker run -p 3000:9999 -e APPID=3000 -d nodeapp```