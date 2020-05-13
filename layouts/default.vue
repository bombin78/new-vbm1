<template>
  <div>
    <vbm-top-header-area />
    <vbm-header-area />
    <nuxt />
    <vbm-footer-area />
  </div>
</template>

<script>
import VbmTopHeader from '@/components/template/TopHeader';
import VbmHeader from '@/components/template/Header';
import VbmFooter from '@/components/template/Footer';

export default {
  componenets: {
    VbmTopHeaderArea,
    VbmHeaderArea,
    VbmFooterArea,
  }
}
</script>
