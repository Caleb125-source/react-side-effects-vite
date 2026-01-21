// Step 1: Accept `joke` and `loading` as props

const JokeDisplay = ({ joke, loading, error}) => {
  return (
    <div className="joke-container">
      {/* Step 2: If `loading` is true, display "Loading..." */}
      {loading && <p>Loading...</p>}
      {/* Step 3: Otherwise, display the joke */}
      {!loading && !error && <p>{joke}</p>}
      {/* Step 4: Display error message if any */}
      {error && <p className="error">{error}</p>}
    </div>
  )
}

export default JokeDisplay
