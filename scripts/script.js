function controlHeader() {
  let show = true

  const menuSection = document.querySelector('.menu-section')
  const menuToggle = menuSection.querySelector('.menu-toggle')
  const featuresBtn = document.querySelector('#featuresBtn')
  const extensionsBtn = document.querySelector('#extensionsBtn')
  const contactBtn = document.querySelector('#contactBtn')

  function btnHeader(nameBtn) {
    nameBtn.addEventListener('click', () => {
      document.body.style.overflow = show ? '' : 'initial'

      menuSection.classList.toggle('on', show)
      show = !show
    })
  }

  function btnHeaderWithoutHidden(nameBtn) {
    nameBtn.addEventListener('click', () => {
      document.body.style.overflow = show ? 'hidden' : 'initial'

      menuSection.classList.toggle('on', show)
      show = !show
    })
  }

  btnHeaderWithoutHidden(menuToggle)
  btnHeader(featuresBtn)
  btnHeader(extensionsBtn)
  btnHeader(contactBtn)
}

function changeFeatures() {
  const tab1 = {
    img: './images/illustration-features-tab-1.svg',
    title: 'Bookmark in one click',
    txt: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
  }

  const tab2 = {
    img: './images/illustration-features-tab-2.svg',
    title: 'Intelligent search',
    txt: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks'
  }

  const tab3 = {
    img: './images/illustration-features-tab-3.svg',
    title: 'Share your bookmarks',
    txt: 'Easy share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  }

  const simpleBookmarkingBtn = document.querySelector('#simpleBookmarkingBtn')
  const speedySearchingBtn = document.querySelector('#speedySearchingBtn')
  const easySharingBtn = document.querySelector('#easySharingBtn')

  simpleBookmarkingBtn.addEventListener('click', () => {
    const imgFeatures = document.querySelector('#imgFeatures')
    const textFeatures = document.querySelector('#textFeatures')
    const featuresTitle = document.querySelector('#featuresTitle')

    imgFeatures.setAttribute('src', tab1.img)
    textFeatures.textContent = tab1.txt
    featuresTitle.textContent = tab1.title

    if ((speedySearchingBtn.classList = 'activeLink')) {
      speedySearchingBtn.classList.remove('activeLink')
      simpleBookmarkingBtn.classList.add('activeLink')
    }
    if ((easySharingBtn.classList = 'activeLink')) {
      easySharingBtn.classList.remove('activeLink')
      simpleBookmarkingBtn.classList.add('activeLink')
    } else {
    }
  })

  speedySearchingBtn.addEventListener('click', () => {
    const imgFeatures = document.querySelector('#imgFeatures')
    const textFeatures = document.querySelector('#textFeatures')
    const featuresTitle = document.querySelector('#featuresTitle')

    imgFeatures.setAttribute('src', tab2.img)
    textFeatures.textContent = tab2.txt
    featuresTitle.textContent = tab2.title

    if ((simpleBookmarkingBtn.classList = 'activeLink')) {
      simpleBookmarkingBtn.classList.remove('activeLink')
      speedySearchingBtn.classList.add('activeLink')
    }
    if ((easySharingBtn.classList = 'activeLink')) {
      easySharingBtn.classList.remove('activeLink')
      speedySearchingBtn.classList.add('activeLink')
    } else {
    }
  })

  easySharingBtn.addEventListener('click', () => {
    const imgFeatures = document.querySelector('#imgFeatures')
    const textFeatures = document.querySelector('#textFeatures')
    const featuresTitle = document.querySelector('#featuresTitle')

    imgFeatures.setAttribute('src', tab3.img)
    textFeatures.textContent = tab3.txt
    featuresTitle.textContent = tab3.title

    if ((speedySearchingBtn.classList = 'activeLink')) {
      speedySearchingBtn.classList.remove('activeLink')
      easySharingBtn.classList.add('activeLink')
    }
    if ((easySharingBtn.classList = 'activeLink')) {
      simpleBookmarkingBtn.classList.remove('activeLink')
      easySharingBtn.classList.add('activeLink')
    } else {
    }
  })
}

function frequentltQuestions() {
  const divQuestion1 = document.querySelector('.divQuestion1')
  const divQuestion2 = document.querySelector('.divQuestion2')
  const divQuestion3 = document.querySelector('.divQuestion3')
  const divQuestion4 = document.querySelector('.divQuestion4')

  function openAndCloseAnswer(divQuestion, question, icon) {
    divQuestion.classList.toggle('hide') 
    question.classList.toggle('questionColor') 
    icon.classList.toggle('activeArrow')
  }

  divQuestion1.addEventListener('click', () => {
    const question1 = document.querySelector('.question1')
    const answer1 = document.querySelector('.answer1')
    const iconArrow1 = document.querySelector('.arrow1')
    openAndCloseAnswer(answer1, question1, iconArrow1)
  })

  divQuestion2.addEventListener('click', () => {
    const question2 = document.querySelector('.question2')
    const answer2 = document.querySelector('.answer2')
    const iconArrow2 = document.querySelector('.arrow2')
    openAndCloseAnswer(answer2, question2, iconArrow2)
  })

  divQuestion3.addEventListener('click', () => {
    const question3 = document.querySelector('.question3')
    const answer3 = document.querySelector('.answer3')
    const iconArrow3 = document.querySelector('.arrow3')
    openAndCloseAnswer(answer3, question3, iconArrow3)
  })

  divQuestion4.addEventListener('click', () => {
    const question4 = document.querySelector('.question4')
    const answer4 = document.querySelector('.answer4')
    const iconArrow4 = document.querySelector('.arrow4')
    openAndCloseAnswer(answer4, question4, iconArrow4)
  })
}

controlHeader()
changeFeatures()
frequentltQuestions()
