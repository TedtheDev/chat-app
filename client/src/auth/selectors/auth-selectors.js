export const isAuthenticatingSelector = (state) => state.authentication.isAuthenticating;
export const authenticateErrorSelector = (state) => state.authentication.errorMessage;
export const isAuthenticatedSelector = (state) => state.authentication.isAuthenticated;
export const authenticateOnLoadFailureSelector = (state) => state.authentication.authenticateOnLoadFailure