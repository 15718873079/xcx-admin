<template>
    <div style="display: flex;height: 100%;">
        <div class="queryBar">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="品牌ID">
                    <el-input v-model="form.brandId"></el-input>
                </el-form-item>
                <el-form-item label="门店ID">
                    <el-input v-model="form.shopId"></el-input>
                </el-form-item>
                <el-form-item label="门店号">
                    <el-input v-model="form.shopNo"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width: 100px;">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Shop',
        data () {
            return {
                form: {
                    brandId: null,
                    shopId: null,
                    shopNo: null
                }
            }
        },
        methods: {
            handleOpen (key, keyPath) {
                console.log(key, keyPath)
            },
            handleClose (key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }

</script>
<style>
    .queryBar {
        width: 400px;
        height: 100%;
        border-left: solid 1px #e6e6e6;
        border-right: solid 1px #e6e6e6;
        padding: 20px;
        box-sizing: border-box;
    }
</style>
