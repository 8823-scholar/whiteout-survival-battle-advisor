FROM node:22.12-alpine

ENV APP_HOME /var/app

# RUN apk add --update --no-cache \
#       bash \
#       curl \
#       gcc \
#       g++ \
#       libc6-compat \
#       make \
#       python3

WORKDIR $APP_HOME

ADD package.json .
ADD package-lock.json .
RUN npm update -g npm
RUN npm ci

ADD . .

RUN npm run build

CMD ["npm", "run", "start"]
