# IDAppleSignInPlugIn

This plugin let's you implement Apple SignIn into your Ionic application.

# iOS plugin only

  - You need to add the Apple Signin capabilities to your Ionic project

# Installation
```sh
npm install id-applesigninplugin
```

### Usage example in a Ionic page:

```sh
import { Component } from '@angular/core';
import { Plugins } from "@capacitor/core";
const { IDAppleSignInPlugIn } = Plugins

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  async doAppleLogin(){
      const wait = IDAppleSignInPlugIn.doAppleLogin({}, (info, err) => {
        console.log(info)
        console.log("======= ERR")
        console.log(err)
      })
  }
}

```
  

### API

IDAppleSignInPlugIn.doAppleLogin({}, (info, err)

License
----

MIT


**Free Software, Hell Yeah!**
