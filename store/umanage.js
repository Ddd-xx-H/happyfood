import postbody from "~/utils/postbody.js"
// import { TeamFields } from "~/util/applistadd.js";


// let defaultTeamFields = [].concat(TeamFields);
const state = () => ({
    removeUmanageObj: null,

    // teamFields: defaultTeamFields,
    UmanageList: [],
    Umanage: [],
})

const mutations = {
    setUmanageList(state, UmanageList) {
        state.UmanageList = UmanageList;
    },
    setUmanage(state, Umanage) {
        state.Umanage = Umanage;
    },
    setuname(state, uname) {
        state.Umanage.uname = uname;
    },
    setudata(state, udata) {
        state.Umanage.udata = udata;
    },
    setuaddress(state, uaddress) {
        state.Umanage.uaddress = uaddress;
    },
    setuphone(state, uphone) {
        state.Umanage.uphone = uphone;
    },
    setustate(state, ustate) {
        state.Umanage.ustate = ustate;
    },


    // 删除
    setRemoveUmanage(stete, data) {
        stete.removeUmanageObj = data;
    },

    clearRemoveUmanageItem(state) {
        console.log("清除删除的管理员数据：%O", state.removeUmanageObj);
        state.removeUmanageObj = null;
    }
}

// 增加
const actions = {

    async getUmanageList(context, page) {
        let result = await fetch("/api/umanages", {
            method: "GET",
        }).then((res) => res.json());
        if (result.result) {
            context.commit("setUmanageList", result.umanageList);
        } else {
            context.commit("setUmanageList", []);
        }
        // if (page) page.finishGetTeacherList(result);
    },
    async addUmanageList(context, { umanage, page }) {
        // debugger
        let body = postbody(umanage);
        let result = await fetch(`/api/umanages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body,
        }).then((res) => res.json());
        context.commit("setUmanage", result.umanage);
        
    },


    // 查看
    async getApplicationInfo(context, { page, id }) {
        //去服务器获取这个app 详情 
        let result = await fetch(`/api/application/${id}`, {
            method: "GET",
            credentials: "include",
        }).then((res) => res.json());
        context.commit("setApplication", result.application);
        // page.finishGetApplication(result);  //返回值 没有这句就是直接写进去
        if (result.result) {
            console.log("context: %O", context);
            // root: true 在整个文件夹下面找
            // 没有 root: true 只在当前文件找
            context.commit("apptable/setNeedkeyInfo", result.data, { root: true });
        } else {
            // 获取详情失败
            context.commit("apptable/setNeedkeyInfo", {}, { root: true });
        }
    },

    // 删除
    async removeUmanage(context, page) {
        console.log("跟服务器说删除 id为: %O 的管理员", context.state.removeUmanageObj.app_id);
        let body = postbody({ id: context.state.removeUmanageObj.id })
        let result = await fetch("/api/umanages/removeUmanage", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body,
        }).then((res) => res.json());
        console.log("result: %O", result);

        // 删除成功需要清除管理员数据
        context.commit("clearRemoveUmanageItem");

        // 获得操作数据，给页面反馈
        page.finishRemove(result);
    }
}

export {
    state,
    mutations,
    actions,
}