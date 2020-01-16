<template>
    <div class="login">
        <div class="top_img">
            <img src="../../public/img/logo.min.png" alt="">
        </div>

        <div class="form-wrap">
            <label>
                <span><van-icon name="phone-o" size="22" color="orange" /></span>
                <input type="text" 
                placeholder="请输入手机号码" 
                v-model.trim="username"
                @blur="checkname">
            </label>
            <label>
                <span><van-icon name="failure"  size="22" color="orange"  /></span>
                <input type="text" 
                placeholder="请输入密码" 
                v-model.trim="password"
                @blur="checkpassword">
            </label>

            <div class="sub-wrap">
                <div class="r">
                    <a href="#" class="fl-r" @click.prevent = "$router.back()">后退一步</a>
                    <a href="#" class="fr-r">了解注意事项</a>
                </div>
                <input type="submit" value="注册" @click="reg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username: '',
            password: '',
            isok1: false ,
            isok2: false
        }
        
    },
    methods: {
            async checkname(){
                const reg = /^1([3589]\d|5[0-35-9]|7[3678])\d{8}$/;
                if (this.username == '' || this.username.length <= 10 || !reg.test(this.username)) {
                   //alert('请正确填写信息')
                   this.isok1 = false
                }else{
                    console.log('经过这里')
                    let { data  } = await this.$axios.get('http://localhost:3000/users/check',{
                       params:{
                            username: this.username
                        }
                    })
                    console.log(data,"145522")
                    if(!data.length){
                        //alert('可以注册')
                        this.isok1 = true
                    }else{
                        /*  alert("当前用户太受欢迎，不能注册") */
                         this.isok1 = false
                    }
                    //console.log(data,"]]]]]]]]]]]]]]")
                   /*  alert('成功登录进行跳转') */
                }
                
            },
            checkpassword(){
                // 必须包含一个大写，一个小写字母，且长度为8到16位
                const regpsw = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/
                if(this.password == '' || !regpsw.test(this.password)){
                    this.isok2 = false
                }else{
                    this.isok2 = true
                }
            },
            async reg(){
                if(this.isok1 && this.isok2){
                    let { data: {msg} }  = await this.$axios.post('http://localhost:3000/users/check',{
                        username: this.username,
                        password: this.password
                    })
                    
                    if(msg == "添加成功"){
                        alert('注册成功')
                        this.$router.push({name:'login',query:{username:this.username}})
                    }else{
                        alert('注册失败')
                    }

                }else{
                    console.log("不能注册注册")
                }
            }
        },
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
                input{
                    width: 85.5% ;
                    height: 100%;
                    padding-left: 5px;
                }
            }
            .sub-wrap{
                width: 100% ;
                height: 165px;
                margin-top: 5px;
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
                input{
                    width: 100% ;
                    height: 46.88px;
                    margin-top: 32px;
                    background: #fc7a18;
                    color: #fff;
                    text-align: center ;
                    line-height: 46.88px;
                    font-size: 16px;
                }
            }
        }
    }
</style>