import NProgress from 'nprogress/nprogress';

const state = {
    td: {},
    loading: true,
    error: null
};

const getters = {
    getSensorByName: (state) => (name) => {
        return state.td[name]
    },
    getPropertyDetailsOfSensor: (state) => (nameOfSensor, nameOfProperty) => {
        return state.td[nameOfSensor].properties[nameOfProperty]
    }
};

const actions = {
    async fetchThings({commit, state}) {
        if(Object.keys(state.td).length === 0 && state.td.constructor === Object){
            commit('startLoading');
            NProgress.start()
            const response = await fetch(`http://localhost:4000/td`, {
                    headers: { Accept: "application/json",  "Content-Type":"application/json"},
                }
            );

            if (!response.ok) {
                commit('showError', response.statusText);
            } else {
                const res = await response.json();
                commit('addThings', res);
                commit('finishLoading');
                NProgress.done()
            }
        }
    },
};

const mutations = {
    addThings(state, payload) {
        state.td = payload
    },
    startLoading(state) {
        state.loading = true;
    },
    finishLoading(state) {
        state.loading = false;
    },
    showError(state, error) {
        state.error = error;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
