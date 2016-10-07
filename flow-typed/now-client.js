// @flow

type Deployment = {
  uid: string,
  name: string,
  url: string,
  created: string
}

type File = {
  type: string,
  name: string,
  uid: string,
  children: File
}

type Alias = {
  uid: string,
  alias: string,
  created: string,
  deploymentId: string
}

type Secret = {
  uid: string,
  name: string,
  created: string
}

declare module "now-client" {
  declare class Now {
    getDeployments(): Promise<Deployment[]>;
    getDeployment(id: string): Promise<Deployment>;
    createDeployment(body: string): Promise<any>;
    deleteDeployment(id: string): Promise<any>;
    getFiles(id: string): Promise<File[]>;
    getFile(id: string, fileId: string): Promise<any>;
    getAliases(id: string): Promise<Alias[]>;
    createAlias(id: string, alias: string): Promise<any>;
    deleteAlias(id: string): Promise<any>;
    getSecrets(): Promise<Secret[]>;
    createSecret(name: string, alias: string): Promise<{ uid: string }>;
    renameSecret(id: string, name: string): Promise<{ uid: string, oldName: string }>;
    deleteSecret(id: string): Promise<{ uid: string }>;
  }
  declare function exports(token: string): Now;
}
