<template>
    <img :src="logo" class="f-logo" :alt="title"/>
</template>

<script>
export default {
    components: {},
     computed: {
        logo() {
            return require(`~/assets/logos/${this.image}`);
        }
    },
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