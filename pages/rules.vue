<template>
    <section class="w-full">
        <div class="w-full bg-center bg-cover min-h-[300px] relative" style="background-image: url('/background.webp');">
            <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
            <div class="relative z-10 max-w-3xl m-auto pt-[140px] px-4">
                <h1 class="text-5xl text-white text-center">SERVER RULES</h1>
            </div>
        </div>
        <div class="w-full">
            <div class="relative z-10 max-w-3xl m-auto px-4">
                <div class="mt-5 mb-5 p-6 rounded-lg bg-dark text-white/90">
                    <p class="mb-6">Compliance with the mentioned rules is imperative, and it is crucial to be aware that some offenses cannot be appealed. Therefore, it is important to exercise caution and attentiveness to ensure adherence to the rules.</p>
                    <ul class="rules" v-if="rules.length">
                        <li v-for="(rule, index) in rules">{{ rule.rule }} <span v-if="rule.duration" class="text-main font-semibold">({{ rule.duration }})</span></li>
                    </ul>
                    <p v-else class="text-center py-12 px-3">Loading...</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: "Rules — Rusty Uranium",
        ogTitle: 'Rules — Rusty Uranium',
        description: 'Carefully read the rules of Rusty Uranium servers. Make sure to follow our rules otherwise you will be banned.',
        ogDescription: 'Carefully read the rules of Rusty Uranium servers. Make sure to follow our rules otherwise you will be banned.',
        ogImage: 'https://cdn.discordapp.com/attachments/1056300434018533407/1159794390961750036/rusty_meta-Image.webp',
        twitterCard: 'summary_large_image',
    });

    const rules = ref([]);
    const nuxtApp = useNuxtApp();
    onMounted(async () => {
        let array = await nuxtApp.$pb.collection('rules').getFullList();
        rules.value = array;
    })

    onUnmounted(async () => {
        await nuxtApp.$pb.collection('rules').unsubscribe('*');
    })
</script>