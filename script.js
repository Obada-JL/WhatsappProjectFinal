const chats = document.querySelectorAll(".chatbox");
const headers = document.querySelectorAll(".nader");
const unread = document.querySelectorAll(".unread");
const blocks = document.querySelectorAll(".block");
const unreadElements = document.querySelectorAll(".unreadNumber");
const chatNames = document.querySelectorAll(".chatName");
const searchBar = document.getElementById("searchBar");
const sendButtons = document.querySelectorAll(".sendMessage");
const navIcons = document.querySelectorAll(".nav_icons li");
const chatInput = document.querySelectorAll(".chat_input");
const chatInputTextarea = document.querySelectorAll(".chat_input input");
const lastMessage = document.querySelectorAll(".message_p p");
const messages = document.querySelectorAll(".message");
const chatsForLoop = () => {
  for (i = 0; i < chats.length; i++) {
    chats[i].style.display = "none";
  }
};
const headersForLoop = () => {
  for (i = 0; i < chats.length; i++) {
    headers[i].style.display = "none";
  }
};
const inputsForLoop = () => {
  for (i = 0; i < chats.length; i++) {
    chatInput[i].style.display = "none";
  }
};
const activeForLoop = () => {
  for (i = 0; i < chats.length; i++) {
    if (blocks[i].classList.contains("active") === true) {
      blocks[i].classList.remove("active");
    }
  }
};
const chatClicks = (e) => {
  chatsForLoop();
  chats[e].style.display = "block";
  headersForLoop();
  headers[e].style.display = "flex";
  inputsForLoop();
  chatInput[e].style.display = "flex";
  if (blocks[e].classList.contains("unread") === true) {
    blocks[e].classList.remove("unread");
    unreadElements[e - 1].remove();
  } else {
  }
  activeForLoop();
  blocks[e].classList.add("active");
  keypress(e);
  // deleteMessage(e);
  chats[e].scrollTo(0, chats[e].scrollHeight);
};
const searchChat = () => {
  searchBar.addEventListener("keyup", () => {
    let searchBarValue = searchBar.value;
    for (i = 0; i < chatNames.length; i++) {
      let lowerNames = chatNames[i].innerHTML.toLowerCase();
      if (lowerNames.includes(searchBarValue) === false) {
        blocks[i].style.display = "none";
      } else if (searchBarValue === "") {
        for (i = 0; i < blocks.length; i++) {
          blocks[i].style.display = "flex";
        }
      }
    }
  });
};
const autoMessage = (e) => {
  chats[e].innerHTML += `<div class="message friend_msg">
  <p>
    lorem ipsum............<br /><span
      >12:15</span
    >
  </p>
</div>`;
};
const sendMessage = (e) => {
  let messageInputValue = chatInputTextarea[e].value;
  if (messageInputValue == " ") {
    return;
  } else {
    chats[e].innerHTML += `<div class="message my_msg">
  <p>
    ${messageInputValue}<br /><span
      >12:15</span
    >
  </p>
</div>`;
    chatInputTextarea[e].value = " ";
    let lastConversation = chats[e].lastChild;
    lastMessage[e].innerHTML = lastConversation.innerHTML;
    setTimeout(function () {
      autoMessage(e);
      lastMessage[e].innerHTML = chats[e].lastChild.innerHTML;
      chats[e].scrollTo(0, chats[e].scrollHeight);
    }, 3000);
  }
  chats[e].scrollTo(0, chats[e].scrollHeight);
};

searchBar.addEventListener("click", searchChat());

navIcons[2].addEventListener("click", () => {
  const optionsList = document.getElementById("optionsList");
  if (optionsList.style.display === "flex") {
    optionsList.style.display = "none";
    navIcons[2].style.backgroundColor = "transperent";
  } else {
    optionsList.style.display = "flex";
    navIcons[2].style.backgroundColor = "#ebebeb";
  }
});

const keypress = (e) => {
  chatInputTextarea[e].addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendMessage(e);
    }
  });
};

// const deleteMessage = (e) => {
//   for (i = 0; i < chats[e].children.length; i++) {
//     chats[e].children[i].addEventListener("mouseover", (j) => {
//       console.log(j.fromElement);
//       chats[e].children[i].children[j.fromElement].style.display = "block";
//     });
//   }
// };
