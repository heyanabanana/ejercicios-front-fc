"use strict";

const alumns = [
  {
    fullname: "Álvaro Sánchez Monteagudo",
    city: "Valencia",
    country: "España",
    phone: "689254865",
    email: "smonteagudo@gmail.com",
    skills: [
      {
        id: 1,
        name: "HTML&CSS",
      },
      {
        id: 2,
        name: "ANGULAR",
      },
    ],
  },
  {
    fullname: "Amparo Herrera Climent",
    city: "Sevilla",
    country: "España",
    phone: "689254865",
    email: "hcliment@gmail.com",
    skills: [
      {
        id: 1,
        name: "ANGULAR",
      },
      {
        id: 2,
        name: "SPRING BOOT",
      },
      {
        id: 3,
        name: "HIBERNATE",
      },
    ],
  },
  {
    fullname: "Ana Gutierrez Lozano",
    city: "Valencia",
    country: "España",
    phone: "925658765",
    email: "glozano@gmail.com",
    skills: [
      {
        id: 1,
        name: "ANGULAR",
      },
      {
        id: 2,
        name: "REACT",
      },
    ],
  },
  {
    fullname: "Carlos Yuste Guerrero",
    city: "Oviedo",
    country: "España",
    phone: "697829565",
    email: "yguerrero@gmail.com",
    skills: [
      {
        id: 1,
        name: "FLUTTER",
      },
      {
        id: 2,
        name: "REACT",
      },
    ],
  },
  {
    fullname: "Álvaro Sánchez Monteagudo",
    city: "Valencia",
    country: "España",
    phone: "689254865",
    email: "smonteagudo@gmail.com",
    skills: [
      {
        id: 1,
        name: "HTML&CSS",
      },
      {
        id: 2,
        name: "ANGULAR",
      },
    ],
  },
  {
    fullname: "Amparo Herrera Climent",
    city: "Sevilla",
    country: "España",
    phone: "689254865",
    email: "hcliment@gmail.com",
    skills: [
      {
        id: 1,
        name: "ANGULAR",
      },
      {
        id: 2,
        name: "SPRING BOOT",
      },
      {
        id: 3,
        name: "HIBERNATE",
      },
    ],
  },
  {
    fullname: "Ana Gutierrez Lozano",
    city: "Valencia",
    country: "España",
    phone: "925658765",
    email: "glozano@gmail.com",
    skills: [
      {
        id: 1,
        name: "ANGULAR",
      },
      {
        id: 2,
        name: "REACT",
      },
    ],
  },
  {
    fullname: "Carlos Yuste Guerrero",
    city: "Oviedo",
    country: "España",
    phone: "697829565",
    email: "yguerrero@gmail.com",
    skills: [
      {
        id: 1,
        name: "FLUTTER",
      },
      {
        id: 2,
        name: "REACT",
      },
    ],
  },
];

console.log(alumns);

window.onload = function populateTable() {
  let table = "";
  for (let i in alumns) {
    table += "<tr>";
    (table +=
      "<td class='alumns_data'>" +
      alumns[i].fullname +
      "</td>" +
      "<td class='alumns_data noSearch'>" +
      alumns[i].city +
      "</td>" +
      "<td class='alumns_data noSearch'>" +
      alumns[i].country +
      "</td>" +
      "<td class='alumns_data noSearch'>" +
      alumns[i].phone +
      "</td>" +
      "<td class='alumns_data noSearch'>" +
      alumns[i].email +
      "</td>" +
      "<td class='alumns_data'>" +
      "<ul class='tag_container'>" +
      alumns[i].skills
        .map(
          (skill) =>
            "<li class='tag' key=" + skill.id + ">" + skill.name + "</li>"
        )
        .join("")) +
      "</ul>" +
      "</td>";

    table += "</tr>";
  }
  document.getElementById("data").innerHTML = table;
};

document.addEventListener("click", function (e) {
  var down_class = " dir-d ";
  var up_class = " dir-u ";
  var regex_dir = / dir-(u|d) /;
  var regex_table = /\bsortable\b/;
  var element = e.target;

  function reClassify(element, dir) {
    element.className = element.className.replace(regex_dir, "") + dir;
  }

  function getValue(element) {
    return element.getAttribute("data-sort") || element.innerText;
  }

  if (element.nodeName === "TH") {
    try {
      var tr = element.parentNode;
      var table = tr.parentNode.parentNode;
      if (regex_table.test(table.className)) {
        var column_index;
        var nodes = tr.cells;

        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i] === element) {
            column_index = i;
          } else {
            reClassify(nodes[i], "");
          }
        }

        var dir = down_class;

        if (element.className.indexOf(down_class) !== -1) {
          dir = up_class;
        }

        reClassify(element, dir);

        var org_tbody = table.tBodies[0];
        var rows = [].slice.call(org_tbody.rows, 0);

        var reverse = dir === up_class;

        rows.sort(function (a, b) {
          var x = getValue((reverse ? a : b).cells[column_index]);
          var y = getValue((reverse ? b : a).cells[column_index]);
          return isNaN(x - y) ? x.localeCompare(y) : x - y;
        });

        var clone_tbody = org_tbody.cloneNode();
        while (rows.length) {
          clone_tbody.appendChild(rows.splice(0, 1)[0]);
        }

        table.replaceChild(clone_tbody, org_tbody);
      }
    } catch (error) {
      console.log(error);
    }
  }
});

function doSearch() {
  var tableReg = document.getElementById("tableSearch");
  var searchText = document.getElementById("searchTerm").value.toLowerCase();
  for (var i = 1; i < tableReg.rows.length; i++) {
    var cellsOfRow = tableReg.rows[i].getElementsByTagName("td");
    var found = false;
    for (var j = 0; j < cellsOfRow.length && !found; j++) {
      var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
      if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
        found = true;
      }
    }
    if (found) {
      tableReg.rows[i].style.display = "";
    } else {
      tableReg.rows[i].style.display = "none";
    }
  }
}
