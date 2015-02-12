concordchurch.me
===========

http://concordchurch.me

ㅇ install 
- node.js
- yo
- 

ㅇ simple build and deploy

./build.sh

--------------------------------------------------

Making angular webapp with yeoman and S3

ㅇ create with yeoman
	yo angular

ㅇ run app

	grunt server

ㅇ build grunt & upload

	grunt build

	cd dist
	dist> s3cmd put --recursive . s3://concordchurch.me
	cf) s3cmd del --force --recursive s3://concordchurch.me

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




