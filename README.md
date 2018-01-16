# Stiki

Stiki is a web app that keeps your notes somewhere you can always access.  
It's a CRUD application that utilizes Google's **Firebase** Real-time database to store all your notes. It uses **Angular** as a front-end framework for templating and three-way data binding.

Thanks, Firebase, for hosting this web app!  
Check it out [**here**](https://stiki-notes.firebaseapp.com)

# Angular CLI Help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Building this project

If you want to build this project, make sure you have `nodeJS` and `npm` installed.

Start by installing Angular, the framework used in this project.
```
npm install -g angular
```

Next, install AngularFire and Firebase, which is the layer that deals with the Real-time Database. Make sure you're in the project root directory. The `--save` flag makes sure that they're added as dependencies to the project.

```
npm install angular-fire firebase --save
```

I also recommend installing the Angular CLI. This allows you to build components and services with ease.
```
npm install -g angular-cli
```

Now, you can build the project with an optional `--prod` flag for production.
```
ng build [--prod]
```

or serve it, which will host a server on `http://localhost:4200/`

```
ng serve
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
