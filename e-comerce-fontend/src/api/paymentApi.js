import axiosClient from "./axiosClient";

const paymentApi = {
  async payment(amount,orderInfo) {
    const params = { 
        amount: amount,
        orderInfo: orderInfo,
     };
    const res = await axiosClient.get("payment/create-order", { params });

    return res;
  },

  async paymentResult(params) {
    const url = `payment/vnpay-payment-return?${params}`;
    console.log('url: ',url);
    const res = await axiosClient.get(url);
    console.log('res: ',res);

    return res;
  },
};

export default paymentApi;
