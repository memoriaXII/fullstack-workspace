import * as React from "react";

export default function Index() {
  return (
    <div className="dark:bg-darkmode-surface dark:text-white w-full h-full bg-[#111111]">

		<>
		<div className="px-4 sm:px-6 lg:px-12 2xl:px-0 w-full lg:mx-auto lg:translate-x-0 h-full min-h-screen">
			<div className="relative  mx-auto">
				<div className="w-full h-full -mt-2 lg:-mt-8 mx-auto lg:max-w-screen-2xl">
					<div className="w-full">
						{/* <div className="z-10 relative px-4 lg:px-8 pt-3">
							<div className="flex flex-col items-center justify-between min-h-[620px] xs:min-h-[740px] lg:min-h-[920px]">
								<div className="flex flex-col items-center gap-4 lg:gap-5 pt-16"><div className="rounded-full border border-light-gray dark:border-darkmode-border p-2 md:p-4"><div className="relative h-auto w-32 md:w-36 lg:w-48 aspect-[8.5]"><span></span></div></div> </div>
							</div>
						</div> */}
					<div className="flex z-10 flex-col mt-11 mb-0 ml-28 max-w-full w-[823px] max-md:mt-10 max-md:mb-2.5">
      <div className="self-start ml-24 text-7xl text-center text-violet-500 leading-[72px] max-md:max-w-full max-md:text-4xl">
        MEV Powered
      </div>
      <div className="flex gap-5 mt-4 text-7xl text-center text-white leading-[72px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
        <div className="flex-auto max-md:max-w-full max-md:text-4xl">
          Staking Rewards
        </div>
        <div className="self-end mt-12 max-md:mt-10 max-md:text-4xl">.</div>
      </div>
      <div className="flex flex-col self-end mt-6 max-w-full w-[576px]">
        <div className="self-center text-xl leading-7 text-gray-200">
          Earn MEV rewards through liquid staking
        </div>
        <div className="flex gap-5 justify-between items-start mt-9 ml-7 max-w-full text-center w-[407px] max-md:ml-2.5">
          <div className="flex flex-col text-3xl leading-9">
            <div className="self-end text-violet-500">TVL</div>
            <div className="mt-6 text-zinc-300">9.5M SOL</div>
          </div>
          <div className="flex flex-col whitespace-nowrap">
            <div className="self-start ml-5 text-3xl leading-9 text-violet-500 max-md:ml-2.5">
              APY
            </div>
            <div className="mt-6 text-3xl leading-9 text-zinc-300">8.19%</div>
          </div>
          <div className="flex flex-col self-stretch whitespace-nowrap">
            <div className="text-3xl leading-9 text-violet-500">Holders</div>
            <div className="self-start mt-6 ml-4 text-3xl leading-9 text-zinc-300 max-md:ml-2.5">
              91,614
            </div>
          </div>
        </div>
        <div className="overflow-hidden relative flex-col items-center px-16 pt-8 pb-96 mt-4 w-full text-base leading-6 text-white min-h-[576px] max-md:px-5 max-md:pb-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff88fc537f463f39fd470935e8df6387de57faae14c09652dbe3f725f32e1e10?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
            className="object-cover absolute inset-0 size-full"
          />
          Stake Now
        </div>
      </div>
    </div>
					</div>
				</div>
			</div>
		</div>
		</>
		</div>
  );
}


