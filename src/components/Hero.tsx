interface HeroProps {
  showMenu: boolean
}

export const Hero: React.FC<HeroProps> = ({ showMenu }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">
        Welcome to <span className="text-primary">Digger</span>
      </h1>
      {!showMenu ? (
        <p>
          The next generation browser that scrap the results of the search
          engines and summarize them for you with ai technology.
        </p>
      ) : null}
    </div>
  )
}
