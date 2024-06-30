function SectionDisplay({ name, children }) {
  return (
    <div>
      <h2 className="mb-2 text-lg">{name}</h2>
      <div className="space-x-4">
        {children}
      </div>
    </div>
  )
}

export default SectionDisplay
