import React from 'react'

function ViewCourse({ coursecontent, modaltoggle }) {

    document.body.style.overflow = "hidden"

    return (
        <>
            <div className="overlay w-screen h-screen absolute top-0 left-0 bg-purple-700">

                <div className="cross absolute right-10 top-10 w-10 h-10 bg-white text-center pt-1 rounded-full hover:scale-110 cursor-pointer" onClick={modaltoggle}><i class="fa-solid fa-x text-3xl"></i></div>

                <div className="head text-white text-5xl text-center mt-6 font-bold"><h1>{coursecontent.name}</h1></div>

                <div className="lecture w-full h-2/3 mt-10 flex justify-between">
                    <div className="vidbox h-auto w-1/3 ml-16 pt-16">
                        <iframe width="600" height="350" src={coursecontent.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="buttons flex flex-col  mr-52 my-auto">
                        <div className="ask">
                            <button className='px-5 m-1 rounded-3xl font-bold text-white text-xl py-3 bg-yellow-400  hover:bg-yellow-500'>Ask Question</button>
                            </div>
                        <div className="notes my-3">
                            <a className='px-5 m-1 rounded-3xl font-bold text-white text-xl py-3  bg-blue-500  hover:bg-blue-600' href={coursecontent.notesUrl} target='_blank'>
                            Notes
                            </a>
                            </div>

                        <div className="quiz"><button className='px-5 m-1 rounded-3xl font-bold text-white text-xl py-3  bg-green-600 hover:bg-green-700'>Take a Quiz</button>
                        </div>
                        <label htmlFor="comment" className='text-xl text-white font-semibold mt-2'>Add Comments/Doubts</label>
                        <textarea name="" id="comment" cols="50" rows="5" className='rounded-xl text-black p-2' placeholder='Enter your comments/doubts'></textarea>
                    </div>


                </div>





            </div>

        </>
    )
}

export default ViewCourse
