<template>
    <div>
        <div v-if="!loading && property">
            <h2><a v-bind:href="thingDescriptionPropertyURL">{{property.title}}</a></h2>
            <h3>Property details</h3>
            <p>{{property.description}}</p>


            <p><b>Type:</b> {{property.type}}</p>
            <p><b>Read only:</b> {{property.readOnly}}</p>
            <p><b>Observable:</b> {{property.observable}}</p>
            <p><b>Write only:</b> {{property.writeOnly}}</p>


            <h3>Forms</h3>

            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>URL</th>
                    <th scope="col">Content Type</th>
                    <th scope="col">Operations</th>
                    <th scope="col">Access</th>
                </tr>
                </thead>

                <tbody>
                <tr v-bind:key="key" v-for="(value, key) in property.forms">
                    <td>{{value.href}}</td>
                    <td>{{value.contentType}}</td>
                    <td>{{value.op.join()}}</td>
                    <td>{{value.secure}}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div v-else class="text-center">
            <div class="spinner-grow text-primary" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ThingPropertyDetails",
        created() {
            this.fetchData()
        },
        data() {
            return {
                property: null,
                context: "https://schema.iot.webizing.org/",
                error: null,
                loading: false
            }
        },
        computed: {
            thingDescriptionPropertyURL: function () {
                return `${this.context}${this.property['@type']}`
            }
        },
        methods: {
            async fetchData() {
                this.error = this.model = null;
                this.loading = true;

                const response = await fetch(`http://localhost:3000/td/${this.$route.params.thing}/${this.$route.params.name}`, {headers: {'Accept': 'application/json'}});

                this.loading = false;

                if (!response.ok) {
                    this.error = response.statusText;
                } else {
                    this.property = await response.json()
                }
            },
        }
    }
</script>

<style scoped>

</style>