import { ChevronRightIcon } from "@heroicons/react/outline";
import Button from "./Button";

interface HeroProps {
  intercomShow: Function;
}

export default function Hero(props: HeroProps) {
  return (
    <section className="max-w-screen-lg py-12 mx-auto mt-24">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-5xl text-gray-900 font-cal">
          How can we help?
        </h1>
        <p className="max-w-screen-sm mx-auto text-gray-500">
          Welcome to the support center, where you can get help with using the
          app, managing your account and billing.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="p-5 bg-white border border-gray-300 rounded-sm">
          <h2 className="mb-1 text-xl text-gray-900 font-cal">Start a chat</h2>
          <p className="mb-4 text-sm text-gray-500">
            Start a live chat with our support team to get issues resolved right away.
          </p>
          <Button className="w-full" onClick={props.intercomShow}>Chat with the team <ChevronRightIcon className="w-4 h-4 ml-1" /></Button>
        </div>
        <div className="p-5 bg-white border border-gray-300 rounded-sm">
          <h2 className="mb-1 text-xl text-gray-900 font-cal">Raise a ticket</h2>
          <p className="mb-4 text-sm text-gray-500">
            Raise a ticket for a technical or account query that needs looking into.
          </p>
          <Button className="w-full" href="mailto:support@cal.com">Submit a ticket <ChevronRightIcon className="w-4 h-4 ml-1" /></Button>
        </div>
        <div className="p-5 bg-white border border-gray-300 rounded-sm">
          <h2 className="mb-1 text-xl text-gray-900 font-cal">Ask the community</h2>
          <p className="mb-4 text-sm text-gray-500">
            Ask our community of Cal.com developers and enthusiasts for help with an issue.
          </p>
          <Button className="w-full" href="https://github.com/calendso/calendso/issues">Go to GitHub Issues <ChevronRightIcon className="w-4 h-4 ml-1" /></Button>
        </div>
      </div>
    </section>
  );
}
