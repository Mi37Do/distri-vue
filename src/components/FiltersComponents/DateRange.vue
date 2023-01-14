<template>
    <v-date-picker v-model="range" is-range>
    <template v-slot="{ inputValue, inputEvents }">
        <div class="flex justify-center items-center">
            <div class="w-full flex flex-col gap-2">
             <label for="dateDebut" class="capitalize text-sm font-medium">Date début</label>
            <input
            id="dateDebut"
            :value="inputValue.start"
            v-on="inputEvents.start"
            color="orange"
            class="input  input-bordered rounded-lg border px-2 py-1 w-full focus:outline-none focus:border-indigo-300"
            />   
            </div>
            
            <svg
                class="w-4 h-4 mx-2 mt-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
            </svg>

            <div class="w-full flex flex-col gap-2">
                <label for="dateFin" class="capitalize text-sm font-medium">date fin</label>
                <input
                    id="dateFin"
                    :value="inputValue.end"
                    v-on="inputEvents.end"
                    class="input  input-bordered border px-2 py-1 w-full rounded-lg focus:outline-none focus:border-indigo-300"
                />
            </div>
        
        </div>
    </template>
    </v-date-picker>
</template>

<script>
export default {

}
</script>

<style>

</style>