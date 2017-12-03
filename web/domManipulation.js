//This is the Goal: <p>This is Nicks paragraph.</p>
//Create a h1 tag and append to the dom that you are sending to your server

let paragraph = document.createElement('p')
paragraph.innerHTML = 'This is a javascript generated paragraph tag'

let header = document.createElement('h1')
header.innerHTML = 'Mic check one two on the way to third'

let header2 = document.createElement('h2')
header2.innerHTML = 'Flow sick; put a stray jacket on my words'

let body = document.getElementById('content')

body.append(paragraph)

body.append(header)

body.append(header2)
