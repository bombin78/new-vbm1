<template>
  <main>
    <vbm-slider />
    <vbm-advantages />
    <vbm-features />
    <vbm-offer />
  </main>
</template>

<script>
import VbmSlider from '@/components/Slider';
import VbmAdvantages from '@/components/Advantages';
import VbmFeatures from '@/components/Features';

export default {
  components: {
    VbmSlider,
    VbmAdvantages,
    VbmFeatures,
  },
}
</script>
