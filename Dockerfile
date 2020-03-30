FROM openjdk
COPY src JavaDocker
WORKDIR JavaDocker
RUN mkdir -p bin
RUN javac -d bin ./com/myapp/MyMain.java
WORKDIR bin
CMD ["java", "com.myapp.MyMain"]

# Create app directory
#RUN mkdir -p /usr/src/app
#ORKDIR /usr/src/app

# Install app dependencies
#COPY package.json /usr/src/app/
#RUN npm install

# Bundle app source
#COPY . /usr/src/app

#EXPOSE 8080
#CMD [ "java", "com.myapp.MyMain" ]