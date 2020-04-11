// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from './layouts/HeaderAsideLayout';
import Dashboard from './pages/Dashboard';

import MachineManager from './pages/MachineManager';

import NotFound from './pages/NotFound';
import ProjectManager from './pages/ProjectManager';
import SignUpManager from './pages/SignUpManager';
import Page11 from './pages/Page11';
import Project from './pages/Project/Project';

const routerConfig = [
  {
    path: '/MachineManager',
    layout: HeaderAsideLayout,
    component: MachineManager,
  },
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: Dashboard,
    children: [
      {
        path: '/dashboard/analysis',
        layout: HeaderAsideLayout,
        component: Dashboard,
      },
      {
        path: '/dashboard/monitor',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/dashboard/workplace',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/form',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/form/basic',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/form/signup',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/charts',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/charts/line',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/charts/histogram',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/charts/bar',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/profile',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/profile/success',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/profile/fail',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/result',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/result/success',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/result/fail',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/table',
    layout: HeaderAsideLayout,
    component: NotFound,
    children: [
      {
        path: '/table/basic',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
      {
        path: '/table/fixed',
        layout: HeaderAsideLayout,
        component: NotFound,
      },
    ],
  },
  {
    path: '/SignUpManager',
    layout: HeaderAsideLayout,
    component: SignUpManager,
  },
  {
    path: '/ProjectManager',
    layout: HeaderAsideLayout,
    component: ProjectManager,
  },
  {
    path: '/Project',
    layout: HeaderAsideLayout,
    component: Project,
  },
  {
    path: '/page11',
    component: Page11,
  },
  {
    path: '*',
    layout: HeaderAsideLayout,
    component: NotFound,
  },
];

export default routerConfig;
