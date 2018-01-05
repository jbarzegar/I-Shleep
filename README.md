# shleep is a promise based sleep function 😴

Shleep is tiny,[coming in at 183 bytes](https://bundlephobia.com/result?p=shleep@1.0.2)

## Installation

#### Yarn
`yarn install shleep`

#### Npm
`npm install -S shleep`

## Usage

```javascript
import sleep from 'shleep'

// Standard promise
sleep(1000).then(/* Do stuff */)

// async await
async function yourAsyncFunction() {
  await sleep(1000)

  /* do stuff here */
}
```
