var deferUntilNoParams = (finalResult) => function repeatItself(param) { return typeof param === 'undefined' ? finalResult : repeatItself }
//Usage: deferUntilNoParams('final')(2321312)(2312)()