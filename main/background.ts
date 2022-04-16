import { BrowserWindow, app as elApp, ipcMain, IpcMainEvent } from 'electron'
import serve from 'electron-serve'
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth'

import { createWindow } from './helpers'

const isProd: boolean = process.env.NODE_ENV === 'production'

if (isProd) {
  serve({ directory: 'app' })
} else {
  elApp.setPath('userData', `${elApp.getPath('userData')} (development)`)
}

(async () => {
  await elApp.whenReady()

  const mainWindow = createWindow('main', {
    width: 1000,
    height: 600
  })

  if (isProd) {
    await mainWindow.loadURL('app://./home.html')
  } else {
    const port = process.argv[2]
    await mainWindow.loadURL(`http://localhost:${port}/home`)
    mainWindow.webContents.openDevTools()
  }
})()

elApp.on('window-all-closed', () => {
  elApp.quit()
})

ipcMain.on('win_close', () => {
  elApp.quit()
})

ipcMain.on('win_max', () => {
  const win = BrowserWindow.getFocusedWindow()
  win.isMaximized() ? win.unmaximize() : win.maximize()
})

ipcMain.on('win_min', () => {
  BrowserWindow.getFocusedWindow().minimize()
})

ipcMain.on('nav_back', () => {
  BrowserWindow.getFocusedWindow().webContents.goBack()
})

ipcMain.on('nav_forth', () => {
  BrowserWindow.getFocusedWindow().webContents.goForward()
})

const fbApp = initializeApp({
  apiKey: "AIzaSyDhGCD9FM6pX-keua8oeKLQXmCl43a17co",
  authDomain: "inshelves-3eac8.firebaseapp.com",
  projectId: "inshelves-3eac8",
  storageBucket: "inshelves-3eac8.appspot.com",
  messagingSenderId: "369970716341",
  appId: "1:369970716341:web:e60240dd446e11197da8fc"
});

const fb_auth = getAuth(fbApp);
let creds: UserCredential

ipcMain.on('fb_register', (_event: IpcMainEvent, username: string, password: string) =>
  createUserWithEmailAndPassword(fb_auth, username, password)
    .then((c) => creds = c)
    .catch((e) => console.log))
