export default function login(req, res, next) {
  if (req.session?.user?.role == 'admin') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}