import { useState } from 'react'
import './App.css'

function App() {
  // Campi controllati
  const [fullName, setFullName] = useState('Tiana')
  const [username, setUsername] = useState('tiana_dev')
  const [password, setPassword] = useState('12345678')
  const [specialization, setSpecialization] = useState('Full Stack Developer')
  const [experienceYears, setExperienceYears] = useState('3')
  const [description, setDescription] = useState(
    'Sono una giovane sviluppatrice con 3 anni di esperienza nel settore.',
  )

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !description.trim()
    ) {
      alert('Errore: compilare tutti i campi correttamente.')
      return
    }

    console.log('Submit effettuato:', {
      fullName,
      username,
      password,
      specialization,
      experienceYears,
      description,
    })
  }

  return (
    <main className="app">
      <section className="signup-panel">
        <div className="intro">
          <p className="eyebrow">Young Developers</p>
          <h1>Form di registrazione</h1>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="fullName">Nome completo</label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="specialization">Specializzazione</label>
            <select
              id="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            >
              <option value="">Seleziona una specializzazione</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="experienceYears">Anni di esperienza</label>
            <input
              id="experienceYears"
              type="number"
              value={experienceYears}
              onChange={(e) => setExperienceYears(e.target.value)}
            />
          </div>

          <div className="field full-width">
            <label htmlFor="description">Breve descrizione</label>
            <textarea
              id="description"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="submit">Registrati</button>
        </form>
      </section>
    </main>
  )
}

export default App
