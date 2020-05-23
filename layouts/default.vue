<template>
  <div>
    <vbm-header />
    <nuxt />
    <vbm-footer />
  </div>
</template>

<script>
import VbmHeader from '@/components/template/Header';
import VbmFooter from '@/components/template/Footer';

export default {
  components: {
    VbmHeader,
    VbmFooter,
  }
}
</script>
