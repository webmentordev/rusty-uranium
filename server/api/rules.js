import PocketBase from 'pocketbase';
export default defineEventHandler(async () => {
    const config = useRuntimeConfig();
    const pb = new PocketBase(config.public.api);
    let array = await pb.collection('rules').getFullList();
    return array;
})