import { y as defineStore } from './server.mjs';

const useRechargeStore = defineStore({
  id: "rechargeStore",
  state: () => {
    return {
      show: false
    };
  },
  getters: {},
  actions: {
    toggleShow(toggle) {
      this.show = toggle != null ? toggle : !this.show;
    }
  }
});

export { useRechargeStore as u };
//# sourceMappingURL=recharge-0plSVxH9.mjs.map
