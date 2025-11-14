"use client";
import { motion } from "framer-motion";
import { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/input";
import Label from "@/components/label";
import Button from "@/components/Button";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_nqerapm",
        "template_0albnh7",
        form.current,
        "oAjyzmxKCMONiqFu2"
      )
      .then(
        () => {
          toast.success("Sent Successfully!");
          form.current?.reset();
        },
        () => {
          toast.error("Failed to submit");
        }
      );
  };

  return (
    <>
      <motion.div
        className="xl:mx-20 mx-4 md:mx-6 pt-10 pb-[7rem] min-h-screen md:mt-[5rem] mt-[3rem] lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="grid md:grid-cols-2 grid-cols-1">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="text-white md:text-start text-center pb-[3rem] md:pb-0">
              <h2 className="lg:text-5xl text-4xl tracking-[-5px]">
                Have a Project?
              </h2>
              <h2 className="lg:text-5xl text-4xl md:pl-12 pt-[5px] tracking-[-5px]">
                Let&#39;s Talk!
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="w-full mb-4">
                <Label text="First Name" />
                <Input placeholder="First Name" type="text" />
              </div>
              <div className="w-full mb-4">
                <Label text="Email" />
                <Input placeholder="Email" type="email" />
              </div>
              <div className="mb-4">
                <Label text="Message" />
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  placeholder="Your message"
                  required
                  className="w-full text-[14px] p-4 mt-[5px] text-white border-(--accent) border-[1px] rounded-[8px] outline-none"
                ></textarea>
              </div>
              <Button
                text="Send Message"
                showIcon={false}
                className="px-6 mt-[10px]"
              />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
