import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.post('/register', passport.authenticate('register', {failureRedirect: '/api/sessions/registerfail'}), async(req, res) => { // Al authenticate le paso el nombre de mi custom strategy
  // Todo el objetivo del passport es devolverte un req.user
  res.send({status:"success",payload:req.user._id})
})

router.get('/registerfail', (req, res) => {
  res.status(500).send({status: 'error', error: 'Error ocurred while registering a user'})
})

router.post('/login', passport.authenticate('login', {failureRedirect: '/api/sessions/loginfail'}), async(req, res) => {
  req.session.user = { // Armamos la sesion del user sin los datos sensibles
    name: req.user.name,
    email: req.user.email,
    id: req.user._id
  }
  res.redirect('/')
})

router.get('/loginfail', (req, res) => {
  res.status(500).send({status: 'error', error: 'Error in login'})
})

router.get('/github', passport.authenticate('github', {scope: []}), (res, req) => {
  // Este es el endpoint que me lleva al autenticador de github
})

router.get('/githubcallback', passport.authenticate('github'), (req, res) => {
  req.session.user = {
    name: req.user.name,
    email: req.user.email,
    id: req.user._id
  }
  res.redirect('/current')
})

router.get('/logout', (req, res) => {
  req.session.destroy(error => {
    if (error) return res.status(500).send({status: 'error', message: 'Could not logout, please try again'})
  })
  res.redirect('/login')
})

export default router