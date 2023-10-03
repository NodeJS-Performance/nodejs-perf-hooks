const { performance, PerformanceObserver } = require('perf_hooks')

function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create a PerformanceObserver to collect performance entries
const observer = new PerformanceObserver((list) => {
    console.log(list.getEntries());
});

observer.observe({ type: "measure" })

// Measure the performance of the fibonacci function
performance.mark('start');
fibonacci(40);
performance.mark('end');
performance.measure('fibonacciFn', 'start', 'end');
