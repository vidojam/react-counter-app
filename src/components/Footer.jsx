export default function Footer() {
  const githubURL = "https://github.com/vidojam/react-counter-app" 


  return (
    <footer>
      <p><small>&copy; 2023</small><br />
      <a href={githubURL} target="_blank" rel="noreferrer">See Code in Github</a></p>
    </footer>

  )
}