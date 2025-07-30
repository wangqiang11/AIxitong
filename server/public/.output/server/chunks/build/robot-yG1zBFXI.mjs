import { y as defineStore, A as feedback } from './server.mjs';
import { e as getRobotLists, f as delRobot, h as cancelShare, p as postRobot, i as getRobotCateLists, j as postRobotCate, k as putRobotCate, l as clearRobotCate, m as delRobotCate } from './robot-BsB_E1H2.mjs';

const useRobotStore = defineStore({
  id: "robot",
  state: () => {
    return {
      robotId: "",
      robotLists: [],
      sessionId: "",
      sessionLists: []
    };
  },
  getters: {
    getCurrentSession: (state) => {
      return state.sessionLists.find(
        (item) => String(item.id) === state.sessionId
      ) || {};
    },
    getCurrentApp: (state) => {
      return state.robotLists.find((item) => String(item.id) === state.robotId) || {};
    }
  },
  actions: {
    setRobotId(id = "") {
      this.robotId = String(id);
    },
    async getRobot(params) {
      params = params || { page_type: 0 };
      const data = await getRobotLists(params);
      this.robotLists = data.lists;
      if (this.robotLists.length > 0) {
        const [appFirst] = this.robotLists;
        this.setRobotId(appFirst.id);
      }
      return data;
    },
    async delRobot(id) {
      await feedback.confirm("\u786E\u5B9A\u5220\u9664\uFF1F");
      await delRobot({ id });
    },
    async cancelShareRobot(id) {
      await feedback.confirm("\u786E\u5B9A\u53D6\u6D88\u5206\u4EAB\u5417\uFF1F");
      await cancelShare({ id });
    },
    async addRobot() {
      const { id } = await postRobot();
      this.setRobotId(id);
      return id;
    },
    setSessionId(id = "") {
      this.sessionId = String(id);
    },
    setSessionSelect(item) {
      if (!item) {
        [item] = this.sessionLists;
      }
      this.setSessionId((item == null ? void 0 : item.id) || "");
    },
    async getSessionLists() {
      const data = await getRobotCateLists({
        robot_id: this.robotId
      });
      this.sessionLists = data;
      return this.sessionLists;
    },
    async sessionAdd() {
      await postRobotCate({
        robot_id: this.robotId
      });
      await this.getSessionLists();
      this.setSessionSelect();
    },
    async sessionEdit(value) {
      await putRobotCate({
        ...value,
        robot_id: this.robotId
      });
      await this.getSessionLists();
    },
    async sessionClear() {
      await clearRobotCate({
        robot_id: this.robotId
      });
      await this.getSessionLists();
      this.setSessionSelect();
    },
    async sessionDelete(id) {
      await delRobotCate({
        id,
        robot_id: this.robotId
      });
      await this.getSessionLists();
      this.setSessionSelect();
    }
  }
});

export { useRobotStore as u };
//# sourceMappingURL=robot-yG1zBFXI.mjs.map
