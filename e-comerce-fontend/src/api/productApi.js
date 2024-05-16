import axiosClient from './axiosClient';

const productApi = {
  async getAll(params) {
    // const newParams = { ...params };
    // newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
    // delete newParams._page;

    // const productList = await axiosClient.get('/findByCategory', { params: newParams });
    // const count = await axiosClient.get('/products/count', { params: newParams });

    const newParams = { ...params };
    newParams.category = params.category? params.category : '';
    newParams.minPrice = params.minPrice? params.minPrice : 0;
    newParams.maxPrice = params.maxPrice? params.maxPrice : 10000;
    newParams.minDiscount = params.minDiscount? params.minDiscount : 0;
    newParams.sort = params.sort? params.sort.toString() : 'price_low';
    newParams.stock = params.stock? params.stock : 'null';
    newParams.page = params.pageNumber? params.pageNumber : 0;
    newParams.limit = 10;

    // delete newParams._page;

    const res = await axiosClient.get('products', { params: newParams });

    return {
      data: res.content,
      pagination: {
        count: res.totalPages,
        page: params.pageNumber
      },
    };
  },
  get(productId) {
    const url = `/products/${productId}`;
    return axiosClient.get(url);
  },
};

export default productApi;