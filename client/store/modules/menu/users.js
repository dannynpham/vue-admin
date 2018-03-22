import lazyLoading from './lazyLoading'

export default {
  name: 'Users',
  path: '/nowhere',
  meta: {
    icon: 'fa-users',
    expanded: false,
    link: 'charts/index.vue'
  },
  component: lazyLoading('charts', true),

  children: []
}
