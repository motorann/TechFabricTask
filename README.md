# A clicker game using only HTML, CSS and JS

The game have two stage: registration webpage and game webpage.  
The form registration includes basic validation and collects the user's name.
The game has 5 levels and you be able to progress to the next level by clicking on the enemy.

## How to run the game?

You can do this in the simplest way just by clicking on [this link](https://motorann.github.io/TechFabricTask/).
Or if you want to run the game locally,

- downoload files as you feel comfortable: via Git / GitHub Desktop / or even ZIP
  - make a double-click on index.html file in a root folder.
    Note, if your default browser is Firefox, this way don't fit you (because of localStorage).
  - use some http server on your device. For example, via npm [http-server](https://www.npmjs.com/package/http-server), [apache](https://httpd.apache.org/download.cgi). But you need to download it first, and for that use other tools. Also, sometimes, IDE provides different extensions to work. For example, there is Live Server in Visual Studio Code.

## Important notes

1. Only first enemy has css sprite animation. I'd like to add to each target enemy this kind of animation. And to do it I'm going to create side branch and you can observe the update after Friday 14. (maybe not only one update)
2. Bug1: if you click on img container, score will also increase by one. I think it will partly fix by adding one more div under enemy, set this div circle shape or another, and attach event listener exactly to this div.
   Maybe we can also fix this for static images by adding map html element and specify the area.
3. Bug2: sometimes message about move to the next level appers in the wrong position. I have tried to decrease time animation and in setTimeout, but it looked not so good, however the bug was fixed. I'll try to think about it later and play around position absolute.
4. Without using JS modules, all code perfectly divides into separate functions and work well!
   So, you haven't use some server to run it locally. Maybe, I'll divide it in the side branch, if code will expand.
