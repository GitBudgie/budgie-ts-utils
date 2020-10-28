# budgie-ts-utils

Budgerigar's miscellaneous TypeScript utilities contain generic classes,
functions and variables in TypeScript (JavaScript ES6).

The functions are written using statements and not with "const". Thus the order
of declaration does not need to be the order of execution. A const can not be
used until it has been declared.

Nothing is exported by default.

The source code uses tabs for indentation (tab size 8).
Each line contains maximum of 80 characters.

*This is my first actual GitHub project and things may change in the future.*

## Installation

Install directly from [GitHub](https://www.github.com/) source repository:

```bash
npm install https://github.com/GitBudgie/budgie-ts-utils
```

A Node Package Manager registry publication may come some day...

## Usage

Here is an example of using a utility function:

```typescript
import { clamp } from 'budgie-ts-utils';

...

// Clamps the number num between 0 and 1.
const clampedNum = clamp(num, 0, 1);
```

There is currently no comprehensive documentation for the utilities.
Hopefully, they are named and commented so that they are intuitive to use.

### About Unicode

Internally, JavaScript uses UTF-16 to encode strings.
Therefore, a single character takes two bytes of memory.
The length of a single character is considered to be one.

```javascript
'Abc'.length
3
```

This may cause problems with so called surrogate pairs.
A surrogate pair requires two UTF-16 characters to represent
a single Unicode character from the "astral plane" (UTF-32).

The built-in JavaScript string functions behave this way:

```javascript
'Abc'.padStart(4, '😀')
"\ud83dAbc"
```

Unless stated otherwise, these utilities follow similar logic.

## Disclaimer
Some of the ideas originate from the examples in the Internet
(e.g. [Stack Overflow](https://www.stackoverflow.com/)).
There may be bugs and bad behavior. Anything may change at any time.
Use at your own risk!

## License
[MIT](https://choosealicense.com/licenses/mit/)
