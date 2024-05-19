import { FaUser, FaUserAlt } from "react-icons/fa";

function Card({ imgSeed }) {
  return (
    <div className="rounded p-2 transition hover:bg-white hover:bg-opacity-15">
      <figure>
        <img
          className="aspect-video w-full rounded"
          src={`https://picsum.photos/seed/${imgSeed}/400/300`}
        />
      </figure>
      <div className="mt-2 flex gap-2">
        <FaUserAlt className="mt-2 rounded-full text-xl" />
        <div className="flex grow flex-col">
          <span className="line-clamp-2 text-ellipsis text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde,
            dolore?
          </span>
          <span className="text-sm">Lorem, ipsum.</span>
          <span className="text-sm">128K Views | 12 Hours ago</span>
        </div>
      </div>
    </div>
  );
}

export default function VideoesSection() {
  return (
    <div className=" h-0 grow overflow-auto p-2">
      <div className="grid h-full grid-cols-1 gap-2 gap-y-4 overflow-auto sm:grid-cols-2 lg:grid-cols-3">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <Card key={i} imgSeed={Math.random().toFixed(2)} />
          ))}
        {/* <div className="col-span-full grid place-items-center p-4">
          <span className="loading loading-spinner"></span>
        </div> */}
      </div>
    </div>
  );
}
