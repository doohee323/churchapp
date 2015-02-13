concordchurch.me
===========

http://52.0.156.206:3000

ㅇ function
	- read the desktop website and rewrite for mobile site.
	- for the performance, use redis.
	
ㅇ install 
- node.js:
	sudo apt-get install npm
- yeoman:
	sudo npm install -g yo
- bower:
	npm install -g bower
- grunt:
	npm install -g yo grunt-cli
	npm install grunt --save-dev
- node-inspector:
	npm install -g node-inspector
- forever: 
	sudo npm install forever -g
- redis: 
	sudo npm install redis
	vi redis.conf
		bind 127.0.0.1

ㅇ debugging with node-inspector
	./debug.sh

ㅇ run with grunt
	grunt serve
	
	http://localhost:9000

ㅇ simple build and deploy
	./build.sh compile

ㅇ run
	./build.sh restart

	http://localhost:3000

--------------------------------------------------

cf. Making angular webapp with yeoman and S3

ㅇ create with yeoman
	yo angular

ㅇ run app
	grunt server

ㅇ add css with yeoman grunt
	/concordchurch.me/app/index.html

    <!-- build:css(.) styles/style.css -->
    <link rel="stylesheet" href="styles/style.css">

	/concordchurch.me/Gruntfile.js

    cssmin: {
       dist: {
         files: {
           '<%= yeoman.dist %>/styles/main.css': [
             '.tmp/styles/{,*/}*.css'
           ]
         }
       }
     },


    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'styles/*',
            'fonts/*'
          ]

ㅇ main package
	- node.js 
    "redis": "^0.10.3",
    "xmldom": "~0.1.19",
    "xpath": "0.0.9"
	- bower
    "angular": "~1.2.0",
    "angular-ui-router": "~0.2.13",
    "angular-material": "~0.7.1",

