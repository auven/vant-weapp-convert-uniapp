import docConfig from './doc.config';

const registerRoute = () => {
  const route = [
    {
      path: '*',
      redirect: () => `/intro`,
    },
  ];

  const navs = docConfig.nav || [];

  function addRoute(page) {
    let { path } = page;
    if (path) {
      path = path.replace('/', '');

      const component = () =>
        page.md
          ? import(`../markdown/${path}.md`)
          : page.component
            ? import(`../../src/packages/van-${path}/README.md`)
            : import(`../../src/packages/${path}/README.md`);

      if (!component) {
        return;
      }

      route.push({
        name: '/' + path,
        component,
        path: `/${path}`,
        meta: {
          path: page.md ? path : page.component ? `/packages/van-${path}/demo` : `/packages/${path}/demo`,
          name: page.title,
        },
      });
    }
  }

  navs.forEach((nav) => {
    if (nav.groups) {
      nav.groups.forEach((group) => {
        group.list.forEach((page) => addRoute(page));
      });
    } else {
      addRoute(nav);
    }
  });

  return route;
};

export default registerRoute;
