#!/bin/bash

export NODE=forever
#export NODE_ENV=production
#export NODE_ENV=development
export NODE_ENV=staging

# for staging server
export RUN_BASE=/mnt/data2/concordchurch.me

echo '1nd args : '$1

echo "1 : cd $RUN_BASE"
cd $RUN_BASE

if [ $1 == 'compile' ]
then
  echo "1 : npm / bower"
  #rm -rf node_modules
  npm install
  bower install
  #grunt build
elif [ $1 == 'restart' ]
then
  echo "2 : $NODE restart app.js"
	forever stop pop;rm ~/.forever/pop.log
	sleep 3
	forever --uid "pop" start -c "node --expose-gc --max-old-space-size=1024 --nouse-idle-notification" app.js
else
	echo 'else'
fi




