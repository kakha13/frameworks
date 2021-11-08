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