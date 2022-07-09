const client  = require("../config/elastic");

exports.post = (req, res, next) => {
  console.log(client);
  client
    .index({
      index: "person",
      body: {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        profession: req.body.profession,
      },
    })
    .then(() => {
      return res.json({ message: "Cadastro Pessoa criada com sucesso!" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err });
    });
};

exports.get = (req, res, next) => {
  const { text } = req.query;

  client
    .search({
      body: {
        query: {
          wildcard: { name: `*${text.trim()}*` },
        },
      },
    })
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.getById = (req, res, next) => {
  const { id } = req.params;

  client
    .search({
      body: {
        query: {
          match: { _id: id },
        },
      },
    })
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
};

exports.put = (req, res, next) => {
  const { id } = req.params;

  client
    .update({
      index: "person",
      id: id,
      body: {
        doc: req.body,
      },
    })
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      return res.status(500).json({ message: err });
    });
};

exports.delete = (req, res, next) => {
  const { id } = req.params;

  client
    .delete({
      index: "person",
      id: id,
    })
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      return res.status(500).json({ message: err });
    });
};
