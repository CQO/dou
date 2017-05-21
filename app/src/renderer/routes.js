export default [
  {
    path: '/',
    name: 'login',
    component: require('components/Login')
  },
  {
    path: '*',
    redirect: '/'
  }
]
