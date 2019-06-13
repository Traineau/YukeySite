function recupererLesArticles() {
  return fetch("http://localhost:1337/articles")
    .then(response => response.json())
    .catch(error => console.error(error));
}

function recupererArticleId(idArticle) {
  return fetch("http://localhost:1337/articles?_id=" + idArticle)
    .then(response => response.json())
    .catch(error => console.error(error));
}

function getCreationDate(date) {
  var creation = new Date(date);
  var dd = creation.getDate();
  var mm = creation.getMonth() + 1;
  var yyyy = creation.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  creation = dd + "." + mm + "." + yyyy;

  return creation;
}
