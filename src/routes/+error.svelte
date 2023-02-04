<script>
    import { page } from '$app/stores'
    import Divider from '$lib/components/Divider.svelte'
    import { afterNavigate, beforeNavigate, goto } from '$app/navigation'

    const goSomeWhere = () => {
        goto('/')
    }
</script>

<div class="justify-center">
    <Divider size="small" />
    <center class="m-auto">        
        <div class=" tracking-widest mt-4">
            <span class="text-gray-500 text-5xl tracking-widest emoji-404">{$page.status}</span>
            <div class="text-gray-300 text-xl mt-4 tracking-normal">
                Sorry, We couldn't find what you are looking for!
            </div>
        </div>
    </center>
    <center class="mt-6">
        <button
            on:click={goSomeWhere}
            class="text-gray-400 text-base p-2 rounded-md hover:bg-slate-500 hover:text-gray-300"
            >Go back</button>
    </center>
    <Divider size="small" />
</div>

<style>
    .emoji-404 {
        position: relative;
        animation: mymove 2.5s infinite;
    }

    @keyframes mymove {
        33% {
            top: 0px;
        }
        66% {
            top: 10px;
        }
        100% {
            top: 0px;
        }
    }
</style>
