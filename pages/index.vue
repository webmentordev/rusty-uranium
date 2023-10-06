<template>
    <section class="w-full bg-center bg-cover min-h-screen relative flex items-center justify-center" style="background-image: url('/background.webp');">
        <div class="absolute top-0 left-0 h-full w-full bg-dark/60 backdrop-blur-sm"></div>
        <div class="relative z-10 px-4">
            <img src="/uranium.png" class="m-auto mb-6 max-w-[200px] 480px:max-w-[150px]" alt="Exile Logo">
            <img src="/rusty_text_logo.png" class="max-w-[500px] mb-6" alt="RustyUranium Text Logo">
            <ul class="m-auto flex items-center justify-center">
                <NuxtLink class="mr-2 py-3 rounded hover:text-white hover:bg-dark transition-all px-6 bg-main link text-dark text-xl inline-block" to="steam://connect/188.244.117.121:28015"><Icon name="bi:steam" class="text-2xl mr-1" /> Connect</NuxtLink>
                <NuxtLink class="mr-2 py-3 rounded hover:text-white hover:bg-dark transition-all px-6 bg-main link text-dark text-xl inline-block" to="https://discord.gg/53dcrqWP8C" target="_blank"><Icon name="fa6-brands:discord" class="text-2xl mr-1" /> Discord</NuxtLink>
            </ul>
        </div>
        <div class="bottom-3 right-3 absolute z-20">
            <div class="flex items-center">
                <h4 class="text-white mr-3 text-2xl link">Read More</h4>
                <div class="rounded-full bg-main p-2">
                    <img src="https://api.iconify.design/ic:outline-keyboard-double-arrow-down.svg" alt="Arrow Down" width="30">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    useSeoMeta({
        title: "Rusty Uranium — Official Website",
        ogTitle: 'Rusty Uranium Server',
        description: 'Welcome to Rusty Uranium official website. Get all Exile servers connection information here.',
        ogDescription: 'Welcome to Rusty Uranium official website. Get all Exile servers connection information here.',
        ogImage: 'https://cdn.discordapp.com/attachments/1056300434018533407/1159794390961750036/rusty_meta-Image.webp',
        twitterCard: 'summary_large_image',
    });
</script>