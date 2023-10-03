const { performance, PerformanceObserver } = require('perf_hooks');

function logFn() {
    console.log('Hello World');
}

function countFn(n) {
    if(n==0) return n;
    countFn (n-1);
}

function fibonacciFn(n) {
    if(n <= 1) return n;
    return fibonacciFn(n - 1) + fibonacciFn(n - 2);
}

const wrapped1 = performance.timerify(logFn);
const wrapped2 = performance.timerify(countFn);
const wrapped3 = performance.timerify(fibonacciFn);

const observer = new PerformanceObserver((list) => {
    console.log(list.getEntries());
    observer.disconnect();
});

observer.observe({entryTypes : ['function']});

wrapped1();
wrapped2(6);
wrapped3(40);
