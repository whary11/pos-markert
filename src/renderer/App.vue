<template>
<!-- https://materialdesignicons.com/ -->

  <v-app id="inspire" flat
  prominent>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
      expand-on-hover
    >
        <router-link  tag="a" to="/">
          <v-avatar :color="'black'" :size="30" class="d-block text-center mx-auto mb-9">
              <img
                src="https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/67654490_10218672031367891_7179299875513696256_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFwgr_ovkUKC1ENwdFwR6rFFxEEJMBgIc4XEQQkwGAhzrOAJIteF9NDXvcvVOObqc8&_nc_ohc=LN6Nd0GugA4AX9ErVkB&_nc_ht=scontent.fbog11-1.fna&oh=f3b792890fb0e9828222363e0924cd2f&oe=5FFBEDB9"
                alt="Luis Fernando Raga"
              >
          </v-avatar>
        </router-link>

        <!-- Menú -->
        <template >
          <div v-for="(item, key) in menu" :key="key">
            <router-link  tag="a" :to="item.route">
              <v-container>
                <v-row>
                  <v-col>
                    <v-icon>{{item.icon}}</v-icon>
                  </v-col>
                </v-row>
              </v-container>
            </router-link>
          </div>

        </template>
    </v-navigation-drawer>

    <v-main>
         <v-container fluid>
          <transition name="fade">
            <router-view></router-view>
          </transition>
         </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      drawer:true,
      menu:[
        {
          title: null,
          icon: "mdi-basket",
          route: "/entry-order"
        },
        {
          title: null,
          icon: "mdi-book-open",
          route: "/products"
        },
        
      ]
    }
  }
};
</script>

<style >
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
