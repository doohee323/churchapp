killall node

node-inspector --debug-port=5859 --web-port=4002 &

sleep 3;

node --debug app.js &

#node --debug=5859 --expose-gc --max-old-space-size=6000 $1 &

sleep 3;

open http://127.0.0.1:4002/debug?port=5859
