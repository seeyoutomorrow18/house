<template>
    <div class="login">
        <div class="top_img">
            <img src="../../public/img/logo.min.png" alt="">
        </div>

        <div class="form-wrap">
            <label>
                <span><van-icon name="phone-o" size="22" color="orange" /></span>
                <input type="text" placeholder="请输入手机号码" v-model="username" class="same">
            </label>
            <label>
                <span><van-icon name="failure"  size="22" color="orange"  /></span>
                <input type="text" placeholder="请输入密码" v-model="password" class="same">
            </label>

            <div class="sub-wrap">
                <div class="date">
                    <input type="checkbox" class="syc" v-model="state">
                    <span>七天免登陆</span>
                </div>
                <div class="r">
                    <a href="#" class="fl-r">找回密码</a>
                    <a href="#" class="fr-r" @click.prevent = "$router.push('/reg')">立即注册</a>
                </div>
                <input type="submit" value="登录" @click="longin" class="same">
                <div class="middle-out">
                    <span><van-icon name="chat-o" color="#07c160" size="26"/></span>
                    <p>微信快速登录</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            state: true

        }
    },
    methods: {
        async longin(){
            if(this.username && this.password){
                let {data} = await this.$axios.get('http://localhost:3000/users/check',{
                    params:{
                        username:this.username,
                        password:this.password
                    }
                })
                
                if(data.length){
                    let Authorization = data[0].Authorization 
                    localStorage.setItem('username',this.username)
                    localStorage.setItem('Authorization',Authorization)
                    let { redirectUrl } = this.$route.query || '/mine'
                    if( redirectUrl==undefined ){
                        this.$router.replace('/mine')
                    }else{
                        this.$router.replace(redirectUrl)
                    }
                    
                }else{
                    alert('网络繁忙，登录失败')
                }
            }
        }
    },
    created(){
        this.username = this.$route.query.username 
    }
}
</script>

<style lang="scss" scoped>
    .login{
        .top_img{
            height: 156.25px;
            padding-top: 46.8px;
            text-align: center ;
            background: #272536;
        }
        .form-wrap{
            width: 100%;
            height: 344.2px;
            padding: 10.5px 15.6px 30.2px;
            label{
                display: block;
                margin-top: 19.7px;
                height: 46.8px;
                font-size: 16px;
                display: flex ;
                justify-content: center;
                span{
                    width: 13.5%;
                    height: 100%;
                    text-align: center;
                    line-height: 60.8px; 
                    background: #fff;
                }
                .same{
                    width: 85.5% ;
                    height: 100%;
                    padding-left: 5px;
                }
            }
            .sub-wrap{
                width: 100% ;
                height: 165px;
                margin-top: 5px;
                .date{
                    display: flex ;
                    justify-content: flex-start;
                    .syc{
                        width: 15px;
                        height:15px;
                    }
                    span{
                        width: 60px;
                        height: 15px;
                        margin-left:5px;
                        color: #ccc;
                    }
                }
                .r{
                    font-size: 16.6px;
                    .fl-r{
                        float: left;
                        text-decoration: none;
                        color: #999;
                        
                    }
                    .fr-r{
                        float: right;
                        text-decoration: none;
                        color: #FC7A18;
                    }
                }
                .same{
                    width: 100% ;
                    height: 46.88px;
                    margin-top: 32px;
                    background: #fc7a18;
                    color: #fff;
                    text-align: center ;
                    line-height: 46.88px;
                    font-size: 16px;
                }
                .middle-out{
                width: 100%;
                height: 46px;
                margin-top: 26px;
                display: flex ;
                flex-direction: column;
                justify-content:center;
                align-items: center ;
                span{
                    width: 33px;
                    height: 37px;
                    color: #58bc58;
                    }
                p{
                    color: #999;
                }
                }
            }
            
        }
    }
</style>