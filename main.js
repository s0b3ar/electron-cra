const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path');
const isDev = require('electron-is-dev');

const PORT = process.env.PORT || 3000
let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(isDev ? `http://localhost:${PORT}` : `file://${path.join(__dirname, 'build/index.html')}`);

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('say-hello', () => {
  console.log('hello from renderer process')
})