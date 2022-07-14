const error = (req, res, next) => {
    req.errorHandler = (err) => {
      console.log(err)
      return res.send({ status: false, message: 'Ocurrió un error' });
    }
    next();
};

module.exports = error;