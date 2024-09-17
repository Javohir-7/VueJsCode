<script setup>
import About from '@/components/About.vue';
import Contact from '@/components/Contact.vue';
import Users from '@/components/Users.vue';
import { ref, computed } from 'vue'

const rout = {
    '/users': Users,
    '/about': About,
    '/contact': Contact
}
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return rout[currentPath.value.slice(1) || '/']
})
const actLink = [
    {href: '#/users', content: 'Users'},
    {href: '#/about', content: 'About'},
    {href: '#/contact', content: 'Contact'}
]
let contentText = ref(null);
let st = ref(true)
const linkActive = (context) => {
  contentText.value = context;
  st.value = false;
};
</script>
<template>
    <header>
        <nav class="w-full h-[70px] flex items-center px-4 shadow-[0_2px_5px_black] fixed z-[1] bg-[#181818]">
            <menu id="menu" class="flex gap-5">
                <a v-for="item in actLink" :key="item.content" :href="item.href" class="rounded-md px-2" :class="{'text-[#ebebeba3] bg-transparent' : contentText === item.content}" @click="linkActive(item.content)">{{ item.content }}</a>
            </menu>
        </nav>
    </header>
    <main class=" mt-[80px] px-2">
        <div v-if="st">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem laudantium quaerat error. Laborum, eum quae. Pariatur natus, illo doloribus sed facere exercitationem deserunt quisquam dicta ex. Libero harum aut et!
        At quos quibusdam aliquid nisi, harum nesciunt odit porro voluptas excepturi consequuntur delectus quo dolor hic officia laudantium dolorum sed ratione exercitationem, id adipisci error! Reiciendis hic iure eum fugit.
        Eum, ea. Ipsa excepturi recusandae neque doloremque et quisquam eaque, sed assumenda pariatur sit iure expedita debitis numquam quod repudiandae harum earum maxime magni. Minima ipsum reiciendis expedita recusandae et.</div>
        <component :is="currentView" />
    </main>
</template>
<style scoped>

</style>