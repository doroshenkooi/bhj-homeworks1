function changeAdvert() {
    const rotator = document.querySelector('.rotator'); 
    const cases = rotator.querySelectorAll('.rotator__case');  
    const activeCase = rotator.querySelector('.rotator__case_active'); 
    const activeIndex = Array.from(cases).indexOf(activeCase);

    activeCase.classList.remove('rotator__case_active');
  
    const nextIndex = (activeIndex + 1) % cases.length;
    const nextCase = cases[nextIndex];
  
    nextCase.classList.add('rotator__case_active');
  }

  setInterval(changeAdvert, 1000);
  
  