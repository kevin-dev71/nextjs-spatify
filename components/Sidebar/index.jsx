import { useEffect, useState } from "react"
import { useSession, signOut } from "next-auth/react"
import useSpotify from "../../hooks/useSpotify"
import { sideBarBtnsGroup1, sideBarBtnsGroup2 } from "./labels"
import { useRecoilState } from "recoil"
import { playlistIdState } from "../../atoms/playlistAtom"

function Sidebar() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()
  const [playlists, setPlaylists] = useState([])
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="text-gray-400 p-5 text-sm lg:text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex">
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
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            className="cursor-pointer hover:text-white"
            onClick={() => setPlaylistId(playlist.id)}
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
