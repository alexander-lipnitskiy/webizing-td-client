<template>
    <div>
        <div v-if="!loading && model">
            <h2><a v-bind:href="thingDescriptionURl">{{model.name}}</a></h2>
            <p>Version of TD instance {{model.version.instance}}</p>
            <h3>Description</h3>
            <p>{{model.description}}</p>
            <h3>Security</h3>

            <table class="table table-bordered">
                <thead>
                <tr>
                    <th  scope="col">Type</th>
                    <th scope="col">Security mechanism</th>
                    <th scope="col">Description</th>
                </tr>
                </thead>

                <tbody>
                <tr v-bind:key="key" v-for="(value, key) in model.securityDefinitions">
                    <td>{{key}}</td>
                    <td>{{value.scheme}}</td>
                    <td>{{value.description}}</td>
                </tr>
                </tbody>
            </table>

            <h3>Properties</h3>

            <table class="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Property</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">ReadOnly</th>
                </tr>
                </thead>

                <tbody>

                <tr v-bind:key="key" v-for="(value, key) in model.properties">
                    <td>{{value.title}}</td>
                    <td>{{value.type}}</td>
                    <td>{{value.description}}</td>
                    <td>{{value.readOnly}}</td>
                </tr>

                </tbody>
            </table>

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

                <tr v-bind:key="key" v-for="(value, key) in model.forms">
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
        name: 'AirQuality',
        data () {
            return {
                loading: false,
                model: null,
                error: null
            }
        },
        created () {
            this.fetchData()
        },
        computed: {
            thingDescriptionURl: function () {
                return `${this.model['@context']}${this.model['@type']}`
            }
        },

        methods: {
            async fetchData () {
                this.error = this.model = null;
                this.loading = true;

                const response = await fetch(`http://localhost:3000/td/${this.$route.params.thing}`,  {headers: {'Accept': 'application/json'}});

                this.loading = false;

                if (!response.ok) {
                    this.error = response.statusText;
                } else {
                    this.model = await response.json()
                }
            }
        }
    }
</script>

<style scoped>

</style>