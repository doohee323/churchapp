killall node

node-inspector --web-port=4001 &

sleep 3;

#node --debug app.js &

node --debug --expose-gc --max-new-space-size=2048 --max-old-space-size=4096 app.js &

sleep 3;

open http://localhost:3000

open http://127.0.0.1:4001/debug?port=5858
