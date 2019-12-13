const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
let mainWindow
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    frame: true,
    backgroundColor: '#000',
    fullscreen: false,
  })
  mainWindow.loadFile('dist/index.html')
  mainWindow.on('closed', () => (mainWindow = null))
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
