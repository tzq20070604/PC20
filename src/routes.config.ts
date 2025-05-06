import { Routes, TabBar } from '@ray-js/types';
export const routes:Routes = [
  {
    route: '/',
    path: '/pages/login/index',
    name: 'Login',
  },
  {
    route: '/home',
    path: '/pages/home/index',
    name: 'Home',
  },
  {
    route: '/profile',
    path: '/pages/profile/index',
    name: 'Profile',
  },
  {
    route: '/detail',
    path: '/pages/detail/index',
    name: 'Detail',
  }
];

export const tabBar: TabBar = {
  textColor: '#8a8a8a',
  selectedColor: '#d81e06',
  backgroundColor: '#ffffff',
  borderStyle: 'black',
  list: [
    {
      text: "@I18n.t('home')",
      icon: '/images/tabbar/home.png', // 注意此处的 icon 需要在 public/tabBar/home.png 下存在
      activeIcon: '/images/tabbar/home_active.png', // 注意此处的 icon 需要在 public/tabBar/home-active.png 下存在
      route: '/home',
      pagePath: '/pages/home/index',
    },
    {
      text: '@I18n.t("profile")',
      icon: '/images/tabbar/profile.png', // 注意此处的 icon 需要在 public/tabBar/home.png 下存在
      activeIcon: '/images/tabbar/profile_active.png', // 注意此处的 icon 需要在 public/tabBar/home-active.png 下存在
      route: '/profile',
      pagePath: '/pages/profile/index',
    }
  ]
};


