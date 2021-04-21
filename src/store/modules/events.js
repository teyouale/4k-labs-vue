import EventApi from '../../api/EventApi'
export default {
    namespaced: true,

    state:{
        allEvents: []
    },
    getters:{
        getAllEvents:(state)=>state.allEvents
    },
    actions:{
        addEvent({commit,dispatch},data){
            return new Promise((resolve, reject) => {
                EventApi.addEvent(data).then((result) => {
                    commit('addEvent',result.data.event)
                    resolve(result.data)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
        getEvents({commit,dispatch}){
            return new Promise((resolve, reject) => {
                EventApi.getEvents().then((result) => {
                    commit('storeEvents',result.data.events)
                }).catch((err) => {
                    if (err.response.status == 401) {
                        dispatch('auth/logoutUser', err.response.data, { root: true })
                    }
                    reject(err.response.data)
                });
            })
        },
    },
    mutations:{
        addEvent(state,event){
            state.allEvents.unshift(event)
        },
        storeEvents(state,events){
            state.allEvents = events
        }
    }
  };