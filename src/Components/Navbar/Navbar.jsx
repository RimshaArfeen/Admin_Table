import React from 'react'

const Navbar = () => {
    return (
        <section className="body-font text-gray-600">
            <div className="mx-auto w-full">
                <header className="body-font mx-auto flex flex-col flex-wrap items-center uppercase bg-gray-500 p-5 text-gray-100 md:flex-row">
                    <nav className="flex flex-wrap items-center justify-around  md:ml-auto md:mr-auto lg:w-5/6">
                        <a className="mr-5 text-xl hover:text-gray-900 hover:cursor-pointer">First Link</a>
                        <a className="mr-5 text-xl hover:text-gray-900 hover:cursor-pointer">Second Link</a>
                        <a className="mr-5 text-xl hover:text-gray-900 hover:cursor-pointer">Third Link</a>
                        <a className="mr-5 text-xl hover:text-gray-900 hover:cursor-pointer">Fourth Link</a>
                    </nav>
                </header>
                <div className="-mx-4 my-10 -mb-10 flex flex-wrap text-center">
                    <div className="mx-auto mb-10 w-5/6 px-4">
                        <h2 className="title-font mb-3 mt-6 text-[2rem] font-bold uppercase text-gray-600 md:text-[3rem]">Admin Table</h2>
                        <p className="text-sm md:text-lg">All the tools you need to manage and maintain your platform in one place.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
