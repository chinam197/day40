export const ProductDetail = (params) => {
  const {id}=params.data;
  return `<h1>Sản phẩm chi tiết ${id} </h1>
    <button onclick="navigate1('/san-pham')">Back</button>
    `;
};
