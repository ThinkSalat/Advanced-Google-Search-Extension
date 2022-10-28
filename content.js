window.addEventListener('load', function() {
  const prefMenus = Array.from(document.getElementsByClassName('q0yked'))
        const advancedSearchElement = prefMenus.filter( element => {
            return element.children[0].href.includes('advanced')
        })[0]

        advancedSearchElement.className = 't2vtad'
        delete advancedSearchElement.style.padding
        advancedSearchElement.style.fontFamily = 'Google Sans,arial,sans-serif'

        const advancedTextSpan = advancedSearchElement.children[0].children[0]

        advancedTextSpan.className = 't2vtad'


        const toolbar = document.getElementsByClassName('IC1Ck')[0]

        const buttonContainer = toolbar.children[1]

        buttonContainer.appendChild(advancedSearchElement)

        buttonContainer.style.display = 'flex'
        buttonContainer.style.flexDirection = 'row'
}, false);
