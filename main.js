const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1000, // Ancho inicial de la ventana
        height: 600, // Altura inicial de la ventana
        minWidth: 1000, // Ancho mínimo de la ventana
        minHeight: 600, // Altura mínima de la ventana
        autoHideMenuBar: true, // Oculta automáticamente la barra de menú
        icon: path.join(__dirname, 'Icon', 'globe.ico'), // Ruta al ícono personalizado
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadURL('https://saucessv.com/login.php')

    win.maximize() // Maximiza la ventana al abrirla
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
