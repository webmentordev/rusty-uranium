<template>
    <section class="w-full bg-center bg-cover min-h-screen relative" style="background-image: url('/background.webp');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10 max-w-3xl m-auto pt-[140px] px-4">
            <h1 class="text-6xl text-white text-center 510px:text-4xl">Servers Wipe Schedule</h1>
            <p class="text-white/80 text-center">Our Servers Map and BP Wipe Schedule</p>
            <div class="flex flex-col p-8 rounded-lg mt-6 bg-dark relative w-full">
                <p class="text-white/90">Here is the complete schedule or Map and BP (Blueprint) wipes. The monthly forced wipe schedule aligns with the <span class="text-main">Coordinated Universal Time</span> zone for the timing of blueprint wipes.</p>
                <div class="p-3 bg-dark-100 mt-3 rounded-lg mb-3">
                    <h2 class="text-2xl text-main mb-2">MAP Wipe Schedule</h2>
                    <p class="text-white p-3 bg-dark rounded-md"><span class="text-main font-semibold">6 PM UTC </span> — Every Thursday - Weekly</p>
                </div>
                <div class="p-3 bg-dark-100 mt-3 rounded-lg mb-3">
                    <h2 class="text-2xl text-main mb-2">Blueprints Wipe Schedule</h2>
                    <p class="text-white p-3 bg-dark rounded-md"><span class="text-main font-semibold">Force Wipe</span> - Every first Thursday of month</p>
                </div>
                <div class="p-3 bg-dark-100 mt-3 rounded-lg mb-3">
                    <h2 class="text-2xl text-main mb-2">RP Wipe Schedule</h2>
                    <p class="text-white p-3 bg-dark rounded-md"><span class="text-main font-semibold">{{ wipe }}</span> — Every 2 Months</p>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
    useSeoMeta({
        title: "Wipe Schedule — Rusty Uranium",
        ogTitle: 'Wipe Schedule — Rusty Uranium',
        description: 'Welcome to Rusty Uranium official website. Get all Exile servers connection information here.',
        ogDescription: 'Welcome to Rusty Uranium official website. Get all Exile servers connection information here.',
        ogImage: 'https://cdn.discordapp.com/attachments/1056300434018533407/1159794390961750036/rusty_meta-Image.webp',
        twitterCard: 'summary_large_image',
    });
    const wipe = ref("");
    let { data, pending } = await useFetch('/api/wipe');
    wipe.value = data.value[0].rp_wipe;
</script>