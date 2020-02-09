<template>
  <div>
    <WidenTop></WidenTop>
    <div class="box widencontent">
      <div class="widennav clearfix">
        <div
          class="swiper-slide"
          v-for="(item,index) in datalist"
          :key="item"
          @click="goto(index)"
          :class="{nacli : item == cur}"
        >{{item }}
         <span class="nav-border" :class="{border : item == cur}"></span>
        </div>
      </div>

      <div id="slider" class="slider">
        <ul 
          class="sliderlist"
          v-for="(item) in widen"
          :key="item.num"
          @touchstart="touchstart"
          @touchmove="touchmove"
          :style="{height:min}"
        >
        <section v-for="item in item.data" :key="item.data_id"><!-- {{item}} -->
            <div class="fl">
                <p class="info-title">{{ item.title }}</p>
                <div class="bottom">
                    <p class="left">
                        <span>{{ item.store }}</span>
                        <span class="time" v-if="!(item.store==item.date)">{{ item.date }}</span>
                    </p>
                    <p class="right">
                        <van-icon name="good-job-o" />
                        <span>{{ item.zan }}</span>
                        <van-icon name="chat-o" />
                        <span>{{ item.xinxi }}</span>
                    </p>
                </div>
            </div>
            <div class="fr">
                <img :src="item.src" alt="">
            </div>
        </section>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import WidenTop from "../components/WidenTop";
