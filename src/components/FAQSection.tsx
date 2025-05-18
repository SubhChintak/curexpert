
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What services does CureXpert India provide?",
    answer: "CureXpert India provides a comprehensive range of healthcare facilitation services including connecting patients with specialized clinics, diagnostic centers, and hospitals. We also offer teleconsultation, second medical opinions, accommodation assistance, travel arrangements, and post-treatment care support."
  },
  {
    id: "faq-2",
    question: "How do I book an appointment with a specialist?",
    answer: "You can book an appointment with a specialist by selecting your preferred medical specialty from our Specialties section, choosing a doctor, and clicking the 'Book Now' button. This will connect you directly to our team via WhatsApp with an auto-generated message to streamline your booking process."
  },
  {
    id: "faq-3",
    question: "Is there any cost for using CureXpert's services?",
    answer: "Basic service connections and information are provided free of charge. Some premium services like specialized consultations, comprehensive treatment planning, and medical tourism packages may have associated fees. We always maintain full cost transparency before any service is confirmed."
  },
  // {
  //   id: "faq-4",
  //   question: "Do you provide services for international patients?",
  //   answer: "Yes, we provide specialized services for international patients including visa assistance, language support, customized treatment packages, accommodation arrangements, and airport transfers. Our international patient services are designed to make medical travel to India seamless and comfortable."
  // },
  {
    id: "faq-4",
    question: "How does the teleconsultation service work?",
    answer: "Our teleconsultation service connects you with qualified doctors via video call. You can schedule an appointment through our platform, receive a confirmation, and join the video call at the scheduled time. You'll need a stable internet connection and a device with a camera and microphone."
  },
  {
    id: "faq-5",
    question: "What geographic areas does CureXpert cover in India?",
    answer: "CureXpert partners with healthcare providers across all major cities and many smaller towns in India. Our strongest network coverage is in Delhi-NCR, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, and other tier-1 and tier-2 cities. We're continuously expanding our network to cover more regions."
  },
  // {
  //   id: "faq-7",
  //   question: "How do you ensure the quality of healthcare providers in your network?",
  //   answer: "We have a rigorous vetting process for all healthcare providers in our network. This includes verification of certifications, assessment of infrastructure, patient feedback analysis, and ongoing quality monitoring. We partner only with reputable institutions and practitioners with proven track records of excellence."
  // },
  {
    id: "faq-6",
    question: "What should I do in case of a medical emergency?",
    answer: "For immediate medical emergencies, please call local emergency services (102 or 108 in India). CureXpert is not an emergency service provider. However, for urgent but non-critical situations, you can contact our 24/7 support line, and we'll guide you to the nearest suitable healthcare facility."
  }
];

export default function FAQSection() {
  return (
    // <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">

    <section className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services and how we can help with your healthcare needs.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <AccordionItem 
                  value={faq.id}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-700 data-[state=open]:bg-gray-50 dark:data-[state=open]:bg-gray-700 transition-all duration-200">
                    <span className="text-left font-medium text-gray-900 dark:text-white text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-6 text-gray-600 dark:text-gray-300">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
