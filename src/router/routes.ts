import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TiposPenteado.vue') },
    ],
  },
  {
    path: '/entrar',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EntrarPage.vue') }],
  },
  {
    path: '/criar-conta',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/CriarConta.vue') }],
  },
  {
    path: '/sobre',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SobrePage.vue') }],
  },
  {
    path: '/modelos-penteado',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ModelosPenteado.vue') },
    ],
  },
  {
    path: '/agendamento',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AgendamentoPage.vue') },
    ],
  },
  {
    path: '/notificacoes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/NotificacoesPage.vue') },
    ],
  },
  {
    path: '/contato',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ContatoPage.vue') }],
  },
  {
    path: '/sair',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SairPage.vue') }],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
