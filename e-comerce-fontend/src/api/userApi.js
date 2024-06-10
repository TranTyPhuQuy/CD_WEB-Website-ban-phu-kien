import axiosClient from "./axiosClient";

const userApi = {
  signIn(params) {
    const url = "/auth/sign-in";
    return axiosClient.post(url, { params });
  },
  async signIn(params) {
    const url = "/auth/sign-in";
    console.log("sign-in: ", params);
    try {
      const response = await axiosClient.post(url, params);
      return response; // Assuming the response data contains the necessary information
    } catch (error) {
      console.error("Error during sign-up:", error);
      throw error; // Re-throw the error so it can be handled by the caller
    }
  },
  async signUp(params) {
    const url = "/auth/sign-up";
    console.log("sign-up: ", params);
    try {
      const response = await axiosClient.post(url, params);
      return response; // Assuming the response data contains the necessary information
    } catch (error) {
      console.error("Error during sign-up:", error);
      throw error; // Re-throw the error so it can be handled by the caller
    }
  },
  async getProucts() {
    const url = "/categories/products";
    return axiosClient.get(url);
  },
};

export default userApi;
