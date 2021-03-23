import 'nprogress/nprogress.css';
import NotFound from '@/views/NotFound.vue';
import { start, done, configure } from 'nprogress';

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === 'development') {
      await delay(2000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

export default [
  {
    name: 'Home',
    path: '/',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "home" */ '@/views/Home')
    ),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'About',
    path: '/about',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "about" */ '@/views/About')
    ),
    meta: {
      title: '关于我',
    },
  },
  {
    name: 'Blog',
    path: '/article',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ '@/views/Blog')
    ),
    meta: {
      title: '文章',
    },
  },
  {
    name: 'CategoryBlog',
    path: '/article/cate/:categoryId',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ '@/views/Blog')
    ),
    meta: {
      title: '文章',
    },
  },
  {
    name: 'BlogDetail',
    path: '/article/:id',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blogdetail" */ '@/views/Blog/Detail')
    ),
    meta: {
      title: '文章详情',
    },
  },
  {
    name: 'Project',
    path: '/project',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "project" */ '@/views/Project')
    ),
    meta: {
      title: '项目&效果',
    },
  },
  {
    name: 'Message',
    path: '/message',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "message" */ '@/views/Message')
    ),
    meta: {
      title: '留言板',
    },
  },
  {
    name: 'NotFound',
    path: '*',
    component: NotFound,
  },
];
