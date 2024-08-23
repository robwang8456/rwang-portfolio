"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalide sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalide message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact from <onboarding@resend.dev>",
      to: "rwang8456@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    if (data.error) {
      return {
        error: data.error.message,
      };
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
