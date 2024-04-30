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
    newParams.pageNumber = params.pageNumber? params.pageNumber : 0;
    newParams.pageSize = 10;

    // delete newParams._page;

    const res = await axiosClient.get('products/findByCategory', { params: newParams });

    return {
      data: res.content,
      pagination: {
        count: res.totalPages,
        page: params.pageNumber
      },
    };
  },

  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};

export default productApi;