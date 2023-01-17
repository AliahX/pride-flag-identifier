if(localStorage.getItem("page") == null) localStorage.setItem("page", 0);
color = "#ffffff"


function setPage(index) {
  $(".pageButton").removeClass("active");
  $(`div[onclick="setPage(${index});"]`).addClass("active");

  $("#mainBox").css("display", index == 0 ? "block" : "none");
  $("#createBox").css("display", index == 1 ? "block" : "none");
  $("#allBox").css("display", index == 2 ? "block" : "none");
  localStorage.setItem("page", index);
}

function search(input) {
  $(".flagBox").each(function() {
    e = $(this);
    e.find(".flagName").text().toLowerCase().includes(input.value.toLowerCase()) ? e.show() : e.hide();
  });
}

function setColor(col) {
  $(".colorButton").removeClass("active");
  $(`button[onclick="setColor('${col}')"]`).addClass("active");
  color = colorList[col];
}

function setFlagStyle(self) {
  flagElement = document.querySelector("#drawFlag");
  flagElement.innerHTML = generateFlag(self.value, [], true);
  document.querySelectorAll("#drawFlag *").forEach(function(element) {
    element.onclick = function() {
      if(element.tagName == "circle") {
        element.style.stroke=color;
      } else {
        element.style.fill=color;
      }
    }
  });
}

function load() {
  Object.entries(flagList).forEach(([name, flag]) => {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    document.querySelector("#allBox").innerHTML += `<div class="contentBox flagBox">
    <div class="flagName">${name}</div>
    ${generateFlag(flag[0]["style"], flag[0]["colors"])}
  </div>`
  });

  Object.entries(styleList).forEach(([name]) => {
    document.querySelector("#flagStyle").innerHTML += `<option value="${name}">${name.charAt(0).toUpperCase() + name.slice(1)}</option>`
  });

  styleCount = {};
  Object.entries(flagList).forEach(([name, flag]) => {
    if(styleCount[flag[0]["style"]] == undefined) {
      styleCount[flag[0]["style"]] = 1;
    } else {
      styleCount[flag[0]["style"]] += 1;
    }
  });

  document.querySelector("#flagStyle").value = Object.keys(styleCount).reduce((a, b) => styleCount[a] > styleCount[b] ? a : b);
  document.querySelector("#flagStyle").oninput();

  Object.entries(colorList).forEach(([name, color], i) => {
    document.querySelector("#colorBox").innerHTML += `<button class="colorButton" style="background-color: ${color};" onclick="setColor('${name}')"></button>`
    if (i % 5 == 4) {
      document.querySelector("#colorBox").innerHTML += `<br />`
    }
  });

  colorCount = {};
  Object.entries(flagList).forEach(([name, flag]) => {
    flag[0]["colors"].forEach(function(element, i) {
      if(colorCount[element] == undefined) {
        colorCount[element] = 1;
      } else {
        colorCount[element] += 1;
      }
    });
  });

  color = colorList[Object.keys(colorCount).reduce((a, b) => colorCount[a] > colorCount[b] ? a : b)];

  document.querySelector(`.colorButton[style="background-color: ${colorList[Object.keys(colorCount).reduce((a, b) => colorCount[a] > colorCount[b] ? a : b)]};"]`).classList.add("active");
}