import { defineStore } from "pinia";
// import { axios } from "axios";

export const portfolioStore = defineStore("portfolio", {
  state: () => ({
    portfolio: null,
  }),
  actions: {
    async getInfo() {
      try {
        let response = await fetch(
          `https://api.github.com/users/Farrux0/repos`
        );
        let data = await response.json();
        this.portfolio = data;
        console.log(data);
      } catch (error) {
        console.log("ошибка при запросе");
      }
    },
  },
});
