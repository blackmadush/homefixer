import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Listing</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your professional services with the community. Let
        people know about your skills and expertise.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-gray-700 text-base">
            Your Name
          </span>
          <input
            value={post.name}
            onChange={(e) => setPost({ ...post, name: e.target.value })}
            placeholder="Enter your name"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-gray-700 text-base">
            Mobile Number
          </span>
          <input
            type="tel"
            value={post.mobile}
            onChange={(e) => setPost({ ...post, mobile: e.target.value })}
            placeholder="Enter your mobile number"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-gray-700 text-base">
            Location
          </span>
          <input
            value={post.location}
            onChange={(e) => setPost({ ...post, location: e.target.value })}
            placeholder="Enter your location"
            required
            className="form_input"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-gray-700 text-base">
            Describe Your Services
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Describe your services here..."
            required
            className="form_textarea"
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-gray-700 text-base">
            Profession{" "}
            <span className="font-normal">
              (e.g., #gardener, #plumber, #cleaner)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#profession"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
