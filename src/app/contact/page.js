import React, { Suspense } from "react";
import ContactForm from "../../../components/ContactFrom";
import Loading from "../../../components/UI/Loading";


export default function ContactPage() {
  return (
    <Suspense fallback={<Loading/>}>
      <ContactForm />
    </Suspense>
  );
}
