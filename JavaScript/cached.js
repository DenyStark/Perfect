const сached = (func, cacheTimeout = Infinity) => {
  let cache = [];

  return params => {
    const fromCache = cache.find(row => (
      JSON.stringify(row.params) === JSON.stringify(params) &&
      Date.now() - row.time < cacheTimeout
    ));

    if (fromCache) {
      console.log(`From cache (cache length: ${cache.length})`);
      return fromCache.result;
    } else {
      console.log(`To cache (cache length: ${cache.length})`);
      // clean cache
      cache = cache.filter(row => Date.now() - row.time < cacheTimeout);

      const result = func(params);
      cache.push({ time: Date.now(), params, result });
      return result;
    }
  };
};

const getTime = params => (new Date().toISOString() + '\t' + params.hello);
const cachedTime = сached(getTime, 5000);

setInterval(() => {
  console.log(cachedTime({ hello: 'good night!' }));
}, 1000);

setInterval(() => {
  console.log(cachedTime({ hello: 'perfect night!' }));
}, 2500);
