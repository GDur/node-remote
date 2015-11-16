# node-remote
Node Remote is a nodejs/autohotkey project for Windows which offers a very simple way to create your own pc remote for various programs.
Keep in mind that this is a very simple approach to a create remotes
- basically: when you press a button, it will send a hotkey to a specific program
- ![VLC](/screenshots/vlc-node-remote-example.png) ![netflix](/screenshots/netflix-node-remote-example.png) ![twitch](/screenshots/twitch-node-remote-example.png)

# currently supported node-remotes
  - Netflix.com
  - Youtube.com
  - VLC
  - Spotify
  - Twitch.tv
  - Emby (requires script: https://dl.dropboxusercontent.com/u/8938703/workspace/nodejs/node-remote/remote-userscripts/emby-node-remote.user.js)
  - and it is easy to add more
  
# How to install
  - install [nodejs](https://nodejs.org/en/download/)
  - clone this repository or download .zip version
  - download[AutoHotkey.exe](https://www.autohotkey.com/download/ahk-u32.zip)
  - extract the AutoHotkey.exe into the root folder
  - navigate to the root folder
  - open the command line (cmd)
  - 
  ```
    npm install
  ```

# How to use
  - start server: run the "start_node-remote.bat" or cmd "node app.js"
  - open node-remote: use browser and go to "localhost:8888" or "youripadress:8888"

# How it works
  - when you press a button on your node-remote it will send hotkeys to a specified window
  - eg.: if a program such as VLC has a "space" hotkey which will toggle play/pause, then this remote button can send this hotkey to VLC
