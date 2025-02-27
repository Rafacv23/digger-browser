const enginePreferences = [
  {
    name: "Duck Duck Go",
    value: "duckduckgo",
  },
  {
    name: "Google",
    value: "google",
  },
]

export function SearchEngine() {
  return (
    <div className="grid">
      <h2>Pick your search engine</h2>
      {enginePreferences.map((engine) => (
        <div key={engine.value}>
          <input type="radio" id={engine.value} name="e" value={engine.value} />
          <label htmlFor={engine.value}>{engine.name}</label>
        </div>
      ))}
    </div>
  )
}

const typePreferences = [
  {
    name: "Fast",
    value: "fast",
    defaultChecked: true,
  },
  {
    name: "Accurate",
    value: "accurate",
  },
  {
    name: "Detailed",
    value: "detailed",
  },
]

export function SearchType() {
  return (
    <div className="grid">
      <h2>Set your search preferences</h2>
      <div className="flex justify-between">
        {typePreferences.map((type) => (
          <div
            key={type.value}
            className="px-4 py-2 rounded flex gap-2 border accent-blue-400"
          >
            <input
              type="radio"
              id={type.value}
              name="t"
              value={type.value}
              defaultChecked={type.defaultChecked}
            />
            <label htmlFor={type.value}>{type.name}</label>
          </div>
        ))}
      </div>
    </div>
  )
}
