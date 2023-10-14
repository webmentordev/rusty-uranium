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

    <section class="w-full bg-dark py-12 px-4">
        <h2 class="text-white text-center mb-4 text-5xl">Our Server Configuration</h2>
        <p class="text-center text-white mb-3">Here is the configuration that we use for our server. <br> Feel free to read all. It may come handy</p>
        <p class="text-center text-3xl link text-white">Under development!</p>
        <!-- <div class="max-w-2xl m-autopx-4 text-white m-auto config">
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Automatic Team Authorization on TC and Traps</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">SAMSites ignore Owner and Teamates</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Always Daytime with clear weather in Game. Without Harsh Sun Glare</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Monuments CCTV Automatically added when CCTVTable is placed </p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Backpacks for extra storage with 4 rows default (drop on death) <code>/backpack</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Exclusive Kits Free and Rank kits <code>/kit</code> </p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Personal Mining Quarry Kit for all players for free</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Extra Bradley Spawn at Airfield</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Building Grades for everyone <code>/bgarde 1-4</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Blueprints never wipe even on force wipe</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Workbenches have range equal to the TC range of your base (TC required)</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Half crafting time for all items. No limitations on crafting</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Large Ring Road Convoy event with NPCs and Attack Helicopter</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Quick AirDrops for players or random server spawns</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Furnace Splitter for all players. Auto divide items in furnace</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Guns / items in all crates spawn with full health</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Instant Buy from vending machines without Out Of Stock</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Persoanl Minicopter (no decay) <code>/mymini</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Recyclers are the monuments</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">2 Home saves for all <code>/home add name</code> <code>/home name</code> <code>/home remove name</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Home commands<code>/home add name</code> <code>/home name</code> <code>/home remove name</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Teleportation to The Merged Outpost / Bandit <code>/outpost</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Teleportation to a player (20 daily limit) <code>/tpr player_name</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">All Teleportations with 30 seconds countdown</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Instant Untie items / boxes under water</p>
        </div> -->
    </section>


    <!-- <section class="w-full bg-dark py-12 px-4">
        <h2 class="text-main text-center mb-4 text-5xl">Elite Rank Abilities</h2>
        <p class="text-center text-white mb-3">Here is the list of abilities available for the <br> Elite ranked players. Your donations are highly appriciated</p>
        <div class="max-w-2xl m-autopx-4 text-white m-auto config">
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Backpack with 7 Rows. Default 4</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Teleportation with 3 Home Saves</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">15 Seconds Teleport Countdown</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">2 Minutes Teleportation Cooldown</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">30 Daily TPR to Player limit</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Bypass Queue</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Instant Mixing Table</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Quick Items Sorting Menu</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Personal Minicopter fetch and destory <code>/fmini</code><code>/nomini</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Building Grade Access to all 4 <code>/bgarde 1-4</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Exclusive Kit with weapons and components</p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Sign Artist Access to set images on frames or board <code>/sil url</code></p>
            <p class="p-3 py-4 rounded-lg bg-dark-100 mb-4">Personal Attack Helicopter Call <code>/callheli</code></p>
        </div>
    </section> -->
    
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