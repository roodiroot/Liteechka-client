import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "Simple queues",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
    icon: FingerPrintIcon,
  },
];

const FeatureSections2 = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex flex-col items-end max-w-2xl justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl sm:text-4xl font-bold -space-x-1">
              We’re always looking for awesome people to join us
            </h2>
            <p className="mt-10 text-lg leading-8 text-gray-600">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id.
            </p>
            <Image
              src="/image/main/8.jpg"
              alt=""
              width={1000}
              height={1000}
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8">
              <li className="py-8 border-b border-gray-100">
                <div className="relative flex flex-wrap gap-x-3">
                  <div className="sr-only">Role</div>
                  <div className="w-full font-semibold text-lg text-gray-900 -space-x-1">
                    Full-time designer
                  </div>
                  <div className="sr-only">Description</div>
                  <div className="mt-2 w-full leading-8 text-gray-600">
                    Quos sunt ad dolore ullam qui. Enim et quisquam dicta
                    molestias. Corrupti quo voluptatum eligendi autem labore.
                  </div>
                  <div className="sr-only">Salary</div>
                  <div className="mt-4 leading-7 font-semibold text-gray-900">
                    $75,000 USD
                  </div>
                  <div className="sr-only">Location</div>
                  <div className="mt-4 flex items-center gap-3 leading-7 text-gray-600">
                    <svg
                      viewBox="0 0 2 2"
                      className="flex-none w-0.5 h-0.5 fill-gray-600"
                      aria-hidden="true"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    San Francisco, CA
                  </div>
                </div>
              </li>
              <li className="py-8 border-b border-gray-100">
                <div className="relative flex flex-wrap gap-x-3">
                  <div className="sr-only">Role</div>
                  <div className="w-full font-semibold text-lg text-gray-900 -space-x-1">
                    Full-time designer
                  </div>
                  <div className="sr-only">Description</div>
                  <div className="mt-2 w-full leading-8 text-gray-600">
                    Quos sunt ad dolore ullam qui. Enim et quisquam dicta
                    molestias. Corrupti quo voluptatum eligendi autem labore.
                  </div>
                  <div className="sr-only">Salary</div>
                  <div className="mt-4 leading-7 font-semibold text-gray-900">
                    $75,000 USD
                  </div>
                  <div className="sr-only">Location</div>
                  <div className="mt-4 flex items-center gap-3 leading-7 text-gray-600">
                    <svg
                      viewBox="0 0 2 2"
                      className="flex-none w-0.5 h-0.5 fill-gray-600"
                      aria-hidden="true"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    San Francisco, CA
                  </div>
                </div>
              </li>
              <li className="py-8 border-b border-gray-100">
                <div className="relative flex flex-wrap gap-x-3">
                  <div className="sr-only">Role</div>
                  <div className="w-full font-semibold text-lg text-gray-900 -space-x-1">
                    Full-time designer
                  </div>
                  <div className="sr-only">Description</div>
                  <div className="mt-2 w-full leading-8 text-gray-600">
                    Quos sunt ad dolore ullam qui. Enim et quisquam dicta
                    molestias. Corrupti quo voluptatum eligendi autem labore.
                  </div>
                  <div className="sr-only">Salary</div>
                  <div className="mt-4 leading-7 font-semibold text-gray-900">
                    $75,000 USD
                  </div>
                  <div className="sr-only">Location</div>
                  <div className="mt-4 flex items-center gap-3 leading-7 text-gray-600">
                    <svg
                      viewBox="0 0 2 2"
                      className="flex-none w-0.5 h-0.5 fill-gray-600"
                      aria-hidden="true"
                    >
                      <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    San Francisco, CA
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-8 flex pt-8">
              <a
                href=""
                className="font-semibold text-sm leading-6 text-lime-500"
              >
                View all openings
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSections2;
