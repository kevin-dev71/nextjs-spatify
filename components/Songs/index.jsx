import { useRecoilValue } from "recoil"
import { playlistState } from "../../atoms/playlistAtom"
import Song from "./Song"

function Songs() {
  const playlist = useRecoilValue(playlistState)

  return (
    <div className="text-white px-8 flex flex-col space-y-1 pb-28">
      {playlist?.tracks.items.map((track, idx) => (
        <Song key={track.track.id} track={track} order={idx} />
      ))}
    </div>
  )
}

export default Songs
