
// Time
let time = document.querySelector('#time')

let date = new Date ()
let weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let week = weeks[date.getDay()]

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getMonth()]

let day = date.getDate()
let year = date.getFullYear()

let chatTime = week + ", " + month + " " + day + ", " + year

time.textContent = chatTime


// function
let form = document.getElementById('form')
let input = document.getElementById('input')
let newDiv = document.getElementById('div')
let sendButton = document.getElementById('sendBtn')
let voiceButton = document.getElementById('voiceBtn')


function addUser () {
     if(input.value != ""){
        let p = document.createElement('p')
        let time = document.createElement('time')
        let div = document.createElement('div')

        p.classList.add('message-text')
        time.classList.add('time')
        div.classList.add('message')

        let newDate = new Date ()
        let hours = newDate.getHours()
        let minut = newDate.getMinutes()
        let newClock = hours + ":" + minut

        p.textContent = input.value
        time.innerText = newClock

        div.appendChild(p)
        div.appendChild(time)
        newDiv.appendChild(div)

        
        input.value = ""
    }
}

form.onsubmit = (event) => {
    event.preventDefault()
    addUser()
}

sendButton.onclick = () => {
    addUser()
}


// voice
voiceButton.onclick = () => {
	const speechRecognition = window.webkitSpeechRecognition
	const voice = new speechRecognition()
	voice.lang = "uz-Uz"
	voice.continuous = false

   	voice.start()
    input.placeholder = 'Listening....'
	
	voice.onresult = (event) => {
	    let result = event.results[0][0].transcript
	    input.value = result
        addUser()
	}
	
	voice.onspeechend = function() {
	    voice.stop();
	    input.placeholder = 'Write message...'
	}
}

// video buttn
let vid = document.querySelector('#vid')
async function getVideo () {
let videoOption = {
    video: true,
    audio: true
}
const displayOption = {
    video: true,
    audio: true
}
let video = await navigator.mediaDevices.getUserMedia(videoOption)
videoElement.srcObject = video
}
vid.onclick = () => {
    getVideo()
    videoElement.style.display = "block"
}

sendBtn.onclick = () => {
    videoElement.style.display = "none"
}



// search input 
let list = document.querySelector('#list')
let searchInput = document.querySelector('#searchInput')


let users = ['Telegram', 'Ilon Musk', 'Stive Jobs', 'Pavel Durov', 'Angelina Jolie', "Bil Gates", "Mark Zuckerberg", "Gal Gadot", "Khabib", "Jeff Bezos", "Stive Rogers", "Jackie Chan", "the Rock", "Tony Stark"]

function renderElements (array) {
}
// searchInput 
searchInput.onkeyup = (event) => {
	if(searchInput.value != '') {
		list.innerHTML = null
		let str = event.target.value.toLowerCase()
		for( let user of users ) {
			let startIndex = user.toLowerCase().search(str)
			if( user.toLowerCase().includes(str) ) {
				let searchedWord = user.slice(startIndex, startIndex + str.length)
				let initWord     = user.slice(user[0], startIndex)
				let endWord      = user.slice(startIndex + str.length, user.length)
				let li = document.createElement('li')
				li.innerHTML = initWord + `<mark>${searchedWord}</mark>` + endWord
				list.appendChild(li)
			}
		}
	} else {
		list.innerHTML = null
		renderElements(users)
	}
}

searchBtn.onclick = () => {
}
renderElements(users)



//Modal
let modal1 = document.querySelector('#tgSideBarModal')
let ul1 = document.querySelector('.list-modal')
modal1.onclick = () => {
	ul1.style.display = "block"
	modal1.style.backgroundColor = "#497799"
	// p.style.display = "block"
	// fas.style.display = "none"
}
// p.onclick = () => {
// 	ul1.style.display = "none"
// 	fas.style.display = "block"
// 	console.log('hello')
// }












