"use client";
import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import ThemeSwitcher from '../../../components/Themeswitcher';
import axios from 'axios';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import Defoultimage from '../../../public/Images/dashboard/Rectangle 32 (2).png'
import Image from 'next/image';
const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Problems', href: '/dashboard/Problems', current: false },
  { name: 'Understanding', href: '/understanding', current: false },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function DashboardTopNav() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token") || document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const userId = localStorage.getItem('_id');

    if (!token || !userId) {
      router.push("/login");
    } else {
      axios
        .get(`/api/getuser/${userId}`) 
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          router.push("/login");
        })
        .finally(() => {
          setLoading(false); // Set loading to false after data fetch
        });
    }
  }, [router]);

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/login');
  };

  return (
    <div className="min-h-full">
      <Disclosure as="nav">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? ' editcrunnt bg-gray-900  text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {loading ? (
                  <Skeleton className="w-8 h-8 rounded-full" /> // Show skeleton loader while loading
                ) : user && user.name ? (
                  <div className="flex items-center">
                    <h5 className="mr-4">{user.name}</h5>
                    <Menu as="div" className="relative ml-3">
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <Image className="h-10 w-10 rounded-full" src={Defoultimage} alt={user.name} />
                      </MenuButton>
                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none" >
                        <MenuItem>
                          <a href="#" className="block px-4 py-2 text-sm text-white">
                            Your Profile
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a  href="#" className="block px-4 py-2 text-sm text-white">
                            Settings
                          </a>
                        </MenuItem>
                        <MenuItem >
                          <button
                            onClick={handleSignOut}
                            className="block w-full text-left px-4 py-2 text-sm text-white" >
                            Sign Out 
                          </button>
                        </MenuItem>
                      </MenuItems>
                    </Menu>
                  </div>
                ) : (
                  <Link  href="/login" className="text-white">
                    Log in
                  </Link>
                )}
                <ThemeSwitcher />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <Bars3Icon className="block h-6 w-6" />
                <XMarkIcon className="hidden h-6 w-6" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              {loading ? (
                <Skeleton className="w-10 h-10 rounded-full" /> // Show skeleton loader while loading
              ) : user && user.name ? (
                <>
                  <img className="h-10 w-10 rounded-full" src={user.imageUrl || 'defaultImageUrl'} alt={user.name} />
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                </>
              ) : (
                <a href="/login" className="text-white block px-5 py-3">
                  Log in
                </a>
              )}
            </div>
            <ThemeSwitcher />
          </div>
        </DisclosurePanel>
      </Disclosure>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content */}
        </div>
      </main>
    </div>
  );
}

export default DashboardTopNav;
