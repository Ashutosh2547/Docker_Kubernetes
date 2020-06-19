This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Port mapping and volume mapping
```

docker run -it -p 3000:3000 -v /app/node_modules -v d:\Projects\Docker\4\frontend:/app  reactsample

```

What is `-v /app/node_modules`
This is called bookmarking volumes, to prevent cleaning/overwritten by `-v d:\Projects\Docker\4\frontend:/app`
