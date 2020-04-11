const headerMenuConfig = [];

let level = localStorage.getItem('level');

const asideMenuConfig = [
  {
    name: '项目管理',
    path: '/ProjectManager',
    icon: 'home',
  },
  {
    name: 'Nav11',
    path: '/page11',
    icon: 'home',
  },
];
if (parseInt(level) === 1) {
  asideMenuConfig.push({
    name: '众包项目',
    path: '/Project',
    icon: 'home',
  });
}
export { headerMenuConfig, asideMenuConfig };
