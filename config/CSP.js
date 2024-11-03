const CSP = {
  'default-src': "'none'",
  'script-src': "'self' 'unsafe-inline'", // TODO: use nonce
  'style-src': "'self' 'unsafe-inline'", // TODO: use nonce with __webpack_nonce__
  'img-src': "'self' data:",
  'font-src': "'self'",
  'object-src': "'none'",
  'media-src': "'none'",
  'form-action': "'none'",
  'frame-src': "'none'",
  'frame-ancestors': "'none'", // TODO: move to server
  'sandbox': "'none'", // TODO: move to server
  'base-uri': "'self'",
  'worker-src': "'none'",
  'manifest-src': "'self'",
  'connect-src': "'self'",
};

module.exports = CSP;
