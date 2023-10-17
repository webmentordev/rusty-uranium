import PocketBase from 'pocketbase';
export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.api);
    let array = await pb.collection('configurations').getFullList();
    let elite = await pb.collection('elites').getFullList();
    return { array, elite };
})