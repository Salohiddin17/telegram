const DATA = {
    users: [
        {
            id: 1,
            name: "Ilon Musk",
            photoUrl: "img/ilon_musk.jpg",
            paragraph: "concentrate",
            span: "",
            time: "08:49",
            messages: [
                {
                    text: "lorem ipsum dalor",
                    owner: true
                },
                {
                    text: "concentrate",
                    owner: false
                }
            ]
        },
        {
            id: 2,
            name: "Stive Jobs",
            photoUrl: "img/stive-jobs.jpg",
            paragraph: "divide the time",
            span: "",
            time: "10:04",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "divide the time",
                    owner: false
                }
            ]
        },
        {
            id: 3,
            photoUrl: "img/angelina_jolie.jpg",
            name: "Angelina Jolie",
            paragraph: "",
            span: "Voice messages",
            time: "00:00",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "Ok",
                    owner: false
                }
            ]
        },
        {
            id: 4,
            photoUrl: "img/bill_gates.jpg",
            name: "Bil Gates",
            paragraph: "read a book",
            span: "",
            time: "15:05",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "read a book",
                    owner: false
                }
            ]
        },
        {
            id: 5,
            photoUrl: "img/mark-zuckerberg-.jpg",
            name: "Mark Zuckerberg",
            paragraph: "What's up",
            span: "",
            time: "14:59",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "What's up",
                    owner: false
                }
            ]
        },
        {
            id: 6,
            photoUrl: "img/gal_gadot.jpg",
            name: "Gal Gadot",
            paragraph: "",
            span: "missed Call",
            time: "20:45",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "missed call",
                    owner: false
                }
            ]
        },
        {
            id: 7,
            photoUrl: "img/khabib.jpg",
            name: "Khabib",
            paragraph: "go for a run",
            span: "",
            time: "07:00",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "go for a run",
                    owner: false
                }
            ]
        },
        {
            id: 8,
            photoUrl: "img/jeff-bezos-r.jpg",
            name: "Jeff Bezos",
            paragraph: "never give up",
            span: "",
            time: "17:09",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "never give up",
                    owner: false
                }
            ]
        },
        {
            id: 9,
            photoUrl: "img/stive_rogers.png",
            name: "Stive Rogers",
            paragraph: "",
            span: "Missed Call",
            time: "01:15",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "command attack",
                    owner: false
                }
            ]
        },
        {
            id: 10,
            photoUrl: "img/jackie_chan.jpg",
            name: "Jackie Chan",
            paragraph: "",
            span: "Photo",
            time: "10:45",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "Hollywood actor",
                    owner: false
                }
            ]
        },
        {
            id: 11,
            photoUrl: "img/the-rock.jpg",
            name: "the Rock",
            paragraph: "Hello!",
            span: "",
            time: "05:45",
            messages: [
                {
                    text: "lorem",
                    owner: true
                },
                {
                    text: "Hello!",
                    owner: false
                }
            ]
        },
        {
            id: 11,
            photoUrl: "img/tony_stark.jpg",
            name: "Tony Stark",
            paragraph: "",
            span: "Voice messages",
            time: "12:55",
            messages: [
                {
                    text: "bir nima",
                    owner: true
                },
                {
                    text: "Marvel actor, Iron man",
                    owner: false
                }
            ]
        },
    ]
}

let usersList = document.querySelector(".contacts")
let messagesList = document.querySelector(".messages")
let nameUser = document.querySelector(".user-name")

    let newMessageLiElement = document.createElement('li')
    let newMessageTimeElement = document.createElement('time')

DATA.users.forEach(user => {
    let newUserLiElement = document.createElement('li')
    let newUserAElement = document.createElement('a')
    let newUserImgElement = document.createElement('img')
    let newUserDivElement = document.createElement('div')
    let newUserHElement = document.createElement('h4')
    let newUserSpanElement = document.createElement('span')
    let newUserPElement = document.createElement('p')
    let newUserTimeElement = document.createElement('time')

    newUserImgElement.src = user.photoUrl
    newUserHElement.textContent = user.name
    newUserPElement.textContent = user.paragraph
    newUserSpanElement.textContent = user.span
    newUserTimeElement.textContent = user.time

    usersList.classList.add('nav')
    newUserLiElement.classList.add('tg__dialog_wrap')
    newUserAElement.classList.add('tg_dialog')
    newUserImgElement.classList.add('img-users-li')
    newUserDivElement.classList.add('tg__message_wrap')
    
    newUserLiElement.addEventListener('click', event => {
        user.messages.forEach( message => {
            nameUser.textContent = user.name
            newMessageTimeElement.textContent = user.time
            newMessageLiElement.textContent = message.text

            newMessageTimeElement.classList.add('time')
            newMessageLiElement.classList.add('message-stranger')
            messagesList.classList.add('message')

            messagesList.appendChild(newMessageTimeElement)
            messagesList.appendChild(newMessageLiElement)
        })
    })
    
    newUserAElement.appendChild(newUserImgElement)
    newUserAElement.appendChild(newUserDivElement)
    newUserDivElement.appendChild(newUserHElement)
    newUserAElement.appendChild(newUserTimeElement)
    newUserDivElement.appendChild(newUserPElement)
    newUserPElement.appendChild(newUserSpanElement)
    newUserLiElement.appendChild(newUserAElement)
    usersList.appendChild(newUserLiElement)
})







   function answerWriter(message) {

      setTimeout(() => {

         const sendingTime = timeReturner(),
            myMessage = message.trim().toLowerCase();

         let answer;

         if (myMessage === 'salom') {
            answer = 'Valaykum salom. Ishlaring yaxshimi?'
         } else if (myMessage === '') {
            answer = 'Zerikdingmi deyman!'
         } else if (myMessage === 'tentak' || myMessage === 'ahmoq') {
            answer = 'So`kinma nomard. Man sanga nima dedim?'
         } else if (myMessage === 'xayr') {
            answer = 'Xayr salomat bo`ling. Yaxshi kunlarda ko`rishaylik! :)'
         } else {
            answer = message + ' - bu gapga nima deb javob qaytarish meni miyyamga kiritilmagan! :( Ming bor uzur. Ayb mandamas, dasturchida'
         }
         messagesList.innerHTML += `
         <li class="message received">
            <p>${answer}</p>
            <time class="message-time">${sendingTime}</time>
         </li>
      `
         setTimeout(() => {
            chatSound.play();
         }, 100);

         messagesList.scrollTop = messagesList.scrollHeight;

      }, 2000);

   }




