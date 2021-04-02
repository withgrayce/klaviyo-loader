# klaviyo-loader

Async loader for the Klaviyo JS API written in typescript with promises.

This package makes no changes to the functionality of the Klaviyo JS API, it merely provides an easy way to load it asynchronously and then execute calls against the API in a Typescript project.

## Installation

```
$ npm install --save klaviyo-loader
```

## Usage

```typescript
import { Klaviyo, Loader } from 'klaviyo-loader';

const loader = new Loader(yourApiToken);
loader.load().then((klaviyo: Klaviyo) => {
  klaviyo.push(['identify', {
    '$email' : '{{ email }}'
  }]);
});
```

The API only supports the `push` call, which is documented [here](https://www.klaviyo.com/docs/getting-started).
