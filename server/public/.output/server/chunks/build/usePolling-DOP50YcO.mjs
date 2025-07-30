import { ref } from 'vue';

const pollingDict = {};
function usePolling(fun, options) {
  const {
    key,
    time = 2e3,
    totalTime,
    count,
    callback = () => false
  } = options != null ? options : {};
  let timer = null;
  let endTime = null;
  let totalCount = 0;
  const result = ref(null);
  const error = ref(null);
  const run = () => {
    if (endTime && endTime <= Date.now()) {
      end();
      callback();
      return;
    }
    if (count && totalCount >= count) {
      end();
      callback();
      return;
    }
    totalCount++;
    timer = setTimeout(() => {
      fun().then((res) => {
        result.value = res;
        run();
      }).catch((err) => {
        error.value = err;
      });
    }, time);
  };
  const start = () => {
    end();
    if (key && pollingDict[key]) {
      pollingDict[key].end();
      delete pollingDict[key];
    }
    endTime = totalTime ? Date.now() + totalTime : null;
    run();
    if (key) {
      pollingDict[key] = { end };
    }
  };
  const end = () => {
    if (timer) {
      setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        endTime = null;
        totalCount = 0;
        if (key) delete pollingDict[key];
      }, 0);
    }
  };
  return {
    start,
    end,
    error,
    result
  };
}

export { usePolling as u };
//# sourceMappingURL=usePolling-DOP50YcO.mjs.map
