import React from "react";

const Howitworks = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      desc: "Create an account and add your visa portal credentials securely.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Bot Checks",
      desc: "Our automation engine regularly checks for available slots.",
      icon: "🤖",
    },
    {
      id: 3,
      title: "Get Alerts",
      desc: "Receive instant notifications via Email, SMS, or Telegram.",
      icon: "📩",
    },
    {
      id: 4,
      title: "Auto Booking",
      desc: "Enable auto-booking to confirm your slot without hassle.",
      icon: "✅",
    },
  ];
  return (
    <div>
      <section className=" py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-12">
            How It <span className="text-teal-800">Works</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative flex-1">
                <div className="bg-white rounded-2xl border border-yellow-300 shadow-lg p-6 hover:shadow-xl transition">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {/* Arrow except last */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-30px] transform -translate-y-1/2">
                    ➡️
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Howitworks;
