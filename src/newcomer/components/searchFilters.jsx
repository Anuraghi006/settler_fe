import { Checkbox, Label, Select, TextInput } from 'flowbite-react'

function SearchFilters({ filters, categories, onChange }) {
  return (
    <div className="grid gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 md:grid-cols-4">
      <div className="md:col-span-2">
        <Label htmlFor="search" value="Search" className="text-slate-300" />
        <TextInput
          id="search"
          placeholder="Hospitals, plumbers, supermarkets..."
          value={filters.query}
          onChange={(e) => onChange({ query: e.target.value })}
        />
      </div>

      <div>
        <Label htmlFor="category" value="Category" className="text-slate-300" />
        <Select id="category" value={filters.category} onChange={(e) => onChange({ category: e.target.value })}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </Select>
      </div>

      <div>
        <Label htmlFor="sort" value="Sort by" className="text-slate-300" />
        <Select id="sort" value={filters.sort} onChange={(e) => onChange({ sort: e.target.value })}>
          <option value="distance">Nearest first</option>
          <option value="rating">Highest rated</option>
        </Select>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-300 md:col-span-4">
        <Checkbox checked={filters.openOnly} onChange={(e) => onChange({ openOnly: e.target.checked })} />
        Show only places open now
      </label>
    </div>
  )
}

export default SearchFilters