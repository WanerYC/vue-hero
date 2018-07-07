<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link class="btn btn-success" :to="{ name: 'heroAdd' }">Add</router-link>
        <div class="table-responsive">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>名称</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
                <tr :key="item.id" v-for="(item,index) in list">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.gender }}</td>
                    <td>
                    <a href="edit.html">edit</a>
                    &nbsp;&nbsp;
                    <!-- <a href="javascript:window.confirm('Are you sure?')">delete</a> -->
                    <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>


<script>
// 引入axios模块
import axios from 'axios';

    export default {
        data() {
            return{
                list:[]
            }
        },
        created() {
            this.loadData();
        },
        methods:{
            // 加载英雄列表
            loadData() {
                axios
                    .get('http://localhost:3000/heroes')
                    .then((res) => {
                        console.log(res);
                        const {status,data} = res;
                        if(status === 200) {
                            this.list=data;
                        }
                    });
            },
            // 删除
            handleDelete(id) {
                if(!confirm('是否确认删除?')) {
                    return;
                }
                axios
                    .delete(`http://localhost:3000/heroes/${id}`)
                    .then((res) => {
                        console.log(res);
                        if(res.status ===200 ) {
                            // 删除成功,重新渲染列表
                            this.loadData();
                        }else {
                            alert('删除失败')
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
    }
</script>
