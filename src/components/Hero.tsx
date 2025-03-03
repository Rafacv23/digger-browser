interface HeroProps {
  showMenu: boolean
}

export const Hero: React.FC<HeroProps> = ({ showMenu }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-primary">Digger</span>
      </h1>
      {!showMenu ? (
        <p>
          This browser scrap the results of the search engines and summarize
          them for you with ai technology.
        </p>
      ) : null}
    </div>
  )
}
