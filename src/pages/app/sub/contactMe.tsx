import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactMe: React.FC = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

        {/* LEFT CARD */}
        <div className="bg-gray-50 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
          {/* Image */}
          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="/assets/contact/person.jpg"
              alt="Contact"
              className="w-full h-[260px] object-cover"
            />
          </div>

          {/* Text */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            I will Answer all Your Questions
          </h3>

          {/* Infos */}
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-emerald-700 mt-1" />
              <span>
                4419 Simpson Avenue <br />
                Belleville, PA 17004 New York
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>+1 (305) 902-3242</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-emerald-700" />
              <span>Educeed@gmail.com</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6 text-gray-500">
            <Facebook className="w-5 h-5 hover:text-emerald-700 cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-emerald-700 cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-emerald-700 cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-emerald-700 cursor-pointer" />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative bg-white rounded-2xl p-10 shadow-sm border border-emerald-700">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Submit Your Query
          </h3>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* First Name */}
            <div>
              <label className="text-sm text-gray-600">First Name</label>
              <input
                type="text"
                placeholder="Name"
                className="mt-1 w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-sm outline-none focus:border-emerald-600"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-sm outline-none focus:border-emerald-600"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="text"
                placeholder="Phone"
                className="mt-1 w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-sm outline-none focus:border-emerald-600"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm text-gray-600">Subject</label>
              <select
                className="mt-1 w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-2 text-sm outline-none focus:border-emerald-600"
              >
                <option>Subject</option>
                <option>Support</option>
                <option>Courses</option>
                <option>Pricing</option>
              </select>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                placeholder="Message"
                rows={5}
                className="mt-1 w-full bg-gray-100 border border-gray-200 rounded-md px-4 py-3 text-sm outline-none resize-none focus:border-emerald-600"
              />
            </div>

            {/* Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-emerald-700 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-emerald-800 transition"
              >
                Send Message →
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;
