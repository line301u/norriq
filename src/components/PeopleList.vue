<template>
  <div class="flex max-w-xl self-end items-center gap-5">
    <Dropdown v-model="filter.selectedGender" :options="filter.genderOptions" optionLabel="name" placeholder="Select a Gender" class="w-full md:w-14rem border border-slate-300" />
    <div class="flex align-items-center">
        <Checkbox v-model="filter.filterByAgeRange" :binary="true" name="ageRange" inputId="ageRange" pt:box:class="border border-slate-300"/>
        <label for="ageRange" class="ml-2 whitespace-nowrap text-sm font-normal text-slate-800">Show age range 20 to 40 BBY</label>
    </div>
  </div>
  <Divider type="solid" class="border m-0 border-slate-200"/>
  <div class="CardList grid grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-5">
    <Person v-for="person in filteredPeople" :key="person.name" :person="person" />
  </div>
</template>

<script>
import { toRaw } from 'vue';
import Person from './Person.vue'

export default {
  components: {
    Person,
  },
  data(){
    return {
      people: [],
      filter: {
        filterByAgeRange: false, 
        selectedGender: {},
        genderOptions: [
          { name: 'All genders', id: 'all' },
          { name: 'Male', id: 'male' },
          { name: 'Female', id: 'female' }
        ],
      }
    }
  }, 

  mounted(){
    this.fetchData();
    this.filter.selectedGender = this.filter.genderOptions[0]
  },

  methods: {
    fetchData() {
      fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => this.people = toRaw(data.results));
    },
  },
  computed: {
    filteredPeople(){
      let filteredPeople = this.people;

      if (this.filter.selectedGender.id && this.filter.selectedGender.id !== 'all') {
        filteredPeople = filteredPeople.filter((obj) => obj.gender === this.filter.selectedGender.id)
      }

      if (this.filter.filterByAgeRange) {
        filteredPeople = filteredPeople.filter((obj) => {
          const numericBirthDate = Number(obj.birth_year.replace(/BBY/g, ""));
          return numericBirthDate > 20 && numericBirthDate < 40;
      });
      }

      return filteredPeople;
    },
  }
}

</script>


<style scoped>
/* SCSS here */
</style>
