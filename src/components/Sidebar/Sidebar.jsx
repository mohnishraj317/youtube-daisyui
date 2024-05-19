import {
  FaHistory,
  FaHome,
  FaNewspaper,
  FaThumbsUp,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { SiYoutubegaming, SiYoutubeshorts } from "react-icons/si";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlinePlaylistPlay, MdOutlineWatchLater } from "react-icons/md";
import {
  FiFlag,
  FiHelpCircle,
  FiInfo,
  FiMusic,
  FiSettings,
  FiShoppingBag,
  FiTrendingUp,
} from "react-icons/fi";

function SubscriptionLi({ name }) {
  return (
    <li>
      <a>
        <span className="avatar">
          <FaUserAlt />
        </span>
        {name}
      </a>
    </li>
  );
}

function MenuCompact() {
  return (
    <ul className="menu w-min p-0 max-sm:hidden">
      <li>
        <a className="flex flex-col px-0 text-xs">
          <FaHome className="text-base" />
          Home
        </a>
      </li>
      <li>
        <a className="flex flex-col px-0 text-xs">
          <SiYoutubeshorts className="text-base" />
          Shorts
        </a>
      </li>
      <li>
        <a className="flex flex-col px-0 text-xs">
          <BiSolidVideos className="text-base" />
          Subscriptions
        </a>
      </li>
      <li>
        <a className="flex flex-col px-0 text-xs">
          <FaUser className="text-base" />
          You
        </a>
      </li>
    </ul>
  );
}

function MenuLarge({ subs }) {
  return (
    <ul
      className="no-scrollbar menu h-full w-max flex-nowrap
              overflow-auto overflow-x-hidden bg-base-100 p-0
              "
    >
      <li>
        <a>
          <FaHome />
          Home
        </a>
      </li>
      <li>
        <a>
          <SiYoutubeshorts />
          Shorts
        </a>
      </li>
      <li>
        <a>
          <BiSolidVideos />
          Subscriptions
        </a>
      </li>
      <li></li>
      <li className="menu-title">You</li>
      <li>
        <a>
          <FaUserAlt />
          Your channel
        </a>
      </li>
      <li>
        <a>
          <FaHistory />
          History
        </a>
      </li>
      <li>
        <a>
          <MdOutlinePlaylistPlay />
          Playlists
        </a>
      </li>
      <li>
        <a>
          <MdOutlineWatchLater />
          Watch later
        </a>
      </li>
      <li>
        <a>
          <FaThumbsUp />
          Liked videos
        </a>
      </li>
      <li></li>
      <li className="menu-title">Subscriptions</li>
      {subs.map((sub, i) => (
        <SubscriptionLi key={i} name={sub} />
      ))}
      <li></li>
      <li className="menu-title">Explore</li>
      <li>
        <a>
          <FiTrendingUp />
          Trending
        </a>
      </li>
      <li>
        <a>
          <FiMusic />
          Music
        </a>
      </li>
      <li>
        <a>
          <FiShoppingBag />
          Shopping
        </a>
      </li>
      <li>
        <a>
          <SiYoutubegaming />
          Gaming
        </a>
      </li>
      <li>
        <a>
          <FaNewspaper />
          News
        </a>
      </li>
      <li></li>
      <li>
        <a>
          <FiSettings />
          Settings
        </a>
      </li>
      <li>
        <a>
          <FiFlag />
          Report history
        </a>
      </li>
      <li>
        <a>
          <FiHelpCircle />
          Help
        </a>
      </li>
      <li>
        <a>
          <FiInfo />
          Send feedback
        </a>
      </li>
    </ul>
  );
}

export default function Sidebar({ children, active }) {
  const subs = [
    "Electroboom",
    "GreatScott",
    "Backyard Scientists",
    "VSauce",
    "Hyperplexed",
    "Sine lab",
    "imsaiguy",
    "Stuff Made Here",
    "3Blue1Brown",
    "Codey's Lab",
    "Corey Schiffer",
    "w2aew",
  ];

  return (
    <div className="relative flex h-0 grow gap-2">
      <div
        className={`h-full w-min shrink-0 overflow-hidden max-sm:absolute max-sm:top-10 max-sm:shadow-lg`}
      >
        {active ? <MenuLarge subs={subs} /> : <MenuCompact />}
      </div>
      <div className="flex w-0 grow scroll-p-2 flex-col">{children}</div>
    </div>
  );
}
