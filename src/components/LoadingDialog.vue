<template>
    <v-dialog 
        v-model="$store.state.loading" 
        persistent 
        content 
        content-class="text-center">
        <v-container fill-height>
            <v-layout align-center justify-center style="display: block">
                <v-progress-circular
                    indeterminate
                    size="128"
                    width="8">
                </v-progress-circular>
            </v-layout>
        </v-container>
    </v-dialog>
</template>