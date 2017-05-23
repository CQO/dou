export default [
  { path: '/', name: 'login', component: require('components/Login') },
  { path: '/Main', name: 'Main', component: require('components/Main') },
  { path: '*', redirect: '/' }
]
