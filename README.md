# Paginator

## Install

 ```bash
npm git clone
```

 ```bash
npm install
```

## Execute
### Run
 ```bash
node app.js
```

### Test
 ```bash
npm test
```

## 

## Usage

### Console output
```js
var  paginator  =  require('../src/paginator.js');

paginator.PrintConsolePagination(4, 5, 1, 0);
```

### String return
```js
var  paginator  =  require('../src/paginator.js');

paginator.PrintStringPagination(4, 10, 2, 2);
```

### Description

Parameter      |  Type | Description
----------------|--------|--------------
current_page |  number  | The current page number
total_pages | number  | Total amount of pages
boundaries | number |  Number of pages linked in begin and in end
around  | number  | Number of pages linked before and after current page