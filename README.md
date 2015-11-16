# node-remote
Node Remote is a nodejs probject which offers a very simple way to create your own pc remote for various programs.

# currently supportet remotes
  - Netflix
  - Youtube.com
  - VLC
  - Spotify
  - Twitch.tv
  - Emby (requires script: https://dl.dropboxusercontent.com/u/8938703/workspace/nodejs/node-remote/remote-userscripts/emby-node-remote.user.js)
  - and it is easy to add more
  
# How to insall/use
  - install nodejs https://nodejs.org/en/download/
  - clone this repository or download .zip version
  - download AutoHotkey.exe https://www.autohotkey.com/download/ahk-u32.zip
  - extract the AutoHotkey.exe into the root folder
  - navigate to the root folder
  - open the command line (cmd)
    - npm install
    - node app.js    or use start_node-remote.bat
  - go to localhost:8888 or youripadress:8888

# How it works
  - when you press a button on your node-remote it will send hotkeys to a specified window
  - eg.: if a program such as VLC has a "space" hotkey which will toggle play/pause, then this remote button can send this hotkey to VLC
