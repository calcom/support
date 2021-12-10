const faqs = [
  {
    id: 1,
    question: "What hours are your support team available?",
    answer:
      "Currently, the official hours for our EMEA support team are between 08:30 and 17:30 GMT Monday-Friday. However, we do sometimes respond outside of these hours and on weekends.",
  },
  {
    id: 2,
    question: "Should I start a chat or submit a ticket?",
    answer:
      "A live chat is often the quickes way to get an issue resolved, but if you're busy and want to drop us a quick email, a ticket may be more suitable. Even if you choose live chat, we may need to create a ticket if an escalation is needed.",
  },
  {
    id: 3,
    question: "Do you provide support for self-hosted installations?",
    answer:
      "Unfortunately, we don't provide official support for self-hosted installations, unless you're on an enterprise plan. We suggest posting your issue in our community Slack, or create a GitHub issue.",
  },
  {
    id: 4,
    question: "How can I help make the support experience quick and efficient?",
    answer:
      "Ensuring you provide lots of details and context surrounding your issue massively helps our team, as well as screenshots and/or short videos (we'd suggest recording with Loom) can hugely speed up the support process.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto divide-y-2 divide-gray-200 max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-gray-900 font-cal">
          Frequently asked questions
        </h2>
        <div className="pt-10 mt-6">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
