<template>
    <div style='width: 100%;height: 100%;margin: 0px; padding: 0px;display: flex;flex-direction: column'>
        <div class='wl-nav'>
            <span style='font-size: 32px;padding: 0 40px;'>Redis 管理工具</span>
        </div>
        <div style='display:flex; flex-direction: row;flex-grow: 1;'>
            <div class='wl-menu'>
                <el-menu :default-active='$route.name' router class='el-menu-vertical-demo' unique-opened
                         @select='handleMenuSelect'
                         :collapse='isCollapse'>
                    <div v-for="menu in menus" :key="menu.index">
                        <el-submenu :index='menu.index'>
                            <template slot='title'>
                                <i :class="menu.icon"></i>
                                <span slot='title'>{{menu.title}}</span>
                            </template>
                            <div v-for="subMenu in menu.children" :key="subMenu.index">
                                <el-menu-item :index="subMenu.index">
                                    {{subMenu.title}}
                                </el-menu-item>
                            </div>
                        </el-submenu>
                    </div>
                </el-menu>
            </div>
            <div class='wl-content'>
                <div class='wl-breadcrumb'>
                    <el-breadcrumb separator='/'>
                        <el-breadcrumb-item to="/Home/1-1">首页</el-breadcrumb-item>
                        <el-breadcrumb-item v-for=" breadcrumb in breadcrumbs" :key="breadcrumb.path"
                                            :to="breadcrumb.path">{{breadcrumb.title}}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                menus: [
                    {
                        'index': '1',
                        'icon': 'el-icon-files',
                        'title': '主数据管理',
                        'children': [
                            {
                                'index': '1-1',
                                'title': '门店管理'
                            },
                            {
                                'index': '1-2',
                                'title': '菜品管理'
                            },
                            {
                                'index': '1-3',
                                'title': '优惠管理'
                            },
                            {
                                'index': '1-4',
                                'title': '分类管理'
                            },
                            {
                                'index': '1-5',
                                'title': '桌台管理'
                            }
                        ]
                    },
                    {
                        'index': '2',
                        'icon': 'el-icon-s-order',
                        'title': '订单管理'
                    },
                    {
                        'index': '3',
                        'icon': 'el-icon-document-copy',
                        'title': '数据同步'
                    },
                    {
                        'index': '4',
                        'icon': 'el-icon-setting',
                        'title': '系统配置'
                    }
                ],
                breadcrumbs: [],
                isCollapse: false
            }
        },
        methods: {
            handleMenuSelect (index, indexPath) {
                let that = this
                let currMenu = that.menus
                that.breadcrumbs = []
                indexPath.forEach((index) => {
                    if (!currMenu) {
                        return
                    }
                    currMenu = currMenu.find((menu) => {
                        return menu.index === index
                    })
                    that.breadcrumbs.push({path: currMenu.index, title: currMenu.title})
                    currMenu = currMenu.children
                })
                console.log(that.breadcrumbs)
            }
        }
    }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
    .wl-nav {
        height: 50px;
        background-color: #409EFF;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 300px;
    }

    .wl-content {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .wl-breadcrumb {
        padding: 0 20px;
        border-bottom: 1px solid #e6e6e6;
        height: 30px;
    }

    .el-breadcrumb {
        line-height: 30px;
    }
</style>
