<template>
  <div>
    <div class="flex flex-col gap-y-5 bg-white p-10 h-full">
      <div class="flex gap-5">
        <div>
          <div class="text-2xl bg-cont-dim p-2 rounded-xl">
            <IconTicket />
          </div>
        </div>
        <div>
          <h2>ارسال تیکت</h2>
          <p class="mt-5">مشکات خود را با ما در میان بگذارید</p>
        </div>
      </div>
      <form @submit.prevent class="flex flex-col gap-5">
        <input type="text" name="name" placeholder="نام" />
        <input type="tel" name="phone" placeholder="شماره تماس" />
        <input type="text" name="title" placeholder="عنوان پیام" />
        <textarea placeholder="متن پیام"></textarea>
        <div>
          <TheButton type="submit" size="lg">ارسال</TheButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HomeSectionWrapper from '@/components/Home/Section/index.vue'
import IconTicket from '@/components/Icons/Ticket/index.vue'
import TheButton from '@/components/uikit/TheButton/index.vue'

export default {
  name: 'ContactTicketSection',
  components: { TheButton, IconTicket, HomeSectionWrapper }
}
</script>

<style scoped>
input,
textarea {
  @apply border rounded-xl py-3.5 px-2;
  direction: rtl;
}

textarea {
  height: 125px;
  resize: none;
}
</style>
