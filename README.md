# node-remote
Node Remote is a nodejs/autohotkey project for Windows which offers a very simple way to create your own pc-remote for various programs.
Keep in mind that this is a very simple approach to a create remotes.
- basically: when you press a button, it will activate the specific program and then send a hotkey
- The program has to be activatable(it has to be an active Tab in the browser)

![VLC](/screenshots/vlc-node-remote-example.png) ![netflix](/screenshots/netflix-node-remote-example.png) ![twitch](/screenshots/twitch-node-remote-example.png)

# currently supported node-remotes
  - Netflix.com
  - Youtube.com
  - VLC
  - Spotify
  - Twitch.tv
  - Emby (requires script: [Emby Node-Remote Script](https://dl.dropboxusercontent.com/u/8938703/workspace/nodejs/node-remote/remote-userscripts/emby-node-remote.user.js)
  - SoundCloud (requires script: [SoundCloud Node-Remote Script](https://dl.dropboxusercontent.com/u/8938703/workspace/nodejs/node-remote/remote-userscripts/soundcloud-node-remote.user.js)
  - and it is easy to add more
  
# How to install
  - install [nodejs](https://nodejs.org/en/download/)
  - clone this repository or download .zip version
  - download [AutoHotkey.exe](https://www.autohotkey.com/download/ahk-u32.zip)
  - extract the AutoHotkey.exe into the root folder
  - open the command line (cmd) in the root folder  and run the following command:
  ```
    npm install
  ```
  - (optional) For Emby and Soundcloud support install the Gresemonkey/Tampermonkey extension for your browser

# How to use
  - start server: run the "start_node-remote.bat" or cmd "node app.js"
  - open node-remote: use browser and go to "localhost:8888" or "youripadress:8888"

# How it works
  - Example: 
    - User navigates to "usersipadress:8888" in the browser
    - User presses a button on the VLC node-remote
    - this will make the browser request a new webpage with parameters from the nodejs server
    - nodejs will execute an autohotkey script, which will activate VLC and send the associated hotkey
