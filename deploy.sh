#!/bin/bash

#rm -Rf /Users/mac/Documents/ConcordChurch/assets/www

cp -Rf /Users/mac/Documents/churchapp/app/* /Users/mac/Documents/ConcordChurch/assets/www
cd /Users/mac/Documents/ConcordChurch/assets/www
jar cvf deploy.jar *

ssh -i /securedKeys/topzone.pem ubuntu@52.0.156.206 rm -Rf /home/ubuntu/churchapp/dist/*

scp -ri /securedKeys/topzone.pem deploy.jar ubuntu@52.0.156.206:/home/ubuntu/churchapp/dist

ssh -i /securedKeys/topzone.pem ubuntu@52.0.156.206 'cd /home/ubuntu/churchapp/dist; jar xvf deploy.jar; rm -Rf deploy.jar'







