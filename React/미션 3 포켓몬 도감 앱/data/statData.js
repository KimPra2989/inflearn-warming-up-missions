const stats = {
  count: 8,
  next: null,
  previous: null,
  results: [
    {
      name: 'hp',
      url: 'https://pokeapi.co/api/v2/stat/1/',
    },
    {
      name: 'attack',
      url: 'https://pokeapi.co/api/v2/stat/2/',
    },
    {
      name: 'defense',
      url: 'https://pokeapi.co/api/v2/stat/3/',
    },
    {
      name: 'special-attack',
      url: 'https://pokeapi.co/api/v2/stat/4/',
    },
    {
      name: 'special-defense',
      url: 'https://pokeapi.co/api/v2/stat/5/',
    },
    {
      name: 'speed',
      url: 'https://pokeapi.co/api/v2/stat/6/',
    },
    {
      name: 'accuracy',
      url: 'https://pokeapi.co/api/v2/stat/7/',
    },
    {
      name: 'evasion',
      url: 'https://pokeapi.co/api/v2/stat/8/',
    },
  ],
}
console.log(stats.results.map((item) => item.name))
