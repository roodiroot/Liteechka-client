import Button from "../utils/Button";

const FeedBackBlock = () => {
  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-24 sm:pt-32 isolation-auto">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:rounded-3xl shadow-2xl sm:px-24 lg:px-32">
        <h2 className="text-white mx-auto max-w-2xl text-center text-3xl sm:text-4xl font-bold tracking-tight">
          Узнайте больше о наших навесах.
        </h2>
        <p className="mt-2 mx-auto text-center max-w-xl text-lg leading-8 text-gray-300">
          Заполните форму обратной связи прямо сейчас, чтобы заказать бесплатную консультацию.
        </p>
        <form action="" className="max-w-md mt-10 mx-auto flex gap-4">
          <label htmlFor="emailAdres" className="sr-only">
            Email address
          </label>
          <input
            type="text"
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 placeholder:font-light placeholder:text-white/50"
            placeholder="Введите ваш номер телефона"
          />
          <Button style="white" label="Отправить" />
        </form>
        {/* <svg
          viewBox="0 0 1024 1024"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[64rem] h-[64rem] pointer-events-none"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          ></circle>
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#34e0c9"></stop>
              <stop offset="1" stopColor="#83cc16" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg> */}
        <svg
          className="absolute -z-10 top-0 left-0 right-0 h-[64rem] w-full stroke-gray-200 mask2"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          ></rect>
        </svg>
      </div>
    </div>
  );
};

export default FeedBackBlock;
