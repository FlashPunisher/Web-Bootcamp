import Card from '../components/card'

export default class Dashboard {
  constructor () {
  }

  getData() {
    // This is where we'll grab data from the marvel api
  }

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'

    let title = document.createElement('div')
    title.id = 'title'
    title.style.color = 'red'
    title.style.marginTop = '30px'
    title.style.marginLeft = '1%'
    title.style.textAlign = 'center'
    title.style.fontWeight = 'bold'
    title.style.fontSize = '36px'

    title.append('Marvel Web Project')

    container.appendChild(title)

    let deadpoolCard = new Card({
      title: 'Deadpool',
      image: '/images/deadpool.png',
      description: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he\'s quite smart and compassionate.',
      link: 'http://marvel.com/universe/Deadpool_(Wade_Wilson)#axzz50RY7PJQ4',
      linkText: 'More info on Deadpool'
    })
    container.append(deadpoolCard.getContent())

    let wolverineCard = new Card({
      title: 'Wolverine',
      image: '/images/wolverine.png',
      description: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk.',
      link: 'http://marvel.com/universe/Wolverine_(James_Howlett)#axzz50RY7PJQ4',
      linkText: 'More info on Wolverine'
    })
    container.append(wolverineCard.getContent())

    return container
  }

  animate() {
  }
}
