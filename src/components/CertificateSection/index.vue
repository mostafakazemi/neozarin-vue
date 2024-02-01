<template>
  <HomeSectionWrapper>
    <div class="flex justify-center gap-x-10">
      <div>
        <img src="@/assets/images/enamad.png" alt="اینماد" />
      </div>
      <div>
        <img src="@/assets/images/samandehi.png" alt="ساماندهی" />
      </div>
    </div>
  </HomeSectionWrapper>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'

export default {
  name: 'CertificateSection',
  components: { HomeSectionWrapper }
}
</script>
