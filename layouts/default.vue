<template>
  <div>
    <vbm-top-header />
    <vbm-header />
    <nuxt />
    <vbm-footer />
  </div>
</template>

<script>
import VbmTopHeader from '@/components/template/TopHeader';
import VbmHeader from '@/components/template/Header';
import VbmFooter from '@/components/template/Footer';

export default {
  components: {
    VbmTopHeader,
    VbmHeader,
    VbmFooter,
  }
}
</script>
