# Webizing Thing Description Client

# Run Dockerfile for production

```
docker build -t td-vuejs-app .

docker run -it -p 8080:80 --rm --name webizing-td td-vuejs-app
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

## FAQ

If hot reloading not working.

```
echo 100000 | sudo tee /proc/sys/fs/inotify/max_user_watches
```

