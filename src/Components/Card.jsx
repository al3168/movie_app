import { useState } from 'react'
import { motion } from 'framer-motion'

const Card = ({ cardWidth, movie }) => {
  const { title, image, genres, originalLanguage, releaseDate, overview } = movie
  const [showDesc, setShowDesc] = useState(false)
  return (
    <div
      style={{ width: cardWidth }}
      className="h-[650px] lg:h-[550px] sm:h-[450px] relative flex justify-center items-center shrink-0 p-2 group"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showDesc ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        onClick={() => setShowDesc(!showDesc)}
        className="w-[97%] h-[97%] m-auto text-white absolute rounded-lg bg-black/50 flex flex-col justify-center gap-y-2 p-10 cursor-pointer backdrop-blur-2xl"
      >
        <h1 className="text-4xl">{title}</h1>
        <div className="flex gap-x-2 items-center flex-wrap lg:w-60">
          <span className="text-lg">Genres:</span>
          {genres.map((genre, i) => (
            <span key={i} className="font-semibold text-red-600">
              {genre}
            </span>
          ))}
        </div>
        <span className="flex gap-x-2">
          Original Language: <span className="mr-2 uppercase">{originalLanguage}</span>
        </span>
        <span className="flex gap-x-2">
          Release Date: <span className="mr-2 text-yellow-400">{releaseDate}</span>
        </span>
        <p className="flex flex-col gap-y-1 lg:hidden">
          <span className="text-red-500">Summary:</span>
          <span className="first-letter:pl-2">{overview}</span>
        </p>
      </motion.div>
      <img
        src={image}
        alt="Movie Image"
        className="absolute w-[97%] h-[97%] object-cover rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 -z-10"
      />
    </div>
  )
}

export default Card
