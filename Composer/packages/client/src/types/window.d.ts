// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// eslint-disable-next-line @bfc/bfcomposer/office-ui-import-scope
import * as Fabric from '@fluentui/react';
import * as ExtensionClient from '@bfc/extension-client';
import * as CodeEditors from '@bfc/code-editor';
import * as UIShared from '@bfc/ui-shared';
import { ExtensionSettings } from '@bfc/extension-client';

declare global {
  interface Window {
    /**
     * Electron mechanism used for communication from renderer to main process.
     */
    ipcRenderer: IPCRenderer;

    /**
     * Flag that is set on the window object when the client is embedded within Electron.
     */
    __IS_ELECTRON__?: boolean;

    /**
     * Flag to enable OneAuth.
     */
    __ENABLE_ONEAUTH__?: boolean;

    /**
     * Composer UI Extension API
     */
    Composer: {
      __extensionId: string;
      __pluginType: string;
      render: (component: React.ReactElement) => void;
      sync: (shell: Shell) => void;
      settings: ExtensionSettings;
      [key: string]: any;
    };

    ExtensionClient: typeof ExtensionClient;
    Fabric: typeof Fabric;
    CodeEditors: typeof CodeEditors;
    UIShared: typeof UIShared;

    /**
     * Token generated by the server, and sent with certain auth-related requests to the server to be verified and prevent CSRF attacks.
     */
    __csrf__: string;
  }
}