export default {
  data() {
    return {
      min:"2120",
      cur: "热点",
      datalist:["热点","信息","数据","规划","拍地","政策"],
      startPointX: 0,
      changePointX: 0,
      showIndex: 0,
      widen: [
    {
        "num": "a11111", 
        "data": [
            {
                "data_id": "a0", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930280128594/2019/5/2019-05-10/201905101142134730785.png", 
                "title": "万元购房减压神券，震撼来袭！", 
                "store": "房点铺子  ", 
                "date": "2019-05-10", 
                "zan": "3", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a1", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/10/2019-10-09/201910090946145520378.jpg", 
                "title": "价格有洼地 东莞客前往惠州置业！", 
                "store": "2019-06-27", 
                "date": "2019-06-27", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a2", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/10/2019-10-09/201910090945526403398.jpg", 
                "title": "东莞住房公积金提取政策调整 装修提取下月起取消", 
                "store": "2019-06-27", 
                "date": "2019-06-27", 
                "zan": "1", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a3", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/10/2019-10-09/201910090943023954648.jpg", 
                "title": "北京拟规范网上发布租房信息:超30日房源信息需下架", 
                "store": "2019-06-27", 
                "date": "2019-06-27", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a4", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/10/2019-10-09/201910090942344138988.png", 
                "title": "东莞楼市平稳冷静期，刚需购房好时机来啦！", 
                "store": "2019-06-25", 
                "date": "2019-06-25", 
                "zan": "1", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a5", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/10/2019-10-09/201910090942094456962.jpg", 
                "title": "“趋稳”成为楼市新常态", 
                "store": "2019-06-27", 
                "date": "2019-06-27", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a6", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/9/2019-09-25/201909251745078079940.jpg", 
                "title": "未来在这！东莞南城CBD规划方案出炉！", 
                "store": "蜡笔小新  ", 
                "date": "2019-09-25", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a7", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/7/2019-07-01/201907011415175717412.jpg", 
                "title": "双引擎助力腾飞 东莞全面进入加速发展时代", 
                "store": "2019-07-01", 
                "date": "2019-07-01", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a8", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146533056442/2019/6/2019-06-11/201906110956312662389.png", 
                "title": "广深毕业生租房状况调查报告", 
                "store": "2019-06-11", 
                "date": "2019-06-11", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a9", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/6/2019-06-04/201906041057401851877.jpg", 
                "title": "京东10亿多元拍下凤岗一地块", 
                "store": "2019-06-04", 
                "date": "2019-06-04", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a10", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/6/2019-06-01/201906010925285174454.png", 
                "title": "中国14436.41万人实缴公积金 ，44%提取的人为还房贷", 
                "store": "2019-06-01", 
                "date": "2019-06-01", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a11", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/5/2019-05-14/201905141009464888580.png", 
                "title": "破坏承重墙，业主和装修公司都在想啥？", 
                "store": "2019-05-14", 
                "date": "2019-05-14", 
                "zan": "1", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a12", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/5/2019-05-05/201905051441296228406.png", 
                "title": "二手房5.4万/平，新房销量大增4成！深圳楼市又火了？", 
                "store": "2019-05-05", 
                "date": "2019-05-05", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a13", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-26/201904260918096741931.png", 
                "title": "南沙大桥无缝对接广深高速", 
                "store": "2019-04-26", 
                "date": "2019-04-26", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a14", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-25/201904251803367176567.png", 
                "title": "东莞有多牛？看看这些榜单你就知道......", 
                "store": "2019-04-25", 
                "date": "2019-04-25", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a15", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-18/201904181446282393526.png", 
                "title": "开门红！一季度中国GDP同比增6.4%", 
                "store": "2019-04-18", 
                "date": "2019-04-18", 
                "zan": "1", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a16", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146533056442/2019/3/2019-03-20/201903201507045308544.png", 
                "title": "222套！东莞雅园新村最新公租房配租方案出炉", 
                "store": "2019-03-20", 
                "date": "2019-03-20", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a17", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146533056442/2019/3/2019-03-04/201903041158175447142.png", 
                "title": "颜值+内涵升级！看东莞如何打造“湾区都市·品质东莞”", 
                "store": "2019-03-04", 
                "date": "2019-03-04", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a18", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/1/2019-01-29/20190129114817080299.png", 
                "title": "东莞2035年前规划建成12条轨道交通线路", 
                "store": "2019-01-29", 
                "date": "2019-01-29", 
                "zan": "2", 
                "xinxi": "0"
            }, 
            {
                "data_id": "a19", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/1/2019-01-26/201901260944163121906.png", 
                "title": "2018年虎门镇GDP达635亿 将建成现代化滨海城市", 
                "store": "2019-01-26", 
                "date": "2019-01-26", 
                "zan": "0", 
                "xinxi": "0"
            }
        ]
    }, 
    {
        "num": "a22222", 
        "data": [
            {
                "data_id": "b0", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/5/2019-05-07/201905070921493650991.jpg", 
                "title": "五一期间东莞多个楼盘亮相，水乡吸引广州客", 
                "store": "2019-05-07", 
                "date": "2019-05-07", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "b1", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-30/201904301207499638841.png", 
                "title": "大湾区购房攻略--惠州，为什么越来越多人来惠州买房", 
                "store": "2019-04-30", 
                "date": "2019-04-30", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "b2", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-30/20190430114402786081.png", 
                "title": "粤港澳大湾区购房攻略（东莞篇）", 
                "store": "2019-04-30", 
                "date": "2019-04-30", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "b3", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-18/201904180926175573404.png", 
                "title": "品牌房企入莞 布局多个镇街", 
                "store": "2019-04-18", 
                "date": "2019-04-18", 
                "zan": "0", 
                "xinxi": "0"
            }
        ]
    }, 
    {
        "num": "a33333", 
        "data": [
            {
                "data_id": "c0", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/9/2019-09-26/201909261103238014375.jpg", 
                "title": "中国百强乡镇东莞共有17个镇上榜！", 
                "store": "蜡笔小新  ", 
                "date": "2019-09-26", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            
            {
                "data_id": "c2", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/5/2019-05-14/201905141052544319386.png", 
                "title": "4月东莞楼市：成交维稳，土地市场回暖", 
                "store": "2019-05-14", 
                "date": "2019-05-14", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c3", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/5/2019-05-07/201905071515131120262.jpg", 
                "title": "2019年4月东莞楼市数据简报", 
                "store": "2019-05-07", 
                "date": "2019-05-07", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c4", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/5/2019-05-07/201905071456538530282.jpg", 
                "title": "2019年第一季度东莞楼市总结报告", 
                "store": "2019-04-01", 
                "date": "2019-04-01", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c5", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/5/2019-05-07/201905071445458175979.jpg", 
                "title": "2019年2月东莞楼市数据简报", 
                "store": "2019-03-01", 
                "date": "2019-03-01", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c6", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/5/2019-05-07/201905071445124374147.jpg", 
                "title": "2019年1月东莞楼市数据简报", 
                "store": "2019-02-01", 
                "date": "2019-02-01", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c7", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146533056442/2019/5/2019-05-07/201905070930492083918.png", 
                "title": "东莞高层住宅销售均价18810.22元/㎡", 
                "store": "2019-05-07", 
                "date": "2019-05-07", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c8", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930280128594/2019/4/2019-04-29/201904290933336603409.jpg", 
                "title": "一季度广东商品房均价增幅回落", 
                "store": "2019-04-29", 
                "date": "2019-04-29", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c9", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-16/201904161415406239669.png", 
                "title": "3月东莞卖了4094套一手住宅", 
                "store": "2019-04-16", 
                "date": "2019-04-16", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c10", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/1/2019-01-02/201901021004416405862.png", 
                "title": "2018年东莞楼市数据简报", 
                "store": "2019-01-02", 
                "date": "2019-01-02", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c11", 
                "src": "https://resource.apyfc.com/UploadImage/NewHouse/1/201808211146533056442/2018/11/2018-11-05/201811051804505620126.png", 
                "title": "2018年10月及1-10月东莞楼市数据简报", 
                "store": "大小数  ", 
                "date": "2018-11-05", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c12", 
                "src": "https://resource.apyfc.com/UploadImage/NewHouse/1/201808211146533056442/2018/9/2018-09-25/20180925150534971522.png", 
                "title": "2018年下半年东莞楼市关键词，你能猜到几个？", 
                "store": "大小数  ", 
                "date": "2018-08-03", 
                "zan": "2", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c13", 
                "src": "https://resource.apyfc.com/UploadImage/NewHouse/1/201808211146260243997/2018/9/2018-09-25/201809251505012144933.png", 
                "title": "周一东莞楼市简述：成交创新低 均价企稳", 
                "store": "大小数  ", 
                "date": "2018-08-14", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c14", 
                "src": "https://resource.apyfc.com/UploadImage/NewHouse/1/201808211146260243997/2018/9/2018-09-25/201809251504301741291.png", 
                "title": "踏入8月东莞楼市供需量低位运行 滨海片为成交主战场", 
                "store": "大小数  ", 
                "date": "2018-08-29", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c15", 
                "src": "https://resource.apyfc.com/UploadImage/NewHouse/1/201808211147205645274/2018/9/2018-09-25/20180925150210243098.png", 
                "title": "东莞楼市7月数据出来了 结果有些“冷”……", 
                "store": "大小数  ", 
                "date": "2018-08-01", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "c16", 
                "src": "https://resource.apyfc.com/UploadImage/NewHouse/1/201808211146260243997/2018/9/2018-09-25/201809251501303762101.png", 
                "title": "东莞上周土拍好热闹 住宅供需相对低迷", 
                "store": "大小数  ", 
                "date": "2018-08-06", 
                "zan": "0", 
                "xinxi": "0"
            }
        ]
    }, 
    {
        "num": "a44444", 
        "data": [
            {
                "data_id": "d1", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/9/2019-09-25/201909251741489106208.jpg", 
                "title": "多条快速路+高铁站， 博罗交通大建设带动产业大发展", 
                "store": "蜡笔小新  ", 
                "date": "2019-09-25", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "d2", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/9/2019-09-25/201909251452167569520.jpg", 
                "title": "总投资1118亿元！东莞又一批重大项目动工", 
                "store": "小新  ", 
                "date": "2019-09-25", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "d3", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/7/2019-07-04/201907040949459229711.jpg", 
                "title": "东莞到广州只需10分钟！穗莞深城际计划9月30日开通", 
                "store": "2019-07-04", 
                "date": "2019-07-04", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "d4", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/7/2019-07-04/201907040932047366663.jpg", 
                "title": "涉7条线路+多个镇街！东莞轨道交通建设或这样调整！", 
                "store": "2019-07-04", 
                "date": "2019-07-04", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "d5", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/6/2019-06-26/201906261059581357458.png", 
                "title": "交通新格局，未来从滨海湾站6分钟到深圳", 
                "store": "2019-06-26", 
                "date": "2019-06-26", 
                "zan": "0", 
                "xinxi": "0"
            }
        ]
    }, 
    {
        "num": "a55555", 
        "data": [
            {
                "data_id": "e2", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/5/2019-05-16/201905161516385674754.png", 
                "title": "时代中国6.18亿夺得中堂2.2万平商住地", 
                "store": "2019-05-17", 
                "date": "2019-05-17", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "e3", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/5/2019-05-16/201905161516385674754.png", 
                "title": "仅花29秒，融创提前17天锁定沙田5.4万㎡商住地", 
                "store": "2019-05-16", 
                "date": "2019-05-16", 
                "zan": "1", 
                "xinxi": "0"
            }, 
            {
                "data_id": "e4", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930045373533/2019/5/2019-05-15/201905151008248510758.png", 
                "title": "总价23.6亿，商业100%自持，深圳鹏瑞斩获南城雅园地块", 
                "store": "2019-05-15", 
                "date": "2019-05-15", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "e5", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146533056442/2019/5/2019-05-08/20190508093546696047.png", 
                "title": "万江一商住商服用地30亿元出让", 
                "store": "2019-05-08", 
                "date": "2019-05-08", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "e6", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-30/201904300918497475121.png", 
                "title": "东莞4宗土地将于近期公开出让", 
                "store": "2019-04-30", 
                "date": "2019-04-30", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "e7", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-17/201904171201113926530.png", 
                "title": "62轮激烈争夺，中海地产斩获东莞万江商住地", 
                "store": "2019-04-17", 
                "date": "2019-04-17", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "e8", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-11/201904111054370881305.png", 
                "title": "保利4.2亿斩获南城CBD商业地", 
                "store": "2019-04-11", 
                "date": "2019-04-11", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "e9", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201807300930280128594/2019/4/2019-04-04/201904041155312031875.jpeg", 
                "title": "美的置业、骏镒投资分别夺得惠州石湾地块", 
                "store": "2019-04-04", 
                "date": "2019-04-04", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "e10", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-04/201904041127034666191.png", 
                "title": "2019年东莞住宅供地逾271公顷", 
                "store": "2019-04-04", 
                "date": "2019-04-04", 
                "zan": "0", 
                "xinxi": "0"
            }
        ]
    }, 
    {
        "num": "a66666", 
        "data": [
            {
                "data_id": "f0", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146533056442/2019/5/2019-05-15/201905151417076964759.png", 
                "title": "定了！东莞2019年积分入学政策出炉", 
                "store": "2019-05-15", 
                "date": "2019-05-15", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f1", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/5/2019-05-15/201905151203471638139.png", 
                "title": "权威发布！2019年东莞普通高中扩招1644人", 
                "store": "2019-05-15", 
                "date": "2019-05-15", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f2", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/5/2019-05-06/20190506104317683210.png", 
                "title": "官方确认！中山放宽港澳人士购房资格", 
                "store": "2019-05-06", 
                "date": "2019-05-06", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f3", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/5/2019-05-06/201905061033004896982.jpg", 
                "title": "事关孩子上学！莞城、东城、南城相继发布学位预警", 
                "store": "2019-05-06", 
                "date": "2019-05-06", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f4", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146533056442/2019/5/2019-05-06/201905060955589707234.jpg", 
                "title": "重磅！2019年市政府“一号文”公布！东莞将有大变化！", 
                "store": "2019-05-06", 
                "date": "2019-05-06", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f5", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-30/201904300950515408653.png", 
                "title": "广州入户年龄放宽：硕士等高层次人才参保即可入户", 
                "store": "2019-04-30", 
                "date": "2019-04-30", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f6", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-30/201904300912450443879.png", 
                "title": "东莞市住房和城乡建设局：农民自建房要“先批后建”", 
                "store": "2019-04-30", 
                "date": "2019-04-30", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f7", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/4/2019-04-29/20190429094717746064.png", 
                "title": "异地随迁子女在惠州中考须满足3个条件", 
                "store": "2019-04-29", 
                "date": "2019-04-29", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f8", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146533056442/2019/4/2019-04-29/201904290919353938593.png", 
                "title": "深圳限制交易类住房或可公积金贷款", 
                "store": "2019-04-29", 
                "date": "2019-04-29", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f9", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/3/2019-03-20/201903201556448509459.png", 
                "title": "东莞公积金去年发放房贷共54.75亿元", 
                "store": "2019-03-20", 
                "date": "2019-03-20", 
                "zan": "0", 
                "xinxi": "0"
            }, 
            {
                "data_id": "f10", 
                "src": "https://resource.apyfc.com/UploadImage/1/1/201808211146260243997/2019/3/2019-03-11/201903111824113288570.jpg", 
                "title": "“两天无理由退定”实行一个星期，购房者叫好", 
                "store": "2019-03-11", 
                "date": "2019-03-11", 
                "zan": "0", 
                "xinxi": "0"
            }
        ]
    }
]
    } ;
  },
  components: {
    WidenTop
  },
  methods: {
      goto(item){
          this.show(item)
      },
    show(index) {
       this.cur = this.datalist[index]
       this.min = document.querySelectorAll(".sliderlist")[index].children.length * 106 + 'px'
      if(0<= index < 5){
          this.changePointX = this.startPointX;
          let slider = document.getElementById("slider");
          let target = slider.offsetWidth/6
          slider.style.marginLeft = `-${target * index}px`;
      }
    },
    touchstart(e) {
      this.startPointX = e.changedTouches[0].pageX;
    },
    touchmove(e) {
      if (this.startPointX == this.changePointX) {
        return;
      }
      let currPointX = e.changedTouches[0].pageX;
      let leftSlide = this.startPointX - currPointX; 
      if (leftSlide > 30 && this.showIndex < this.datalist.length - 1) {
        this.show(++this.showIndex); 
      } else if (leftSlide < -30 && this.showIndex > 0) {
        this.show(--this.showIndex);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
    .widencontent{
        width: 100% ;
        overflow: hidden;
        background: #fff;
        .widennav{
            /* height: 41.66px; */
            border-bottom: 1px solid #ccc;
            .swiper-slide{
                float: left;
                width: 16.66%;
                height: 41.66px;
                line-height: 41.66px;
                text-align: center;
                font-size: 15px ;
                color: #333;
                position: relative;
                .nav-border{
                    width: 21px;
                    height: 3.5px;
                    display: block;
                    position: absolute;
                    left: 50% ;
                    bottom: 1.3px;
                    margin-left:-11px;
                    z-index: 1000 ;
                }
                .border{
                    background: #3f9ef7 ;
                }
            }
            .nacli{
                font-weight: 700 ;
                font-size: 16px;
            }
        }
        .slider{
            width: 600%;
            .sliderlist{
                width: 16.66%;
                min-height: 580px;
                margin: 18px 0;
                padding: 0 13.5px;
                float: left;
                text-align: center;
                section{
                    height: 106px;
                    padding: 18px 0 ;
                    .fl{
                        width: 70% ;
                        height: 100% ;
                        display: flex ;
                        flex-direction:column;
                        justify-content: space-between ;
                        .info-title{
                            padding-right: 11.5px;
                            text-align: left ;
                            font-size: 15.6px;
                            color: #333;
                        }
                        .bottom{
                            text-align: left ;
                            height: 18px;
                            padding-right: 10px;
                            .left{
                                float: left;
                                
                                span{
                                    color: #999;
                                }
                            }
                            .right{
                                float: right;
                                span{
                                    display: inline-block;
                                    margin: 0 5px;
                                    color: #999;
                                }
                            }
                            
                        }
                    }
                    .fr{
                        width: 30%;
                        height: 100% ;
                        img{
                            width: 100% ;
                            height: 100% ;
                        }
                    }
                }
            }
        }

    }
</style>