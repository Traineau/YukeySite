var monUrl = window.location.href;

urlSeparee = monUrl.split("?idArticle=");

console.log(urlSeparee[1]);

recupererArticleId(urlSeparee[1]).then(article => {
  console.log(article[0]);
  article = article[0];

  var converter = new showdown.Converter(),
    text = article.text,
    html = converter.makeHtml(text);
  document.getElementById("articleTitle").innerHTML = article.title;
  document.getElementById("postingDate").innerHTML =
    getCreationDate(article.createdAt) +
    " - " +
    article.user.firstName +
    " " +
    article.user.lastName;

  document.getElementById("articleImage").src = article.image.url;

  document.getElementById("blogContent").innerHTML = html;
  document.getElementById("articleAuthor").innerHTML =
    article.user.firstName + " " + article.user.lastName;
});

recupererLesArticles().then(function(lesArticles) {
  for (article in lesArticles) {
    if (article === 3) {
      break;
    }
    article = lesArticles[article];
    textTronque = tronquerText(article.text);
    var converter = new showdown.Converter(),
      text = textTronque,
      html = converter.makeHtml(text);

    document
      .getElementById("allArticles")
      .insertAdjacentHTML(
        "beforeend",
        "<div class='col-sm-6 col-lg-4'><a href='blog-detail.html?idArticle=" +
          article._id +
          "'> <div class='blog-breif'>" +
          "<div class='blog-img'> <img src='" +
          article.image.url +
          "'></div><div class= 'blog-details'> <h4>" +
          article.title +
          "</h4> <p class='details'>" +
          html +
          "</p>" +
          "<div class='created-on'> <div class='user-profile'> <img alt='profil' src='images/blog-img/place-user-img.png' /></div> <div class='user-detail'> <h5>" +
          article.user.firstName +
          " " +
          article.user.lastName +
          "</h5> <p>" +
          getCreationDate(article.createdAt) +
          "</p> </div> </div></div></div></a></div>"
      );
  }
});

// Recuperer les 100 premiers caractères
function tronquerText(text) {
  return (newText = text.substring(0, 200));
}
