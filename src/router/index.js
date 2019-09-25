import Vue from 'vue';
import Router from 'vue-router';
import Pitajanmaki from '@/components/Pitajanmaki';
import Vallila from '@/components/Vallila';
import Helsinki from '@/components/Helsinki';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Helsinki',
      component: Helsinki,
    },
    {
      path: '/pitajanmaki',
      name: 'Pitajanmaki',
      component: Pitajanmaki,
    },
    {
      path: '/vallila',
      name: 'Vallila',
      component: Vallila,
    },
  ],
});
