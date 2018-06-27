'use strict';

var _electron = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var win = void 0;

function createWindow() {
  // Create the browser window.
  win = new _electron.BrowserWindow({
    name: "OutFlux",
    width: 1280,
    height: 800,
    transparent: true,
    frame: false,
    toolbar: false,
    titleBarStyle: 'hiddenInset'
  });

  // and load the index.html of the app.
  win.loadFile(__dirname + '/index.html');

  // Open the DevTools.
  win.webContents.openDevTools();

  // Emitted when the window is closed.
  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
_electron.app.on('ready', createWindow);

// Quit when all windows are closed.
_electron.app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    _electron.app.quit();
  }
});

_electron.app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    // createWindow()
  }
});