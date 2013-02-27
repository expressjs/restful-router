exports.list = function (req, res, next) {
  next(new Error('mock foo.list error, uid: ' + req.params.uid));
};