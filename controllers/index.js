exports.view = (req, res) => {
  console.log(req.headers["user-agent"]);
  if (
    /Windows|Macintosh|Linux|/i.test(req.headers["user-agent"]) &&
    !/android/i.test(req.headers["user-agent"])
  ) {
    res.render("desktop");
  } else {
    res.render("movil");
  }
};
