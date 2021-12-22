const tagList = [
  "REACT",
  "ANGULAR",
  "HTML&CSS",
  "JAVASCRIPT",
  "SPRING BOOT",
  "JAVA",
  "HIBERNATE",
  "ANGULAR",
  "ADONIS",
];
const selectedTags = ["REACT", "ANGULAR", "HTML&CSS"];

window.onload = function populateTags() {
  let datalist = "";
  for (i = 0; i < tagList.length; i++) {
    datalist +=
      "<option value='" +
      tagList[i] +
      "' class='value_select'>" +
      tagList[i] +
      "</option>";
  }

  document.getElementById("datalist").innerHTML = datalist;
  populateSelectedTags();
};

function populateSelectedTags() {
  let taglist = "";
  for (i = 0; i < selectedTags.length; i++) {
    taglist +=
      "<li class='tag' data-id='" +
      i +
      "><p class='tag_text'>" +
      selectedTags[i] +
      "</p><button onclick='deleteTag(" +
      i +
      ")'><img src='./assets/iconmonstr-x-mark-1.svg' alt='' class='closeicon'/></button></li>";
  }
  document.getElementById("taglist").innerHTML = taglist;
}

function deleteTag(i) {
  selectedTags.splice(i, 1);
  populateSelectedTags();
}

function addTags(i) {
  if (selectedTags.includes(i) == false) {
    selectedTags.push(i);
    populateSelectedTags();
  } else console.log("ya existe");
}

const tags = document.getElementById("inputTagSearch");

//evento cuando cambia el input
tags.addEventListener("change", tagsChange);
function tagsChange(evt) {
  const input = evt.target,
    idDatalist = input.getAttribute("list");

  //datalist que le corresponde
  let datalist;
  if (idDatalist && (datalist = document.getElementById(idDatalist))) {
    //opcion seleccionada

    let opcionSel = datalist.querySelector(`option[value="${input.value}" i]`);
    if (opcionSel) {
      //valor
      addTags(input.value);
    }
  }
}
