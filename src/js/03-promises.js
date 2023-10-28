function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const obj = {
      position,
      delay,
    };

    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
  return promise;
}

const form = document.querySelector('.form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const delay = parseInt(form.querySelector('[name="delay"]').value);
  const step = parseInt(form.querySelector('input[name="step"]').value);
  const amount = parseInt(form.querySelector('input[name="amount"]').value);

  const promises = [];
  for (let i = 0; i < amount; i++) {
    promises.push(createPromise(i, delay + step * i));
  }

  promises.forEach(promise => {
    promise
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  });
});
