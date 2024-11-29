import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from 'react-icons/io'
import { motion } from 'framer-motion'

const Navigation = ({ page, setPage, setGroup }) => {
  return (
    <div className="relative z-10">
      <div className="fixed bottom-5 left-5 flex items-center gap-x-2 text-2xl bg-yellow-500/50 rounded-full px-2">
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3 }}
          onClick={() => page != 1 && setPage((page) => page - 1)}
          className="cursor-pointer"
        >
          <IoMdArrowDropleftCircle />
        </motion.span>
        <p className="text-xl select-none">{page}</p>
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.3 }}
          onClick={() => setPage((page) => page + 1)}
          className="cursor-pointer"
        >
          <IoMdArrowDroprightCircle />
        </motion.span>
      </div>
      <select
        defaultValue={'Popular'}
        onChange={(e) => {
          setGroup(e.target.value)
          setPage(1)
        }}
        className="fixed top-5 left-5 bg-gray-200/90 text-sm tracking-wide text-gray-700 uppercase rounded-md outline-none p-1 cursor-pointer hover:bg-gray-200"
      >
        <option value="TopRated">Top Rated</option>
        <option value="Popular">Popular</option>
        <option value="UpComing">Upcoming</option>
        <option value="Discover">Discover</option>
      </select>
    </div>
  )
}

export default Navigation
