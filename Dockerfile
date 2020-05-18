FROM alpine/node
COPY server.js /
COPY VERSION /
ENTRYPOINT node /server.js