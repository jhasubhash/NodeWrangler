# Node Wrangler

## Install dependencies

First, make sure that `npm` is installed on your system.

After you ensure that your terminal is in the root of this project, use `npm` to install the various dependencies needed:

```
npm install
```

If you prefer to use `yarn`, after you generate the `package-lock.json` file you can run the following line to import dependencies to a `yarn.lock` file: 

```
yarn import
```

## Build Process

There are two ways to build the plugin for use in Photoshop:

* `yarn watch` (or `npm watch`) will build a development version of the plugin, and recompile everytime you make a change to the source files. The result is placed in `dist` folder. 
* `yarn build` (or `npm build`) will build a production version of the plugin and place it in `dist` folder. It will not update every time you make a change to the source files.

> You **must** run either `watch` or `build` prior to trying to use within Photoshop!
