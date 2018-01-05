# shleep is a promise based sleep function 😴

## Installation

`yarn install shleep`
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
