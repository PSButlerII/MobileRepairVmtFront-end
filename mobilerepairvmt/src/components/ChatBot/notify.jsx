






function renderMessage(name, time, message) {
  var nameSpan = document.createElement("span");
  nameSpan.className = "name";
  nameSpan.textContent = name;

  var timeSpan = document.createElement("span");
  timeSpan.className = "time";
  var friendlyTime = moment(time).format("H:mm");
  timeSpan.textContent = friendlyTime;

  var headerDiv = document.createElement("div");
  headerDiv.appendChild(nameSpan);
  headerDiv.appendChild(timeSpan);

  var messageDiv = document.createElement("div");
  messageDiv.className = "message";
  messageDiv.textContent = message;

  var newItem = document.createElement("li");
  newItem.appendChild(headerDiv);
  newItem.appendChild(messageDiv);

  var chatHistoryEl = document.getElementById("chatHistory");
  chatHistoryEl.appendChild(newItem);
  chatHistoryEl.scrollTop =
    chatHistoryEl.scrollHeight - chatHistoryEl.clientHeight;
}
