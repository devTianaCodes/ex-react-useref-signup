import { useState } from 'react'
import './App.css'



const letters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~'



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

//Milestone 2: Validazione dei campi
  const isUsernameValid =
    username.length >= 6 &&
    username
      .toLowerCase()
      .split('')
      .every((char) => letters.includes(char) || numbers.includes(char))

  const hasLetter = password
    .toLowerCase()
    .split('')
    .some((char) => letters.includes(char))
  const hasNumber = password.split('').some((char) => numbers.includes(char))
  const hasSymbol = password.split('').some((char) => symbols.includes(char))
  const isPasswordValid = password.length >= 8 && hasLetter && hasNumber && hasSymbol

  const trimmedDescription = description.trim()
  const isDescriptionValid =
    trimmedDescription.length >= 100 && trimmedDescription.length <= 1000

//gestione submit con validazione finale
  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !fullName.trim() ||
      !isUsernameValid ||
      !isPasswordValid ||
      !specialization.trim() ||
      !experienceYears.trim() ||
      experienceYears <= 0 ||
      !isDescriptionValid
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
      description: trimmedDescription,
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
            <p className={isUsernameValid ? 'valid-message' : 'error-message'}>
              {isUsernameValid
                ? 'Username valido'
                : 'Username: almeno 6 caratteri, solo lettere e numeri.'}
            </p>
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className={isPasswordValid ? 'valid-message' : 'error-message'}>
              {isPasswordValid
                ? 'Password valida'
                : 'Password: almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.'}
            </p>
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
            <p className={isDescriptionValid ? 'valid-message' : 'error-message'}>
              {isDescriptionValid
                ? 'Descrizione valida'
                : 'Descrizione: inserisci tra 100 e 1000 caratteri.'}
            </p>
          </div>

          <button type="submit">Registrati</button>
        </form>
      </section>
    </main>
  )
}

export default App
