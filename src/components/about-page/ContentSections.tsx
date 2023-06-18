import {
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ContentSections = () => {
  return (
    <div className="pt-[74px]">
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto lg:px-8 lg:flex lg:justify-between xl:justify-end">
          <div className=" lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
            <div className="relative h-[20rem] lg:ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
              <Image
                alt="bgPhoto"
                width={648}
                height={1476}
                src={
                  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
                }
                className="w-full h-full absolute inset-0 bg-gray-50 object-cover"
              />
            </div>
          </div>
          <div className="px-6 lg:contents ">
            <div className="mx-auto max-w-2xl pb-1 pt-16 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2 ">
              <p className="text-base font-semibold leading-7 text-lime-500">
                Как мы работаем
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Взгляните внутрь нашей компании
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <div className="mt-10 max-w-xl leading-7 text-gray lg:max-w-none ">
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <dl className="mt-10 max-w-xl lg:max-w-none text-gray-600 text-base leading-7">
                  <div className="relative pl-10">
                    <CloudArrowUpIcon
                      className="absolute w-5 h-5 top-1 left-1 text-lime-500"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-gray-900">
                      Push to deploy.
                    </span>
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </div>
                  <div className="relative pl-10 mt-8">
                    <FingerPrintIcon
                      className="absolute w-5 h-5 top-1 left-1 text-lime-500"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-gray-900 ">
                      Push to deploy.
                    </span>
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </div>
                  <div className="relative pl-10 mt-8">
                    <LockClosedIcon
                      className="absolute w-5 h-5 top-1 left-1 text-lime-500"
                      aria-hidden="true"
                    />
                    <span className="font-semibold text-gray-900 ">
                      Push to deploy.
                    </span>
                    <span>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </span>
                  </div>
                </dl>
              </div>
              <div className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </div>
              <h2 className="mt-24 text-2xl font-bold -space-x-1 text-gray-900 ">
                No server? No problem.
              </h2>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
                vitae interdum mauris enim, consequat vulputate nibh. Maecenas
                pellentesque id sed tellus mauris, ultrices mauris. Tincidunt
                enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSections;
