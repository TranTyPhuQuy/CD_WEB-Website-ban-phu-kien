import axiosClient from './axiosClient';

const productApi = {
  async getAll(params) {
    // const newParams = { ...params };
    // newParams._start = !params._page || params._page <= 1 ? 0 : (params._page - 1) * (params._limit || 50);
    // delete newParams._page;

    // const productList = await axiosClient.get('/findByCategory', { params: newParams });
    // const count = await axiosClient.get('/products/count', { params: newParams });

    const newParams = { ...params };
    newParams._category = params._category? params._category : '';
    newParams._minPrice = params._minPrice? params._minPrice : 0;
    newParams._maxPrice = params.maxPrice? params._maxPrice : 10000;
    newParams._minDiscount = params._minDiscount? params._minDiscount : 0;
    newParams._sort = params._sort? params._category : 'price_low';
    newParams._stock = params._stock? params._stock : null;
    newParams._pageNumber = params._pageNumber? params._pageNumber : 0;
    newParams._pageSize = 2;

    // delete newParams._page;

    const res = await axiosClient.get('products/findByCategory', { params: newParams });

    return {
      data: res.content,
      pagination: {
        count: res.totalPages,
        page: params._pageNumber
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