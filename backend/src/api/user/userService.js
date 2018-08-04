const User = require("./user");
const errorHandler = require("../common/errorHandler");
const bcrypt = require("bcrypt");
const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z]).{6,20})/;
const matriculaRegex = /^\d{8}$/;
const pinRegex = /^\d{4}$/;

User.methods(["get", "post", "put", "delete"]);
User.updateOptions({ new: true, runValidators: true });
User.after("post", errorHandler).after("put", errorHandler);

User.route("count", (req, res, next) => {
  User.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] });
    } else {
      res.json({ value });
    }
  });
});

User.before("post", hash_password).before("put", hash_password);

function hash_password(req, res, next) {
  const email = req.body.email || "";
  const matricula = req.body.matricula || "";
  const password = req.body.password || "";
  const pin = req.body.pin || "";
  const method = req.method;
  //console.log("getRound" + bcrypt.getRounds(password));
 
  

  if (!email.match(emailRegex)) {
    return res
      .status(400)
      .send({ errors: ["O e-mail informado está inválido"] });
  }
  if (!password.match(/^\$2.+/)) {
    if (!password.match(passwordRegex)) {
      return res.status(400).send({
        errors: ["Senha precisar ter letras e números e tamanho entre 6-20."]
      });
    }
  }

  if (!matricula.match(matriculaRegex)) {
    return res.status(400).send({
      errors: ["A matricula deve ter o formtato: 999.999-9-9."]
    });
  }
  if (!pin.match(/^\$2.+/)) {
    if (!pin.match(pinRegex)) {
      return res.status(400).send({
        errors: ["O PIN deve ser um numero de 4 dígitos!"]
      });
    }
  }

  const salt = bcrypt.genSaltSync();
  const passwordHash = bcrypt.hashSync(password, salt);
  const pinHash = bcrypt.hashSync(pin, salt);
  if (method === "POST") {
    User.findOne({ email }, (err, user) => {
      if (err) {
        return sendErrorsFromDB(res, err);
      } else if (user) {
        return res.status(400).send({ errors: ["Email já cadastrado."] });
      } else {
        req.body.password = passwordHash;
        req.body.pin = pinHash;
        next();
      }
    });
  } else {
    req.body.password = passwordHash;
    req.body.pin = pinHash;
    next();
  }
}

module.exports = User;
