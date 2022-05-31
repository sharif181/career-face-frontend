import ApiService from "@/services/api.service";

export default {
    namespaced: true,
    // module assets
    state: () => ({
        user: {},
        permissions: {},
        auth_role: {},
        loading_user: true
    }),
    getters: {
        getUserFromGetters(state) {
            return state.user
        },
        getPermissionsFromGetters(state) {
            return state.permissions
        }
    },
    actions: {
        getUser(context) {
            ApiService.get('/profile').then(response => {
                context.commit("GETUSER", response.data);
                // context.commit("GETPERMISSIONS", response.data.data.permissions);
                // context.commit("AUTHROLE", response.data.data.left_menu_component);
            }).catch(error => {
                console.log(error, 'error')
            }).finally(() => {
                context.commit("LOADER", false)
            });
        },
    },
    mutations: {
        GETUSER(state, data) {
            return state.user = data
        },
        GETPERMISSIONS(state, data) {
            return state.permissions = data
        },
        AUTHROLE(state, data) {
            return state.auth_role = data
        },
        LOADER(state, data) {
            return state.loading_user = data
        }
    },
}