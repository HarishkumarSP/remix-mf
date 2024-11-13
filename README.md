# Welcome to Remix!
A micro-frontend app in remix

- 📖 [Remix docs](https://remix.run/docs)


## Development

You can run the application from the root folder, 
we have host-app and remote-app

To run the host
```shellscript
pnpm dev:host
```

To run the remote
```shellscript
pnpm dev:remote
```
Currently dev mode is being failed , so pls try out the build and start mode

## Deployment

First, build your app for production:

To build your app on host
```sh
pnpm build:host
```
To build your app on remote
```sh
pnpm build:remote
```

To build both of your app
```sh
pnpm build:all
```
-----------------------------------
Then run the app in production mode:

To start your host app
```sh
pnpm start:host
```
To start your remote app
```sh
pnpm start:remote
```
To start you all app at once
```sh
pnpm start:all
```

``Note: Currently remote app only running without any issues(but without styling)``

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
