# Docker Node APP
A simple node server app.
## Routes
```curl "http://localhost:3000/"```

Result: ```hello from a lightweight container```

## Docker Build
This will create a image for nodeapp. You need to create containers for this image to run the app.

```sudo docker build -t nodeapp .```

## Create a containter for nodeapp
```sudo docker run --name nodeappContainer -p 3000:9999 nodeapp```