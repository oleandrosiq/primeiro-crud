function index(req, res) {
  res.render('index', {
    title: "Pagina inicial"
  });
}

module.exports = {
  index
}