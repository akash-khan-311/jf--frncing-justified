'use client';

export default function ContactForm() {
  return (

    <div className="w-full max-w-md bg-[#0c2d57] text-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-full bg-[#173f73] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-full bg-[#173f73] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="tel"
          placeholder="Phone *"
          required
          className="w-full px-4 py-3 rounded-full bg-[#173f73] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          placeholder="Write message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-[#173f73] placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        <button
          type="submit"
          className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 px-6 rounded-full transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>

  );
}
