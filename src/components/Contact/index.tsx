import React from "react";

const Contact = () => {
  return (
    <>
      <section id="support" className="pb-[110px] pt-[100px]">
        <div className="container">
          <div
            className="wow fadeInUp mx-auto mb-10 max-w-[690px] text-center"
            data-wow-delay=".2s"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-[44px] md:leading-tight">
              Let&apos;s Stay Connected
            </h2>
            <p className="text-base text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>
        </div>

        <div className="container">
          <div
            className="wow fadeInUp mx-auto w-full max-w-[925px] rounded-lg bg-dark/20 px-8 py-10 shadow-card  dark:shadow-card-dark sm:px-10"
            data-wow-delay=".3s"
          >
            <form>
              <div className="-mx-[22px] flex flex-wrap">
                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full rounded border border-none bg-black/50 px-[30px] py-4 text-base text-body outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Comapy (optioanl)"
                      className="w-full rounded border border-none bg-black/50 px-[30px] py-4 text-base text-body outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your email"
                      className="w-full rounded border border-none bg-black/50 px-[30px] py-4 text-base text-body outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="w-full px-[22px] md:w-1/2">
                  <div className="mb-8">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Enter your Phone Number"
                      className="w-full rounded border border-none bg-black/50 px-[30px] py-4 text-base text-body outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="w-full px-[22px]">
                  <div className="mb-8">
                    <textarea
                      rows={6}
                      name="message"
                      id="message"
                      placeholder="Tell us about yourself"
                      className="w-full rounded border border-none bg-black/50 px-[30px] py-4 text-base text-body outline-none focus:border-primary"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full px-[22px]">
                  <div className="text-center">
                    <p className="mb-5 text-center text-base text-white">
                      By clicking contact us button, you agree our terms and
                      policy,
                    </p>
                    <button
                      type="submit"
                      className="inline-block rounded-md bg-black/80 px-11 py-[14px] text-base font-medium text-white hover:bg-opacity-90"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
