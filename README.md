# NodeMicroservice
This file is for writing some basic documentation about your microservice.

To use this as a template:
[Recipe Reused from Kevin Thompson](http://kevinthompson.info/blog/2013/11/11/using-git-repos-as-project-templates.html)
```
$ git clone --depth 1 --origin source project-template new-project
Cloning into 'new-project'...
done.
$ cd new-project
$ git create new-project
Updating origin
created repository: YourGithubAccount/new-project
$ git log
abfe202 Project Template v0.0.1
```

Note: this requires first installing the [Hub library](https://github.com/github/hub/releases).  Bash and Powershell scripts will be provided at some point so as not to require this dependency.

To test your service you can use
```
npm test
```
This will run the script.js file.

To run your service you can use
```
npm start
```
This will run the server.js file.
