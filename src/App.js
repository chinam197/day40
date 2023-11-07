import { DefautLayout } from "./Layouts/default";
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";
import { ProductDetail } from "./Pages/ProductDetail";
import { About } from "./Pages/About";
import { router } from "./Untils/router";
// 
import "./style/main.css";
export const App = ()=>{
    return router([
        {
          path:"/",
          component:Home,
        },
        {
            path:"/gioi-thieu",
            component:About,
          },
          {
            path:"/san-pham",
            component:Product,
          },
          {
            path:"/san-pham/:id",
            component:ProductDetail,
          }
    ],
    DefautLayout,
    )
}
