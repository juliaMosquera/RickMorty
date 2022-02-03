const API = "https://rickandmortyapi.com/api/character";

const getAPI = (api) => {
  
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json.info);
    })
    .catch((error) => {
      console.log("Error in the API :", error);
    });
};


const fillData = (data) => {
  let html = "";
  data.forEach((p) => {

    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${p.image}" class="card-img-top" alt="...">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${p.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("characters").innerHTML = html;
};

const pagination =(info)=>{
  let html = "";
  
  html += `<li class="page-item ${
    info.prev == null ? "disabled" : ""
  }"><a class="btn btn-outline-secondary" onclick="getAPI('${info.prev}')">Prev</a></li>`;

  html += `<li class="page-item ${
    info.next == null ? "disabled" : ""
  }"><a class="btn btn-outline-secondary" onclick="getAPI('${info.next}')">Next</a></li>`;

  html += `<p>Rick and Morty es una serie de televisión estadounidense de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim. La serie sigue las desventuras de un científico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. </p>`

  document.getElementById("pagination").innerHTML= html;
};


getAPI(API);