import { WebPlugin } from '@capacitor/core';
import { IDAppleSignInPlugInPlugin } from './definitions';
export declare class IDAppleSignInPlugInWeb extends WebPlugin implements IDAppleSignInPlugInPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
    doAppleLogin(): Promise<any>;
}
declare const IDAppleSignInPlugIn: IDAppleSignInPlugInWeb;
export { IDAppleSignInPlugIn };
