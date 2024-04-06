import * as React from "react";

export default function Index() {
  return (
    <div className="flex flex-col items-center pb-4 bg-white">
      <div className="flex gap-5 justify-between items-start self-stretch py-2 pr-20 pl-2.5 w-full text-base leading-6 text-center bg-white bg-opacity-80 text-zinc-950 text-opacity-90 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-2.5 text-zinc-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a955ddf1215b3a98ce740a5964197732aa87b115ba89ce1f20b1c9492cf92704?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
            className="shrink-0 self-start aspect-[2.22] w-[85px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6853ff0e770e698056384d8bd10d2bb8750eb3f3d5405bf3544d305324c53dd8?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
            className="shrink-0 my-auto w-3.5 aspect-square"
          />
          <div className="flex gap-1.5 px-4 py-3 bg-white rounded-2xl border border-solid border-zinc-200">
            <div className="grow">Test's point system</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bafaffc9c53cdca6bde609c202a4fbb0b54458549f3718e08e966e996a2f97a?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
              className="shrink-0 w-4 aspect-square"
            />
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center whitespace-nowrap">
          <div className="justify-center self-stretch p-3.5 rounded-xl bg-zinc-950 bg-opacity-10">
            Dashboard
          </div>
          <div className="self-stretch my-auto">Activity</div>
          <div className="self-stretch my-auto">Leaderboard</div>
        </div>
        <div className="flex gap-3.5 justify-between self-stretch my-auto whitespace-nowrap">
          <div className="my-auto">Docs</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/302a69f2273f94d18ebf8a07c8d5df763632fed5712ab8dd01c359c920b0e209?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
            className="shrink-0 w-4 aspect-square"
          />
          <div>Support</div>
        </div>
      </div>
      <div className="self-stretch w-full bg-zinc-950 bg-opacity-10 min-h-[1px] max-md:max-w-full" />
      <div className="flex gap-5 justify-between mt-4 w-full whitespace-nowrap leading-[150%] max-w-[1064px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-2 px-5 my-auto">
          <div className="my-auto text-xl text-zinc-950">Points</div>
          <div className="flex gap-px py-2 text-sm rounded-3xl bg-zinc-100 text-zinc-950 text-opacity-70">
            <div>#</div>
            <div>1487</div>
          </div>
        </div>
        <div className="flex gap-2 text-base text-center">
          <div className="justify-center px-5 py-3.5 rounded-xl bg-zinc-950 bg-opacity-10 text-zinc-950 text-opacity-90">
            Rewards
          </div>
          <div className="justify-center items-start px-3.5 py-3.5 text-white rounded-xl bg-zinc-950 bg-opacity-90 max-md:pr-5">
            Points
          </div>
        </div>
      </div>
      <div className="mt-4 w-full max-w-[1064px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start py-7 pr-20 pl-4 w-full bg-white rounded-xl border border-solid border-zinc-950 border-opacity-10 leading-[150%] max-md:pr-5 max-md:mt-4 max-md:max-w-full">
              <div className="text-base text-zinc-950 text-opacity-60">
                Points issued
              </div>
              <div className="mt-6 text-3xl text-zinc-950">0</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start py-7 pr-20 pl-4 w-full bg-white rounded-xl border border-solid border-zinc-950 border-opacity-10 leading-[150%] max-md:pr-5 max-md:mt-4 max-md:max-w-full">
              <div className="text-base text-zinc-950 text-opacity-60">
                Accounts (unique)
              </div>
              <div className="mt-5 text-3xl text-zinc-950">0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start pt-7 pr-20 pb-20 pl-6 mt-4 w-full text-base bg-white rounded-xl border border-solid border-zinc-950 border-opacity-10 max-w-[1064px] max-md:px-5 max-md:max-w-full">
        <div className="leading-[150%] text-zinc-950 text-opacity-80 max-md:max-w-full">
          Leaderboard
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/466bb0ab836eb67abb28aa4bc7f6bed5e0e84b1ddba2dea8a1eb87f41030e05f?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
          className="self-center mt-20 w-6 aspect-square max-md:mt-10"
        />
        <div className="mt-3 ml-60 leading-5 text-center text-zinc-950 text-opacity-60 max-md:ml-2.5">
          No activity yet. It'll appear here once you have some.
        </div>
      </div>
      <div className="px-6 py-6 mt-4 max-w-full bg-white rounded-xl border border-solid border-zinc-950 border-opacity-10 w-[1064px] max-md:pr-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-base leading-6 text-zinc-950 text-opacity-80 max-md:mt-10 max-md:max-w-full">
              <div className="text-xl max-md:max-w-full">Getting started</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd93a09fa4df48660f8da10bf533f753c52dd63532a07e89061d04d6eabb7af?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
                className="mt-10 aspect-[1.05] w-[21px]"
              />
              <div className="mt-5 max-md:max-w-full">Stack SDK</div>
              <div className="mt-5 leading-6 text-zinc-950 text-opacity-60 max-md:max-w-full">
                Discover Stack SDK and its capabilities through examples, and
                learn about how to integrate it with your own project.
              </div>
              <div className="flex gap-0 self-start mt-3 text-blue-500">
                <div className="grow my-auto">Learn more</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b26486146f11ec37bf07405c9a2bf35e621ece9d057bef7ff39e607b5e917?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
                  className="shrink-0 aspect-square w-[19px]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-14 text-base leading-6 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1c895134c5df724abbee65abc2514d58eba123abf50f8db9b7c189fb5820e42?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
                className="w-6 aspect-square"
              />
              <div className="mt-3.5 text-zinc-950 text-opacity-80 max-md:max-w-full">
                Support
              </div>
              <div className="mt-4 leading-6 text-zinc-950 text-opacity-60 max-md:max-w-full">
                Not sure where to start or have questions? Reach out on our
                Telegram support chat.
              </div>
              <div className="flex gap-0 self-start mt-3 text-blue-500 whitespace-nowrap">
                <div className="grow">Telegram</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f7b26486146f11ec37bf07405c9a2bf35e621ece9d057bef7ff39e607b5e917?apiKey=ede730ffbde64deeb347ba7415ebcf19&"
                  className="shrink-0 aspect-square w-[19px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


