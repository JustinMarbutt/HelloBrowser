## Overview

A boilerplate for a HTML5 page to hack up, served on localhost, without lots of messy server stuff.

Using Grunt to run a small node server, along with the staple bower components, you are given all the tools you need to start haxzoring your way through a boring HTML5 page, and view the results in the browser.

## Requirements

Node, Grunt CLI, and Bower.

download Node here for your OS - http://nodejs.org/download/

Once you have Node up and running, you can install Bower & Grunt CLI using npm.

```terminal
$ npm install -g bower grunt-cli
````

## Install & Run

```terminal
$ git clone git://github.com/justinmarbutt/HelloBrowser.git
```
```terminal
$ cd HelloBrowser && npm install
```
```terminal
$ bower install
```
```terminal
$ grunt
````
Your playground is now all setup and running on http://localhost:8282/ spawned by grunt's http-node server.

#### What is all this black magic about grunt starting a node server with no node files?

Mostly just this -> https://github.com/aetheon/grunt-http-server