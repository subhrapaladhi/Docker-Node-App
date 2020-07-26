# Docker Node APP
A simple node server app.
## Routes
```curl "http://localhost:3000/"```

Res: ```hello from a lightweight container. App ID = ${PORT}```

```curl "http://localhost:3000/app1"```

Res: ```this is app1. App ID = ${PORT}```

```curl "http://localhost:3000/app1"```

Res: ```this is app2. App ID = ${PORT}```

```curl "http://localhost:3000/"```

Res: ```admin page. . App ID = ${PORT}```

## Docker Build
This will create a image for nodeapp. You need to create containers for this image to run the app.

```sudo docker build -t nodeapp .```

## Create a containter for nodeapp
```sudo docker run -p 3000:9999 -e APPID=3000 -d nodeapp```