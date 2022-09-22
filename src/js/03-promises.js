import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('form')
}

let promise = null

// let promiseCount = null;
// let firstDelay = null;
// let delayStep = null;



refs.formEl.addEventListener('submit', onSubmit)


function onSubmit(e) {
  e.preventDefault()
  const promiseCount =  parseInt(e.currentTarget.elements.amount.value)
  console.log(promiseCount)
  const firstDelay = parseInt(e.currentTarget.elements.delay.value)
  console.log(firstDelay)
  const delayStep = parseInt(e.currentTarget.elements.step.value)
  console.log(delayStep)

 

  for (let i = 1; i <= promiseCount; i += 1) {
   
  createPromise(i, firstDelay + delayStep * (i - 1)).then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}


function createPromise(position, delay) {

  return  promise = new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
    
    if (shouldResolve) {
    resolve({ position, delay })
    }
    else {
   reject ({ position, delay })
    }
    


  }, delay );
  
  } )
  
}

// console.log(Notiflix)


// createPromise(2, 1500)
  // .then(({ position, delay }) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  // })
  // .catch(({ position, delay }) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });

  // Notiflix.warning('Memento te hominem esse');