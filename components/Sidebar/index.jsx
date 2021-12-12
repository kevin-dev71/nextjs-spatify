import { sideBarBtnsGroup1, sideBarBtnsGroup2 } from './labels'
import { useSession } from "next-auth/react"

function Sidebar() {

  const { data: session, status } = useSession()

  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
        {sideBarBtnsGroup1.map((btn, idx) => (
          <button
            key={idx}
            className="flex items-center space-x-2 hover:text-white"
            onClick={btn.onClick ?? null}
          >
            {btn.icon}
            <p>{btn.label}</p>
          </button>
        ))}
        <hr className="border-t-[0.1px] border-gray-900" />
        {sideBarBtnsGroup2.map((btn, idx) => (
          <button
            key={idx}
            className="flex items-center space-x-2 hover:text-white"
          >
            {btn.icon}
            <p>{btn.label}</p>
          </button>
        ))}
        <hr className="border-t-[0.1px] border-gray-900" />
        {/* Playlist */}
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  )
}

export default Sidebar
