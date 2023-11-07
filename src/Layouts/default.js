import "bootstrap/dist/css/bootstrap.min.css";
export const DefautLayout = () => {
  return `
  <header class="mb-3"  style="text-align: center; height:200px ;">
      <div class="container">
          <h1><a href="/" data-route>HEADER</a></h1>
      </div>
  </header>
  <main>
      <div class="container">
          <div class="row">
              <div class="col-3">
                  <h2>Menu</h2>
                  <ul>
                      <li><a href="/" data-route>Trang chủ</a></li>
                      <li><a href="/gioi-thieu" data-route>Giới thiệu</a></li>
                      <li><a href="/san-pham" data-route>Sản phẩm</a></li>
                  </ul>
              </div>
              <div class="col-9 show-list">
                  {body}
              </div>
          </div>
      </div>
  </main>
  <footer class="mt-3">
      <div class="container"  style="text-align: center; height:200px">
          <h1>FOOTER</h1>
      </div>
  </footer>
  `;
};
