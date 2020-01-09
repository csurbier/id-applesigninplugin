declare module "@capacitor/core" {
  interface PluginRegistry {
    IDAppleSignInPlugIn: IDAppleSignInPlugInPlugin;
  }
}

export interface IDAppleSignInPlugInPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  doAppleLogin():Promise<any>;
}
