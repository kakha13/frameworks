<template>
    <img :src="image" class="f-logo" :alt="title"/>
</template>

<script>
export default {
    components: {},
    props: {
        image: {
        type: String,
        default: ''
        },
        title: {
        type: String,
        default: 'Logo'
        }
    }

}
</script>

<style scoped>
.f-logo {
    height: 32px;
    min-width: 32px;
}
</style>