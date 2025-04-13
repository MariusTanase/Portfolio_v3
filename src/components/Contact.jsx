import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqrblyp");
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(""); // user’s typed answer
  const [isHuman, setIsHuman] = useState(false); // whether they passed the captcha

  // Generate two random numbers on mount
  useEffect(() => {
    generateNewCaptcha();
  }, []);

  const generateNewCaptcha = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1; // 1 to 10
    const newNum2 = Math.floor(Math.random() * 10) + 1; // 1 to 10
    setNum1(newNum1);
    setNum2(newNum2);
    setAnswer(""); // reset answer field
    setIsHuman(false); // reset validation
  };

  // Check captcha when the user changes the answer field
  const handleAnswerChange = (e) => {
    const inputVal = e.target.value;
    setAnswer(inputVal);

    // Convert input value to a number
    const numericVal = parseInt(inputVal, 10);
    // Mark captcha as "passed" if sum is correct
    if (numericVal === num1 + num2) {
      setIsHuman(true);
    } else {
      setIsHuman(false);
    }
  };

  // Wrap Formspree’s submit with our own logic
  const onSubmit = async (e) => {
    e.preventDefault();

    // If the captcha is not solved
    if (!isHuman) {
      alert("Please solve the math problem first.");
      return;
    }

    // If solved, proceed to submit to Formspree
    await handleSubmit(e);
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-4xl font-bold text-primary mb-12">
        Places to contact me
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-xl">
            Got a project in mind? Contact me to discuss it further!
          </p>
        </div>

        {/* If form is successfully submitted, show a thank you message */}
        {state.succeeded ? (
          <div className="relative p-4 border-2 border-green-500 rounded">
            <h3 className="text-green-400 text-xl font-bold">
              Thanks for your message!
            </h3>
            <button
              className="mt-4 underline text-blue-400"
              onClick={() => window.location.reload()}
            >
              Send another message
            </button>
          </div>
        ) : (
          <div className="relative">
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-primary outline-none"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-primary outline-none"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-primary outline-none"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Math Captcha */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  What is {num1} + {num2}?
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="number"
                  value={answer}
                  onChange={handleAnswerChange}
                  placeholder="Solve the math problem"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 focus:ring-2 focus:ring-primary outline-none"
                  required
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={state.submitting}
                className={`
                  w-full bg-primary hover:bg-white hover:text-primary 
                  transition-colors px-6 py-3 rounded-lg font-bold 
                  inline-flex items-center justify-center
                  ${isHuman ? "opacity-100" : "opacity-80"}
                `}
              >
                Send your message
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
