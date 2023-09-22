<template>
  <f7-page class="page-home bg-color-white" no-navbar>
    <empty-block />
  </f7-page>
</template>
<script>
import { f7Page } from 'framework7-vue';
import EmptyBlock from '../components/empty-block.vue';

export default {
  components: {
    f7Page,
    EmptyBlock,
  },
};
</script>
