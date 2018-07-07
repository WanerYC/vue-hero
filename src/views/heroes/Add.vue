<template>
    <div> 
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">英雄名</label>
            <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="name">
          </div>
          <div class="form-group">
            <label for="sex">英雄性别</label>
            <input type="text" v-model="formData.gender" class="form-control" id="sex" placeholder="sex">
          </div>
          <button type="submit" @click.prevent="handleAdd" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>
<script>
    import axios from 'axios';
    // 绑定文本
    // 添加按钮注册事件
    // 发送ajax
    export default {
        data() {
            return {
                formData :{
                    name:'',
                    gender:''
                }
            }
        },
        methods:{
            handleAdd() {
                axios
                    .post('http://localhost:3000/heroes', this.formData)
                    .then((res) => {
                        console.log(res);
                        const {status, data} = res;
                        console.log(this.$router);
                        if(status === 201) {
                            // 判断是否添加成功
                            // 成功就跳转到英雄列表页
                            this.$router.push({name:'heroes'});
                        }else {
                            alert('添加失败')
                        }
                    })
            }
        }
    }
</script>
