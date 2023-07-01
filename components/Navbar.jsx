"use client";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react'
import { useProductData } from '@/modals/productData';
import Link from 'next/link';

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const productData = useProductData();
    return (
        <Disclosure as="nav" className="bg-mainColor ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (

                                        <figure className="block h-6 w-6" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>

                                        </figure>
                                    ) : (

                                        <figure className="block h-6 w-6" aria-hidden="true">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>

                                        </figure>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 gap-32 items-center  justify-start sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                        <Link href="/">
                                    <figure className="block h-8 w-auto lg:hidden pl-4">
                                        <svg width="140" height="27" viewBox="0 0 140 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0.914282H5.88571V25.1429H0L0 0.914282ZM15.9429 25.1429H10.0571V0.914282H15.9429L24.8 14.5143V0.914282H30.6857V25.1429H24.8L15.9429 11.3143V25.1429ZM40.6857 25.1429H34.8V0.914282H40.6857L49.5429 14.5143V0.914282H55.4286V25.1429H49.5429L40.6857 11.3143V25.1429ZM70.1714 0.514282H73.6V10.1143H70.1714V0.514282ZM102.4 16.7429V18.8H95.8857V6.74285H98.3429V16.7429H102.4ZM105.2 12.8C105.2 15.0286 106.8 16.8 108.914 16.8C110.971 16.8 112.629 15.0857 112.629 12.8571C112.629 10.5143 111.086 8.8 108.914 8.8C106.8 8.8 105.2 10.5143 105.2 12.8ZM113.6 8.51428C114.629 9.65714 115.143 11.0857 115.143 12.8571C115.143 16.2857 112.4 19.0857 108.971 19.0857C105.429 19.0857 102.686 16.3429 102.686 12.8571C102.686 9.25714 105.429 6.51428 109.029 6.51428C110.8 6.51428 112.4 7.2 113.6 8.51428ZM119.6 11.7143H123.829V13.7714H119.6V18.8H117.086V6.74285H123.829V8.74285H119.6V11.7143ZM131.257 18.8H128.8V8.74285H125.886V6.74285H134.114V8.74285H131.257V18.8Z" fill="white" />
                                            <path d="M75.6 0.857178V7.02861C77.5428 8.28575 78.8 10.5715 78.8 13.3143C78.8 17.2572 75.7143 20.4572 71.8857 20.4572C68 20.4572 64.9143 17.2572 64.9143 13.2C64.9143 10.5143 66.1714 8.28575 68.1143 7.02861V0.914321C66.1714 1.48575 64.4 2.45718 62.9714 3.77146C60.2857 6.34289 58.8571 9.65718 58.8571 13.2C58.8571 20.2858 64.6857 25.8857 72.0571 25.8857C79.2 25.8857 84.9714 20.1715 84.9714 13.1429C84.8571 7.08575 81.0857 2.28575 75.6 0.857178Z" fill="white" />
                                            <path d="M137.086 22.6857H88C90.1143 20.6286 91.4286 16.8 91.4286 13.0286C91.4286 9.25716 89.9429 5.31431 88 3.37145H137.086V22.6857ZM139.6 25.1429V0.914307H81.8857C85.6572 3.02859 87.8857 6.74288 88.5143 11.0286C88.6286 11.6572 88.6857 12.3429 88.6857 13.0286C88.6857 13.7143 88.6286 14.4 88.5143 15.0286C87.8857 19.3143 85.6572 23.0286 81.8857 25.1429H139.6Z" fill="white" />
                                        </svg>
                                    </figure>
                                    </Link>
                                    <Link href="/">
                                    <figure className="hidden h-8 w-auto lg:block">
                                        <svg width="140" height="27" viewBox="0 0 140 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0.914282H5.88571V25.1429H0L0 0.914282ZM15.9429 25.1429H10.0571V0.914282H15.9429L24.8 14.5143V0.914282H30.6857V25.1429H24.8L15.9429 11.3143V25.1429ZM40.6857 25.1429H34.8V0.914282H40.6857L49.5429 14.5143V0.914282H55.4286V25.1429H49.5429L40.6857 11.3143V25.1429ZM70.1714 0.514282H73.6V10.1143H70.1714V0.514282ZM102.4 16.7429V18.8H95.8857V6.74285H98.3429V16.7429H102.4ZM105.2 12.8C105.2 15.0286 106.8 16.8 108.914 16.8C110.971 16.8 112.629 15.0857 112.629 12.8571C112.629 10.5143 111.086 8.8 108.914 8.8C106.8 8.8 105.2 10.5143 105.2 12.8ZM113.6 8.51428C114.629 9.65714 115.143 11.0857 115.143 12.8571C115.143 16.2857 112.4 19.0857 108.971 19.0857C105.429 19.0857 102.686 16.3429 102.686 12.8571C102.686 9.25714 105.429 6.51428 109.029 6.51428C110.8 6.51428 112.4 7.2 113.6 8.51428ZM119.6 11.7143H123.829V13.7714H119.6V18.8H117.086V6.74285H123.829V8.74285H119.6V11.7143ZM131.257 18.8H128.8V8.74285H125.886V6.74285H134.114V8.74285H131.257V18.8Z" fill="white" />
                                            <path d="M75.6 0.857178V7.02861C77.5428 8.28575 78.8 10.5715 78.8 13.3143C78.8 17.2572 75.7143 20.4572 71.8857 20.4572C68 20.4572 64.9143 17.2572 64.9143 13.2C64.9143 10.5143 66.1714 8.28575 68.1143 7.02861V0.914321C66.1714 1.48575 64.4 2.45718 62.9714 3.77146C60.2857 6.34289 58.8571 9.65718 58.8571 13.2C58.8571 20.2858 64.6857 25.8857 72.0571 25.8857C79.2 25.8857 84.9714 20.1715 84.9714 13.1429C84.8571 7.08575 81.0857 2.28575 75.6 0.857178Z" fill="white" />
                                            <path d="M137.086 22.6857H88C90.1143 20.6286 91.4286 16.8 91.4286 13.0286C91.4286 9.25716 89.9429 5.31431 88 3.37145H137.086V22.6857ZM139.6 25.1429V0.914307H81.8857C85.6572 3.02859 87.8857 6.74288 88.5143 11.0286C88.6286 11.6572 88.6857 12.3429 88.6857 13.0286C88.6857 13.7143 88.6286 14.4 88.5143 15.0286C87.8857 19.3143 85.6572 23.0286 81.8857 25.1429H139.6Z" fill="white" />
                                        </svg>
                                    </figure>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block w-1/2">
                                    <form className="flex space-x-4 ">
                                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                        <div class="relative w-full">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                            </div>
                                            <input type="search" id="default-search" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter interests, keyword, company name, etc." required />
                                           </div>
                                    </form>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                <figure className='text-white hidden sm:block '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                    </svg>

                                </figure>
                                <div className='hidden sm:block'>
                                    <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white   focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center " type="button">EN <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                                    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                            </li>
                                            <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='text-white hidden sm:block'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>

                                </div>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-mainColor text-sm focus:outline-none focus:ring-2 ml-3 phone-pp ">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src={productData.user?.profilePicture}
                                                alt="user-img"
                                            />
                                            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        {/* <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div> */}

                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
