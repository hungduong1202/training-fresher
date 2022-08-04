import router from "@/router";
import axios from "axios";
import { createStore } from "vuex";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNiIsIkhldEhhblN0cmluZyI6IjA4LzExLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2Nzg2NTYwMDAwMCIsIm5iZiI6MTYzNzY4NjgwMCwiZXhwIjoxNjY4MDEzMjAwfQ.QkTkDXeVpyqSwqxo_HmH-aQhbITi8vZC_UPJ7cPM3W4";

export default createStore({
  state: { userLogin: {} },
  getters: {
    userLogin: (state) => state.userLogin,
  },
  mutations: {
    userLogin: (state, user) => (state.userLogin = user),
  },
  actions: {
    async register({ commit }, user) {
      console.log(user);
      try {
        const res = await axios.post(
          "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
          {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            email: user.email,
            soDt: "string",
            maNhom: "string",
            hoTen: "string",
          },
          {
            headers: {
              TokenCybersoft: TOKEN,
            },
          }
        );
        console.log(res);
        if (res.status === 200) {
          alert("Đăng ký thành công");
          router.push("/login");
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.content);
      }
    },
    async login({ commit }, user) {
      try {
        const res = await axios.post(
          "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
          user,
          {
            headers: {
              TokenCybersoft: TOKEN,
            },
          }
        );
        const { content } = res.data;
        console.log(content);
        localStorage.setItem("userLogin", JSON.stringify(content));
        commit("userLogin", content);
        if (res.status === 200) {
          alert("Đăng nhập thành công");
          router.push("/");
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data.content);
      }
    },
  },
  modules: {},
});
