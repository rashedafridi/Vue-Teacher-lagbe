import { createRouter, createWebHistory } from 'vue-router';

import TeacherDetail  from "../views/teacher/TeacherDetail.vue";
import TeacherList from '../views/teacher/TeacherList.vue';
import TeacherRegistration from '../views/teacher/TeacherRegistration.vue';
import ContactTeacher from '../views/requests/ContactTeacher.vue';
import RequestsReceived from '../views/requests/RequestsReceived.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'home', path: '/', redirect: '/teachers' },
    { name: 'teacher', path: '/teachers', component: TeacherList },
    {
      path: '/teachers/:id',
      component: TeacherDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactTeacher } // /coaches/c1/contact
      ]
    },
    { path: '/register', component: TeacherRegistration },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
