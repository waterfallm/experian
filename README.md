Note: Do not pin react-redux to 7.2.0

npm install react-redux


Redux Tools

 const store = createStore(
   reducer, /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
