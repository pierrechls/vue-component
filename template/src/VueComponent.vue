<template>
  <div class="vue-component-container">
    <pre class="vue-js">
      <span class="blue bold">&lt;template&gt;</span>
          <span class="blue">&lt;<span class="green">vue-component</span> :options="{}"&gt;&lt;/<span class="green">vue-component</span>&gt;</span>
      <span class="blue bold">&lt;template&gt;</span>

      <span class="blue bold">&lt;script&gt;</span>
          <span class="blue bold">import</span> <span class="green">VueComponent</span> <span class="blue bold">from</span> '<span class="green">vue-component</span>'
          <span class="blue bold">export default</span> {
              components: {
                  '<span class="green">vue-component</span>': <span class="green">VueComponent</span>
              }
          }
      <span class="blue bold">&lt;/script&gt;</span></pre>
  </div>
</template>

<script>

    export default {
        components: {},
        props: {},
        data () {
            return {}
        },
        methods: {},
        mounted () {
          console.log('Ready..!');
        }
    }

</script>

<style lang="scss" scoped>

  pre.vue-js {
     background: none;
     color: #35495e;
     padding: 1px 1px;
     font-size: 12px;
     tab-size: 2;

     span {
       font-weight: 500;

       &.bold {
         font-weight: 700;
       }

       &.blue {
         color: #35495e;
       }

       &.green {
         color: #41b883;
       }
     }

  }

</style>
