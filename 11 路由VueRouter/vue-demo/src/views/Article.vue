<template>
    <div class="article-page">
        <div v-for="(item) in articles" :key="item.id" @click="$router.push('/detail')"   class="article-item">
            <div class="head">
                <img :src="item.createAvator"
                    alt="" />
                <div class="con">
                    <p class="title">{{ item.stem }}</p>
                    <p class="other">{{ item.createName }} | {{ item.time }}</p>
                </div>
            </div>
            <div class="body">
                {{ item.content }}
            </div>
            <div class="foot">点赞 {{ item.likeCount }} | 浏览 {{ item.view }}</div>
        </div>
    </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
// 首页请求渲染
// 1.安装axios，导入axios
// 2.看接口文档，确认请求方式、请求地址，请求参数
// 3.created中发请求，获得数据，存起来
// 4.页面动态渲染
// import axios from 'axios';
export default {
    name: 'ArticlePage',
    data() {
        return {
            articles:[
                {id:1, createAvator:'https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF', stem: '百度前端面经', createName: 'hhhh',content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',likeCount: 33, view: 30,time:2000-3-22},
                {id:2, createAvator:'https://img2.baidu.com/it/u=3131108470,560487403&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800', stem: '百度面经', createName: 'xxxxx',content: '虽然百度这几年发展势头落后于AT，甚至快被京，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',likeCount: 43, view: 30,time:2000-3-22},
                {id:3, createAvator:'https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF', stem: '百度面经', createName: 'xxxxx',content: '人民网北京4月8日电 (记者罗知之)据中国人民银行网站消息，4月7日，中央汇金公司发布公告，将持续加大增持ETF规模和力度。对此，中国人民银行表示，坚定支持中央汇金公司加大力度增持股票市场指数基金，并在必要时向中央汇金公司提供充足的再贷款支持，坚决维护资本市场平稳运行。',likeCount: 43, view: 30,time:2000-3-22},
                {id:4, createAvator:'https://img2.baidu.com/it/u=3131108470,560487403&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800', stem: '百度面经', createName: 'xxxxx',content: '财联社4月8日电，中国人民银行新闻发言人就支持中央汇金公司稳定资本市场答记者问。问：4月7日，中央汇金公司发布公告，将持续加大增持ETF规模和力度。请问中国人民银行怎么看？ 答：中国人民银行坚定支持中央汇金公司加大力度增持股票市场指数基金，并在必要时向中央汇金公司提供充足的再贷款支持，坚决维护资本市场平稳运行。',likeCount: 43, view: 30,time:2000-3-22},
                {id:5, createAvator:'https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF', stem: '百度面经', createName: 'xxxxx',content: '财联社4月8日电，中国人民银行新闻发言人就支持中央汇金公司稳定资本市场答记者问。问：4月7日，中央汇金公司发布公告，将持续加大增持ETF规模和力度。请问中国人民银行怎么看？ 答：中国人民银行坚定支持中央汇金公司加大力度增持股票市场指数基金，并在必要时向中央汇金公司提供充足的再贷款支持，坚决维护资本市场平稳运行。',likeCount: 43, view: 30,time:2000-3-22},
                {id:6, createAvator:'https://t7.baidu.com/it/u=1732966997,2981886582&fm=193&f=GIF', stem: '百度面经', createName: 'xxxxx',content: '财联社4月8日电，中国人民银行新闻发言人就支持中央汇金公司稳定资本市场答记者问。问：4月7日，中央汇金公司发布公告，将持续加大增持ETF规模和力度。请问中国人民银行怎么看？ 答：中国人民银行坚定支持中央汇金公司加大力度增持股票市场指数基金，并在必要时向中央汇金公司提供充足的再贷款支持，坚决维护资本市场平稳运行。',likeCount: 43, view: 30,time:2000-3-22},
            ]
        }
    },
    // async created() {
    //     const res = await axios.get('https://mock.boxuegu.com/mock/3083/articles')
    //     console.log(res)
        
    // }
}
</script>

<style lang="less" scoped>
.article-page {
    background: #f5f5f5;
}

.article-item {
    cursor: pointer;
    margin-bottom: 10px;
    background: #fff;
    padding: 10px 15px;

    .head {
        display: flex;

        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
        }

        .con {
            flex: 1;
            overflow: hidden;
            padding-left: 15px;

            p {
                margin: 0;
                line-height: 1.5;

                &.title {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 100%;
                    white-space: nowrap;
                }

                &.other {
                    font-size: 10px;
                    color: #999;
                }
            }
        }
    }

    .body {
        font-size: 14px;
        color: #666;
        line-height: 1.6;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .foot {
        font-size: 12px;
        color: #999;
        margin-top: 10px;
    }
}
</style>