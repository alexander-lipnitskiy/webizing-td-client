<template>
    <div></div>
</template>

<script>
    export default {
        name: "ThingProperties",
        data() {
            return {
                property: null,
                error: null,
                loading: false
            };
        },
        created() {
            this.property = this.getPropertyDetailsOfSensor(this.$route.params.thing, this.$route.params.name)
        },
    }
</script>

<style scoped>

</style>