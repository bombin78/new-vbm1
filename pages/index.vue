<template>
  <div>
    <vbm-slider />
    <vbm-advantages />
    <vbm-about-us />
    <vbm-offer />
    <vbm-features />
    <vbm-services />
    <vbm-team />
    <vbm-achievments />
    <vbm-testimonial />
    <vbm-featured-works />
    <vbm-latest-blog />
    <vbm-partners />
  </div>
</template>

<script>
import VbmSlider from '@/components/Slider';
import VbmAdvantages from '@/components/Advantages';
import VbmAboutUs from '@/components/AboutUs';
import VbmOffer from '@/components/Offer';
import VbmFeatures from '@/components/Features';
import VbmServices from '@/components/Services';
import VbmTeam from '@/components/Team';
import VbmAchievments from '@/components/Achievments';
import VbmTestimonial from '@/components/Testimonial';
import VbmFeaturedWorks from '@/components/FeaturedWorks';
import VbmLatestBlog from '@/components/LatestBlog';
import VbmPartners from '@/components/Partners';

export default {
  components: {
    VbmSlider,
    VbmAdvantages,
    VbmAboutUs,
    VbmOffer,
    VbmFeatures,
    VbmServices,
    VbmTeam,
    VbmAchievments,
    VbmTestimonial,
    VbmFeaturedWorks,
    VbmLatestBlog,
    VbmPartners,
  },
}
</script>
