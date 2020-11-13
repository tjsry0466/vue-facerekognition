import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home.vue";
import FaceListView from "@/views/FaceListView.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: '/face',
      name: "Face",
      component: FaceListView,
    }
  ]
})
