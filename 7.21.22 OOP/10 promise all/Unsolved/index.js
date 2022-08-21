//            **** done

const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 9999;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // done: If the duration is longer than maxDuration, reject() the promise
      // done: Otherwise resolve() the promise
      if (duration >= maxDuration) {
        reject(new Error(`timed out`));
      } else {
        resolve(`response received: ${duration} ms`);
      }
    }, duration);
  });

const promises = apiCallDurations.map((duration) => callAPI(duration));

console.log('Promises array before the timeouts have finished: ', promises);

// done: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all(promises)
  .then((response) => console.log('response from promise.all()', response))
  .catch((err) => console.error(err));
