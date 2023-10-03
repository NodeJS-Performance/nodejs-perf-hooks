const { performance, PerformanceObserver } = require("perf_hooks")
const axios = require('axios')

const observer = new PerformanceObserver((list) => {
    console.log(list.getEntries());
})

observer.observe({ entryTypes: ["measure"] })

try {
    (async () => {
        performance.mark('start')
        await axios.get('https://swapi.dev/api/people/1/')
    })();
} catch(err) {
    console.error(err)
} finally {
    performance.mark('end')
    performance.measure('swapi-call', 'start', 'end')
}
