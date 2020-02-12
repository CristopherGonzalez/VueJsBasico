new Vue({
  el: '#app',
  
  data () {
    return {
      courses: [],
      title: "",
      time: 0,
    }
  },
  computed: {
    totalTime(){
      total=0;
      for (const course of this.courses) {
        total+=parseInt(course.time);
      }
      if(total==0) return 0;
      return total;
    }
  },
  methods: {
    addCourse(){
      this.courses.push({"title": this.title, "time" : this.time});
    }
  }
})