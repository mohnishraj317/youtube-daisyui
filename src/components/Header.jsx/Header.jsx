import {
  FiBell,
  FiMenu,
  FiMic,
  FiSearch,
  FiVideo,
  FiYoutube,
} from "react-icons/fi";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

export default function Header({ sidebarToggler }) {
  return (
    <div className="navbar z-[3] flex-wrap justify-between gap-2 bg-base-100">
      <div>
        <button
          onClick={() => sidebarToggler((prev) => !prev)}
          className="btn btn-circle btn-ghost"
        >
          <FiMenu />
        </button>
        <span className="inline-flex items-center gap-1">
          <FiYoutube />
          Youtube
        </span>
      </div>
      <div className="flex grow items-center justify-center gap-2 max-sm:order-1 max-sm:w-full">
        <div className="join max-w-96 grow rounded-full max-sm:max-w-full">
          <input
            name="search"
            id="search"
            className="input join-item input-bordered grow"
            placeholder="Search"
          />
          <button className="btn btn-outline join-item">
            <FiSearch />
          </button>
        </div>
        <button className="btn btn-circle">
          <FiMic />
        </button>
      </div>

      <div className="flex items-center gap-1">
        <button className="btn btn-circle btn-ghost">
          <FiVideo />
        </button>
        <button className="btn btn-circle btn-ghost">
          <FiBell />
        </button>
        <ProfileMenu />
      </div>
    </div>
  );
}
