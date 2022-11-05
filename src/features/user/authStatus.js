/**
 * initialized: the initial status of user, it should be immediately changed.
 * unauthenticated: we are certain that the user doesn't have access to any credentials.
 * authenticating: in the process of authenticating to the API.
 * authenticated: we are certain that the user has a valid credential.
 * rejected: we are certain that the user credential is invalid.
 * failed: credential verification failed (uncertain status).
 */
const AUTH_STATUS = {
  initialized: 'INITIALIZED',
  unauthenticated: 'UNAUTHENTICATED',
  authenticating: 'AUTHENTICATING',
  authenticated: 'AUTHENTICATED',
  rejected: 'REJECTED',
  failed: 'FAILED',
};

export default AUTH_STATUS;
