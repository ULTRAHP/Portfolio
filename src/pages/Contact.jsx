
// import { useFormik } from "formik";
// import * as Yup from "yup";

// function Contact() {
//   const contacts = [
//     { icon: "📧", title: "Email", value: "harsh@example.com" },
//     { icon: "📱", title: "Phone", value: "+91 9876543210" },
//     { icon: "📍", title: "Location", value: "Ahmedabad, Gujarat" },
//   ];

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       mobile: "",
//       message: "",
//     },

//     validationSchema: Yup.object({
//       name: Yup.string()
//         .min(3, "Name must be at least 3 characters")
//         .required("Name is required"),

//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),

//       mobile: Yup.string()
//         .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
//         .required("Mobile number is required"),

//       message: Yup.string()
//         .min(10, "Message must be at least 10 characters")
//         .required("Message is required"),
//     }),

//     onSubmit: (values, { resetForm }) => {
//       console.log(values);
//       alert("Message Sent Successfully!");
//       resetForm();
//     },
//   });

//   return (
//     <div className="min-h-screen px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 bg-gray-950 text-white">
      
//       {/* Heading */}
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16">
//         Contact Me
//       </h1>

//       {/* Contact Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
//         {contacts.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300"
//           >
//             <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
//             <h2 className="text-xl md:text-2xl font-bold mb-2">
//               {item.title}
//             </h2>
//             <p className="text-gray-400 text-sm md:text-base">
//               {item.value}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Contact Form */}
//       <div className="w-full max-w-3xl mx-auto bg-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl">
//         <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 text-center mb-8">
//           Send Me a Message
//         </h2>

//         <form onSubmit={formik.handleSubmit} className="space-y-6">
          
//           {/* Name */}
//           <div>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.name}
//               className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
//             />
//             {formik.touched.name && formik.errors.name && (
//               <p className="text-red-400 mt-2 text-sm">{formik.errors.name}</p>
//             )}
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.email}
//               className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
//             />
//             {formik.touched.email && formik.errors.email && (
//               <p className="text-red-400 mt-2 text-sm">{formik.errors.email}</p>
//             )}
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Enter your mobile number"
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.mobile}
//               className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
//             />
//             {formik.touched.mobile && formik.errors.mobile && (
//               <p className="text-red-400 mt-2 text-sm">
//                 {formik.errors.mobile}
//               </p>
//             )}
//           </div>

//           {/* Message */}
//           <div>
//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Write your message..."
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               value={formik.values.message}
//               className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
//             />
//             {formik.touched.message && formik.errors.message && (
//               <p className="text-red-400 mt-2 text-sm">
//                 {formik.errors.message}
//               </p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-cyan-500 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-cyan-600 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Bottom Text */}
//       <div className="text-center mt-16">
//         <p className="text-gray-400 text-base sm:text-lg">
//           Let’s collaborate and build something amazing together.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Contact;
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

function Contact() {
  const contacts = [
    { icon: "📧", title: "Email", value: "harshtul@gmail.com" },
    { icon: "📱", title: "Phone", value: "+91 8238404425" },
    { icon: "📍", title: "Location", value: "Ahmedabad, Gujarat" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      mobile: Yup.string()
        .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
        .required("Mobile number is required"),

      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const templateParams = {
          from_name: values.name,
          from_email: values.email,
          mobile: values.mobile,
          message: values.message,
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        alert("Message Sent Successfully!");
        resetForm();
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message!");
      }
    },
  });

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 bg-gray-950 text-white">
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-16">
        Contact Me
      </h1>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 md:p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300"
          >
            <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              {item.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl mx-auto bg-gray-900 p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 text-center mb-8">
          Send Me a Message
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-400 text-sm">{formik.errors.name}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-400 text-sm">{formik.errors.email}</p>
          )}

          <input
            type="tel"
            name="mobile"
            placeholder="Enter your mobile number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <p className="text-red-400 text-sm">{formik.errors.mobile}</p>
          )}

          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="w-full p-3 sm:p-4 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-400"
          />
          {formik.touched.message && formik.errors.message && (
            <p className="text-red-400 text-sm">{formik.errors.message}</p>
          )}

          <button
            type="submit"
            className="w-full bg-cyan-500 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-cyan-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="text-center mt-16">
        <p className="text-gray-400 text-base sm:text-lg">
          Let’s collaborate and build something amazing together.
        </p>
      </div>
    </div>
  );
}

export default Contact;