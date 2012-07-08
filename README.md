jQuery Async Uploader
=====================

The purpose of this project it to demonstrate asynchronous file uploads using the native `XMLHttpRequest` object as opposed to using something like Flash.

This is achieved via a combination of a jQuery plug-in used to send the files and a small Express.js project to receive the files.

## Installation

This project requires an up to date installation of Node.js and the Express.js NPM module.

```
git clone git://github.com/chrisnewtn/jquery-async-uploader.git
cd jquery-async-uploader
npm install
```

## Project Contents

### Express.js app

The Express.js app is meant simply as a convenient place for the client script to upload files to. You will probably want to replace this with a script to receive the files in your own environment.

### jQuery Plugin

This simple plug-in uploads files from an html input element of type files e.g. something like this:

```html
<input type="file">
```

Uploads the file (no multiple upload at this point) and returns a promise interface for you to write code around and handle.

### Page Script

The page script is an example of how you’d use the jQuery plug-in. Here you can strip out the body of the promise handlers with something more bespoke to fit your own needs.
