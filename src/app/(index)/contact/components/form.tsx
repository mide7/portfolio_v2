"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { sendMessageSchema } from "@/schemas";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(sendMessageSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataResponse = await res.json();

      console.log(dataResponse);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="space-y-3 sm:space-y-6 h-full">
      <h1 className="text-primaryBlue font-medium text-[min(7vw,42px)]">
        Drop me a message
      </h1>
      <p className="text-gray-400 text-sm">
        Am always looking for a next great project
      </p>

      <div>
        <textarea
          rows={5}
          className={clsx(
            "border rounded-md p-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
            errors.message?.message?.toString() ? "border-red-500" : ""
          )}
          placeholder="Your message"
          {...register("message")}
        />
        <small className="text-red-500 ml-1">
          {errors.message?.message?.toString()}
        </small>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full">
          <input
            type="email"
            className={clsx(
              "h-14 border rounded-md sm:rounded-full px-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
              errors.email?.message?.toString() ? "border-red-500" : ""
            )}
            placeholder="Your email"
            {...register("email")}
          />
          <small className="text-red-500 ml-1">
            {errors.email?.message?.toString()}
          </small>
        </div>

        <button
          type="submit"
          className="bg-primaryBlue rounded-full h-14 flex items-center justify-center sm:min-w-[160px] font-semibold text-white border-2 border-primaryBlue hover:text-primaryBlue hover:bg-white transition-all duration-500 active:motion-safe:animate-ping"
        >
          Send
        </button>
      </div>
    </form>
  );
}
