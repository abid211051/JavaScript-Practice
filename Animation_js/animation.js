// ///////////////////////////////////////// SIMPLE ANIMATION CODE /////////////////////////////////////////////////// //


// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   var fadeElements = document.querySelectorAll('.fade-in');
//   window.addEventListener('scroll', function() {
//     for (var i = 0; i < fadeElements.length; i++) {
//       if (isElementInViewport(fadeElements[i])) {
//         fadeElements[i].classList.add('fade-in-active');
//       } else {
//         fadeElements[i].classList.remove('fade-in-active');
//       }
//     }
//   });
// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }
  
//   const element = document.querySelector('.fade-in');
//   let isInViewport = isElementInViewport(element);
  
//   window.addEventListener('scroll', function () {
//     const shouldBeInViewport = isElementInViewport(element);
//     if (shouldBeInViewport && !isInViewport) {
//       element.classList.add('slide-in', 'active');
//       element.classList.remove('slide-out');
//       isInViewport = true;
//     } else if (!shouldBeInViewport && isInViewport) {
//       element.classList.add('slide-out', 'active');
//       element.classList.remove('slide-in');
//       isInViewport = false;
//     }
//   });

// const b = document.getElementsByClassName('bar')[0];
// const n1 = document.getElementsByClassName('toogle-button')[0];
// const n2 = document.getElementsByClassName('toogle-button')[1];
// b.addEventListener('click', ()=>{
//     n1.classList.toggle('active');
//     n2.classList.toggle('active');
// })