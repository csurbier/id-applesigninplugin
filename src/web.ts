import { WebPlugin } from '@capacitor/core';
import { IDAppleSignInPlugInPlugin } from './definitions';

export class IDAppleSignInPlugInWeb extends WebPlugin implements IDAppleSignInPlugInPlugin {
  constructor() {
    super({
      name: 'IDAppleSignInPlugIn',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }

  async doAppleLogin():Promise<any>{
    console.log("AppleSignin - Not implemented on web")
    return
  }
}

const IDAppleSignInPlugIn = new IDAppleSignInPlugInWeb();

export { IDAppleSignInPlugIn };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(IDAppleSignInPlugIn);
