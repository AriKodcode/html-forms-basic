const checkBody = (req, res, next) => {
  if (req.body) {
    if (req.body.mission.length > 0) {
      next();
    } else {
      res.status(401).send('missing mission');
    }
  } else {
    res.status(401).send('missing body');
  }
};
export default checkBody;
