<template>
    <div class="center">
        <input type="checkbox" v-model="innerVal">
    </div>
</template>

<script>
    export default {
       model: {
           prop: 'toggleVal',
           event: 'toggle'
       },
       props: {
           toggleVal: {
               type: Boolean,
               required: true
           }
       },
       computed: {
           innerVal: {
                get(){
                    return this.toggleVal
                },
                set(){
                    return this.$emit('toggle', !this.toggleVal)
                }
           }
       },
    }
</script>

<style scoped>
input[type="checkbox"] {
  width: 200px;
  height: 100px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 50px;
  box-shadow: inset 0 0 5px rgba(0,0,0, .2);
  transition: 0.5s;
  position: relative;
}
input:checked[type="checkbox"] {
  background: #02a9f4;
}
input[type="checkbox"]::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 0;
  left: 0;
  background: #fff;
  transform: scale(1.1);
  box-shadow: 0 2px 5px rgba(0,0,0, .2);
  transition: 0.5s;
}
input:checked[type="checkbox"]::before {
  left: 100px;
}
</style>
