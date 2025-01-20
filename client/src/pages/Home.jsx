import React from 'react'
import Hero from '../components/header/Hero'
import Product from '../components/product/Product'
//pngs
import fiction from '../assets/fiction.png'
import fantasy from '../assets/fantasy.png'
import Romance from '../assets/Romance.png'
import philosophy from '../assets/philosophy.png'
import kids from '../assets/kids.png'
import Manga from '../assets/Manga.png'
import Biography from '../assets/Biography.png'
import Horror from '../assets/Horror.png'
import History from '../assets/History.png'


function Home() {
     
  return (
    <div className=''>
      <Hero />
      {/* feartured items */}
      <div  className='fade feartured-items min-h-screen   '>
        <div className='text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Featured Items
        </div> 
        <div  className=''>
          <Product productTitles={["One Piece",
                                   "Jujutsu Kaisen Vol 30",
                                   "Red Eclipse",
                                   "A Dance with Dragons",
                                   "The Time of Contempt",
                                   "Harry Potter and the Prisoner of Azkaban",
                                   "The Last Wish" ]} />

          <Product productTitles={["Vinland Saga",
                                   "Harry Potter and the Deathly Hallows",
                                   "Harry Potter and the Half-Blood Prince",
                                   "Dune Messiah",
                                   "Berserk",
                                    ]} />
        </div>
      </div>

      <div className='h-0 md:min-h-screen'>
          <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 opacity-0 md:opacity-100 '>
              Catagories
            </div>
            <div className='fade flex flex-col flex-wrap gap-5 w-o h-o sm:w-full sm:h-full  invisible md:visible '>
              {/* catagories item row */}
              <div className='flex flex-row justify-center gap-5 '>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fantasy-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-fit w-fit object-cover "
                        src={fantasy}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                      Fantasy
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#Romance-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute  h-[118px] w-[223px] object-cover  "
                        src={Romance}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                      Romance
                      </h3>
                    </article>
                  </a>
                </div>
                
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#Horror-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute  h-[142px] w-[235px] object-cover "
                        src={Horror}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Horror
                      </h3>
                    </article>
                  </a>
                </div>
                
              </div>
              <div className='flex flex-row justify-center gap-5'>

                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#fiction-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-[147px] w-[264px] object-cover "
                        src={fiction}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       Science Fiction
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#Manga-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-[9px] h-[140px] w-[233px] object-cover "
                        src={Manga}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-[-20px] text-3xl font-bold text-iphone-white text-left">
                      Manga & Comics
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#History-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-[157px] w-[279px] object-cover "
                        src={History}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                       History
                      </h3>
                    </article>
                  </a>
                </div>
                
              </div>
              <div className='flex flex-row justify-center gap-5'>

                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#philosophy-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-[148px] w-[243px] object-cover "
                        src={philosophy}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                        philosophy
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105'>
                <a  href="#Biography-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute inset-0 h-[159px] w-[253px] object-cover "
                        src={Biography}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                        Biography
                      </h3>
                    </article>
                  </a>
                </div>
                <div className='bg-iphone-black opacity-70 hover:opacity-100 rounded-3xl h-[160px] w-[250px] hover:scale-105 overflow-hidden'>
                <a  href="#kids-books">
                    <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl p-4 pt-24 pb-8  max-w-sm mx-auto mt-1 hover:scale-105 ">
                      <img
                        className="absolute  h-[143px] w-[227px] object-cover "
                        src={kids}
                        alt=""
                      />
                      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                      <h3 class="z-10 mt-3 text-3xl font-bold text-iphone-white text-left">
                        kids
                      </h3>
                    </article>
                  </a>
                </div>
                
              </div>
              

            </div>
      </div>

       {/* item from catagories */}
       <div id='fiction-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        Fiction Books
        </div>
        <div  className='fade animated-background bg-gradient-to-r from-[#212901] via-[#004137] to-[#00452d] mb-6 rounded-3xl ' >
        <Product productTitles={["Origin",
                                "The Dark Forest",
                                "Dune",
                                "The Kill Order",
                                "God Emperor of Dune",
                                "Dune Messiah",
                                ""
         ]} />
        </div>
      </div>

       <div id='fantasy-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Fantasy Books
        </div>
        <div className='fade   animated-background bg-gradient-to-r from-[#292501] via-[#413500] to-[#452600] rounded-3xl mb-6' >
        <Product productTitles={["The Silmarillion",
                                "Harry Potter and the Deathly Hallows",
                                "One Piece",
                                "Harry Potter and the Half-Blood Prince",
                                "Berserk",
                                "Vinland Saga",
                                "A Dance with Dragons",
         ]} />
        </div>
      </div>

       <div id='Romance-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28  '>
          Romance Books
        </div>
        <div className='fade bg-[#db2778] animated-background bg-gradient-to-r from-[#6a0074] via-[#8e006d] to-[#8e003b]  rounded-3xl mb-6' >
        <Product productTitles={["Fifty Shades Of Grey",
                                "Fifty Shades Darker",
                                "Fifty Shades Freed",
         ]} />
        </div>
      </div>

       <div id='kids-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Kids Books
        </div>
        <div className='fade  bg-[#310a12] animated-background bg-gradient-to-r from-[#00524e] via-[#001f55] to-[#67005d] rounded-3xl mb-6' >
        <Product productTitles={["The Hobbit",
                                "One Piece",
                                "Harry Potter and the Deathly Hallows",
                                "Harry Potter and the Sorcerer's Stone",
                                "The Fellowship of the Ring",
         ]} />
        </div>
      </div>

       <div id='Horror-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
          Horror Books
        </div>
        <div className='fade animated-background bg-gradient-to-r from-[#670000] via-[#9c001a] to-[#4a0015] rounded-3xl mb-6' >
        <Product productTitles={["The Maze Runner",
                                "The Scorch Trials",
                                "The Kill Order",
                                "Berserk",
         ]} />
       
        </div>
      </div>

       <div id='philosophy-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        Philosophy Books
        </div>
        <div className='fade  animated-background bg-gradient-to-r from-[#4e3700] via-[#533b00] to-[#7c6c00] rounded-3xl mb-6' >
        
        <Product productTitles={["In the Buddha's Words",
                                "Discourses and Selected Writings of Epictetus",
         ]} />
        </div>
      </div>

       <div id='Manga-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        Manga & Comics
        </div>
        <div className='fade  animated-background bg-gradient-to-r from-[#004e26] via-[#4b0053] to-[#00797c] rounded-3xl mb-6' >
        
        <Product productTitles={["Berserk",
                                "One Piece",
                                "Kagurabachi",
                                "Vinland Saga",
                                "Jujutsu Kaisen Vol 30",
         ]} />
        </div>
      </div>

       <div id='Biography-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        Biography Books
        </div>
        <div className='fade  animated-background bg-gradient-to-r from-[#32495c] via-[#5b3a4a] to-[#7c2a00] rounded-3xl mb-6' >
        
        <Product productTitles={["American Prometheus",
                                "Napoleon",
                                "Leonardo da Vinci",
                                "Greenlights",
                                "The Story of My Life"
        ]} />
        </div>
      </div>

       <div id='History-books' className=' feartured-items   '>
        <div className='fade text-iphone-white text-5xl font-extrabold mb-4 flex justify-start lg:ml-28 '>
        History Books
        </div>
        <div className='fade animated-background bg-gradient-to-r from-[#376993] via-[#a44c77] to-[#797e67]  rounded-3xl ' >
        <Product productTitles={["How Rome Fell",
                                "American Prometheus",
                                "Napoleon",
                                "Leonardo da Vinci",
                                "The King is Dead"
         ]} />
        
        </div>
      </div>


    </div>
  )
}

export default Home