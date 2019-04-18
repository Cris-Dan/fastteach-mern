const jwt = require('jsonwebtoken');


const withAuth = function(req, res, next) {
  const token = 
      req.body.token ||
      req.query.token ||
      req.headers['x-access-token'] ||
      req.cookies.token;

  if (!token) {
    res.status(401).send('No autorizado: no tienes token');
  } else {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) {
        res.status(401).send('No autorizado: token invalido');
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
}

module.exports = withAuth;