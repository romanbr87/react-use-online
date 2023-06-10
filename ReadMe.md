# useOnline

Simple React Hook for storing connectivity to the internet for browser environment.

Read about [Hooks](https://reactjs.org/docs/hooks-intro.html) feature.

## Installation

#### Installing with NPM 

```
npm i react-useOnline 
```
## Examples

Using useOnline to display connectivity with react-icons. 

```javascript
import React from 'react';
import { useOnline } from 'react-useOnline';
import { BsWifi, BsWifiOff } from "react-icons/bs";

const App = () => {
    const { isOnline, error } = useOnline();
    const WifiIcon = () => isOnline ? <BsWifi/> : <BsWifiOff/>;

  if (error) return <p>{error}</p>
  return (
    <WifiIcon/>
  );
};
```

Using useOnline to enable certain features based on connectivity.


```javascript
import React, { Fragment } from 'react';
import { useIsOnline } from 'react-use-is-online';
import OnlineFeature from './OnlineFeature';
import OfflineFeature from './OfflineFeature';


const App = () => {
  const { isOnline, error } = useIsOnline();

  if (error) return <p>{error}</p>
  return (
  	isOnline ? <OnlineFeature /> : <OfflineFeature/>
  );
};
```
## Hook

#### Returns

isOnline - Whether there is connectivity to the internet ```[true | false | null]```

isOffline - Whether there is no connectivity to the internet ```[false | true | null]```

error - Error string. Used for checking if the hook is used in browser environment and for some other errors ```[null | string]```