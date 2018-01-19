<template>
  <div class="detail-list">
    <div class="11" v-for="(item, index) in data1" :key="index" :class="item.class">
      <img src="http://imge.kugou.com/stdmusic/20160908/20160908135405977910.jpg">
      <p class="list-title">{{item.title}}</p>
      <p class="list-content">{{item.content}}Hes salty because for some reason his team will do some crazy ass stupid shit. That goes for most games in hots, but seeing high ranked games with nearly every game a clown fiesta you begin to sympathize with mewn.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  data () {
    return {
      data1: [
        {title: 'PANAMA', content: '123', class: 'list'},
        {title: 'PANAMA', content: '456', class: 'list2'}
        // {title: 'PANAMA', content: '666', class: 'list'}
      ],
      req: ''
    }
  },
  created () {
  }
}
</script>
<style lang="scss">
.detail-list {
  padding: 0.2rem 8%;
  box-sizing: border-box;
  .list {
    // width: 70%;
    height: 2rem;
    margin-bottom: 0.3rem;
    padding: 0 0.1rem 0 2.5rem;
    position: relative;
    background: #f9f9f9;
    img {
      position: absolute;
      top: -0.2rem;
      left: 0.5rem;
      width: 1.5rem;
      height: 2rem;
      box-shadow: -5px 0 20px #999;
    }
    .list-title {
      font-size: 0.3rem;
      color: #000;
    }
  }
  .list2 {
    // width: 70%;
    height: 2rem;
    margin-bottom: 0.3rem;
    padding: 0 2.5rem 0 0.1rem;
    position: relative;
    background: #f9f9f9;
    img {
      position: absolute;
      top: -0.2rem;
      right: 0.5rem;
      width: 1.5rem;
      height: 2rem;
      box-shadow: 5px 0 20px #999;
    }
    .list-title {
      font-size: 0.3rem;
      color: #000;
    }
  }
}
</style>
