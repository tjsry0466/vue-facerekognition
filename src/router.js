import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/views/Home.vue";
import FaceListView from "@/views/FaceListView.vue";
import FaceDetailView from "@/views/FaceDetailView.vue";

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    // {
    //   path: '*', redirect: '/'
    // },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: '/face',
      name: "Face",
      component: FaceListView,
    },
    {
      path: '/face/:id',
      name: "FaceDetail",
      component: FaceDetailView,
    }
  ],
  

})
