export default {
    state:{
        user:{
            Authorization:'888uh8877&&*8',
            username:'xiaopeng'

        }
    },
    matetions:{
        login(state,{Authorization,username}){
            state.user.username = username
            state.user.Authorization = Authorization
            console.log('vuex denglu')
        },
        logout(state){
            state.user.username = ''
            state.user.Authorization = ''
            console.log('vuex 退出')
        }
    },

}