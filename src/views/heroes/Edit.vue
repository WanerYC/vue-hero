<template>
    <div> 
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名</label>
            <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="name">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input type="text" v-model="formData.gender" class="form-control" id="sex" placeholder="sex">
          </div>
          <button type="submit" @click.prevent="handleEdit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    // 编辑页面 显示当前编辑的英雄
    // 获取id
    // 发送请求根据id获取数据
    // 绑定文本框
    // 点击submit按钮 实现更新功能
    export default {
        data() {
            return {
                formData :{
                    name:'',
                    gender:''
                },
                // 获取url上的id 设置默认值-1
                heroId:-1
            }
        },
        created() {
            // 获取路由参数
            this.heroId = this.$route.params.id;
            console.log(this.$route)
            // 调用获取英雄对象的方法
            this.loadData();
        },
        methods:{
            loadData() {
                this.$http   
                    .get(`heroes/${this.heroId}`)
                    .then((res) => {
                        if(res.status === 200) {
                            this.formData = res.data;
                        }
                    })
            },
            handleEdit() {
                this.$http   
                    .put(`heroes/${this.heroId}`, this.formData)
                    .then((res) => {
                        if(res.status === 200) {
                            console.log(this.$router);
                            this.$router.push({name:'heroes'});
                        }else {
                            alert('修改失败');
                        }
                            
                        
                    })
            }
        }
      
    }
</script>
