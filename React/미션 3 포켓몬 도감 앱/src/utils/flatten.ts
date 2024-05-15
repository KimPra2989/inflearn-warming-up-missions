interface Data {
    pages: {results: {name: string}[]}[]
}

function flatten(data : Data) {
    if (!data) return 

    const result = data.pages.reduce<string[]>((acc, {results}) => {
        const nameArr = results.map((item) => item.name)
        return [...acc, ...nameArr]
      }, [])
    return result
}

export default flatten