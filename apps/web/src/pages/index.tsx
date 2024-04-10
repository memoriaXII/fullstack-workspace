import { FC } from 'react';

const Home: FC = () => {
  return (
    <>
      <div className='dark:bg-darkmode-surface w-full h-full bg-[#0A0D0D]'>
        <>
          <></>
          <div className='flex flex-col items-center bg-[#111111]'>
            <div className='flex gap-5 justify-between font-medium max-md:flex-wrap py-3 w-[1064px]'>
              <div className='flex gap-5 my-auto text-base leading-6 whitespace-nowrap text-slate-500 max-md:flex-wrap max-md:max-w-full'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/107250b9c40f5b0b8e4f9ae2e25d1ce470a8e1d33ecf7714c7af6b2c4f7c32a5?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                  className='shrink-0 w-24 aspect-[3.7]'
                />
                <div className='flex flex-auto gap-5 px-5 my-auto max-md:flex-wrap'>
                  <div className='grow text-white'>Product</div>
                  <div>Approach</div>
                  <div>Pricing</div>
                  <div>Changelog</div>
                  <div>Company</div>
                </div>
              </div>
              <div className='flex gap-5 justify-between px-5 text-lg leading-5 text-center'>
                <div className='my-auto text-white'>Sign in</div>
                <div className='justify-center px-4 py-3 bg-white rounded-[45.66px] text-neutral-900'>
                  Create account
                </div>
              </div>
            </div>
          </div>
          <>
            <div className='mt-4 w-full max-w-[1064px] max-md:max-w-full mx-auto'>
              <div className='flex flex-row'>
                <div className='flex gap-5 justify-between pt-2.5 pb-5 w-full bg-zinc-950 max-md:flex-wrap max-md:max-w-full'>
                  <div className='flex gap-3'>
                    {/* <div className='shrink-0 h-14 rounded-lg border border-solid bg-zinc-950 border-zinc-950 w-[51px]' /> */}
                    <img
                      className='flex w-14 h-14 rounded-lg border border-solid bg-zinc-950 border-zinc-950'
                      src='https://i.ibb.co/NKdTV6P/f-Xr-WBN8-J-400x400.jpg'
                    />
                    <div className='flex flex-col grow shrink-0 self-start basis-0 w-fit'>
                      <div className='text-xl leading-6 text-white'>OMNIA Protocol (IDO)</div>
                      <div className='mt-1.5 text-xs leading-4 text-stone-200 text-opacity-80'>
                        Private RPC endpoints for security and profitability.
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-2 self-start text-sm leading-5 text-white'>
                    <div className='justify-center px-5 py-2 uppercase whitespace-nowrap rounded-sm bg-neutral-800'>
                      Incubation
                    </div>
                    <div className='flex gap-2 px-5 py-2 rounded-sm bg-neutral-800'>
                      <div className='grow'>Bronze</div>
                      <div>at Min Tier</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow items-start py-7 pl-4 w-full bg-[#0A0D0D] rounded-xl border border-solid border-white border-opacity-10 leading-[150%] max-md:pr-5 max-md:mt-4 max-md:max-w-full'>
                    <div className='text-base text-white text-opacity-60'>Points issued</div>
                    <div className='mt-6 text-3xl text-white'>
                      <div className='flex flex-col px-3 py-4 w-full rounded-sm w-full'>
                        <div className='text-sm leading-4 text-white uppercase'>Upcoming</div>
                        <div className='flex gap-1.5 mt-2.5 text-xs leading-4 whitespace-nowrap text-zinc-400'>
                          <div>Interest</div>
                          <div className='flex-auto'>Period:</div>
                        </div>
                        <div className='flex gap-5 justify-between mt-3'>
                          <div className='flex flex-col self-start whitespace-nowrap text-zinc-400'>
                            <div className='text-xs leading-4'>From</div>
                            <div className='mt-3 text-xs leading-4'>To</div>
                          </div>
                          <div className='flex flex-col text-xs leading-4 text-white'>
                            <div>23:00, 18 Apr 2024</div>
                            <div className='mt-2.5'>05:00, 21 Apr 2024</div>
                          </div>
                        </div>
                        <div className='mt-6 text-xs leading-4 text-gray-50'>You can register Interest in</div>
                        <div className='flex gap-2.5 px-px mt-2 text-white whitespace-nowrap'>
                          <div className='flex gap-1'>
                            <div className='justify-center items-center w-8 h-8 text-base leading-6 text-center rounded-sm bg-neutral-700'>
                              08
                            </div>
                            <div className='my-auto text-xs leading-3'>:</div>
                          </div>
                          <div className='flex gap-1'>
                            <div className='justify-center items-center w-8 h-8 text-base leading-6 text-center rounded-sm bg-neutral-700'>
                              10
                            </div>
                            <div className='my-auto text-xs leading-3'>:</div>
                          </div>
                          <div className='flex gap-1'>
                            <div className='justify-center items-center w-8 h-8 text-sm leading-6 text-center rounded-sm bg-neutral-700'>
                              31
                            </div>
                            <div className='my-auto text-xs leading-3'>:</div>
                          </div>
                          <div className='justify-center items-center w-8 h-8 text-base leading-6 text-center rounded-sm bg-neutral-700'>
                            56
                          </div>
                        </div>
                        <div className='flex gap-4 mt-1 text-xs text-center whitespace-nowrap text-zinc-400'>
                          <div className='grow'>Days</div>
                          <div>Hours</div>
                          <div>Minutes</div>
                          <div>Seconds</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow items-start py-7 pl-4 rounded-xl border border-solid border-white border-opacity-10 leading-[150%] max-md:pr-5 max-md:mt-4 w-full'>
                    <div className='text-base text-white text-opacity-60'>Accounts (unique)</div>
                    <div className='mt-5 text-3xl text-white'>
                      <div className='flex grow gap-5 justify-between py-7 w-full text-sm leading-6 rounded max-md:mt-3'>
                        <div className='flex flex-col self-start text-zinc-400'>
                          <div>Price per token</div>
                          <div className='mt-4'>Swap Amount</div>
                          <div className='mt-4'>Total Raise</div>
                          <div className='mt-5'>Claim Type</div>
                          <div className='mt-4'>Refund Term</div>
                        </div>
                        <div className='flex flex-col text-right text-white'>
                          <div className='flex flex-col items-center pl-5 whitespace-nowrap'>
                            <div className='flex gap-5 justify-between self-start'>
                              <div className='flex gap-0.5 my-auto'>
                                <div className='grow'>0.35</div>
                                <div>USDT</div>
                              </div>
                              <div className='flex gap-3.5'>
                                <div>per</div>
                                <div>$OMNIA</div>
                              </div>
                            </div>
                            <div className='flex gap-4 mt-4 capitalize'>
                              <div>2,000,000</div>
                              <div>$OMNIA</div>
                            </div>
                            <div className='mt-4 ml-2.5 text-purple-400'>$700,000</div>
                          </div>
                          <div className='mt-5'>Claim on ChainGPT Pad</div>
                          <div className='self-end mt-5 mr-7 max-md:mr-2.5'>7 Days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-start pt-7 pr-20 pb-20 pl-6 mt-4 w-full text-base bg-[#0A0D0D] rounded-xl border border-solid border-white border-opacity-10 max-w-[1064px] max-md:px-5 max-md:max-w-full mx-auto'>
              <div className='leading-[150%] text-white text-opacity-80 max-md:max-w-full'>Leaderboard</div>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/466bb0ab836eb67abb28aa4bc7f6bed5e0e84b1ddba2dea8a1eb87f41030e05f?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                className='self-center mt-20 w-6 aspect-square max-md:mt-10'
              />
              <div className='mt-3 ml-60 leading-5 text-center text-white text-opacity-60 max-md:ml-2.5'>
                No activity yet. It'll appear here once you have some.
              </div>
            </div>
            <div className='px-6 py-6 mt-4 max-w-full bg-[#0A0D0D] rounded-xl border border-solid border-white border-opacity-10 w-[1064px] max-md:pr-5 mx-auto'>
              <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow text-base leading-6 text-white text-opacity-80 max-md:mt-10 max-md:max-w-full'>
                    <div className='text-xl max-md:max-w-full'>Getting started</div>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/ea4a16cb8c7c73ddfb8207633ef547eadd7674d947b28c507a7f1fc3333f55ac?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                      className='mt-10 aspect-[1.05] w-[21px]'
                    />
                    <div className='mt-5 max-md:max-w-full'>Stack SDK</div>
                    <div className='mt-5 leading-6 text-white text-opacity-60 max-md:max-w-full'>
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
                    <div className='mt-3.5 text-white text-opacity-80 max-md:max-w-full'>Support</div>
                    <div className='mt-4 leading-6 text-white text-opacity-60 max-md:max-w-full'>
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
            </div>
          </>
          {/* <div className='flex flex-col self-center px-5 mt-10 w-full max-w-[1236px] max-md:max-w-full mx-auto'>
            <div className='max-md:max-w-full'>
              <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                <div className='flex flex-col w-[56%] max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col mt-3 text-white max-md:mt-10 max-md:max-w-full'>
                    <div className='text-7xl leading-[72px] max-md:max-w-full max-md:text-4xl'>Future of Web3</div>
                    <div className='flex gap-0 mt-4 text-7xl leading-[72px] max-md:flex-wrap max-md:text-4xl'>
                      <div className='flex-auto max-md:max-w-full max-md:text-4xl'>Staking Rewards</div>
                    </div>
                    <div className='mt-7 text-base leading-6 text-zinc-500 max-md:max-w-full'>
                      Sophisticated. Balanced. Secure. Enabling the future of Web3. ChainGPT Pad is the decentralized
                      fundraising platform incubating and launching the next generation of GameFi, AI, Infra, DeFi,
                      DecSi, SocialFi projects.
                    </div>
                  </div>
                </div>
                <div className='flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full'>
                  <div className='flex flex-col grow px-8 py-11 w-full rounded-3xl border border-solid bg-zinc-900 border-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full'>
                    <div className='text-3xl leading-9 text-white max-md:max-w-full'>Get JitoSOL</div>
                    <div className='flex gap-4 p-2 mt-8 text-center rounded-full bg-zinc-800 max-md:flex-wrap max-md:max-w-full'>
                      <div className='flex gap-5 justify-between px-7 py-2.5 rounded-full bg-zinc-900 max-md:px-5'>
                        <div className='my-auto text-sm leading-5 text-zinc-100'>Stake</div>
                        <div className='justify-center px-6 py-2 text-xs leading-4 text-white bg-lime-500 rounded-full max-md:px-5'>
                          % APY
                        </div>
                      </div>
                      <div className='justify-center items-start px-11 py-4 text-base leading-6 whitespace-nowrap rounded-full bg-zinc-800 text-zinc-600 max-md:px-5'>
                        Unstake
                      </div>
                    </div>
                    <div className='mt-10 text-xs leading-4 text-zinc-500 max-md:max-w-full'>You're staking</div>
                    <div className='flex gap-5 px-3.5 py-2.5 mt-1.5 rounded-xl border border-solid border-zinc-500 max-md:flex-wrap'>
                      <img
                        loading='lazy'
                        srcSet='https://cdn.builder.io/api/v1/image/assets/TEMP/3ba204b421a98d15f8f22234ddf4dabf148ec2b236301fbc2b7a0458f18f21e4?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba204b421a98d15f8f22234ddf4dabf148ec2b236301fbc2b7a0458f18f21e4?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba204b421a98d15f8f22234ddf4dabf148ec2b236301fbc2b7a0458f18f21e4?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba204b421a98d15f8f22234ddf4dabf148ec2b236301fbc2b7a0458f18f21e4?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba204b421a98d15f8f22234ddf4dabf148ec2b236301fbc2b7a0458f18f21e4?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba204b421a98d15f8f22234ddf4dabf148ec2b236301fbc2b7a0458f18f21e4?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba204b421a98d15f8f22234ddf4dabf148ec2b236301fbc2b7a0458f18f21e4?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ba204b421a98d15f8f22234ddf4dabf148ec2b236301fbc2b7a0458f18f21e4?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                        className='shrink-0 w-28 max-w-full rounded-md border border-solid aspect-[2.44] border-zinc-500'
                      />
                      <div className='shrink-0 my-auto max-w-full h-9 bg-zinc-900 w-[282px]' />
                    </div>
                    <div className='flex gap-5 mt-7 w-full text-xs leading-4 text-zinc-500 max-md:flex-wrap max-md:max-w-full'>
                      <div className='flex gap-1 self-start'>
                        <div className='grow my-auto'>To receive</div>
                        <img
                          loading='lazy'
                          src='https://cdn.builder.io/api/v1/image/assets/TEMP/a6ffd60a1fee7ceb96ab390032056acd9e07846c0e518d5e07793e5d19c1b3dd?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                          className='shrink-0 aspect-square w-[15px]'
                        />
                      </div>
                      <div className='flex-auto text-right'>0% Slippage</div>
                    </div>
                    <div className='flex gap-1.5 px-3 py-2.5 mt-1.5 text-sm leading-5 whitespace-nowrap rounded-xl border border-solid border-zinc-500 text-zinc-300 max-md:flex-wrap max-md:max-w-full'>
                      <div className='justify-center items-start px-11 py-5 rounded-lg border border-solid bg-zinc-900 border-zinc-500 max-md:pl-5'>
                        JitoSOL
                      </div>
                      <div className='shrink-0 my-auto max-w-full h-9 bg-zinc-900 w-[299px]' />
                    </div>
                    <div className='justify-center items-start py-1.5 pr-16 pl-28 mt-10 text-base leading-6 text-center text-white bg-purple-400 rounded-full max-md:pr-5 max-md:pl-8 max-md:max-w-full'>
                      Connect Wallet
                    </div>
                    <div className='px-px mt-10 max-md:mt-10 max-md:max-w-full'>
                      <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                        <div className='flex flex-col w-[77%] max-md:ml-0 max-md:w-full'>
                          <div className='flex flex-col grow text-sm leading-5 text-zinc-500 max-md:mt-10'>
                            <div className='text-sm leading-5'>1 JitoSOL</div>
                            <div className='mt-6'>Network fee</div>
                            <div className='mt-5'>Priority fee active</div>
                            <div className='mt-5'>Tips active</div>
                          </div>
                        </div>
                        <div className='flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full'>
                          <div className='flex flex-col grow text-white whitespace-nowrap max-md:mt-10'>
                            <div className='flex gap-2'>
                              <div className='flex gap-1 self-start'>
                                <div className='text-sm leading-5'>≈</div>
                                <div className='text-xs leading-5'>1.101</div>
                              </div>
                              <div className='text-sm leading-5'>SOL</div>
                            </div>
                            <div className='flex gap-0 mt-6 text-sm leading-5'>
                              <div className='grow'>0.000015</div>
                              <div>SOL</div>
                            </div>
                            <div className='flex flex-col items-start pl-16 mt-6 text-sm leading-5 max-md:pl-5'>
                              <div>Yes</div>
                              <div className='mt-6'>Yes</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

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
