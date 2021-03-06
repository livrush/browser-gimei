# browser-gimei

Random Japanese name/address generator. Generates random data in either kanji, hiragana, or katakana.

Refactor of [node-gimei](https://github.com/demiglacesource/node-gimei), which is in turn a Node.js version of [gimei](https://github.com/willnet/gimei). Made to work in browsers.


## Install

Using npm:

```
$ npm install browser-gimei
```

Using yarn:

```
$ yarn add browser-gimei
```

Using bower:

```
$ bower install browser-gimei
```


## Load

From npm:

```js
const gimei = require('browser-gimei');
```

From Bower:

```html
<script src="/bower_components/browser-gimei/dist/gimei.min.js"></script>
```

`gimei` Object loads into global scope from the above script.

## Usage

`gimei` is an Object that contains multiple methods which return various randomly-generated data.

### name()

Returns fictitious name:

```js
var name = gimei.name();
console.log(name.kanji());                         // "斎藤 陽菜"
console.log(name.hiragana());                      // "さいとう はるな"
console.log(name.katakana());                      // "サイトウ ハルナ"
console.log(name.last().kanji());                  // "斎藤"
console.log(name.last().hiragana());               // "さいとう"
console.log(name.last().katakana());               // "サイトウ"
console.log(name.first().kanji());                 // "陽菜"
console.log(name.first().hiragana());              // "はるな"
console.log(name.first().katakana());              // "ハルナ"
```

### male()

Returns fictitious male name:

```js
    var male = gimei.male();
    console.log(male.kanji());                     // "小林 顕士"
    console.log(male.isMale());                    // true
    console.log(male.isFemale());                  // false
```

### female()

Returns fictitious female name:

```js
    var female = gimei.female();
    console.log(female.kanji());                   // "根本 彩世"
    console.log(female.isMale());                  // false
    console.log(female.isFemale());                // true
```

### address()

Returns fictitious address containing, or any one of, prefecture, city, and town:

```js
    var address = gimei.address();
    console.log(address.kanji());                  // 岡山県 大島郡大和村 稲木町
    console.log(address.hiragana());               // おかやまけん おおしまぐんやまとそん いなぎちょう
    console.log(address.katakana());               // オカヤマケン オオシマグンヤマトソン イナギチョウ
    console.log(address.prefecture().kanji());     // 岡山県
    console.log(address.prefecture().hiragana());  // おかやまけん
    console.log(address.prefecture().katakana());  // オカヤマケン
    console.log(address.city().kanji());           // 大島郡大和村
    console.log(address.city().hiragana());        // おおしまぐんやまとそん
    console.log(address.city().katakana());        // オオシマグンヤマトソン
    console.log(address.town().kanji());           // 稲木町
    console.log(address.town().hiragana());        // いなぎちょう
    console.log(address.town().katakana());        // イナギチョウ
```

## Links

* https://github.com/demiglacesource/node-gimei
* https://github.com/willnet/gimei

