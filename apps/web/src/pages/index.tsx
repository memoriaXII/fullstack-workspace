import { SearchIcon } from '@heroicons/react/outline';
import { useDebounce } from '@sushiswap/hooks';
import { LinkInternal } from '@sushiswap/ui';
import { Button } from '@sushiswap/ui/components/button';
import { Container } from '@sushiswap/ui/components/container';
import type { InferGetServerSidePropsType } from 'next';
import type { FC } from 'react';
import { useState } from 'react';
import useSWR, { SWRConfig } from 'swr';
import { ArticleList, Card, Categories, Hero } from '../components';
import BlogSeo from '../components/seo/blog-seo';
import { getArticles, getCategories } from '../lib/api';
import type { GhostArticle } from '../lib/ghost';
import type { Article, Category, Collection } from '../types';

export async function getStaticProps() {
  const [articles, categories] = await Promise.all([getArticles({ pagination: { limit: 10 } }), getCategories()]);
  return {
    props: {
      fallback: {
        '/articles': articles.articles || [],
        '/categories': categories.categories || [],
      },
    },
    revalidate: 60,
  };
}

const Home: FC<InferGetServerSidePropsType<typeof getStaticProps>> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <_Home />
    </SWRConfig>
  );
};

const _Home: FC = () => {
  const [query, setQuery] = useState<string>();
  const debouncedQuery = useDebounce(query, 200);

  const [selected, setSelected] = useState<string[]>([]);
  const { data: articlesData } = useSWR<Collection<GhostArticle>>('/articles');
  const { data: categoriesData } = useSWR<Collection<Category>>('/categories');

  const { data: filterData, isValidating } = useSWR(
    ['/articles', selected, debouncedQuery],
    async ([_url, _selected, _debouncedQuery]) => {
      return (
        await getArticles({
          filters: {
            ...(debouncedQuery && { title: { containsi: _debouncedQuery } }),
            ...(selected.length > 0 && {
              categories: {
                id: {
                  in: _selected,
                },
              },
            }),
          },
        })
      ).articles;
    },
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      revalidateOnMount: false,
    }
  );

  const loading = useDebounce(isValidating, 400);
  const articles = articlesData?.data;
  const categories = categoriesData?.data;
  const articleList = selected && filterData?.data ? filterData.data : articles ? articles : undefined;

  return (
    <>
      <div className='dark:bg-darkmode-surface dark:text-white w-full h-full bg-[#111111]'>
        <>
          <div className='flex flex-col items-center pb-4 bg-white'>
            <div className='flex gap-5 justify-between self-stretch py-2 pr-20 pl-2.5 w-full text-base leading-6 text-center bg-white bg-opacity-80 text-zinc-950 text-opacity-90 max-md:flex-wrap max-md:pr-5 max-md:max-w-full'>
              <div className='flex gap-2.5 text-zinc-500'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/b4e8b774ca445ebf8f2e19c1c77c64b4afec41e15d10a98de6a7fc7915856f5b?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                  className='shrink-0 self-start aspect-[2.22] w-[85px]'
                />
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/6853ff0e770e698056384d8bd10d2bb8750eb3f3d5405bf3544d305324c53dd8?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                  className='shrink-0 my-auto w-3.5 aspect-square'
                />
                <div className='flex gap-3 px-3.5 py-3 bg-white rounded-2xl border border-solid border-zinc-200'>
                  <div className='grow'>Test's point system</div>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/1bafaffc9c53cdca6bde609c202a4fbb0b54458549f3718e08e966e996a2f97a?apiKey=ede730ffbde64deeb347ba7415ebcf19&'
                    className='shrink-0 w-4 aspect-square'
                  />
                </div>
              </div>
              <div className='flex gap-5 justify-between items-center self-start whitespace-nowrap'>
                <div className='justify-center self-stretch px-3 py-3.5 rounded-xl bg-zinc-950 bg-opacity-10'>
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
            <div className='self-stretch w-full bg-zinc-950 bg-opacity-10 min-h-[1px] max-md:max-w-full' />
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
            </div>
            <div className='mt-4 w-full max-w-[1064px] max-md:max-w-full'>
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
            </div>
          </div>
          <div className='px-4 sm:px-6 lg:px-12 2xl:px-0 w-full lg:mx-auto lg:translate-x-0 h-full min-h-screen'>
            <div className='relative  mx-auto'>
              <div className='w-full h-full -mt-2 lg:-mt-8 mx-auto lg:max-w-screen-2xl'>
                <div className='w-full'>
                  <div className='flex z-10 flex-col mt-11 mb-0 ml-28 max-w-full w-[823px] max-md:mt-10 max-md:mb-2.5'>
                    <div className='self-start ml-24 text-7xl text-center text-violet-500 leading-[72px] max-md:max-w-full max-md:text-4xl'>
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
                          <div className='self-end text-violet-500'>TVL</div>
                          <div className='mt-6 text-zinc-300'>9.5M SOL</div>
                        </div>
                        <div className='flex flex-col whitespace-nowrap'>
                          <div className='self-start ml-5 text-3xl leading-9 text-violet-500 max-md:ml-2.5'>APY</div>
                          <div className='mt-6 text-3xl leading-9 text-zinc-300'>8.19%</div>
                        </div>
                        <div className='flex flex-col self-stretch whitespace-nowrap'>
                          <div className='text-3xl leading-9 text-violet-500'>Holders</div>
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
        </>
      </div>
    </>
  );
};

export default Home;
