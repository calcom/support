export default function CommunityCTA() {
  return (
    <section
      className="bg-grid-gray pt-12 pb-[100px]"
    >
      <div className="max-w-7xl mx-auto px-7">
        <h2
          style={{ marginLeft: -3 }}
          className="text-4xl mt-9 font-medium font-cal mb-24"
        >
          <span className="text-gray-500">Meet the Cal community.</span>
          <br />
          Open to anyone.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative bg-black min-h-auto sm:min-h-[620px] md:min-h-[522px] p-10 text-white">
            <h5 className="font-cal text-3xl">
              Engage on GitHub
            </h5>
            <h6 className="my-6 text-gray-300 leading-6 font-normal max-w-[400px]">
              Help us build the best open source communications protocol for
              humans.
            </h6>

            <a
              href="https://github.com/calendso/calendso"
              target="_blank"
              rel="noreferrer"
              className="border hover:bg-gray-900 border-white py-2 px-4 my-3 inline-block"
            >
              View on GitHub
            </a>

            <img
              className="hidden sm:block pl-10 absolute w-full right-0 bottom-0"
              src="https://cal.com/Github-illustration.svg"
            />
          </div>

          <div className="relative bg-white min-h-auto sm:min-h-[600px] md:min-h-[500px] p-10 text-black">
            <h5 className="font-cal text-3xl">
              Meet us on Slack
            </h5>
            <h6 className="my-6 text-gray-500 leading-6 font-normal">
              Our community of thousands of amazing people are collaborating to
              help each other build the next generation in scheduling
              infrastucture.
            </h6>

            <a
              href="https://cal.com/slack"
              target="_blank"
              rel="noreferrer"
              className="border hover:bg-gray-100 py-2 px-4 my-3 inline-block"
            >
              Join our Slack
            </a>

            <img
              className="hidden sm:block pl-10 absolute w-full right-0 bottom-0"
              src="https://cal.com/slack.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
