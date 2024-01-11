/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsFillThreadsFill  } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    subject: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };


  const formTab = [
    { field: "name", label: "Name" },
    { field: "email", label: "Email" },
    { field: "reason", label: "reason for contact" },
    { field: "subject", label: "Subject" }
  ];

  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `D-40855 Ratingen, Germany`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      desription: `+49 111 5629063`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      desription: `@gmail.com`,
    },
    {
      icon: <BsFillThreadsFill className="text-4xl" />,
      title: "Threads",
      desription: "@samo1947",
    },
  ]
  return (
    <>
      <div>
        {" "}
        <div className="md:w-96 mx-auto text-center my-24">
          <div className="text-2xl font-bold">Contact Me</div>
          <div className="text-xl">
            As a modern work consultant, I specialize in helping businesses optimize their workflows and maximize productivity. Whether you need assistance with project management, process improvement, or team collaboration, I can provide valuable insights and strategies.

            If you have any questions or would like to discuss how I can assist your organization, please feel free to reach out to me using the contact form below. I look forward to hearing from you!

          </div>
        </div>
        {/* Cards */}
        <div className="container mx-auto my-12 h-auto">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
        <div className="lg:w-1/2 w-full p-4">
          <form onSubmit={handleSubmit} className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4">
            <div className="flex  flex-col">
              {formTab.map((item, index) => {
                return (
                  <div key={index} className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">What is your {item.label}?</span>
                    </label>
                    <input
                      type="text"
                      name={item.field}
                      value={formData[item.field as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={`Type your ${item.field}`}
                      className="input input-bordered w-full"
                    />
                  </div>
                );
              })}
              <div className="w-full my-4 flex justify-end ">
                <button className="btn rounded-full w-full">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full   p-4">
          <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Ratingen,%20Germany+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact