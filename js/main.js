const works = document.querySelector('.wrapper_work')
const paginator = document.querySelector('#paginator')

!async function render() {
  const res = await fetch('js/works.json')
  const data = await res.json()
  for (let i=0; i<data.length; i++) {
    works.insertAdjacentHTML('afterbegin', createTemplate(data[i].name, data[i].link, i+1))
  }

  const cnt = 5
  const cnt_page = Math.ceil(data.length / cnt)
  for (let i=0; i<cnt_page; i++) {
    paginator.insertAdjacentHTML('beforeend', paginatorTemplate(i, cnt))
  }

  showPage(cnt)
}()

const createTemplate = (name, link, index) => {
  return `
    <div data-num='${index}' class='site'>
      <a href='${link}' target='_blank'>
        ${name}
      </a>
    </div>
  `
}

const paginatorTemplate = (index, cnt) => {
  const numPage = index + 1
  return `
    <span data-page='${index * cnt}' id='page${numPage}'>${numPage}</span>
  `
}

const showPage = (cnt) => {
  const divNum = works.querySelectorAll('.site')
  for (let i=0; i<divNum.length; i++){
    if (i<cnt) {
      divNum[i].style.display = 'block'
    }
  }

  let mainPage = paginator.querySelector('#page1')
  if (mainPage !== null) {
    mainPage.classList.add('paginator_active')
  }

  paginator.addEventListener('click', (e) => {
    let target = e.target
    if (target.tagName.toLowerCase() === 'span') {
      let id = target.id
      const dataPage = +target.dataset.page
      mainPage.classList.remove('paginator_active')
      mainPage = paginator.querySelector('#' + id)
      mainPage.classList.add('paginator_active')

      for (let num of divNum) {
        let dataNum = num.dataset.num
        if (dataNum <= dataPage || dataNum >= dataPage) {
          num.style.display ='none'
        }
      }
      let stop = 0
      for (let i=dataPage; i<divNum.length; i++) {
        if (stop >= cnt) break
        divNum[i].style.display = 'block'
        stop++
      }
    }
  })
}