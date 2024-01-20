> Game still in developement

# Tram-Simulator
The objective of this game is to prevent any passengers from boarding your tram. As soon as they open the door, your task is to promptly close it. You can achieve this by either clicking on the door or utilizing the [1,2,3,4,5] keys.

## Assets Credits
- RPG Urban Kit by Kenny - [Link](https://kenney-assets.itch.io/rpg-urban-kit)
- Protagonist Character by Penzilla - [Link](https://penzilla.itch.io/protagonist-character)

## Folder structure

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
- [x] Add collision detection with state of door
- [ ] Add tram station
- [ ] Add enter indicator 
- [ ] Create new levels
- [ ] Create transition to the next level
- [x] Add end screen
- [ ] Add sound effects
- [ ] Add credits screen
- [ ] Check performance