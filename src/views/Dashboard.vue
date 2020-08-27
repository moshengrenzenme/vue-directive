<template>
    <div class="dashboard">
        <div class="navs">
            <div class="nav" :class="{active:show===1}" @click="show=1">向上居中</div>
            <div class="nav" :class="{active:show===2}" @click="show=2">向上居左</div>
            <div class="nav" :class="{active:show===3}" @click="show=3">向上居右</div>
            <div class="nav" :class="{active:show===4}" @click="show=4">向下居左</div>
            <div class="nav" :class="{active:show===5}" @click="show=5">向左居中</div>
        </div>
        <div class="box">
            <div class="text">
                <p>红色区域为大屏内容区</p>
                <p>假设设计稿为1920*1080</p>
                <p>拖动屏幕可查看查看适配效果</p>
            </div>
            <div class="dashboard-content" key='1' v-if="show===1"
                 v-dashboard="{designWidth:1920,designHeight:1080,position:'top-center',timer:0}">
            </div>
            <div class="dashboard-content" key="2" v-if="show===2"
                 v-dashboard="{designWidth:1920,designHeight:1080,position:'top-left',timer:0}"></div>

            <div class="dashboard-content" key="3" v-if="show===3"
                 v-dashboard="{designWidth:1920,designHeight:1080,position:'top-right',timer:0}"></div>
            <div class="dashboard-content" key="4" v-if="show===4"
                 v-dashboard="{designWidth:1920,designHeight:1080,position:'bottom-left',timer:0}"></div>
            <div class="dashboard-content" key="5" v-if="show===5"
                 v-dashboard="{designWidth:1920,designHeight:1080,position:'left-center',timer:0}"></div>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: 1
            }
        }
    }
</script>

<style lang="less" scoped>
    .dashboard {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        .navs {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            text-align: center;
            z-index: 1;

            .nav {
                display: inline-block;
                background-color: #f1e8db;
                border-radius: 4px;
                padding: 4px 10px;
                color: #333;
                margin: 20px;
                cursor: pointer;

                &.active {
                    background-color: #f3a43b;
                    color: #fff;
                }
            }
        }

        .box {
            width: 100%;
            height: 100%;
            background-color: #33d3e2;
            position: relative;

            .text {
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 1;
                text-align: center;
                color: #fff;
                font-size: 20px;
            }

            .dashboard-content {
                background-color: red;
            }
        }
    }
</style>