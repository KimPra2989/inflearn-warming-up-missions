const en = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

const ko =  [
    "노말",
    "불꽃",
    "물",
    "전기",
    "풀",
    "얼음",
    "격투",
    "독",
    "땅",
    "비행",
    "에스퍼",
    "벌레",
    "바위",
    "고스트",
    "드래곤",
    "악",
    "강철",
    "페어리"
]  

const result = {}
Object.keys(en).forEach((x,i) => {
    result[x] = ko[i]
})
console.log(result)