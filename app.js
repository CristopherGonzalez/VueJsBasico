new Vue({
  el:'#app',
  data() {
    return {
      name:'Bitcoin',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent : 100,
      pricesWithDays:[
        {day : "Lunes", value: 8400 },
        {day : "Martes", value: 7400 },
        {day : "Miercoles", value: 8200 },
        {day : "Jueves", value: 7400 },
        {day : "Viernes", value: 9000 },
        {day : "Sabado", value: 8300 },
        {day : "Domingo", value: 8500 }
      ]
    }
  },
});