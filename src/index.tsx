import React from 'react';
import {createRoot} from 'react-dom/client';

import Application from './app';

const ApplicationContainer = document.getElementById('application-container');

// eslint-disable-next-line no-console
console.warn(`
This template prepares Content Security Policy (CSP) but some directives \
can not be set via <meta> tag and requre to be configured as HTTP header. \
Like 'frame-ancestors' and 'sandbox' directives fro example. \
Some directives can not be set to the most secure value without controlling \
the server. For example, 'unsafe-inline' is used in 'script-src' and \
'style-src' directives. There is __webpack_nonce__ variable that can be \
used to configure nonce for scripts and styles including styled-components \
CSS-in-JS dynamic styles.

As full CSP handling is out of scope for this template some CSP errors in \
console were left intentionaly to stress the importance.
`);

createRoot(ApplicationContainer as HTMLElement).render(<Application />);
