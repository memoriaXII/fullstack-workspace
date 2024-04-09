import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <div className='dark:bg-darkmode-surface w-full h-full bg-[#0A0D0D]'>
        <>
          <></>
          <div className='flex flex-col items-center bg-[#111111]'>
            <div className='flex gap-5 justify-between self-stretch py-2 pr-20 pl-2.5 w-full text-base leading-6 text-center text-white text-opacity-90 max-md:flex-wrap max-md:pr-5 max-md:max-w-full'>
              <div className='flex gap-2.5 text-zinc-500'>
                {/* <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/b4e8b774ca445ebf8f2e19c1c77c64b4afec41e15d10a98de6a7fc7915856f5b?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                  className='shrink-0 self-start aspect-[2.22] w-[85px]'
                /> */}
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/6853ff0e770e698056384d8bd10d2bb8750eb3f3d5405bf3544d305324c53dd8?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                  className='shrink-0 my-auto w-3.5 aspect-square'
                />
                <div className='flex gap-3 px-3.5 py-3 bg-[#202123] rounded-2xl'>
                  <div className='grow'>SXL</div>
                </div>
              </div>
              <div className='flex gap-5 justify-between items-center self-start whitespace-nowrap'>
                <div className='justify-center self-stretch px-3 py-3.5 rounded-xl bg-white/10 bg-opacity-10'>
                  Dashboard
                </div>
                <div className='self-stretch my-auto'>Activity</div>
                <div className='self-stretch my-auto'>Leaderboard</div>
              </div>
              <div className='flex gap-3.5 justify-between my-auto whitespace-nowrap'>
                <div className='my-auto'>Docs</div>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/302a69f2273f94d18ebf8a07c8d5df763632fed5712ab8dd01c359c920b0e209?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                  className='shrink-0 w-4 aspect-square'
                />
                <div>Support</div>
              </div>
            </div>
            {/* <div className='self-stretch w-full bg-zinc-950 bg-opacity-10 min-h-[1px] max-md:max-w-full' />
            <div className='flex gap-5 justify-between mt-4 w-full whitespace-nowrap leading-[150%] max-w-[1064px] max-md:flex-wrap max-md:max-w-full'>
              <div className='flex gap-2 px-5 my-auto'>
                <div className='my-auto text-xl text-zinc-950'>Points</div>
                <div className='flex gap-px py-2 text-sm rounded-3xl bg-zinc-100 text-zinc-950 text-opacity-70'>
                  <div>#</div>
                  <div>1487</div>
                </div>
              </div>
              <div className='flex gap-2 text-base text-center'>
                <div className='flex gap-3 p-3 rounded-xl bg-zinc-950 bg-opacity-10 text-zinc-950 text-opacity-90'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/546d0112d98a46d559726644a4d2609234abbabd1bcfab6b10a8692ce3354f2f?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                    className='shrink-0 w-4 aspect-square'
                  />
                  <div className='my-auto'>Rewards</div>
                </div>
                <div className='justify-center items-start px-3.5 py-3.5 text-white rounded-xl bg-zinc-950 bg-opacity-90 max-md:pr-5'>
                  Points
                </div>
              </div>
            </div> */}
            {/* <div className='mt-4 w-full max-w-[1064px] max-md:max-w-full'>
              <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow items-start py-7 pr-20 pl-4 w-full bg-white rounded-xl border border-solid border-zinc-950 border-opacity-10 leading-[150%] max-md:pr-5 max-md:mt-4 max-md:max-w-full'>
                    <div className='text-base text-zinc-950 text-opacity-60'>Points issued</div>
                    <div className='mt-6 text-3xl text-zinc-950'>0</div>
                  </div>
                </div>
                <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow items-start py-7 pr-20 pl-4 w-full bg-white rounded-xl border border-solid border-zinc-950 border-opacity-10 leading-[150%] max-md:pr-5 max-md:mt-4 max-md:max-w-full'>
                    <div className='text-base text-zinc-950 text-opacity-60'>Accounts (unique)</div>
                    <div className='mt-5 text-3xl text-zinc-950'>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start pt-7 pr-20 pb-20 pl-6 mt-4 w-full text-base bg-white rounded-xl border border-solid border-zinc-950 border-opacity-10 max-w-[1064px] max-md:px-5 max-md:max-w-full'>
              <div className='leading-[150%] text-zinc-950 text-opacity-80 max-md:max-w-full'>Leaderboard</div>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/466bb0ab836eb67abb28aa4bc7f6bed5e0e84b1ddba2dea8a1eb87f41030e05f?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                className='self-center mt-20 w-6 aspect-square max-md:mt-10'
              />
              <div className='mt-3 ml-60 leading-5 text-center text-zinc-950 text-opacity-60 max-md:ml-2.5'>
                No activity yet. It'll appear here once you have some.
              </div>
            </div>
            <div className='px-6 py-6 mt-4 max-w-full bg-white rounded-xl border border-solid border-zinc-950 border-opacity-10 w-[1064px] max-md:pr-5'>
              <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow text-base leading-6 text-zinc-950 text-opacity-80 max-md:mt-10 max-md:max-w-full'>
                    <div className='text-xl max-md:max-w-full'>Getting started</div>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/ea4a16cb8c7c73ddfb8207633ef547eadd7674d947b28c507a7f1fc3333f55ac?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                      className='mt-10 aspect-[1.05] w-[21px]'
                    />
                    <div className='mt-5 max-md:max-w-full'>Stack SDK</div>
                    <div className='mt-5 leading-6 text-zinc-950 text-opacity-60 max-md:max-w-full'>
                      Discover Stack SDK and its capabilities through examples, and learn about how to integrate it with
                      your own project.
                    </div>
                    <div className='flex gap-0 self-start mt-3 text-blue-500'>
                      <div className='grow my-auto'>Learn more</div>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b26486146f11ec37bf07405c9a2bf35e621ece9d057bef7ff39e607b5e917?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                        className='shrink-0 aspect-square w-[19px]'
                      />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow mt-14 text-base leading-6 max-md:mt-10 max-md:max-w-full'>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/b1c895134c5df724abbee65abc2514d58eba123abf50f8db9b7c189fb5820e42?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                      className='w-6 aspect-square'
                    />
                    <div className='mt-3.5 text-zinc-950 text-opacity-80 max-md:max-w-full'>Support</div>
                    <div className='mt-4 leading-6 text-zinc-950 text-opacity-60 max-md:max-w-full'>
                      Not sure where to start or have questions? Reach out on our Telegram support chat.
                    </div>
                    <div className='flex gap-0 self-start mt-3 text-blue-500 whitespace-nowrap'>
                      <div className='grow'>Telegram</div>
                      <img
                        loading='lazy'
                        src='https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b26486146f11ec37bf07405c9a2bf35e621ece9d057bef7ff39e607b5e917?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                        className='shrink-0 aspect-square w-[19px]'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className='px-4 sm:px-6 lg:px-12 2xl:px-0 w-full lg:mx-auto lg:translate-x-0 h-full min-h-screen'>
            <div className='relative  mx-auto'>
              <div className='w-full h-full -mt-2 lg:-mt-8 mx-auto lg:max-w-screen-2xl'>
                <div className='w-full'>
                  <div className='flex z-10 flex-col mt-11 mb-0 ml-28 max-w-full w-[823px] max-md:mt-10 max-md:mb-2.5'>
                    <div className='self-start ml-24 text-7xl text-center text-[#A036FB] leading-[72px] max-md:max-w-full max-md:text-4xl'>
                      MEV Powered
                    </div>
                    <div className='flex gap-5 mt-4 text-7xl text-center text-white leading-[72px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl'>
                      <div className='flex-auto max-md:max-w-full max-md:text-4xl'>Staking Rewards</div>
                      <div className='self-end mt-12 max-md:mt-10 max-md:text-4xl'>.</div>
                    </div>
                    <div className='flex flex-col self-end mt-6 max-w-full w-[576px]'>
                      <div className='self-center text-xl leading-7 text-gray-200'>
                        Earn MEV rewards through liquid staking
                      </div>
                      <div className='flex gap-5 justify-between items-start mt-9 ml-7 max-w-full text-center w-[407px] max-md:ml-2.5'>
                        <div className='flex flex-col text-3xl leading-9'>
                          <div className='self-end text-[#A036FB]'>TVL</div>
                          <div className='mt-6 text-zinc-300'>9.5M SOL</div>
                        </div>
                        <div className='flex flex-col whitespace-nowrap'>
                          <div className='self-start ml-5 text-3xl leading-9 text-[#A036FB] max-md:ml-2.5'>APY</div>
                          <div className='mt-6 text-3xl leading-9 text-zinc-300'>8.19%</div>
                        </div>
                        <div className='flex flex-col self-stretch whitespace-nowrap'>
                          <div className='text-3xl leading-9 text-[#A036FB]'>Holders</div>
                          <div className='self-start mt-6 ml-4 text-3xl leading-9 text-zinc-300 max-md:ml-2.5'>
                            91,614
                          </div>
                        </div>
                      </div>
                      <div className='overflow-hidden relative flex-col items-center px-16 pt-8 pb-96 mt-4 w-full text-base leading-6 text-white min-h-[576px] max-md:px-5 max-md:pb-10 max-md:max-w-full'>
                        <img
                          loading='lazy'
                          srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                          className='object-cover absolute inset-0 size-full'
                        />
                        Stake Now
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full px-8 sm:px-20 py-20 flex flex-col justify-start items-center gap-10'>
            <div className='flex flex-col justify-start items-center gap-10 max-w-[600px]'>
              <div className='w-full text-center text-white text-3xl md:text-5xl font-bold leading-10 mb-3'>
                Stay up to date with Jito
              </div>
              <form action='#' className='w-full relative flex items-center bg-zinc-800 rounded-lg py-3 pl-3'>
                <input
                  type='email'
                  placeholder='Your email here'
                  className='pl-4 py-3 w-full h-full bg-transparent text-zinc-300 text-sm md:text-lg font-medium outline-none'
                  value=''
                />
                <button
                  type='submit'
                  className='absolute right-2 top-1/2 transform -translate-y-1/2 py-2 px-2 sm:px-4 bg-emerald-300 rounded-lg flex items-center gap-2 mr-[6px]'
                >
                  <span className='text-center text-white text-sm sm:text-base font-medium tracking-wide pr-[0px]'>
                    Submit
                  </span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    aria-hidden='true'
                    className='w-4 h-4 text-white'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Home;
