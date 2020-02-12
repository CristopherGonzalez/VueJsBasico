new Vue({
  el:'#app',
  data() {
    return {
      name:'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent : -1,
      pricesWithDays:[
        {day : "Lunes", value: 8400 },
        {day : "Martes", value: 7400 },
        {day : "Miercoles", value: 8500 },
        {day : "Jueves", value: 7900 },
        {day : "Viernes", value: 9000 },
        {day : "Sabado", value: 8000 },
        {day : "Domingo", value: 9600 }
      ],
      showPrices : false,
      actualPrice : 8500,
      color: 'f4f4f4'
    }
  },
  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices;
      this.color = this.color.split('').reverse().join('');
    }
  },
});