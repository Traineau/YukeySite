// Importer la fonction recupererLesArticles()
recupererLesArticles().then(function(lesArticles) {
  lesArticles.forEach(function(article) {
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
  });
});

// Recuperer les 100 premiers caractères
function tronquerText(text) {
  return (newText = text.substring(0, 200));
}
