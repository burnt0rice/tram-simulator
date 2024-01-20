# Folder structure

- `src` - source code for your kaboom project
- `www` - distribution folder, contains your index.html, built js bundle and static assets


## Development

```sh
$ npm run dev
```

will start a dev server at http://localhost:8000

## Distribution

```sh
$ npm run build
```

will build your js files into `www/main.js`

```sh
$ npm run bundle
```

will build your game and package into a .zip file, you can upload to your server or itch.io / newground etc.

## Todo
- [x] Split main again into classes
- [ ] Add score and timer
- [ ] Add collision detection with state of door
- [ ] Add tram station
- [ ] Create new levels
- [ ] Create transition to the next level
- [ ] Add end screen
- [ ] Add sound effects
- [ ] Add credits screen
- [ ] Check performance