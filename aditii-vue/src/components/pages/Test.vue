<template>
    <section class="test">
        <c-input v-model="search"/>
        <ul>
            <li v-for="company in companies" :key="companies[company]">{{ company }}</li>
        </ul>
        <c-toggle v-model="saved"/>
        <c-checkbox :firstCheck.sync="first" :secondCheck.sync="second"/>
    </section>
</template>

<script>
import CInput from '../CInput.vue'
import CToggle from '../CToggle.vue'
import CCheckbox from '../CCheckbox.vue'

export default {
    components: {
        CInput,
        CToggle,
        CCheckbox
    },
    data() {
        return {
            search: 'a',
            saved: false,
            first: false,
            second: true,
            companies: [
                'Mate Academy',
                'Cicklum',
                'EPAM',
                'DataArt',
                'LuckyLabs',
                'Google',
                'Amazon'
            ]
        }
    },
    computed: {
        filteredCompanies(){
            return this.companies.filter(comp => comp.toLoverCase().include(this.search.toLoverCase()))
        }
    }
}
</script>

<style scoped>
section.test {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>
