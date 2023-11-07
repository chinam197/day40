import Navigo from "navigo";
import { ErrorPage } from "../Error";
import { ProductDetail } from "../Pages/ProductDetail";
const routers = new Navigo("/", { linksSelector: "a", hash: true });
// import { event } from "../Assets/event";
export const menu = {
  render: (show, component) => {
    show.innerHTML = component;
  },

  renderShow: (DefautLayout, component, params) => {
    const html = DefautLayout().replace(/\{.*\}/g, component(params));
    if (html) {
      return html;
    }else{
      ProductDetail(params);
    }
  },

  handleClickList: function (data, app, show, layout) {
    data.forEach((item) => {
      routers.on(item.path, (data) => {
        return this.render(app, this.renderShow(layout, item.component, data));
      });
      routers.resolve();
      routers.notFound(() => {
        app.innerHTML = ErrorPage();
      });
    });
  },
};



export const router = (router = [], layout = "") => {
  let app = document.querySelector("#App");
  app.innerHTML = layout();
  let show = document?.querySelector(".show-list");
  menu.handleClickList(router, app, show, layout);
};

window.navigate1 = (path)=>routers.navigate(path);