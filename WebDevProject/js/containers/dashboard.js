import Card from '../components/card'

export default class Dashboard {
  constructor () {
  }

  getData() {
    // This is where we'll grab data from our api (express)
    let promise = new Promise((resolve, reject) => {

      const request = new XMLHttpRequest()

      request.onload = () => {
        // Request finished. Do processing here.
        let data = JSON.parse(request.responseText)
        console.log(data)
        resolve(data)
      }

      request.open("GET", 'http://localhost:3000/api/heroes')

      request.send()
    })

    return(promise)
  }

  getContent(data) {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = 'red'
    title.style.marginTop = '20px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'center'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '36px'

    title.append('Web Dev Project')

    container.appendChild(title)

    data.forEach((item) => {
      let characterCard = new Card(item)
      container.append(characterCard.getContent())
    })

    return container
  }

  animate() {
  }
}
