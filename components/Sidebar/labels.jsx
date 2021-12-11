import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline"

export const sideBarBtnsGroup1 = [
  {
    label: "Home",
    icon: <HomeIcon className="h-5 w-5" />,
  },
  {
    label: "Search",
    icon: <SearchIcon className="h-5 w-5" />,
  },
  {
    label: "Your Library",
    icon: <LibraryIcon className="h-5 w-5" />,
  },
]

export const sideBarBtnsGroup2 = [
  {
    label: "Create Playlist",
    icon: <PlusCircleIcon className="h-5 w-5" />,
  },
  {
    label: "Liked Songs",
    icon: <HeartIcon className="h-5 w-5" />,
  },
  {
    label: "Your episodes",
    icon: <RssIcon className="h-5 w-5" />,
  },
]
