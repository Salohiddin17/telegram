
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


// function add sms message
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


// Search input
function myFunction() {
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}











