<template>
  <li> {{ someProp }} </li>
</template>

<script>
export default {
  name: 'list-item',
  props: ['someProp'],
}
</script>