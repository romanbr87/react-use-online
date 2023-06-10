# react-use-online

Simple React Hook for the browser environment for storing connectivity to the internet.

Read about [Hooks](https://reactjs.org/docs/hooks-intro.html) feature.

## Installation
```shell
npm i react-use-online
```
## Hook

#### Returns

isOnline - Whether there is connection to the internet ```[true | false | null]```

isOffline - Whether there is no connection to the internet ```[false | true | null]```

checkConnectivity - function that checks connection to the web and updates the hook

error - Error string. Used for checking if the hook is used in browser environment and for some other errors ```[null | string]```

## Example

Using useOnline to display connectivity with react-icons. 

```javascript
import React from "react";
import useOnline from "react-use-online";

const App = () => {
  const { isOnline, error, checkConnectivity } = useOnline();

  return (
    <div>
      <h1>Internet Connectivity</h1>
      {isOnline ? (
        <p>You are currently online.</p>
      ) : (
        <p>You are currently offline.</p>
      )}
      {error && <p>An error occurred: {error.message}</p>}
      <button onClick={checkConnectivity}>Check Connectivity</button>
    </div>
  );
};

export default App;
```
