import Image from "next/image";
export default function UserList({ users = [] }) {
  return (
    <>
      <ul className="flex flex-col items-center justify-center space-y-4 p-4">
      <h1 className="text-3xl font-semibold">User List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <li key={user.id} className="w-full md:w-auto mx-auto my-4">
            <a
              href="#"
              className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 h-full"
            >
              <div>
                <div className="relative w-full h-96 md:w-36 md:h-auto">
                    <Image
                    src={user.image}
                    alt="Profile"
                    className="relative object-cover rounded-t-lg md:rounded-none md:rounded-s-lg w-full h-full"
                    objectFit="cover"
                    priority={false}
                    />
                </div>
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {user.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-sm">
                  {user.description}
                </p>
              </div>
            </a>
          </li>
        ))}
        </div>
      </ul>
    </>
  );
}
