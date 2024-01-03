import CMS from '@staticcms/core';
import '@staticcms/core/dist/main.css';
import config from './config.yml';

// Initialize the CMS object
CMS.init();
// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate);