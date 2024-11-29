'use client'

import Link from "next/link";

const SidebarContent = () => {
    return ( 
        <ul className="space-y-1 mt-8">
                <li>
                  <Link
                    href={'/projects'}
                    className="block px-4 py-2 hover:bg-dark text-dark hover:text-white rounded-lg transition duration-300 ease-out peer-checked:hidden"
                    onClick={() => (document.getElementById('my-drawer') as HTMLInputElement).checked = false}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href={'/resume'}
                    className="block px-4 py-2 hover:bg-dark text-dark hover:text-white rounded-lg transition duration-300 ease-out peer-checked:hidden"
                    onClick={() => (document.getElementById('my-drawer') as HTMLInputElement).checked = false}
                  >
                    Resume
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href={'/contact'}
                    className="block px-4 py-2 hover:bg-dark text-dark hover:text-white rounded-lg transition duration-300 ease-out peer-checked:hidden"
                    onClick={() => (document.getElementById('my-drawer') as HTMLInputElement).checked = false}
                  >
                    Contact
                  </Link>
                </li> */}
              </ul>
     );
}
 
export default SidebarContent;