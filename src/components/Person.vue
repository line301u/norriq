<template>
  <div class="flex flex-col bg-white shadow-md shadow-slate-200 border rounded border-slate-200">
    <h2 class="p-3 border-b border-slate-200">{{person.name}}</h2>
    <div class="p-3 flex flex-col gap-1">
      <div class="flex justify-between">
        <h3>Mass</h3>
        <p>{{person.mass}}</p>
      </div>
      <div class="flex justify-between">
        <h3>Hair Color</h3>
        <p>{{person.hair_color}}</p>
      </div>
      <div class="flex justify-between">
        <h3>Skin color</h3>
        <p>{{person.skin_color}}</p>
      </div>
      <div class="flex justify-between">
        <h3>Eye color</h3>
        <p>{{person.eye_color}}</p>
      </div>
      <div class="flex justify-between">
        <h3>Birth year</h3>
        <p>{{person.birth_year}}</p>
      </div>
      <div class="flex justify-between">
        <h3>Gender</h3>
        <p>{{person.gender}}</p>
      </div>
      <div class="flex justify-between">
        <h3>Number of movies</h3>
        <p>{{person.films.length}}</p>
      </div>
      <div class="flex justify-between">
        <h3>Number of startships</h3>
        <p>{{person.starships.length}}</p>
      </div>
      <div class="flex justify-between">
        <h3>Number of vehicles</h3>
        <p>{{person.vehicles.length}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: Object
  }
}

</script>