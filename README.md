aldeed:reload-extras
=========================

A client-side Meteor package that provides extra features for the core `reload` package.

## Installation

```bash
$ meteor add aldeed:reload-extras
```

## Reload.isHotReloading

This will be set to `true` when a hot reload is occurring. This is useful when you want to prompt before closing the tab or refreshing, but only when it is not a hot reload.

In client code:

```js
$(window).on('beforeunload', function () {
  if (!Reload.isHotReloading) {
    return 'Are you sure you want to exit the app?';
  }
});
```

## Reload.didHotReload

This will be set to `true` when client code is running after a hot reload. Use this to do setup or show messages upon first loading the app, but only if it wasn't a hot reload.

In client code:

```js
if (!Reload.didHotReload) {
  Meteor.call('userEnteredRoom');
}
```

## Reload.delay and Reload.beforeHook

To delay a bit while showing a message before hot reloading:

```js
if (isProduction) {
  Reload.delay = 5000; //ms
  Reload.beforeHook = function () {
    showAlert("In 5 seconds we're going to refresh the app to give you the latest features.");
  };
}
```
