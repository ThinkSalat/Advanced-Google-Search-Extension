window.addEventListener('load', function() {
  const prefMenus = Array.from(document.getElementsByClassName('q0yked'))
  const advancedSearchElement = prefMenus.filter( element => {
      return element.children[0].href.includes('advanced')
  })[0]

  const link = advancedSearchElement.children[0]
  link.removeChild(link.children[1])
  const advancedTextSpan = link.children[0]

  link.style.padding = '4px 11px'
  link.style.textDecoration = 'none'
  advancedSearchElement.style.fontFamily = 'Google Sans,arial,sans-serif'
  advancedSearchElement.style.marginLeft = '18px'

  const toolbar = document.getElementsByClassName('IC1Ck')[0]

  const buttonContainer = toolbar.children[1]

  buttonContainer.appendChild(advancedSearchElement)

  advancedSearchElement.className = 't2vtad'
  buttonContainer.style.display = 'flex'
  buttonContainer.style.flexDirection = 'row'
}, false);
