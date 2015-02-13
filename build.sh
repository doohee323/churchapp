#!/bin/bash

export NODE=forever
#export NODE_ENV=production
#export NODE_ENV=development
export NODE_ENV=staging

# for staging server
export RUN_BASE=/home/ubuntu/churchapp

echo '1nd args : '$1

echo "1 : cd $RUN_BASE"
cd $RUN_BASE

if [ $1 == 'compile' ]
then
  echo "1 : npm / bower"
  bower install
  grunt build --force 
elif [ $1 == 'restart' ]
then
  echo "2 : $NODE restart app.js"
	forever stop app;rm ~/.forever/app.log
	sleep 3
	forever --uid "app" start -c "node --expose-gc --max-old-space-size=1024 --nouse-idle-notification" app.js
else
	echo 'else'
fi

  #rm -rf node_modules
  #npm install
	#npm install lru-cache
	#npm install sigmund
	#npm install autoprefixer
	#npm install connect
	#npm install clean-css
	#npm install ansi-styles
	#npm install fs-extra
	#npm install hooker
	#npm install async
	#npm install ng-annotate
	#npm install chalk
  #npm install diff
	#npm install connect-livereload
	#npm install maxmin
	#npm install strip-ansi
	#npm install stat-mode
	#npm install jshint
	#npm install zlib-browserify
	#npm install rimraf
	#npm install each-async
	#npm install open
	#npm install has-color
	#npm install ware
	#npm install uglify-js
	#npm install pretty-bytes
	#npm install portscanner
	#npm install html-minifier
	#npm install imagemin-gifsicle
	#npm install svgo
	#npm install imagemin-jpegtran
	#npm install imagemin-optipng
	#npm install imagemin-pngquant
	#npm install imagemin-svgo


