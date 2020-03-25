FROM openjdk
COPY src JavaDocker
WORKDIR JavaDocker
RUN mkdir -p bin
RUN javac -d bin ./com/myapp/MyMain.java
WORKDIR bin
CMD ["java", "com.myapp.MyMain"]

