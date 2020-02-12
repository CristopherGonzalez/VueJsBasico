Vue.component('CoinDetail', {
  data() {
    return {
      showPrices: false,
      value: 0
    }
  },
  props:
    ['coin']
  ,
  computed: {
    convertedValue() {
      if (!this.value) return 0
      return this.value / this.coin.actualPrice
    },
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`
    }
  },
  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit('change-color', this.showPrices?'ffff00':'f4f4f4');
    }
  },
  template: `
  <div>
    <h1 v-bind:class="showPrices? 'red' : 'green'">{{ title }}</h1>
    <img v-bind:src="coin.img" v-bind:alt="coin.name" v-on:mouseover="toggleShowPrices" v-on:mouseout="toggleShowPrices">
    <span v-if="coin.changePercent>0">
      Mayor a 0
    </span>
    <span v-else-if="coin.changePercent<0">
      Menor a 0
    </span>
    <span v-else>
      Es 0
    </span>
    
    <p v-on:click="toggleShowPrices">
      {{ showPrices ? 'Ocultar' : 'Ver'}} Lista
    </p>
    <input type="number" v-model="value">
    {{convertedValue}}
    <ul v-show="showPrices">
    <li
    class="uppercase"
    v-bind:class="{orange: p.value==coin.actualPrice, red:p.value < coin.actualPrice, green:p.value>coin.actualPrice}"
    v-for="(p, i) in coin.pricesWithDays" 
    :key="p.day">
      {{i+1}} {{p.day}} - {{p.value}}
    </li>
  </ul>
  </div>
  `
})



new Vue({
  el: '#app',
  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: -1,
        pricesWithDays: [
          { day: "Lunes", value: 8400 },
          { day: "Martes", value: 7400 },
          { day: "Miercoles", value: 8500 },
          { day: "Jueves", value: 7900 },
          { day: "Viernes", value: 9000 },
          { day: "Sabado", value: 8000 },
          { day: "Domingo", value: 9600 }
        ],
        actualPrice: 8500,
      },
      color: 'f4f4f4'
    }
  }, 
  methods:{
    updateColor(color){
      this.color = color || this.color.split('').reverse().join('');
    }
  }
})
