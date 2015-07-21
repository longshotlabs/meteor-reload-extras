Session.setDefault('reloadExtras_wasHotReload', false);
Reload.didHotReload = Session.get('reloadExtras_wasHotReload');
Session.set('reloadExtras_wasHotReload', false);

Reload.isHotReloading = false;
Reload._onMigrate('reloadExtras', function () {
  Reload.isHotReloading = true;
  Session.set('reloadExtras_wasHotReload', true);
  return [true];
});

var done = false;
Reload._onMigrate('hotReloadWarning', function (retry) {
  var delay = Reload.delay || 0;
  if (done || !delay) {
    return [true];
  } else {
    if (typeof Reload.beforeHook === 'function') {
      Reload.beforeHook();
    }
    window.setTimeout(function () {
      done = true;
      retry();
    }, delay);
    return false;
  }
});
